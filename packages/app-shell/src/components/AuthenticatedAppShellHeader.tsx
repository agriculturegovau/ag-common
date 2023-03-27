import { Flex } from '@ag.ds-next/react/box';
import { boxPalette, tokens } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { MenuIcon } from '@ag.ds-next/react/icon';
import { BaseButton } from '@ag.ds-next/react/button';
import { AuthenticatedAppShellHeaderMenu } from './AuthenticatedAppShellHeaderMenu';
import { authenticatedAppShellHeaderHeight } from './utils';
import { useAuthenticatedAppShellContext } from './AuthenticatedAppShellContext';

export type AuthenticatedAppShellHeaderProps = {
	title: string;
	subtitle: string;
};

export function AuthenticatedAppShellHeader({
	title,
	subtitle,
}: AuthenticatedAppShellHeaderProps) {
	return (
		<Flex
			as="header"
			palette={{ xs: 'dark', lg: 'light' }}
			background="body"
			alignItems="center"
			justifyContent="space-between"
			borderBottom
			borderColor="muted"
			css={{
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
			}}
		>
			<Flex alignItems="center">
				<AuthenticatedAppShellHeaderButton />
				<Flex
					flexDirection="column"
					justifyContent="center"
					paddingLeft={{ xs: 1, lg: 2 }}
					height={authenticatedAppShellHeaderHeight}
				>
					<Text fontSize={{ xs: 'md', sm: 'lg' }} fontWeight="bold">
						{title}
					</Text>
					<Text
						color="muted"
						fontSize="xs"
						display={{ xs: 'none', lg: 'block' }}
					>
						{subtitle}
					</Text>
				</Flex>
			</Flex>

			<AuthenticatedAppShellHeaderMenu />
		</Flex>
	);
}

function AuthenticatedAppShellHeaderButton() {
	const { isMenuOpen, showMenu, showMenuButtonRef } =
		useAuthenticatedAppShellContext();
	return (
		<Flex
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={showMenuButtonRef}
			as={BaseButton}
			onClick={showMenu}
			borderRight={{ xs: false, lg: true }}
			borderColor="muted"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height={authenticatedAppShellHeaderHeight}
			width={authenticatedAppShellHeaderHeight}
			color="action"
			focus
			css={{
				flexShrink: 0,
				'&:hover': {
					background: boxPalette.backgroundShade,
				},
				...(isMenuOpen && {
					[tokens.mediaQuery.min.lg]: {
						display: 'none',
					},
				}),
			}}
		>
			<MenuIcon aria-hidden />
			Menu
		</Flex>
	);
}
