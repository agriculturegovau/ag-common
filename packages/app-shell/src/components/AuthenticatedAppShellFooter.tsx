import { useMemo } from 'react';
import { Box, Stack } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';
import { FooterDivider } from '@ag.ds-next/react/footer';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Text } from '@ag.ds-next/react/text';
import { Logo } from '@ag.ds-next/react/ag-branding';

export function AuthenticatedAppShellFooter() {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Stack
			as="footer"
			width="100%"
			gap={1.5}
			paddingY={3}
			borderTop
			borderTopWidth="xl"
		>
			<nav aria-label="footer">
				<LinkList
					horizontal
					links={[
						{ href: '#', label: 'Home' },
						{ href: '#', label: 'Terms and conditions' },
						{ href: '#', label: 'Privacy policy' },
						{ href: '#', label: 'A really long link title' },
					]}
				/>
			</nav>
			<FooterDivider />
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				We acknowledge the traditional owners of country throughout Australia
				and recognise their continuing connection to land, waters and culture.
				We pay our respects to their Elders past, present and emerging.
			</Text>
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				&copy; {year} Department of Agriculture, Fisheries and Forestry
			</Text>
			<Box
				width={230}
				display={{
					xs: 'block',
					lg: 'none',
				}}
			>
				<Logo />
			</Box>
		</Stack>
	);
}
