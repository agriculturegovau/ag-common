import * as React from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import styled from '@emotion/styled';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { boxPalette, tokens } from '@ag.ds-next/react/core';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { DirectionButton } from '@ag.ds-next/react/direction-link';
import { themed } from './Themed';
import { FC } from './FC';
import {
	ChartIcon,
	FactoryIcon,
	HomeIcon,
	MailIcon,
	QuestionIcon,
	TickIcon,
} from './NavIcons';

export type ShowingState<T = boolean> = {
	showing: T;
	setShowing: (set: (t: T) => T) => void;
};

export const Divider = () => (
	<hr
		css={{
			boxSizing: 'content-box',
			height: 0,
			overflow: 'visible',
			border: 'none',
			borderTopWidth: tokens.borderWidth.sm,
			borderTopStyle: 'solid',
			borderColor: boxPalette.borderMuted,
			width: '100%',
			// marginTop: mapSpacing(2),
			// marginBottom: mapSpacing(2),
		}}
	/>
);

// number in a circle. ex: unread message indicator
// rewrite me
const Bauble = styled(Box)<{ bg?: string }>`
	width: auto;
	min-width: 1.4em;
	text-align: center;
	background-color: var(--agds-foreground-action);
	color: var(--agds-background-body);
	border-radius: 0.8em;
	padding: 4px 8px 3px;
	line-height: 1;
`;

const sidenavBorderWidth = '8px';
const sidenavPadding = '2rem';

// side nav. spacing & border need to be in sync with ActiveButton 👇
const Sidenav = styled(Stack)`
	border-left: 8px solid #f36c52;
	padding: ${sidenavPadding};
`;

// Hacky little container that bursts out of Sidenav padding and border when active.
// Values need to be kept in sync 👆
const ActiveButton = ({
	active,
	...props
}: React.ComponentProps<typeof Flex> & {
	active?: boolean;
}) => {
	return active ? (
		<TFlex
			colors={{ foregroundAction: 'white' }}
			{...props}
			background={'body'}
			padding={1}
			color="focus"
			justifyContent="space-between"
			css={{
				width: `calc(100% + ${sidenavBorderWidth} + ${sidenavPadding} + ${sidenavPadding})`,
				marginLeft: `calc(-${sidenavPadding} + -${sidenavBorderWidth})`,
				paddingLeft: `calc(${sidenavPadding} + ${sidenavBorderWidth})`,
				paddingRight: sidenavPadding,
			}}
		/>
	) : (
		<Flex {...props} width="100%" justifyContent="space-between" />
	);
};

// Just some cute divider lines in the menu dropdown
const Panels = styled(Flex)<{ active?: boolean }>`
	& + & {
		border-top: 1px solid #d3d3d3;
	}
`;

const TFlex = themed(Flex);

export interface SideProps {
	activePath?: string;
	messages?: {
		unreadMessageCount: number;
	};
}

type SectionProps = React.ComponentProps<typeof Button>;

interface SideItem extends React.ComponentProps<typeof ButtonLink> {
	extras?: React.ReactNode;
}

const SideItem = ({ extras, ...props }: SideItem) => {
	return (
		<ActiveButton active={props.href === '/establishments'}>
			<ButtonLink variant="text" {...props} />
			{extras ?? null}
		</ActiveButton>
	);
};

export const Side: FC<SideProps & ShowingState<boolean>> = ({
	messages,
	showing,
	setShowing,
}) => {
	return showing ? (
		<Sidenav
			css={{ width: 'clamp(18rem, 25%, 24rem)' }}
			palette="dark"
			background="bodyAlt"
		>
			<Stack gap={1.5} alignItems="flex-start">
				<Box width={'100%'}>
					<Box css={{ color: 'white' }}>
						<Logo />
					</Box>
				</Box>

				<Divider />

				<ActiveButton>
					<Box />

					<DirectionButton
						css={{ fontSize: '0.8em' }}
						direction="left"
						onClick={() => setShowing(() => false)}
					>
						Hide menu
					</DirectionButton>
				</ActiveButton>

				<SideItem iconBefore={HomeIcon} href="/dashboard">
					Dashboard
				</SideItem>

				<SideItem iconBefore={FactoryIcon} href="/establishments">
					Establishments
				</SideItem>

				<SideItem iconBefore={ChartIcon} href="/intelligence">
					Data and insights
				</SideItem>

				<SideItem iconBefore={TickIcon} href="/compliance">
					Compliance
				</SideItem>

				<Divider />

				<SideItem
					href="/messages"
					iconBefore={MailIcon}
					extras={
						messages === undefined ? undefined : (
							<Bauble>{messages.unreadMessageCount}</Bauble>
						)
					}
				>
					Messages
				</SideItem>

				<SideItem iconBefore={QuestionIcon}>Help</SideItem>
			</Stack>
		</Sidenav>
	) : null;
};
