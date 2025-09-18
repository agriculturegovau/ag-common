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
		<line x1="12" y1="1" x2="12" y2="23" />
		<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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
	apps.people,
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
