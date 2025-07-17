import {
	type MouseEvent,
	type PropsWithChildren,
	useEffect,
	useRef,
} from 'react';

import {
	boxPalette,
	forwardRefWithAs,
	mergeRefs,
	NativeLinkProps,
	packs,
	useId,
} from '@ag.ds-next/react/core';
import { useDropdownMenuContext } from '@ag.ds-next/react/dropdown-menu';
import { Flex } from '@ag.ds-next/react/flex';

export type DropdownMenuItemProps = PropsWithChildren<{
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** Function to be fired following a click event of the item. */
	onClick?: NativeLinkProps['onClick'];
}>;

function useDropdownMenuItemId(idProp: string | undefined) {
	const { menuId } = useDropdownMenuContext();
	const autoId = useId();
	return idProp || `${menuId}-item-${autoId}`;
}

export const OurDropdownMenuItem = forwardRefWithAs<
	'div',
	DropdownMenuItemProps
>(function DropdownMenuItem(
	{ as, children, onClick: onClickProp, id: idProp, ...props },
	forwardedRef
) {
	const ref = useRef<HTMLElement>(null);
	const { activeDescendantId, closeMenu } = useDropdownMenuContext();

	const id = useDropdownMenuItemId(idProp);
	const isActiveDescendant = id === activeDescendantId;

	// Ensure the active descendant is visible in long lists with overflow
	// Without this, the active item may not be visible on the screen
	useEffect(() => {
		if (!isActiveDescendant) return;
		ref.current?.scrollIntoView({ block: 'nearest' });
	}, [isActiveDescendant]);

	function onClick(event: MouseEvent<HTMLAnchorElement>) {
		onClickProp?.(event);
		closeMenu();
	}

	return (
		<Flex
			alignItems="center"
			as={as}
			background="body"
			css={{
				textDecoration: 'none',

				...(isActiveDescendant && {
					backgroundColor: boxPalette.backgroundShade,
					...packs.underline,
				}),

				'&:hover': {
					backgroundColor: boxPalette.backgroundShade,
					...packs.underline,
				},
			}}
			focusRingFor="keyboard"
			gap={1}
			id={id}
			justifyContent="space-between"
			link
			onClick={onClick}
			padding={1}
			ref={mergeRefs([forwardedRef, ref])}
			role="menuitem"
			tabIndex={-1}
			width="18rem"
			{...props}
		>
			{children}
		</Flex>
	);
});
