import { ReactNode } from 'react';
import { AuthenticatedAppShell } from './components/AuthenticatedAppShell';
import {
	ChartLineIcon,
	EmailIcon,
	HelpIcon,
	SuccessIcon,
} from '@ag.ds-next/react/icon';
import { CogIcon, ExitIcon, FactoryIcon, HomeIcon } from './components/icons';

const mainNavItems = [
	[
		{
			label: 'Dashboard',
			icon: HomeIcon,
			href: '#home',
		},
		{
			label: 'Establishments',
			icon: FactoryIcon,
			href: '#establishments',
		},
		{
			label: 'Data and Insights',
			icon: ChartLineIcon,
			href: '#data',
		},
		{
			label: 'Compliance',
			icon: SuccessIcon,
			href: '#compliance',
		},
	],
	[
		{
			label: 'Messages',
			icon: EmailIcon,
			href: '#messages',
			badgeCount: 3,
		},
		{ label: 'Help', icon: HelpIcon, href: '#help' },
	],
];

export const AppShell = ({
	children,
	isFocusMode,
}: {
	children: ReactNode;
	isFocusMode?: boolean;
}) => {
	return (
		<AuthenticatedAppShell
			siteTitle="Export Service"
			siteSubtitle="Supporting Australian agricultural exports"
			userMenu={{
				name: 'Toto Wolff',
				organisation: 'Orange Meat Works',
				items: [
					{
						label: 'Account settings',
						href: '#account',
						icon: CogIcon,
					},
					{
						label: 'Sign out',
						onClick: () => console.log('sign out'),
						icon: ExitIcon,
					},
				],
			}}
			mainNavItems={mainNavItems}
			isFocusMode={isFocusMode}
			activePath="#home"
		>
			{children}
		</AuthenticatedAppShell>
	);
};
