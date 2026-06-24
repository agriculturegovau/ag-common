import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import {
	AppLayout as AgDsAppLayout,
	AppLayoutHeader as AgDsAppLayoutHeader,
	AppLayoutSidebar as AgDsAppLayoutSidebar,
	AppLayoutContent as AgDSAppLayoutContent,
	AppLayoutFooter as AgDsAppLayoutFooter,
	AppLayoutFooterDivider as AgDsAppLayoutFooterDivider,
	AppLayoutSidebarProps,
	AppLayoutHeaderProps,
} from '@ag.ds-next/react/app-layout';
import { Logo } from '@ag.ds-next/react/daff-branding';
import {
	CoreProvider,
	coreContext,
	tokens,
	useTernaryState,
} from '@ag.ds-next/react/core';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Text } from '@ag.ds-next/react/text';
import {
	HostDomain,
	Features,
	findBestMatch,
	getFooterLinks,
	getAppLinks,
	getSidebarLinks,
	InternalTheme,
	createRoutes,
	resolveRouteSpec,
	createRoute,
	AppSubdomain,
} from './utils';
import {
	Business,
	BusinessDetails,
	BusinessDropdown,
	getBusinessCategory,
	getBusinessCategoryLabel,
	getBusinessSidebarLinks,
	getComputedFeatures,
} from './AppLayoutDropdown';
import {
	AppContent,
	AppErrorComponents,
	type ErrorComponents,
} from './AppLayoutContent';
import { Modal } from '@ag.ds-next/react/modal';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { AuthDetails, ProofingLevel } from './proofing';
import { ExpectedClaims, useAuthDetails } from './authDetails';

type LayoutContext = {
	onSignOutClick: () => void;
};

type SidebarItems = AppLayoutSidebarProps['items'];
type SidebarSubLevelVisible = AppLayoutSidebarProps['subLevelVisible'];

type HeaderProps = {
	href?: AppLayoutHeaderProps['href'];
	heading?: AppLayoutHeaderProps['heading'];
	subLine?: AppLayoutHeaderProps['subLine'];
	badgeLabel?: AppLayoutHeaderProps['badgeLabel'];
};

const LayoutContext = createContext<LayoutContext | undefined>(undefined);

export const useOpenSignOutModal = () => {
	return useContext(LayoutContext)?.onSignOutClick;
};

export type AppLayoutProps<B extends Business> = PropsWithChildren<{
	activePath: string;
	focusMode?: boolean;
	handleSignOut: () => Promise<void>;
	mainContentId?: string;
	unreadMessageCount?: number;
	userName?: string;
	businessDetails?: BusinessDetails<B>;
	features?: Features;
	claims?: ExpectedClaims; // Input for common error handling behaviour
	errorComponents?: Partial<ErrorComponents>;
	requiredProofingLevel?: ProofingLevel | ProofingLevel[];
	authDetails?: AuthDetails;
	sidebarItems?: SidebarItems;
	sidebarSubLevelVisible?: SidebarSubLevelVisible;
	headerProps?: HeaderProps;
	domain?: HostDomain;
	subdomain?: AppSubdomain;

	/**
	 * @deprecated the internal theme flag has lost all semantic meaning with the daff theme changes.
	 */
	internal?: InternalTheme;
}>;

export function AppLayout<B extends Business>({
	activePath: activePath_,
	children,
	focusMode = false,
	handleSignOut,
	mainContentId = 'main-content',
	userName,
	businessDetails,
	claims,
	errorComponents,
	features: features_,
	requiredProofingLevel,
	authDetails,
	sidebarItems,
	sidebarSubLevelVisible,
	headerProps,
	domain: domain_,
	subdomain: subdomain_,
}: AppLayoutProps<B>) {
	const year = useMemo(() => new Date().getFullYear(), []);
	const domain = domain_ ?? 'agriculture.gov.au';
	const subdomain = subdomain_ ?? 'exports';

	// Preserve link behaviour for main content
	const parentCoreContext = useContext(coreContext);

	const [isModalOpen, openModal, closeModal] = useTernaryState(false);
	const [isSigningOut, setSigningOut, setSignedOut] = useTernaryState(false);
	const onSignOutClick = openModal;
	const onModalSignOutClick = handleSignOut;

	const features = getComputedFeatures({
		features: features_,
		selectedBusiness: businessDetails?.selectedBusiness,
	});

	const activeRoute = createRoute(subdomain)(activePath_);
	const activePath = resolveRouteSpec(activeRoute, { domain });
	const routes = createRoutes(domain);
	const appLinks = useMemo(() => getAppLinks({ features, routes }), [features]);
	const footerLinks = getFooterLinks(routes);
	const sidebarLinks = useMemo(
		() => [
			...getBusinessSidebarLinks({ details: businessDetails, routes }),
			...getSidebarLinks({ onSignOutClick, features, routes }),
		],
		[onSignOutClick, businessDetails, features]
	);

	// we always build these in order to respect hook conditional rules
	// we should accept authDetails ONLY instead of claims in the future.
	const computedAuthDetails = useAuthDetails(claims);

	const details = authDetails ?? computedAuthDetails;
	const activeApp = findBestMatch(appLinks, activePath);

	return (
		<AgDsAppLayout focusMode={focusMode}>
			<LayoutContext.Provider value={{ onSignOutClick }}>
				<CoreProvider>
					<AgDsAppLayoutHeader
						palette="light"
						background="body"
						href={headerProps?.href ?? '/account'}
						heading={headerProps?.heading ?? 'Export Service'}
						subLine={
							headerProps?.subLine ??
							'Supporting Australian agricultural exports'
						}
						badgeLabel={headerProps?.badgeLabel ?? 'Beta'}
						logo={<Logo />}
						accountDetails={
							userName
								? {
										href: routes.account,
										name:
											businessDetails?.selectedBusiness?.partyDisplayName ??
											userName,
										avatarName: userName,
										secondaryText:
											businessDetails?.selectedBusiness === undefined
												? undefined
												: getBusinessCategoryLabel(
														getBusinessCategory(
															businessDetails.selectedBusiness
														)
													),
										dropdown: businessDetails ? (
											<BusinessDropdown
												routes={routes}
												businessDetails={businessDetails}
												onSignOutClick={onSignOutClick}
											/>
										) : undefined,
									}
								: undefined
						}
					/>
					{sidebarItems ? (
						<CoreProvider {...parentCoreContext}>
							<AgDsAppLayoutSidebar
								activePath={activePath_} // use unmodified path here so that custom sidenav items don't need to be expanded into fully qualified urls
								items={sidebarItems}
								subLevelVisible={sidebarSubLevelVisible}
								background="body"
							/>
						</CoreProvider>
					) : (
						<AgDsAppLayoutSidebar
							activePath={activePath}
							items={sidebarLinks}
							background="body"
						/>
					)}

					<AgDSAppLayoutContent>
						<CoreProvider {...parentCoreContext}>
							<main
								id={mainContentId}
								tabIndex={-1}
								css={{ '&:focus': { outline: 'none' } }}
							>
								<AppContent
									claims={claims}
									authDetails={details}
									requiredProofingLevel={requiredProofingLevel}
									errorComponents={{
										...AppErrorComponents,
										...errorComponents,
									}}
									activeApp={activeApp?.label}
									routes={routes}
								>
									{children}
								</AppContent>
							</main>
						</CoreProvider>

						<AgDsAppLayoutFooter>
							<nav aria-label="footer">
								<LinkList links={footerLinks} horizontal />
							</nav>
							<AgDsAppLayoutFooterDivider />
							<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
								We acknowledge the traditional owners of country throughout
								Australia and recognise their continuing connection to land,
								waters and culture. We pay our respects to their Elders past,
								present and emerging.
							</Text>
							<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
								&copy; {year} Department of Agriculture, Fisheries and Forestry
							</Text>
						</AgDsAppLayoutFooter>
					</AgDSAppLayoutContent>

					<Modal
						isOpen={isModalOpen}
						onClose={closeModal}
						title="Do you want to sign out?"
						actions={
							<ButtonGroup>
								<Button
									onClick={async () => {
										setSigningOut();
										await onModalSignOutClick();
										setSignedOut();
										closeModal();
									}}
									loading={isSigningOut}
									disabled={isSigningOut}
								>
									Sign out
								</Button>
								<Button variant="secondary" onClick={closeModal}>
									Cancel
								</Button>
							</ButtonGroup>
						}
					>
						<Text as="p">
							This will end your current session with the Export Service.
						</Text>
					</Modal>
				</CoreProvider>
			</LayoutContext.Provider>
		</AgDsAppLayout>
	);
}
