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
} from '@ag.ds-next/react/icon';
import { Flex } from '@ag.ds-next/react/flex';
import { ExternalLinkCallout } from '@ag.ds-next/react/a11y';
import { AppRoutes } from './routes';
import { Features } from './defs';

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

export const getSidebarLinks = ({
	onSignOutClick,
	features,
	routes,
}: {
	onSignOutClick: () => void;
	features?: Features;
	routes: AppRoutes;
}) => [
	getAppLinks({ features, routes }),
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
