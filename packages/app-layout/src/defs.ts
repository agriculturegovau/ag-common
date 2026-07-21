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

// A business.roleGroupName should be BIOSECURITY | EXPORT_SERVICE
// ...but in app-layout world this maps to imports or exports.
export type BusinessCategory = 'export' | 'import';

export const getBusinessCategory = (business?: Business): BusinessCategory =>
	business?.roleGroupName === 'BIOSECURITY' ? 'import' : 'export';

const businessCategoryContent = {
	export: { label: 'Export', area: 'Export' },
	import: { label: 'Import', area: 'Import and biosecurity' },
} as const;

export const getBusinessCategoryLabel = (category: BusinessCategory) =>
	businessCategoryContent[category].label;

export const getBusinessCategoryArea = (category: BusinessCategory) =>
	businessCategoryContent[category].area;

type WithBusinessParam<
	B extends Business | undefined,
	T extends keyof Business,
> = B extends Business ? Business[T] : undefined;

export const getBusinessName = <B extends Business | undefined>(business: B) =>
	business?.partyDisplayName as WithBusinessParam<B, 'partyDisplayName'>;

export const getBusinessABN = <B extends Business | undefined>(business: B) =>
	business?.formattedPartyExternalId as WithBusinessParam<
		B,
		'formattedPartyExternalId'
	>;

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

export type InternalTheme = boolean | 'header' | 'sidebar';
