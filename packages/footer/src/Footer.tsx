import { tokens } from '@ag.ds-next/core';
import { LinkList } from '@ag.ds-next/link-list';
import { Text } from '@ag.ds-next/text';
import { Footer as AgDsFooter, FooterDivider } from '@ag.ds-next/footer';

const footerLinks = [
	{ href: '#', label: 'Accessibility' },
	{ href: '#', label: 'Disclaimer' },
	{ href: '#', label: 'Privacy' },
];

export function Footer() {
	return (
		<AgDsFooter variant="agriculture">
			<LinkList links={footerLinks} horizontal />
			<FooterDivider />
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				We acknowledge the traditional owners of country throughout Australia
				and recognise their continuing connection to land, waters and culture.
				We pay our respects to their Elders past, present and emerging.
			</Text>
			<Text fontSize="xs">&copy; Commonwealth of Australia.</Text>
		</AgDsFooter>
	);
}
