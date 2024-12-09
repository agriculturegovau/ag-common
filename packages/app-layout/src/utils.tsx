import {
	ChartLineIcon,
	ExitIcon,
	HelpIcon,
	HomeIcon,
	FileIcon,
	SuccessIcon,
	FactoryIcon,
	ExternalLinkIcon,
	createIcon,
} from '@ag.ds-next/react/icon';
import { Flex } from '@ag.ds-next/react/flex';
import { ExternalLinkCallout } from '@ag.ds-next/react/a11y';
import { Fragment } from 'react';

export type Features = {
	quotas?: boolean;
	exportDocumentation?: boolean;
};

export const hrefs = {
	account: '/account',
	profile: '/account/profile',
	dashboard: '/account/dashboard',
	messages: '/account/messages',
	linkBusiness: '/account/link-a-business',
	acceptInvite: '/account/invitation/accept',
};

const PieChartIcon = createIcon(
	<Fragment>
		<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
		<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
	</Fragment>,
	'PieChartIcon'
);

export const footerNavigationItems = [
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/about/contact-us',
		label: 'Contact us',
	},
	{
		href: '/help',
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

const apps = {
	dashboard: {
		label: 'Dashboard',
		icon: HomeIcon,
		href: hrefs.dashboard,
	},
	establishments: {
		label: 'Establishments',
		icon: FactoryIcon,
		href: '/establishments',
	},
	intelligence: {
		label: 'Data and Insights',
		icon: ChartLineIcon,
		href: '/intelligence',
	},
	compliance: {
		label: 'Compliance',
		icon: SuccessIcon,
		href: '/compliance',
	},
	quotas: {
		label: 'Quotas',
		icon: PieChartIcon,
		href: '/quota',
	},
	exportDocumentation: {
		label: 'Export documentation',
		icon: FileIcon,
		href: '/export-documentation',
	},
};

export function getSidebarLinks({
	onSignOutClick,
	features,
}: {
	onSignOutClick: () => void;
	features?: Features;
}) {
	return [
		[
			apps.dashboard,
			apps.establishments,
			apps.intelligence,
			apps.compliance,
			...(features?.quotas ? [apps.quotas] : []),
			...(features?.exportDocumentation ? [apps.exportDocumentation] : []),
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
