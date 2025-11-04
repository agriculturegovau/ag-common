import {
	ChartLineIcon,
	createIcon,
	ExitIcon,
	ExternalLinkIcon,
	FactoryIcon,
	HelpIcon,
	HomeIcon,
	LicenceBusinessIcon,
	LinkIcon,
	PieChartIcon,
	SuccessIcon,
	UsersIcon,
} from '@ag.ds-next/react/icon';
import { Flex } from '@ag.ds-next/react/flex';
import { ExternalLinkCallout } from '@ag.ds-next/react/a11y';
import { Fragment } from 'react';

export type Features = {
	quotas?: boolean;
	exportSystems?: boolean;
	licences?: boolean;
	invoices?: boolean;
	people?: boolean;

	/**
	 * @deprecated Prefer the `exportSystems` flag as this system has been renamed.
	 * This property is for compatibility and will be removed in a future version.
	 */
	exportDocumentation?: boolean;
};

export const hrefs = {
	account: '/account',
	profile: '/account/profile',
	dashboard: '/account/dashboard',
	people: '/account/manage-people',
	inbox: '/account/messages',
	linkBusiness: '/account/link-a-business',
	acceptInvite: '/account/invitation/accept',
};

const PaymentIcon = createIcon(
	<Fragment>
		<path d="M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z" />
		<path d="M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8" />
		<path d="M12 17.5V6.5" />
	</Fragment>,
	'PaymentIcon'
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

export const apps = {
	dashboard: {
		label: 'Dashboard',
		icon: HomeIcon,
		href: hrefs.dashboard,
	},
	people: {
		label: 'People',
		icon: UsersIcon,
		href: hrefs.people,
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
	exportSystems: {
		label: 'Export systems',
		icon: LinkIcon,
		href: '/export-systems',
	},
	licences: {
		label: 'Licences',
		icon: LicenceBusinessIcon,
		href: '/licences',
	},
	invoices: {
		label: 'Invoices and payments',
		icon: PaymentIcon,
		href: '/inexs',
	},
};

export const getAppLinks = (params?: { features?: Features }) => [
	apps.dashboard,
	...(params?.features?.people ? [apps.people] : []),
	apps.establishments,
	apps.intelligence,
	apps.compliance,
	...(params?.features?.quotas ? [apps.quotas] : []),
	...((params?.features?.exportSystems ?? params?.features?.exportDocumentation)
		? [apps.exportSystems]
		: []),
	...(params?.features?.licences ? [apps.licences] : []),
	...(params?.features?.invoices ? [apps.invoices] : []),
];

export function getSidebarLinks({
	onSignOutClick,
	features,
}: {
	onSignOutClick: () => void;
	features?: Features;
}) {
	return [
		getAppLinks({ features }),
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

export const findBestMatch = <T extends { href: string }>(
	items: T[],
	activePath?: string
) => {
	if (!activePath) return undefined;

	let exactMatch, bestMatch;
	for (const item of items) {
		if (item.href === activePath) {
			exactMatch = item;
			break;
		}

		if (
			activePath.startsWith(item.href) &&
			item.href.length > (bestMatch?.href?.length ?? 0)
		) {
			bestMatch = item;
		}
	}

	return exactMatch || bestMatch;
};

export type InternalTheme = boolean | 'header' | 'sidebar';

const isInternal =
	(section: 'header' | 'sidebar') => (internal?: InternalTheme) =>
		internal === true || internal == section;

const ifInternal =
	<Props,>(section: 'header' | 'sidebar', props: Props) =>
	(internal?: InternalTheme): Props | object =>
		isInternal(section)(internal) ? props : {};

export const internalHeaderProps = ifInternal('header', {
	palette: 'light',
	borderColor: 'selected',
} as const);

export const internalSidebarProps = ifInternal('sidebar', {
	background: 'body',
} as const);
