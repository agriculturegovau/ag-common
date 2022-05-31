import { CoreProvider, tokens } from '@ag.ds-next/core';
import { Header as AgDsHeader } from '@ag.ds-next/header';
import { AvatarIcon } from '@ag.ds-next/icon';
import { MainNav, MainNavLink } from '@ag.ds-next/main-nav';
import { Logo } from '@ag.ds-next/ag-branding';

interface HeaderProps {
	authenticated?: boolean;
	mode?: 'authenticated' | 'unauthenticated';
	activePath: React.ComponentProps<typeof MainNav>['activePath'];
	handleSignIn?: () => Promise<void>;
	handleSignOut?: () => Promise<void>;
}

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
	mode = 'authenticated',
	activePath,
	handleSignIn,
	handleSignOut,
}: HeaderProps) => (
	<CoreProvider>
		<AgDsHeader
			heading="Export Service"
			subline="Supporting Australian agricultural exports"
			logo={<Logo />}
			variant="dark"
			badgeLabel="beta"
		/>

		<MainNav
			variant="agriculture"
			links={mode === 'authenticated' ? authenticatedLinks : []}
			activePath={activePath}
			rightContent={
				authenticated ? (
					<MainNavLink
						onClick={handleSignOut}
						label="Sign out"
						icon={AvatarIcon}
					/>
				) : (
					<MainNavLink
						onClick={handleSignIn}
						label="Sign in"
						icon={AvatarIcon}
					/>
				)
			}
		/>
	</CoreProvider>
);
