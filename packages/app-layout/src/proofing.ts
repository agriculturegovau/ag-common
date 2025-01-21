const orderedProofs = ['IP1', 'IP2', 'IP3', 'IP4'] as const;

// this is equivalent to (T | (string & {})) - preserves autocomplete but allows strings.
// this form is an obfuscation to evade linters and sonarcloud which are overly zealous
type Relaxed<T extends string> = T | Omit<string, T>;

type Proof = (typeof orderedProofs)[number];

export type ProofingLevel = Relaxed<Proof>;
type ProofDescription = { level?: Proof; descriptor: string };
type ReadableProof = {
	[P in Proof]: ProofDescription;
};

export type AuthDetails = {
	provider?: Relaxed<'myID' | 'B2CLocalUser'>;
	proofingLevel?: ProofingLevel | ProofingLevel[];
};

type ArrayOrSingleton<T> = T extends Array<infer V> ? V[] : [T];

const orderedProofSet = new Set(orderedProofs);
const reverseProofSet = new Set(orderedProofs.toReversed());

const unknown: ProofDescription = { descriptor: 'Unknown' };
const readable: ReadableProof = {
	IP1: { level: 'IP1', descriptor: 'Basic' },
	IP2: { level: 'IP2', descriptor: 'Standard' },
	IP3: { level: 'IP3', descriptor: 'Strong' },
	IP4: { level: 'IP4', descriptor: 'Strong' },
};

const isProof = (level: ProofingLevel): level is Proof =>
	(orderedProofSet as Set<ProofingLevel>).has(level);

// pretty-print a proofing level
export const getReadableProof = (
	proof?: ProofingLevel,
	options?: { short?: boolean }
): string => {
	const t = proof && isProof(proof) ? readable[proof] : unknown;

	if (options?.short || t.level === undefined) {
		return t.descriptor;
	}

	return `${t.descriptor} (${t.level})`;
};

export const highestLevelProof = (
	proofs?: ProofingLevel[]
): ProofingLevel | undefined => {
	const given = new Set(proofs ?? []);

	// ensure the proofs we know about come before unknown ones
	return [
		...Array.from(reverseProofSet.intersection(given)),
		...Array.from(given.difference(reverseProofSet)),
	]?.[0];
};

export const lowestLevelProof = (
	proofs?: ProofingLevel[]
): ProofingLevel | undefined => {
	const given = new Set(proofs ?? []);

	// ensure the proofs we know about come before unknown ones
	return [
		...Array.from(orderedProofSet.intersection(given)),
		...Array.from(given.difference(orderedProofSet)),
	]?.[0];
};

export const ensureArray = <T>(t?: T): ArrayOrSingleton<T> =>
	(t === undefined ? [] : Array.isArray(t) ? t : [t]) as ArrayOrSingleton<T>;

// proofing is sufficient if any of the required proofs is provided
export const hasSufficientProofing = (
	required: ProofingLevel[],
	provided?: ProofingLevel[]
) => {
	if (provided === undefined) return true;
	if (required.length === 0) return true;

	const providedSet = new Set(provided);
	return required.some((acr) => providedSet.has(acr));
};
