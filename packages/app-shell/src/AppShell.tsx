import { PropsWithChildren } from 'react';
import { AuthenticatedAppShell } from './components/AuthenticatedAppShell';
import {
	ChartLineIcon,
	EmailIcon,
	HelpIcon,
	SuccessIcon,
} from '@ag.ds-next/react/icon';
import { FactoryIcon, HomeIcon } from './components/icons';
import { findBestMatch } from './components/utils';

export type AppShellProps = {
	isFocusMode?: boolean;
	userName: string;
	userOrganisation?: string;
	userMenuHref: string;
	unreadMessageCount?: number;
	activePath: string;
	onSignOut: () => void;
};

/** Common application shell for apps in the user-facing authenticated space of the Export Service */
export const AppShell = ({
	children,
	isFocusMode,
	userName,
	userOrganisation,
	userMenuHref,
	unreadMessageCount,
	activePath,
	onSignOut,
}: PropsWithChildren<AppShellProps>) => {
	const mainNavItems = [
		[
			{
				label: 'Dashboard',
				icon: HomeIcon,
				href: '/account',
			},
			{
				label: 'Establishments',
				icon: FactoryIcon,
				href: '/establishments',
			},
			{
				label: 'Data and Insights',
				icon: ChartLineIcon,
				href: '/intelligence',
			},
			{
				label: 'Compliance',
				icon: SuccessIcon,
				href: '/compliance',
			},
		],
		[
			{
				label: 'Messages',
				icon: EmailIcon,
				href: '#messages', // TODO: get a real url for this. enable when we've got it
				badgeCount: unreadMessageCount,
			},
			{ label: 'Help', icon: HelpIcon, href: '/help' },
		],
	];

	const bestActivePath = findBestMatch(
		mainNavItems.flatMap((xs) => xs),
		activePath
	);

	return (
		<AuthenticatedAppShell
			siteTitle="Export Service"
			siteSubtitle="Supporting Australian agricultural exports"
			userMenu={{
				name: userName,
				organisation: userOrganisation,
				href: userMenuHref,
			}}
			mainNavItems={mainNavItems}
			isFocusMode={isFocusMode}
			activePath={bestActivePath}
			onSignOut={onSignOut}
		>
			{children}
		</AuthenticatedAppShell>
	);
};
