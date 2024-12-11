import { Fragment, PropsWithChildren } from 'react';
import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import { PageContent } from '@ag.ds-next/react/content';
import { Callout } from '@ag.ds-next/react/callout';
import { CoreProvider } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { Box } from '@ag.ds-next/react/box';
import { TextLink } from '@ag.ds-next/react/text-link';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { hrefs } from './utils';
import { Stack } from '@ag.ds-next/react/stack';
import { Divider } from '@ag.ds-next/react/divider';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import {
	AuthDetails,
	ensureArray,
	getReadableProof,
	hasSufficientProofing,
	highestLevelProof,
	lowestLevelProof,
	ProofingLevel,
} from './proofing';
import { ExpectedClaims } from './authDetails';

const isEmptyString = (t: string | undefined) => (t?.trim() ?? '') === '';

// This exists as its own package in ag.common.
// Likely cleaner to re-use it here but makes consuming it more error prone (peer deps).
const HelpCallout = () => {
	return (
		<CoreProvider>
			<Callout title="Need more help?">
				<Text>
					Email{' '}
					<TextLink href="mailto:exportservice@aff.gov.au">
						exportservice@aff.gov.au
					</TextLink>
				</Text>
				<Text>
					Call <TextLink href="tel:1800571125">1800&nbsp;571&nbsp;125</TextLink>
					, Monday to Friday, 9 am to 5 pm AEST
				</Text>
			</Callout>
		</CoreProvider>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MissingName = (props: PropsWithChildren) => (
	<PageContent>
		<Stack gap={3}>
			<CoreProvider>
				<DirectionLink href={hrefs.dashboard} direction="left">
					Back to Dashboard
				</DirectionLink>
			</CoreProvider>

			<Prose>
				<h1>Single names in the Export Service</h1>
				<p>
					If you are legally known by a single name, you can use it to access an
					Export Service account. Other services we offer may not accept a
					single name and you will need to use a given and family name.
				</p>
				<p>Contact support if you need more help.</p>
			</Prose>

			<Divider />
			<HelpCallout />
		</Stack>
	</PageContent>
);

export const ProofMissing = (
	props: PropsWithChildren<{
		requiredProofingLevel?: ProofingLevel;
		providedProofingLevel?: ProofingLevel;
		activeApp?: string;
	}>
) => {
	const provided = getReadableProof(props.providedProofingLevel);
	const required = getReadableProof(props.requiredProofingLevel, {
		short: true,
	});

	return (
		<PageContent>
			<Stack gap={3}>
				<CoreProvider>
					<DirectionLink href={hrefs.dashboard} direction="left">
						Back
					</DirectionLink>
				</CoreProvider>

				<Prose>
					<h1>{props.activeApp ?? 'Use a higher identity strength'}</h1>

					<Box className={proseBlockClassname}>
						<PageAlert tone="info" title="You can't access this feature">
							Sign in with myID and use a ‘{required}’ identity strength or
							higher to access this feature.
						</PageAlert>
					</Box>

					<h2>Review your profile and settings</h2>

					<p>
						Your current identity strength is {provided}. To access this feature
						you must add myID to your account from your{' '}
						<TextLink href="TODO">Profile and settings</TextLink>, then sign in.
					</p>
				</Prose>

				<Divider />
				<HelpCallout />
			</Stack>
		</PageContent>
	);
};

export type ErrorComponents = {
	MissingName: typeof MissingName;
	MissingGivenName?: typeof MissingName;
	MissingFamilyName?: typeof MissingName;
	ProofMissing: typeof ProofMissing;
};

export const AppErrorComponents = {
	MissingName,
	ProofMissing,
};

// Business logic goes here. We prevent app access by default if claims look wrong.
// This behaviour can be overridden by providing appropriate error components.
export const AppContent = ({
	claims,
	errorComponents,
	requiredProofingLevel,
	authDetails,
	activeApp,
	children,
}: PropsWithChildren<{
	claims?: ExpectedClaims;
	errorComponents: ErrorComponents;
	requiredProofingLevel?: ProofingLevel | ProofingLevel[];
	authDetails?: AuthDetails;
	activeApp?: string;
}>) => {
	const MissingGivenName =
		errorComponents.MissingGivenName ?? errorComponents.MissingName;
	const MissingFamilyName =
		errorComponents.MissingFamilyName ?? errorComponents.MissingName;
	const ProofMissing = errorComponents.ProofMissing;

	const required = ensureArray(requiredProofingLevel);
	const provided = ensureArray(authDetails?.proofingLevel);
	if (!hasSufficientProofing(required, provided)) {
		const requiredProof = lowestLevelProof(required);
		const providedProof = highestLevelProof(provided);

		return (
			<ProofMissing
				requiredProofingLevel={requiredProof}
				providedProofingLevel={providedProof}
				activeApp={activeApp}
			/>
		);
	}

	// If no claims provided, just act naturally. This preserves compatibility.
	if (claims === undefined) {
		return <Fragment>{children}</Fragment>;
	}

	if (isEmptyString(claims?.given_name)) {
		return <MissingGivenName>{children}</MissingGivenName>;
	}

	if (isEmptyString(claims?.family_name)) {
		return <MissingFamilyName>{children}</MissingFamilyName>;
	}

	// Everything looks right, render the apps' children
	return <Fragment>{children}</Fragment>;
};
