import { Fragment } from 'react';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Box, Flex } from '@ag.ds-next/react/box';
import {
	boxPalette,
	tokens,
	mapResponsiveProp,
	mq,
} from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { AvatarIcon, MenuIcon } from '@ag.ds-next/react/icon';
import { BaseButton } from '@ag.ds-next/react/button';
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
	const { userMenu } = useAuthenticatedAppShellContext();
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
			paddingRight={tokens.containerPadding}
		>
			<Flex alignItems="center">
				<ShowMenuButton />
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
			<UserLink name={userMenu.name} organisation={userMenu.organisation} />
		</Flex>
	);
}

function ShowMenuButton() {
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

function UserLinkAvatar({ name }: { name: string }) {
	return (
		<Fragment>
			<div
				css={mq({
					display: mapResponsiveProp({ xs: 'none', lg: 'block' }),
				})}
			>
				<Avatar name={name} tone="action" aria-hidden size="sm" />
			</div>
			<div
				css={mq({
					display: mapResponsiveProp({ xs: 'block', lg: 'none' }),
				})}
			>
				<AvatarIcon color="action" aria-hidden />
			</div>
		</Fragment>
	);
}

export const UserLink = ({
	name,
	organisation,
}: {
	name: string;
	organisation?: string;
}) => {
	return (
		<Flex
			gap={{
				xs: 0,
				lg: 0.5,
			}}
			alignItems="center"
			flexDirection={{
				xs: 'column',
				lg: 'row',
			}}
		>
			<UserLinkAvatar name={name} />
			<Box
				display={{ xs: 'none', lg: 'flex' }}
				flexDirection="column"
				css={{ textAlign: 'left' }}
			>
				<Text color="action" fontWeight="bold" fontSize="xs">
					{name}
				</Text>
				<Text color="muted" fontSize="xs">
					{organisation}
				</Text>
			</Box>

			<Text
				color="action"
				display={{
					xs: 'block',
					lg: 'none',
				}}
			>
				Account
			</Text>
		</Flex>
	);
};
