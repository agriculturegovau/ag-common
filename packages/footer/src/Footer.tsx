import { tokens } from '@ag.ds-next/core';
import { LinkList } from '@ag.ds-next/link-list';
import { Text } from '@ag.ds-next/text';
import { Footer as AgDsFooter, FooterDivider } from '@ag.ds-next/footer';
import { CoreProvider } from '@ag.ds-next/core';
import { useMemo } from 'react';

const footerLinks = [
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/account/help',
		rel: 'external',
		label: 'Help',
	},
	{
		href: 'https://www.awe.gov.au/about/commitment/accessibility',
		rel: 'external',
		label: 'Accessibility',
	},
	{
		href: 'https://www.awe.gov.au/about/disclaimer',
		rel: 'external',
		label: 'Disclaimer',
	},
	{
		href: '/privacy',
		label: 'Privacy',
	},
];

export const Footer = () => {
	const year = useMemo(() => new Date().getFullYear(), []);

	return (
		<CoreProvider>
			<AgDsFooter variant="agriculture">
				<nav aria-label="footer">
					<LinkList links={footerLinks} horizontal />
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
			</AgDsFooter>
		</CoreProvider>
	);
};
