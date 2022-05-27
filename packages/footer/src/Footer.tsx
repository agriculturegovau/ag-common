import { LinkList } from '@ag.ds-next/link-list';
import { Footer as DSFooter, FooterDivider } from '@ag.ds-next/footer';
import { Text } from '@ag.ds-next/text';

const footerLinks = [
	{ href: '#', label: 'Accessibility' },
	{ href: '#', label: 'Disclaimer' },
	{ href: '#', label: 'Privacy' },
];

export function Footer() {
	return (
		<DSFooter variant="agriculture">
			<LinkList links={footerLinks} horizontal />
			<FooterDivider />
			<Text fontSize="xs" maxWidth="42em">
				We acknowledge the traditional owners of country throughout Australia
				and recognise their continuing connection to land, waters and culture.
				We pay our respects to their Elders past, present and emerging.
			</Text>
			<Text fontSize="xs">&copy; Commonwealth of Australia.</Text>
		</DSFooter>
	);
}
