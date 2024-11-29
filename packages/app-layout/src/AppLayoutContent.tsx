import { Fragment, PropsWithChildren } from 'react';
import { Prose } from '@ag.ds-next/react/prose';
import { PageContent } from '@ag.ds-next/react/content';
import { Callout } from '@ag.ds-next/react/callout';
import { CoreProvider } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { hrefs } from './utils';
import { Stack } from '@ag.ds-next/react/stack';
import { Divider } from '@ag.ds-next/react/divider';

export type ExpectedClaims = {
	name?: string;
	given_name?: string;
	family_name?: string;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[others: string]: any;
};

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

export type ErrorComponents = {
	MissingName: typeof MissingName;
	MissingGivenName?: typeof MissingName;
	MissingFamilyName?: typeof MissingName;
};

export const AppErrorComponents = {
	MissingName,
};

// Business logic goes here. We prevent app access by default if claims look wrong.
// This behaviour can be overridden by providing appropriate error components.
export const AppContent = ({
	claims,
	errorComponents,
	children,
}: PropsWithChildren<{
	claims?: ExpectedClaims;
	errorComponents: ErrorComponents;
}>) => {
	// If no claims provided, just act naturally. This preserves compatibility.
	if (claims === undefined) {
		return <Fragment>{children}</Fragment>;
	}

	const MissingGivenName =
		errorComponents.MissingGivenName ?? errorComponents.MissingName;
	const MissingFamilyName =
		errorComponents.MissingFamilyName ?? errorComponents.MissingName;

	if (isEmptyString(claims?.given_name)) {
		return <MissingGivenName>{children}</MissingGivenName>;
	}

	if (isEmptyString(claims?.family_name)) {
		return <MissingFamilyName>{children}</MissingFamilyName>;
	}

	// Everything looks right, render the apps' children
	return <Fragment>{children}</Fragment>;
};
