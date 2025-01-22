// All of this logic can be moved to @ag.common/auth.

// this is equivalent to (T | (string & {})) - preserves autocomplete but allows strings.
// this form is an obfuscation to evade linters and sonarcloud which are overly zealous

type Relaxed<T extends string> = T | Omit<string, T>;

type Values<T> = T[keyof T];

// A | B | C -> A & B & C
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (
	x: infer I
) => void
	? I
	: never;

const getValues = Object.values as <T>(obj: T) => Values<T>[];

const proofs = {
	// "Identity proofing level"
	IP1: {
		// "Authentication level": "URN"
		AL1: 'urn:id.gov.au:tdif:acr:ip1:cl1',
		AL2: 'urn:id.gov.au:tdif:acr:ip1:cl2',
		AL3: 'urn:id.gov.au:tdif:acr:ip1:cl3',
		PlusAL1: 'urn:id.gov.au:tdif:acr:ip1p:cl1',
		PlusAL2: 'urn:id.gov.au:tdif:acr:ip1p:cl2',
		PlusAL3: 'urn:id.gov.au:tdif:acr:ip1p:cl3',
	},
	IP2: {
		AL2: 'urn:id.gov.au:tdif:acr:ip2:cl2',
		AL3: 'urn:id.gov.au:tdif:acr:ip2:cl3',
		PlusAL2: 'urn:id.gov.au:tdif:acr:ip2p:cl2',
		PlusAL3: 'urn:id.gov.au:tdif:acr:ip2p:cl3',
	},
	IP3: {
		AL2: 'urn:id.gov.au:tdif:acr:ip3:cl2',
		AL3: 'urn:id.gov.au:tdif:acr:ip3:cl3',
	},
	IP4: { AL3: 'urn:id.gov.au:tdif:acr:ip4:cl3' },
} as const;

type Proofs = typeof proofs;
type Proof = `${keyof Proofs}`;
type PossibleProofs = UnionToIntersection<
	Values<{
		[P in Proof]: {
			[Al in keyof Proofs[P] as `${P}.${Al & string}`]: Proofs[P][Al];
		};
	}>
>;

type ProofingURN = Values<PossibleProofs>;
type ProofingLevel = Relaxed<Proof>;

const orderedProofs = ['IP1', 'IP2', 'IP3', 'IP4'] as const;

type ProofingLevelAliases = {
	[P in Proof]: Proof[];
};

// aliases allow a IP4 acr to suffice for a IP1 requirement.
// The structure that gets built up here resembles:
// { IP1: [], IP2: [IP1], IP3: [IP1, IP2], ... }
const proofingAliases = Object.fromEntries(
	orderedProofs.map((v, n, arr) => [v, arr.slice(0, n)])
) as ProofingLevelAliases;

type ProofingLevelURNs<K extends Proof> = {
	[P in keyof Proofs[K] as `${Proofs[K][P] & string}`]: K;
};

type ProofingLevelByURN = UnionToIntersection<
	Values<{
		[P in Proof]: ProofingLevelURNs<P>;
	}>
>;

const createProofingLevelURNs = <P extends Proof>(
	proof: P
): ProofingLevelURNs<P> =>
	Object.fromEntries(getValues(proofs[proof]).map((acr) => [acr, proof]));

// direct lookup from URN -> Proofing level
const proofingLevelByURN: ProofingLevelByURN = {
	...createProofingLevelURNs('IP1'),
	...createProofingLevelURNs('IP2'),
	...createProofingLevelURNs('IP3'),
	...createProofingLevelURNs('IP4'),
};

const isURN = (level: Relaxed<ProofingURN>): level is ProofingURN =>
	(level as string) in proofingLevelByURN;

type AuthOptions = {
	// prevents a provided IP2 from being valid for an IP1 requirement
	requireExactProofingMatch?: boolean;

	//
	removeUnknownACRs?: boolean;
};

type AuthProvider = Relaxed<'myID' | 'B2CLocalUser'>;
type AARCM_Acr = Relaxed<ProofingURN>;

export type ExpectedClaims = {
	name?: string;
	given_name?: string;
	family_name?: string;

	AARM_acr?: AARCM_Acr | AARCM_Acr[];
	credentialType?: Relaxed<'B2CLocalUser' | 'myGovID'>;
	idp?: Relaxed<'B2CLocalAccount' | 'auth.identity.gov.au'>;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[others: string]: any;
};

// standardised claims so that app-layout can stop peeking at them directly.
// ag.common/auth should expose this similarly to how it does with BusinessDetails
type AuthDetails = {
	provider?: AuthProvider;
	proofingLevel?: ProofingLevel[];
};

type ArrayOrSingleton<T> = T extends Array<infer V> ? V[] : [T];
const ensureArray = <T>(t?: T): ArrayOrSingleton<T> =>
	(t === undefined ? [] : Array.isArray(t) ? t : [t]) as ArrayOrSingleton<T>;

// getProofLevelFromClaims returns the entire set of proofing levels that a claim may represent.
// If there are any custom values
const getProofLevelFromClaims = (
	claims: ExpectedClaims,
	options?: AuthOptions
): ProofingLevel[] => {
	const acrs = ensureArray(claims.AARM_acr);
	const resolved = acrs.flatMap((acr) =>
		isURN(acr)
			? options?.requireExactProofingMatch
				? [proofingLevelByURN[acr]]
				: [proofingLevelByURN[acr], ...proofingAliases[proofingLevelByURN[acr]]]
			: options?.removeUnknownACRs
			? []
			: [acr]
	);

	// dedupe. aliases can create a lot of double-ups
	return Array.from(new Set(resolved));
};

const getAuthProvider = (claims?: ExpectedClaims): AuthProvider | undefined =>
	claims?.credentialType === 'myGovID'
		? 'myID'
		: claims?.credentialType === 'B2CLocalUser'
		? 'B2CLocalUser'
		: undefined;

export const useAuthDetails = (
	claims?: ExpectedClaims,
	options?: AuthOptions
): AuthDetails | undefined =>
	claims
		? {
				...options,
				provider: getAuthProvider(claims),
				proofingLevel: getProofLevelFromClaims(claims, options),
		  }
		: undefined;
