import { forwardRef, Fragment, useState } from 'react';
import {
	boxPalette,
	mapResponsiveProp,
	mapSpacing,
	mq,
} from '@ag.ds-next/react/core';
import { Box, Flex } from '@ag.ds-next/react/box';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Text } from '@ag.ds-next/react/text';
import { AvatarIcon, ChevronDownIcon } from '@ag.ds-next/react/icon';
import { useLinkComponent } from '@ag.ds-next/react/core';
import { authenticatedAppShellHeaderHeight } from './utils';
import { useAuthenticatedAppShellContext } from './AuthenticatedAppShellContext';
import {
	Menu,
	MenuList,
	MenuButton,
	MenuItem,
	MenuLink,
} from '@reach/menu-button';

export function AuthenticatedAppShellHeaderMenu() {
	const { userMenu } = useAuthenticatedAppShellContext();
	const Link = useLinkComponent();

	const [refEl, setRefEl] = useState<HTMLButtonElement | null>(null);
	const menuButtonWidth = refEl?.clientWidth;

	return (
		<Menu>
			<AuthenticatedAppShellHeaderMenuButton ref={setRefEl} />
			<Box
				as={MenuList}
				background="body"
				border
				borderColor="muted"
				rounded
				css={{
					borderTopLeftRadius: 0,
					borderTopRightRadius: 0,
					boxShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
					// borderBottomRightRadius: 9,
					// borderBottomLeftRadius: 9,
					'&:focus': { outline: 'none' },
				}}
			>
				{userMenu.items.map((item, idx) => {
					const { icon: Icon } = item;
					if ('href' in item) {
						return (
							<MenuLink
								key={idx}
								as={Link}
								href={item.href}
								css={{ ...menuItemStyles, width: menuButtonWidth }}
							>
								{Icon ? <Icon /> : null}
								{item.label}
							</MenuLink>
						);
					}
					return (
						<MenuItem
							key={idx}
							onSelect={() => item.onClick()}
							css={{ ...menuItemStyles, width: menuButtonWidth }}
						>
							{Icon ? <Icon /> : null}
							{item.label}
						</MenuItem>
					);
				})}
			</Box>
		</Menu>
	);
}

const menuItemStyles = {
	boxSizing: 'border-box',
	appearance: 'none',
	background: boxPalette.backgroundBody,
	display: 'flex',
	alignItems: 'center',
	gap: mapSpacing(0.5),
	padding: mapSpacing(1),
	color: boxPalette.foregroundAction,
	minWidth: '14rem',
	width: '100%',
	textDecoration: 'none',
	cursor: 'pointer',

	['&[data-selected]']: {
		background: boxPalette.backgroundShade,
	},

	'&:hover': {
		textDecoration: 'underline',
	},
} as const;

function AuthenticatedAppShellHeaderMenuButtonAvatar({
	name,
}: {
	name: string;
}) {
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
				<AvatarIcon color="action" />
			</div>
		</Fragment>
	);
}

const AuthenticatedAppShellHeaderMenuButton = forwardRef<HTMLButtonElement>(
	function AuthenticatedAppShellHeaderMenuButton(_, ref) {
		const { userMenu } = useAuthenticatedAppShellContext();
		return (
			<Flex
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				ref={ref}
				as={MenuButton}
				background="body"
				alignItems="center"
				justifyContent={{ xs: 'center', lg: 'space-between' }}
				paddingX={1}
				gap={{ xs: 0, lg: 1 }}
				height={authenticatedAppShellHeaderHeight}
				aria-label={`User menu, ${userMenu.name}`}
				flexDirection={{ xs: 'column', lg: 'row' }}
				css={{
					appearance: 'none',
					'&:hover': {
						background: boxPalette.backgroundShade,
					},
				}}
				focus
			>
				<Flex as="span" gap={0.5} alignItems="center">
					<AuthenticatedAppShellHeaderMenuButtonAvatar name={userMenu.name} />
					<Box
						as="span"
						display={{ xs: 'none', lg: 'flex' }}
						flexDirection="column"
						css={{ textAlign: 'left' }}
					>
						<Text color="action" fontWeight="bold" fontSize="xs">
							{userMenu.name}
						</Text>
						<Text color="muted" fontSize="xs">
							{userMenu.organisation}
						</Text>
					</Box>
				</Flex>

				<Flex alignItems="center" gap={0.25}>
					<Text
						color="action"
						display={{
							xs: 'block',
							lg: 'none',
						}}
					>
						Account
					</Text>
					<ChevronDownIcon color="action" weight="bold" size="sm" />
				</Flex>
			</Flex>
		);
	}
);
