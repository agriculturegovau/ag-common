import { MouseEventHandler } from 'react';
import { CoreProvider } from '@ag.ds-next/react/core';
import { Header as AgDsHeader } from '@ag.ds-next/react/header';
import { AvatarIcon } from '@ag.ds-next/react/icon';
import { MainNav } from '@ag.ds-next/react/main-nav';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { Box } from '@ag.ds-next/react/box';

export type HeaderProps = {
	activePath?: string;
	authenticated?: boolean;
	handleSignIn?: MouseEventHandler<HTMLButtonElement>;
	mainNavId?: string;
	focusMode?: boolean;
};

const links = [
	{
		href: '/',
		label: 'Home',
	},
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/services',
		label: 'Services',
	},
	{
		href: '/help',
		label: 'Help',
	},
];

export const Header = ({
	activePath,
	authenticated,
	handleSignIn,
	mainNavId = 'main-nav',
	focusMode,
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
					background="bodyAlt"
				/>
				<MainNav
					id={mainNavId}
					activePath={activePath}
					focusMode={focusMode}
					items={links}
					secondaryItems={
						authenticated
							? [
									{
										label: 'My account',
										href: '/account',
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
