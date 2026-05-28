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

export type AppSubdomain = 'exports' | 'services';

type RouteParams = { subdomain: AppSubdomain; path: string };

type RouteSpec =
	| ({ kind: 'scoped' } & RouteParams)
	| { kind: 'standalone'; url: string };

type RouteResolver = (params: RouteParams) => string;

type AgricultureDomain = 'agriculture.gov.au' | `${string}.agriculture.gov.au`;

export const isAgricultureDomain = (
	domain: string
): domain is AgricultureDomain =>
	domain.endsWith('agriculture.gov.au') ||
	domain.endsWith('.agriculture.gov.au');

export const agricultureDomain = (domain: string) =>
	isAgricultureDomain(domain) ? domain : undefined;

export type HostDomain = AgricultureDomain | RouteResolver;

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

type RouteSpecs = Record<string, RouteSpec>;
type Routes<T extends RouteSpecs> = { [K in keyof T]: string };

export const resolveRouteSpec = (
	route: RouteSpec,
	opts: { domain: HostDomain }
) => {
	const { domain } = opts;

	if (route.kind === 'standalone') return route.url;
	if (typeof domain === 'function') return domain(route);

	return `https://${route.subdomain}.${domain}${route.path}`;
};

const createRoutes_ =
	<T extends RouteSpecs>(src: T) =>
	(domain: HostDomain): Routes<T> => {
		const hrefs = {} as Routes<T>;

		Object.entries(src).forEach(([label, route]) => {
			hrefs[label as keyof T] = resolveRouteSpec(route, { domain });
		});

		return hrefs;
	};

export const createRoute =
	(subdomain: AppSubdomain) =>
	(path: string): RouteSpec => ({
		kind: 'scoped',
		subdomain,
		path,
	});

const createStandaloneRoute = (url: string): RouteSpec => ({
	kind: 'standalone',
	url,
});

export const createRoutes = (() => {
	const exports = createRoute('exports');
	const services = createRoute('services');
	const standalone = createStandaloneRoute;

	const routes = {
		account: services('/account'),
		profile: services('/account/profile'),
		people: services('/account/exports/manage-people'),
		dashboard: services('/account/exports/dashboard'),
		exportsHub: services('/account/exports'),
		importsHub: services('/account/imports'),

		about: services('/about'),
		contactUs: services('/about/contact-us'),
		help: services('/help'),
		privacy: services('/privacy'),
		whatsNew: services('/whats-new'),
		accessibility: standalone(
			'https://www.agriculture.gov.au/about/commitment/accessibility'
		),
		disclaimer: standalone('https://www.agriculture.gov.au/about/disclaimer'),

		establishments: exports('/establishments'),
		intelligence: exports('/intelligence'),
		compliance: exports('/compliance'),
		quotas: exports('/quota'),
		exportSystems: exports('/export-systems'),
		licences: exports('/licences'),
		invoices: exports('/inexs'),
	};

	return createRoutes_(routes);
})();

export type AppRoutes = ReturnType<typeof createRoutes>;

const PaymentIcon = createIcon(
	<Fragment>
		<path d="M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z" />
		<path d="M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8" />
		<path d="M12 17.5V6.5" />
	</Fragment>,
	'PaymentIcon'
);

const createAppLinks = (routes: AppRoutes) => ({
	dashboard: {
		label: 'Dashboard',
		icon: HomeIcon,
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
		icon: PaymentIcon,
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
