import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import {
	AppLayout as AgDsAppLayout,
	AppLayoutHeader as AgDsAppLayoutHeader,
	AppLayoutSidebar as AgDsAppLayoutSidebar,
	AppLayoutContent as AgDSAppLayoutContent,
	AppLayoutFooter as AgDsAppLayoutFooter,
	AppLayoutFooterDivider as AgDsAppLayoutFooterDivider,
	AppLayoutSidebarProps,
} from '@ag.ds-next/react/app-layout';
import { Logo } from '@ag.ds-next/react/ag-branding';
import {
	CoreProvider,
	coreContext,
	tokens,
	useTernaryState,
} from '@ag.ds-next/react/core';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Text } from '@ag.ds-next/react/text';
import {
	Features,
	findBestMatch,
	footerNavigationItems,
	getAppLinks,
	getSidebarLinks,
	hrefs,
	internalHeaderProps,
	internalSidebarProps,
	InternalTheme,
} from './utils';
import {
	Business,
	BusinessDetails,
	BusinessDropdown,
	getBusinessSidebarLinks,
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
	internal?: InternalTheme;
}>;

export function AppLayout<B extends Business>({
	activePath,
	children,
	focusMode = false,
	handleSignOut,
	mainContentId = 'main-content',
	unreadMessageCount,
	userName: name,
	businessDetails,
	claims,
	errorComponents,
	features,
	requiredProofingLevel,
	authDetails,
	sidebarItems,
	internal,
}: AppLayoutProps<B>) {
	const year = useMemo(() => new Date().getFullYear(), []);

	// Preserve link behaviour for main content
	const parentCoreContext = useContext(coreContext);

	const [isModalOpen, openModal, closeModal] = useTernaryState(false);
	const [isSigningOut, setSigningOut, setSignedOut] = useTernaryState(false);
	const onSignOutClick = openModal;
	const onModalSignOutClick = handleSignOut;
	const appLinks = useMemo(() => getAppLinks({ features }), [features]);
	const sidebarLinks = useMemo(
		() => [
			...getBusinessSidebarLinks(businessDetails),
			...getSidebarLinks({ onSignOutClick, features }),
		],
		[onSignOutClick, businessDetails, features]
	);

	// we always build these in order to respect hook conditional rules
	// we should accept authDetails ONLY instead of claims in the future.
	const computedAuthDetails = useAuthDetails(claims);

	const details = authDetails ?? computedAuthDetails;
	const activeApp = findBestMatch(appLinks, activePath);
	const preventAddBusiness = details?.provider === 'B2CLocalUser';

	return (
		<AgDsAppLayout focusMode={focusMode}>
			<LayoutContext.Provider value={{ onSignOutClick }}>
				<CoreProvider>
					<AgDsAppLayoutHeader
						href="/account"
						heading="Export Service"
						subLine="Supporting Australian agricultural exports"
						badgeLabel="Beta"
						logo={<Logo />}
						accountDetails={
							name
								? {
										href: hrefs.account,
										name,
										secondaryText:
											businessDetails?.selectedBusiness?.partyDisplayName ??
											'My account',
										dropdown: businessDetails ? (
											<BusinessDropdown
												businessDetails={businessDetails}
												unreadMessageCount={unreadMessageCount}
												onSignOutClick={onSignOutClick}
												preventAddBusiness={preventAddBusiness}
											/>
										) : undefined,
									}
								: undefined
						}
						{...internalHeaderProps(internal)}
					/>
					{sidebarItems ? (
						<CoreProvider {...parentCoreContext}>
							<AgDsAppLayoutSidebar
								activePath={activePath}
								items={sidebarItems}
								{...internalSidebarProps(internal)}
							/>
						</CoreProvider>
					) : (
						<AgDsAppLayoutSidebar
							activePath={activePath}
							items={sidebarLinks}
							{...internalSidebarProps(internal)}
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
								>
									{children}
								</AppContent>
							</main>
						</CoreProvider>

						<AgDsAppLayoutFooter>
							<nav aria-label="footer">
								<LinkList links={footerNavigationItems} horizontal />
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
