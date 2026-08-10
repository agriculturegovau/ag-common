import {
	BusinessIcon,
	ChartLineIcon,
	ExitIcon,
	ExternalLinkIcon,
	FactoryIcon,
	HelpIcon,
	InvoiceIcon,
	LicenceBusinessIcon,
	LinkIcon,
	PieChartIcon,
	SuccessIcon,
	UsersIcon,
	createIcon,
} from '@ag.ds-next/react/icon';
import { Flex } from '@ag.ds-next/react/flex';
import { ExternalLinkCallout } from '@ag.ds-next/react/a11y';
import { AppRoutes } from './routes';
import { Features } from './defs';

const FileProtectedIcon = createIcon(
	<path d="M19 11V8L13 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H12M13 2V8H19M12 13H7M10 17H7M9 9H7M18.9925 14.12L21.5479 14.77C21.8139 14.8376 22.0015 15.0857 21.9933 15.36C21.8216 21.1183 18.5002 22 18.5002 22C18.5002 22 15.1788 21.1183 15.0071 15.36C14.9989 15.0857 15.1865 14.8376 15.4525 14.77L18.0079 14.12C18.331 14.038 18.6694 14.038 18.9925 14.12Z" />,
	'FileProtectedIcon'
);

const createAppLinks = (routes: AppRoutes) => ({
	dashboard: {
		label: 'Dashboard',
		icon: BusinessIcon,
		href: routes.dashboard,
	},
	people: {
		label: 'People',
		icon: UsersIcon,
		href: routes.people,
	},
	establishments: {
		label: 'Establishments',
		icon: FactoryIcon,
		href: routes.establishments,
	},
	intelligence: {
		label: 'Data and Insights',
		icon: ChartLineIcon,
		href: routes.intelligence,
	},
	compliance: {
		label: 'Compliance',
		icon: SuccessIcon,
		href: routes.compliance,
	},
	quotas: {
		label: 'Quotas',
		icon: PieChartIcon,
		href: routes.quotas,
	},
	exportSystems: {
		label: 'Export systems',
		icon: LinkIcon,
		href: routes.exportSystems,
	},
	licences: {
		label: 'Licences',
		icon: LicenceBusinessIcon,
		href: routes.licences,
	},
	invoices: {
		label: 'Invoices and payments',
		icon: InvoiceIcon,
		href: routes.invoices,
	},
	letterOfFreeSale: {
		label: 'Letter of free sale',
		icon: FileProtectedIcon,
		href: routes.letterOfFreeSale,
	},
});

export const getAppLinks = (params: {
	features?: Features;
	routes: AppRoutes;
}) => {
	const apps = createAppLinks(params.routes);

	return [
		apps.dashboard,
		...(params?.features?.people ? [apps.people] : []),
		apps.establishments,
		apps.intelligence,
		apps.compliance,
		...(params?.features?.quotas ? [apps.quotas] : []),
		...((params?.features?.exportSystems ??
		params?.features?.exportDocumentation)
			? [apps.exportSystems]
			: []),
		...(params?.features?.licences ? [apps.licences] : []),
		...(params?.features?.letterOfFreeSale ? [apps.letterOfFreeSale] : []),
		...(params?.features?.invoices ? [apps.invoices] : []),
	];
};

export const getFooterLinks = (routes: AppRoutes) => [
	{
		href: routes.about,
		label: 'About',
	},
	{
		href: routes.contactUs,
		label: 'Contact us',
	},
	{
		href: routes.help,
		label: 'Help',
	},
	{
		href: routes.whatsNew,
		label: "What's new",
	},
	{
		href: routes.accessibility,
		rel: 'external',
		label: 'Accessibility',
	},
	{
		href: routes.disclaimer,
		rel: 'external',
		label: 'Disclaimer',
	},
	{ href: routes.privacy, label: 'Privacy' },
];

// Help + Sign out — kept separate from getAppLinks so callers supplying custom
// sidebarItems can still be wrapped with this section for parity with the default sidebar.
export const getBottomSidebarLinks = ({
	onSignOutClick,
	routes,
}: {
	onSignOutClick: () => void;
	routes: AppRoutes;
}) => [
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
			href: routes.help,
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
