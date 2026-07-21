export type AppSubdomain = 'exports' | 'services';

type RouteParams = { subdomain: AppSubdomain; path: string };

type RouteSpec =
	| ({ kind: 'scoped' } & RouteParams)
	| { kind: 'standalone'; url: string };

export type RouteResolver = (params: RouteParams) => string;

export type AgricultureDomainT =
	| 'agriculture.gov.au'
	| `${string}.agriculture.gov.au`;

export const isAgricultureDomain = (
	domain: string
): domain is AgricultureDomainT =>
	domain.endsWith('agriculture.gov.au') ||
	domain.endsWith('.agriculture.gov.au');

export const agricultureDomain = (domain: string) =>
	isAgricultureDomain(domain) ? domain : undefined;

export type HostDomain = AgricultureDomainT | RouteResolver;

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
		exportsDashboard: services('/account/exports/dashboard'),
		importsDashboard: services('/account/imports/dashboard'),

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

export const defaultRoutes = createRoutes('agriculture.gov.au');
