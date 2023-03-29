import { PropsWithChildren, Fragment } from 'react';
import { Box, Stack } from '@ag.ds-next/react/box';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { Content } from '@ag.ds-next/react/content';
import { AuthenticatedAppShellHeader } from './AuthenticatedAppShellHeader';
import { AuthenticatedAppShellSideBar } from './AuthenticatedAppShellSideBar';
import { AuthenticatedAppShellFooter } from './AuthenticatedAppShellFooter';
import {
	AuthenticatedAppShellSideBarItem,
	AuthenticatedAppShellSideBarItemType,
	AuthenticatedAppShellSideBarDivider,
} from './AuthenticatedAppShellSideBarItem';
import { AuthenticatedAppShellContext } from './AuthenticatedAppShellContext';
import {
	useIsMobile,
	useSidebarMenuState,
	useSidebarMenuToggles,
} from './utils';

export type AuthenticatedAppShellProps = PropsWithChildren<{
	siteTitle: string;
	siteSubtitle: string;
	/** For screens where a user is focusing on a task, the UI should collapse */
	isFocusMode?: boolean;
	/** Used for highlighting the active element. */
	activePath: string;
	/** Groups of items to display in the sidebar. */
	mainNavItems: AuthenticatedAppShellSideBarItemType[][];
	/** Configuration of the user dropdown menu. */
	userMenu: {
		name: string;
		organisation?: string;
		href: string;
	};
	onSignOut: () => void;
}>;

export function AuthenticatedAppShell({
	siteTitle,
	siteSubtitle,
	isFocusMode = false,
	activePath,
	mainNavItems,
	userMenu,
	children,
	onSignOut,
}: AuthenticatedAppShellProps) {
	const isMobile = useIsMobile();

	const [isMenuOpen, _showMenu, _hideMenu] = useSidebarMenuState({
		isFocusMode,
		isMobile,
	});

	const { showMenu, showMenuButtonRef, hideMenu, hideMenuButtonRef } =
		useSidebarMenuToggles({
			showMenu: _showMenu,
			hideMenu: _hideMenu,
		});

	return (
		<AuthenticatedAppShellContext.Provider
			value={{
				isMobile,
				isMenuOpen,
				showMenu,
				hideMenu,
				userMenu,
				showMenuButtonRef,
				hideMenuButtonRef,
				onSignOut,
			}}
		>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<Box display="flex" flexDirection="row">
				<AuthenticatedAppShellSideBar>
					<Box as="nav" aria-label="main">
						<Stack as="ul">
							{mainNavItems.map((group, idx, arr) => {
								const isLastItem = idx === arr.length - 1;
								return (
									<Fragment key={idx}>
										{group.map((item, idx) => (
											<AuthenticatedAppShellSideBarItem
												key={idx}
												isActive={activePath === item.href}
												{...item}
											/>
										))}
										{!isLastItem ? (
											<AuthenticatedAppShellSideBarDivider />
										) : null}
									</Fragment>
								);
							})}
						</Stack>
					</Box>
				</AuthenticatedAppShellSideBar>
				<Stack width="100%" minHeight={'100vh'}>
					<AuthenticatedAppShellHeader
						title={siteTitle}
						subtitle={siteSubtitle}
					/>

					<Box
						as="main"
						id="main-content"
						paddingTop={2}
						paddingBottom={3}
						flexGrow={1}
					>
						<Content>{children}</Content>
					</Box>

					<Content>
						<AuthenticatedAppShellFooter />
					</Content>
				</Stack>
			</Box>
		</AuthenticatedAppShellContext.Provider>
	);
}
