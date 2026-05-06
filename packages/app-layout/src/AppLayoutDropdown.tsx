import { Fragment } from 'react';
import {
	DropdownMenuDivider,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuItemLink,
	DropdownMenuItemRadio,
	DropdownMenuPanel,
} from '@ag.ds-next/react/dropdown-menu';
import {
	ArrowRightIcon,
	AvatarIcon,
	ChevronsLeftIcon,
	ExitIcon,
	HomeIcon,
	PlaneLandingIcon,
	PlaneTakeoffIcon,
} from '@ag.ds-next/react/icon';
import { Text } from '@ag.ds-next/react/text';
import { AppRoutes, type Features } from './utils';

export interface Business {
	partyId: number;
	partyDisplayName: string;
	formattedPartyExternalId: string;
	roleDisplayName: string;
	roleName?: string;
	roleGroupName?: string;
}

export interface BusinessOption extends Business {
	selected?: boolean;
	setSelected?: () => void;
}

export interface BusinessDetails<T extends Business> {
	selectedBusiness?: T;
	linkedBusinesses?: T[];
	setSelectedBusiness: (business: T) => void;
}

export interface BusinessDropdownProps<T extends Business> {
	businessDetails: BusinessDetails<T>;
	onSignOutClick: () => void;
	routes: AppRoutes;
}

// A business.roleGroupName should be BIOSECURITY | EXPORT_SERVICE
// ...but in app-layout world this maps to imports or exports.
type BusinessCategory = 'export' | 'import';

const createBusinessOptions = <T extends Business>(
	details: BusinessDetails<T>
): {
	options: { category: BusinessCategory; businesses: BusinessOption[] }[];
	exists: boolean;
} => {
	const businessesByCategory = (category: BusinessCategory) => {
		const businesses =
			details?.linkedBusinesses?.flatMap((business) =>
				getBusinessCategory(business) === category
					? {
							...business,
							selected: details?.selectedBusiness?.partyId === business.partyId,
							setSelected: () => details.setSelectedBusiness(business),
						}
					: []
			) ?? [];

		return { category, businesses };
	};

	const categories: BusinessCategory[] = ['export', 'import'];
	const options = categories.map(businessesByCategory);
	const count = options.reduce(
		(total, opt) => total + opt.businesses.length,
		0
	);
	return { options, exists: count > 0 };
};

const canAccessPeopleRoles = new Set([
	'MANAGER',
	'PRINCIPAL_AUTHORITY_OWNER',
	'USER',
]);

const canAccessPeople = (business?: Business) =>
	business?.roleName ? canAccessPeopleRoles.has(business.roleName) : false;

export const getBusinessCategory = (business?: Business): BusinessCategory =>
	business?.roleGroupName === 'BIOSECURITY' ? 'import' : 'export';

const businessCategoryLabel = {
	export: 'Export',
	import: 'Import',
} as const;

export const getBusinessCategoryLabel = (category: BusinessCategory) =>
	businessCategoryLabel[category];

const LinkedBusinesses = (props: {
	businesses: BusinessOption[];
	onSelectBusiness: (business: BusinessOption) => () => void;
	category: 'export' | 'import';
	routes: AppRoutes;
}) =>
	props.businesses.length === 0 ? null : (
		<DropdownMenuGroup
			label={`${getBusinessCategoryLabel(props.category)} businesses`}
		>
			{props.businesses.slice(0, 3).map((business) => (
				<DropdownMenuItemRadio
					key={business.partyId}
					checked={business.selected ?? false}
					secondaryText={business.formattedPartyExternalId}
					onClick={props.onSelectBusiness(business)}
				>
					{business.partyDisplayName}
				</DropdownMenuItemRadio>
			))}
			{props.businesses.length > 3 ? (
				<DropdownMenuItemLink
					href={
						props.category === 'import'
							? props.routes.importsHub
							: props.routes.exportsHub
					}
					endElement={<ArrowRightIcon />}
				>
					View all {props.category} businesses
				</DropdownMenuItemLink>
			) : null}
		</DropdownMenuGroup>
	);

export const BusinessDropdown = <T extends Business>(
	props: BusinessDropdownProps<T>
) => {
	const setBusiness = (option: BusinessOption) => () => option?.setSelected?.();
	const { options, exists } = createBusinessOptions(props.businessDetails);

	return (
		<DropdownMenuPanel palette="light">
			{options.map((businessOption) => (
				<LinkedBusinesses
					key={businessOption.category}
					businesses={businessOption.businesses}
					onSelectBusiness={setBusiness}
					category={businessOption.category}
					routes={props.routes}
				/>
			))}

			{exists && <DropdownMenuDivider />}

			<DropdownMenuItemLink href={props.routes.account} icon={HomeIcon}>
				Home
			</DropdownMenuItemLink>
			<DropdownMenuItemLink
				href={props.routes.exportsHub}
				icon={PlaneTakeoffIcon}
			>
				Export
			</DropdownMenuItemLink>
			<DropdownMenuItemLink
				href={props.routes.importsHub}
				icon={PlaneLandingIcon}
			>
				Import and biosecurity
			</DropdownMenuItemLink>
			<DropdownMenuItemLink href={props.routes.profile} icon={AvatarIcon}>
				Profile and settings
			</DropdownMenuItemLink>

			<DropdownMenuDivider />

			<DropdownMenuItem onClick={props.onSignOutClick} icon={ExitIcon}>
				Sign out
			</DropdownMenuItem>
		</DropdownMenuPanel>
	);
};

export const getBusinessSidebarLinks = <T extends Business>(params: {
	routes: AppRoutes;
	details?: BusinessDetails<T>;
}) =>
	params?.details?.selectedBusiness === undefined
		? []
		: [
				{
					options: { disableGroupPadding: true },
					items: [
						{
							label: 'Back to export',
							icon: ChevronsLeftIcon,
							href: params.routes.exportsHub,
						},
					],
				},
				{
					options: { disableGroupPadding: true },
					items: [
						{
							label: (
								<Fragment>
									<Text fontWeight="bold" fontSize="xs">
										{params.details.selectedBusiness.partyDisplayName}
									</Text>
									<Text color="muted" fontSize="xs">
										{params.details.selectedBusiness.formattedPartyExternalId}
									</Text>
								</Fragment>
							),
						},
					],
				},
			];

// agents should not be able to 'manage people' but allow feature toggle to take priority
export const getComputedFeatures = (params: {
	features?: Features;
	selectedBusiness?: Business;
}): Features | undefined =>
	params.selectedBusiness
		? {
				...params?.features,
				people:
					params?.features?.people ?? canAccessPeople(params.selectedBusiness),
			}
		: params.features;
