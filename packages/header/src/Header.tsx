import { CoreProvider } from '@ag.ds-next/core';
import { Header as AgDsHeader } from '@ag.ds-next/header';
import { AvatarIcon } from '@ag.ds-next/icon';
import { MainNav, MainNavButton } from '@ag.ds-next/main-nav';
import { Logo } from '@ag.ds-next/ag-branding';
import { Box } from '@ag.ds-next/box';

export type HeaderProps = {
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

export const Header = ({
	authenticated,
	activePath,
	handleSignIn,
	handleSignOut,
	mainNavId = 'main-nav',
}: HeaderProps) => {
	return (
		<CoreProvider>
			<Box palette="dark">
				<AgDsHeader
					href={authenticated ? '/account' : '/'}
					heading="Export Service"
					subline="Supporting Australian agricultural exports"
					logo={<Logo />}
					badgeLabel="beta"
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
