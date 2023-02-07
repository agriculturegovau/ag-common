import * as React from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import styled from '@emotion/styled';
import { H1, H3 } from '@ag.ds-next/react/heading';
import { Button } from '@ag.ds-next/react/button';
import { ChevronDownIcon, MenuIcon } from '@ag.ds-next/react/icon';
import { Text } from '@ag.ds-next/react/text';
import { Popover } from '@headlessui/react';
import { themed } from './Themed';
import { FC } from './FC';
import { CogIcon, ExitIcon } from './NavIcons';

type ShowingState<T = boolean> = {
	showing: T;
	setShowing: (set: (t: T) => T) => void;
};

// top nav
const Headnav = styled(Flex)`
	box-shadow: 0px 2px 4px 0px #0000001a;
	justify-content: space-between;
	align-items: center;
`;

// Just a little fake avatar. replace this with the real deal
const Avatar = styled(Box)`
	height: 3em;
	width: 3em;
	border: 2px solid #d3d3d3;
	background: rgb(131, 58, 180);
	background: linear-gradient(
		13deg,
		rgba(131, 58, 180, 1) 0%,
		rgba(253, 29, 29, 1) 50%,
		rgba(252, 176, 69, 1) 100%
	);
	border-radius: 100%;
`;

// Just some cute divider lines in the menu dropdown
const Panels = styled(Flex)<{ active?: boolean }>`
	& + & {
		border-top: 1px solid #d3d3d3;
	}
`;

const TPanels = themed(Panels);

const PanelItem: FC<React.ComponentProps<typeof Panels>> = (props) => {
	return (
		<TPanels
			colors={{ border: 'foregroundAction' }}
			borderLeft={props.active}
			borderWidth="xl"
			justifyContent="space-between"
			width="100%"
			padding={1}
			{...props}
		/>
	);
};

export interface Role {
	label: string;
	render?: FC;
	active?: boolean;
	activate: () => Promise<void>;
}

export interface TopProps extends ShowingState<boolean> {
	activeUser?: {
		name: string;
		organisation?: string;
	};
	roleSwitcher?: { roles: Role[] };
}

export const Top: FC<TopProps> = ({
	showing,
	setShowing,
	activeUser,
	roleSwitcher,
}) => {
	return (
		<Headnav css={{ position: 'relative' }}>
			<Flex height={'100%'}>
				{showing ? null : (
					<Stack
						height={'100%'}
						padding={1}
						justifyContent="center"
						css={{
							borderRight: '1px solid #0000001a',
						}}
					>
						<Button
							variant="text"
							iconBefore={MenuIcon}
							onClick={() => {
								setShowing((v) => !v);
							}}
						>
							Menu
						</Button>
					</Stack>
				)}

				<Stack height={'100%'} padding={1} justifyContent="center">
					<H3 as={H1}>Export service</H3>
					<Text as="p" color={'muted'} fontSize="xs">
						Supporting Australian agricultural exports
					</Text>
				</Stack>
			</Flex>

			<Flex padding={1}>
				<Popover css={{ position: 'relative' }}>
					<Popover.Button
						css={{
							cursor: 'pointer',
							background: 'none',
							outline: 'none',
							border: 'none',
						}}
					>
						<Flex gap={1} alignItems="center">
							<Avatar />
							<Stack alignItems={'flex-start'}>
								<Text as="p" fontWeight={'bold'} color="action" fontSize={'xs'}>
									{activeUser?.name}
								</Text>
								<Text as="p" color="muted" fontSize={'xs'}>
									{activeUser?.organisation}
								</Text>
							</Stack>
							<ChevronDownIcon />
						</Flex>
					</Popover.Button>
					<Popover.Panel
						css={{
							position: 'absolute',
							top: '100%',
							left: '0',
							right: '0',
							backgroundColor: 'white',
							border: '1px solid #d3d3d3',
							minWidth: '15em',
							boxShadow: '0px 2px 4px 0px #0000001a',
							borderRadius: '0 0 8px 8px',
						}}
					>
						{(roleSwitcher?.roles?.length ?? 0) > 0 ? (
							<PanelItem>
								<Text as="p" fontWeight={'bold'} fontSize="xs">
									Switch roles
								</Text>
							</PanelItem>
						) : null}

						{roleSwitcher?.roles?.map((role) => (
							<PanelItem key={role.label} active={role.active ?? false}>
								<Stack gap={0.5}>
									<Button variant="text" onClick={role?.activate}>
										{role.label}
									</Button>
								</Stack>
							</PanelItem>
						))}

						<PanelItem>
							<Button variant="text" iconBefore={CogIcon}>
								Account settings
							</Button>
						</PanelItem>

						<PanelItem>
							<Button variant="text" iconBefore={ExitIcon}>
								Sign out
							</Button>
						</PanelItem>
					</Popover.Panel>
				</Popover>
			</Flex>
		</Headnav>
	);
};
