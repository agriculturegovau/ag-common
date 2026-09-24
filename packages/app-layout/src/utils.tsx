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
import { Fragment } from 'react';

const FileProtectedIcon = createIcon(
	<path d="M19 11V8L13 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H12M13 2V8H19M12 13H7M10 17H7M9 9H7M18.9925 14.12L21.5479 14.77C21.8139 14.8376 22.0015 15.0857 21.9933 15.36C21.8216 21.1183 18.5002 22 18.5002 22C18.5002 22 15.1788 21.1183 15.0071 15.36C14.9989 15.0857 15.1865 14.8376 15.4525 14.77L18.0079 14.12C18.331 14.038 18.6694 14.038 18.9925 14.12Z" />,
	'FileProtectedIcon'
);

const MapPinIcon = createIcon(
	<Fragment>
		<path d="M17.3636 9.18182C17.3636 15.5455 9.18182 21 9.18182 21C9.18182 21 1 15.5455 1 9.18182C1 7.01187 1.86201 4.93079 3.3964 3.3964C4.93079 1.86201 7.01186 1 9.18182 1C11.3518 1 13.4328 1.86201 14.9672 3.3964C16.5016 4.93079 17.3636 7.01187 17.3636 9.18182Z" />
		<path d="M9.18182 11.9091C10.688 11.9091 11.9091 10.688 11.9091 9.18182C11.9091 7.67559 10.688 6.45455 9.18182 6.45455C7.67559 6.45455 6.45455 7.67559 6.45455 9.18182C6.45455 10.688 7.67559 11.9091 9.18182 11.9091Z" />
	</Fragment>,
	'MapPinIcon'
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
	accreditedProperties: {
		label: 'Accredited properties',
		icon: MapPinIcon,
		href: routes.accreditedProperties,
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
		...(params?.features?.accreditedProperties
			? [apps.accreditedProperties]
			: []),
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
