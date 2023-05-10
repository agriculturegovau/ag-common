import { Fragment } from 'react';
import { NotificationBadge } from '@ag.ds-next/react/badge';
import {
	ChartLineIcon,
	EmailIcon,
	ExitIcon,
	HelpIcon,
	HomeIcon,
	SuccessIcon,
	SettingsIcon,
	createIcon,
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

const FactoryIcon = createIcon(
	<Fragment>
		<path d="M15.7575 12.4394L17.7575 12.9394C18.3886 13.0972 19 12.6198 19 11.9692V3C19 2.44772 18.5523 2 18 2H16C15.4477 2 15 2.44772 15 3V11.4692C15 11.9281 15.3123 12.3281 15.7575 12.4394ZM3.24254 9.31063L21.2425 13.8106C21.6877 13.9219 22 14.3219 22 14.7808V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V10.2808C2 9.63021 2.61139 9.15285 3.24254 9.31063Z" />
		<rect x="7" y="18" width="1" height="1" transform="rotate(180 7 18)" />
		<rect x="11" y="17" width="1" height="1" />
	</Fragment>,
	'FactoryIcon'
);

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
				href: '/account/preferences',
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
