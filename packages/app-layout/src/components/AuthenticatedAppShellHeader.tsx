import { Fragment } from 'react';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Box, Flex } from '@ag.ds-next/react/box';
import {
	boxPalette,
	tokens,
	mapResponsiveProp,
	mq,
	useLinkComponent,
} from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { AvatarIcon, MenuIcon } from '@ag.ds-next/react/icon';
import { BaseButton } from '@ag.ds-next/react/button';
import { authenticatedAppShellHeaderHeight } from './utils';
import { useAuthenticatedAppShellContext } from './AuthenticatedAppShellContext';
import { NotificationBadge } from '@ag.ds-next/react/badge';
import { VisuallyHidden } from '@ag.ds-next/react/a11y';

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
				[tokens.mediaQuery.max.md]: {
					borderBottom: `8px solid ${boxPalette.accent}`,
				},
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
			<UserLink
				name={userMenu.name}
				organisation={userMenu.organisation}
				href={userMenu.href}
			/>
		</Flex>
	);
}

function ShowMenuButton() {
	const { isMenuOpen, showMenu, showMenuButtonRef, unreadMessageCount } =
		useAuthenticatedAppShellContext();
	return (
		<Flex
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={showMenuButtonRef}
			as={BaseButton}
			onClick={showMenu}
			borderRight
			borderColor="muted"
			borderRightWidth={{ xs: undefined, lg: 'sm' }}
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height={authenticatedAppShellHeaderHeight}
			width={authenticatedAppShellHeaderHeight}
			color="action"
			focus
			css={{
				position: 'relative',
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
			{unreadMessageCount && (
				<Box
					css={{
						position: 'absolute',
						top: 18,
						left: 48,
					}}
				>
					<NotificationBadge
						aria-hidden
						value={unreadMessageCount}
						max={99}
						tone="action"
					/>
				</Box>
			)}
			<MenuIcon aria-hidden />
			Menu
			{unreadMessageCount && (
				<VisuallyHidden>{`, ${unreadMessageCount} unread messages`}</VisuallyHidden>
			)}
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
				<Avatar name={name} tone="action" aria-hidden size="md" />
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
	href,
}: {
	name: string;
	organisation?: string;
	href?: string;
}) => {
	const Link = useLinkComponent();
	return (
		<Flex
			as={Link}
			href={href}
			focus
			gap={{
				xs: 0,
				lg: 1,
			}}
			alignItems="center"
			align-self="flex-end"
			flexDirection={{
				xs: 'column',
				lg: 'row',
			}}
			css={{
				textDecoration: 'none',
				'&:hover': {
					'& span:first-of-type': {
						textDecoration: 'underline',
					},
				},
			}}
		>
			<Box
				display={{ xs: 'none', lg: 'flex' }}
				flexDirection="column"
				css={{ textAlign: 'right' }}
			>
				<Text color="action" fontWeight="bold" fontSize="xs">
					{name}
				</Text>
				<Text color="muted" fontSize="xs">
					{organisation}
				</Text>
			</Box>
			<UserLinkAvatar name={name} />

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
