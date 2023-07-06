import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
import {
	ChartLineIcon,
	EmailIcon,
	ExitIcon,
	HelpIcon,
	HomeIcon,
	SuccessIcon,
	SettingsIcon,
	FactoryIcon,
} from '@ag.ds-next/react/icon';

export const footerNavigationItems = [
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/help',
		rel: 'external',
		label: 'Help',
	},
	{
		href: 'https://www.agriculture.gov.au/about/commitment/accessibility',
		rel: 'external',
		label: 'Accessibility',
	},
	{
		href: 'https://www.agriculture.gov.au/about/disclaimer',
		rel: 'external',
		label: 'Disclaimer',
	},
	{ href: '/privacy', label: 'Privacy' },
];

export function getSidebarLinks({
	unreadMessageCount,
	onSignOutClick,
}: {
	unreadMessageCount?: number;
	onSignOutClick: () => void;
}) {
	return [
		[
			{
				label: 'Dashboard',
				icon: HomeIcon,
				href: '/account/', // trailing slash because acct app uses `trailingSlash: true` in next config
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
				href: '/account/messages/', // trailing slash because acct app uses `trailingSlash: true` in next config
				endElement:
					typeof unreadMessageCount === 'number' && unreadMessageCount > 0 ? (
						<NotificationBadge
							tone="action"
							value={unreadMessageCount}
							max={99}
						/>
					) : undefined,
			},
			{
				label: 'Account settings',
				icon: SettingsIcon,
				href: '/account/settings/', // trailing slash because acct app uses `trailingSlash: true` in next config
			},
			{
				label: 'Help',
				icon: HelpIcon,
				href: '/help',
			},
		],

		[
			{
				label: 'Sign out',
				onClick: onSignOutClick,
				icon: ExitIcon,
			},
		],
	];
}
