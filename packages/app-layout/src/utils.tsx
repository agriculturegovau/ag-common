import {
	ChartLineIcon,
	ExitIcon,
	HelpIcon,
	HomeIcon,
	SuccessIcon,
	FactoryIcon,
	ExternalLinkIcon,
} from '@ag.ds-next/react/icon';
import { Flex } from '@ag.ds-next/react/flex';
import { ExternalLinkCallout } from '@ag.ds-next/react/a11y';

export const hrefs = {
	account: '/account',
	profile: '/account/profile',
	dashboard: '/account/dashboard',
	messages: '/account/messages',
	settings: '/account/settings',
	linkBusiness: '/account/link-a-business',
};

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
	onSignOutClick,
}: {
	onSignOutClick: () => void;
}) {
	return [
		[
			{
				label: 'Dashboard',
				icon: HomeIcon,
				href: hrefs.dashboard,
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
				label: (
					<Flex as="span" alignItems="center" gap={0.5}>
						Help
						<ExternalLinkCallout />
						<ExternalLinkIcon weight="regular" size="sm" />
					</Flex>
				),
				icon: HelpIcon,
				href: '/help',
				target: '_blank',
				rel: 'noopener',
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
