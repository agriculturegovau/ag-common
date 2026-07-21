import { Breadcrumbs, BreadcrumbsProps } from '@ag.ds-next/react/breadcrumbs';
import { useLayoutContext } from './AppLayoutContext';
import {
	BusinessCategory,
	getBusinessCategory,
	getBusinessCategoryArea,
	getBusinessName,
} from './defs';
import { AppRoutes, defaultRoutes } from './routes';

export type AppLayoutBreadcrumbProps = {
	routes?: Pick<
		AppRoutes,
		| 'account'
		| 'importsHub'
		| 'exportsHub'
		| 'exportsDashboard'
		| 'importsDashboard'
	>;
	businessCategory?: BusinessCategory;
	selectedBusinessName?: string;
};

// remove href from the last link item as per designs
const Crumbs = ({ links: prop_links, ...props }: BreadcrumbsProps) => {
	const links = prop_links.map((link, index) =>
		index === prop_links.length - 1 ? { ...link, href: undefined } : link
	);

	return <Breadcrumbs {...props} links={links} />;
};

export const AppLayoutBreadcrumbs = (
	props: AppLayoutBreadcrumbProps & Partial<BreadcrumbsProps>
) => {
	const ctx = useLayoutContext();

	const {
		links: links_,
		routes = ctx?.routes ?? defaultRoutes,
		businessCategory = getBusinessCategory(ctx?.selectedBusiness),
		selectedBusinessName = getBusinessName(ctx?.selectedBusiness),
		...crumbProps
	} = props;

	const hub_href =
		businessCategory === 'import' ? routes.importsHub : routes.exportsHub;

	const dash_href =
		businessCategory === 'import'
			? routes.importsDashboard
			: routes.exportsDashboard;

	const links: BreadcrumbsProps['links'] = [
		{ label: 'Home', href: routes.account },
		{ label: getBusinessCategoryArea(businessCategory), href: hub_href },
		...(selectedBusinessName
			? [{ label: selectedBusinessName, href: dash_href }]
			: []),
		...(links_ ?? []),
	];

	return <Crumbs {...crumbProps} links={links} />;
};
