import { PropsWithChildren, ComponentType, Fragment } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';
import { IconProps } from '@ag.ds-next/react/icon';
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
		items: (
			| {
					label: string;
					icon?: ComponentType<IconProps>;
					href: string;
			  }
			| {
					label: string;
					icon?: ComponentType<IconProps>;
					onClick: () => void;
			  }
		)[];
	};
}>;

export function AuthenticatedAppShell({
	siteTitle,
	siteSubtitle,
	isFocusMode = false,
	activePath,
	mainNavItems,
	userMenu,
	children,
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
				<Box width="100%">
					<AuthenticatedAppShellHeader
						title={siteTitle}
						subtitle={siteSubtitle}
					/>
					<Content>
						<Box as="main" id="main-content" paddingTop={2} paddingBottom={3}>
							{children}
						</Box>
						<AuthenticatedAppShellFooter />
					</Content>
				</Box>
			</Box>
		</AuthenticatedAppShellContext.Provider>
	);
}
