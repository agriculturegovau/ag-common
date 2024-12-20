import { PropsWithChildren, useCallback, useContext, useMemo } from 'react';
import {
	AppLayout as AgDsAppLayout,
	AppLayoutHeader as AgDsAppLayoutHeader,
	AppLayoutSidebar as AgDsAppLayoutSidebar,
	AppLayoutContent as AgDSAppLayoutContent,
	AppLayoutFooter as AgDsAppLayoutFooter,
	AppLayoutFooterDivider as AgDsAppLayoutFooterDivider,
} from '@ag.ds-next/react/app-layout';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { CoreProvider, coreContext, tokens } from '@ag.ds-next/react/core';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Text } from '@ag.ds-next/react/text';
import {
	Features,
	footerNavigationItems,
	getSidebarLinks,
	hrefs,
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
	ExpectedClaims,
	type ErrorComponents,
} from './AppLayoutContent';

export type AppLayoutProps<B extends Business> = PropsWithChildren<{
	activePath: string;
	focusMode?: boolean;
	handleSignOut: () => Promise<void>;
	mainContentId?: string;
	unreadMessageCount?: number;
	userName?: string;
	businessDetails?: BusinessDetails<B>;
	claims?: ExpectedClaims; // Input for common error handling behaviour
	errorComponents?: Partial<ErrorComponents>;
	features?: Features;
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
}: AppLayoutProps<B>) {
	const year = useMemo(() => new Date().getFullYear(), []);

	// Preserve link behaviour for main content
	const parentCoreContext = useContext(coreContext);

	const onSignOutClick = useCallback(
		async function onSignOutClick() {
			await handleSignOut();
		},
		[handleSignOut]
	);

	const sidebarLinks = useMemo(
		() => [
			...getBusinessSidebarLinks(businessDetails),
			...getSidebarLinks({ onSignOutClick, features }),
		],
		[onSignOutClick, businessDetails, features]
	);

	return (
		<AgDsAppLayout focusMode={focusMode}>
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
										/>
									) : undefined,
							  }
							: undefined
					}
				/>
				<AgDsAppLayoutSidebar activePath={activePath} items={sidebarLinks} />

				<AgDSAppLayoutContent>
					<CoreProvider {...parentCoreContext}>
						<main
							id={mainContentId}
							tabIndex={-1}
							css={{ '&:focus': { outline: 'none' } }}
						>
							<AppContent
								claims={claims}
								errorComponents={{
									...AppErrorComponents,
									...errorComponents,
								}}
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
			</CoreProvider>
		</AgDsAppLayout>
	);
}
