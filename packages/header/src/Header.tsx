import { MouseEventHandler } from 'react';
import { CoreProvider } from '@ag.ds-next/react/core';
import { Header as AgDsHeader } from '@ag.ds-next/react/header';
import { AvatarIcon } from '@ag.ds-next/react/icon';
import { MainNav, MainNavProps } from '@ag.ds-next/react/main-nav';
import { Logo } from '@ag.ds-next/react/daff-branding';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';

type HeaderItems = MainNavProps['items'];

export type HeaderProps = {
	activePath?: string;
	authenticated?: boolean;
	handleSignIn?: MouseEventHandler<HTMLButtonElement>;
	mainNavId?: string;
	focusMode?: boolean;
	extraItems?: HeaderItems;
};

const leaf = 'https://static-content.p5.agriculture.gov.au/agds/brand-leaf.png';

const links = [
	{
		href: '/',
		label: 'Home',
	},
	{
		href: '/export',
		label: 'Export',
	},
	{
		href: '/import-biosecurity',
		label: 'Import and biosecurity',
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
	extraItems = [],
}: HeaderProps) => {
	const items = [...links, ...extraItems];
	const signInProps = handleSignIn
		? { onClick: handleSignIn }
		: { href: '/account' };

	return (
		<CoreProvider>
			<Box palette="light">
				<AgDsHeader
					href={authenticated ? '/account' : '/'}
					heading="TradeClear"
					subline="Australian export, import and biosecurity services"
					logo={<Logo />}
					badgeLabel="Beta"
					background="body"
					rightContent={
						<Flex
							justifyContent="flex-end"
							display={{ xs: 'none', lg: 'flex' }}
						>
							<img src={leaf} height={'107px'} alt="Agriculture brand leaf" />
						</Flex>
					}
				/>
				<MainNav
					id={mainNavId}
					activePath={activePath}
					focusMode={focusMode}
					items={items}
					secondaryItems={
						authenticated
							? [
									{
										label: 'My account',
										endElement: <AvatarIcon />,
										href: '/account',
									},
								]
							: [
									{
										label: 'Sign in',
										endElement: <AvatarIcon />,
										...signInProps,
									},
								]
					}
				/>
			</Box>
		</CoreProvider>
	);
};
