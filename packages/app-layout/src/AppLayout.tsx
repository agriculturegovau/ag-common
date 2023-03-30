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

export type AppLayoutProps = {
	isFocusMode?: boolean;
	userName: string;
	userOrganisation?: string;
	unreadMessageCount?: number;
	activePath: string;
	handleSignOut: () => Promise<void>;
};

/** Common application shell for apps in the user-facing authenticated space of the Export Service */
export const AppLayout = ({
	children,
	isFocusMode,
	userName,
	userOrganisation,
	unreadMessageCount,
	activePath,
	handleSignOut,
}: PropsWithChildren<AppLayoutProps>) => {
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
				href: '/account/messages',
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
				href: '/account/preferences',
			}}
			mainNavItems={mainNavItems}
			isFocusMode={isFocusMode}
			activePath={bestActivePath}
			handleSignOut={handleSignOut}
		>
			{children}
		</AuthenticatedAppShell>
	);
};
