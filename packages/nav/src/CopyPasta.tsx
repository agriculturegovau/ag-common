import * as React from 'react';
import { Header as AgDsHeader } from '@ag.ds-next/react/header';
import { Footer as AgDsFooter, FooterDivider } from '@ag.ds-next/react/footer';
import { Box } from '@ag.ds-next/react/box';
import { FC } from './FC';
import { Contents } from './Parts';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { CoreProvider, tokens } from '@ag.ds-next/react/core';
import { MainNav } from '@ag.ds-next/react/main-nav';
import { AvatarIcon } from '@ag.ds-next/react/icon';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Text } from '@ag.ds-next/react/text';

// Copy pasted from header/footer. fix with real dependencies

export type ClassicHeaderProps = {
	authenticated?: boolean;
	activePath?: string;
	handleSignIn?: React.MouseEventHandler<HTMLButtonElement>;
	handleSignOut?: React.MouseEventHandler<HTMLButtonElement>;
	mainNavId?: string;
};

const authenticatedLinks = [
	{
		href: '/account',
		label: 'Home',
	},
	{
		href: '/establishments',
		label: 'Establishments',
	},
	{
		href: '/intelligence',
		label: 'Data and insights',
	},
	{
		href: '/compliance',
		label: 'Compliance',
	},
];

export const UnauthHeader = ({
	authenticated,
	activePath,
	handleSignIn,
	handleSignOut,
	mainNavId = 'main-nav',
}: ClassicHeaderProps) => {
	return (
		<CoreProvider>
			<Box palette="dark">
				<AgDsHeader
					href={authenticated ? '/account' : '/'}
					heading="Export Service"
					subline="Supporting Australian agricultural exports"
					logo={<Logo />}
					badgeLabel="beta"
					background="bodyAlt"
				/>
				<MainNav
					id={mainNavId}
					activePath={activePath}
					items={authenticated ? authenticatedLinks : []}
					secondaryItems={
						authenticated
							? [
									{
										label: 'Sign out',
										onClick: handleSignOut,
										endElement: <AvatarIcon />,
									},
							  ]
							: [
									{
										label: 'Sign in',
										onClick: handleSignIn,
										endElement: <AvatarIcon />,
									},
							  ]
					}
				/>
			</Box>
		</CoreProvider>
	);
};

const footerLinks = [
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/help',
		rel: 'external',
		label: 'Help',
	},
	{
		href: 'https://www.agriculture.gov.au/about/commitment/accessibility',
		rel: 'external',
		label: 'Accessibility',
	},
	{
		href: 'https://www.agriculture.gov.au/about/disclaimer',
		rel: 'external',
		label: 'Disclaimer',
	},
	{
		href: '/privacy',
		label: 'Privacy',
	},
];

export const UnauthFooter = () => {
	const year = React.useMemo(() => new Date().getFullYear(), []);
	return (
		<CoreProvider>
			<Box palette="dark">
				<AgDsFooter background="bodyAlt">
					<nav aria-label="footer">
						<LinkList links={footerLinks} horizontal />
					</nav>
					<FooterDivider />
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						We acknowledge the traditional owners of country throughout
						Australia and recognise their continuing connection to land, waters
						and culture. We pay our respects to their Elders past, present and
						emerging.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; {year} Department of Agriculture, Fisheries and Forestry
					</Text>
				</AgDsFooter>
			</Box>
		</CoreProvider>
	);
};

export const Classic: FC<ClassicHeaderProps> = ({
	children,
	...headerProps
}) => (
	<>
		<UnauthHeader {...headerProps} />
		<Contents>{children}</Contents>
		<UnauthFooter />
	</>
);
