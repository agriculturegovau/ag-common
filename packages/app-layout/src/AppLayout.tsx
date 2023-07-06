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
import { footerNavigationItems, getSidebarLinks } from './utils';

export type AppLayoutProps = PropsWithChildren<{
	activePath: string;
	focusMode?: boolean;
	handleSignOut: () => Promise<void>;
	mainContentId?: string;
	unreadMessageCount?: number;
	userName: string;
	userOrganisation?: string;
}>;

export function AppLayout({
	activePath,
	children,
	focusMode = false,
	handleSignOut,
	mainContentId = 'main-content',
	unreadMessageCount,
	userName,
	userOrganisation,
}: AppLayoutProps) {
	const year = useMemo(() => new Date().getFullYear(), []);

	// Preserve link behaviour for main content
	const parentCoreContext = useContext(coreContext);

	const onSignOutClick = useCallback(
		async function onSignOutClick() {
			await handleSignOut();
		},
		[handleSignOut]
	);

	const sidebarLinks = useMemo(() => {
		return getSidebarLinks({ unreadMessageCount, onSignOutClick });
	}, [onSignOutClick, unreadMessageCount]);

	return (
		<AgDsAppLayout focusMode={focusMode}>
			<CoreProvider>
				<AgDsAppLayoutHeader
					href="/account/"
					heading="Export Service"
					subLine="Supporting Australian agricultural exports"
					badgeLabel="Beta"
					logo={<Logo />}
					accountDetails={{
						href: '/account/settings/', // trailing slash because acct app uses `trailingSlash: true` in next config
						name: userName,
						secondaryText: userOrganisation,
					}}
				/>
				<AgDsAppLayoutSidebar activePath={activePath} items={sidebarLinks} />

				<AgDSAppLayoutContent>
					<CoreProvider {...parentCoreContext}>
						<main
							id={mainContentId}
							tabIndex={-1}
							css={{ '&:focus': { outline: 'none' } }}
						>
							{children}
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
