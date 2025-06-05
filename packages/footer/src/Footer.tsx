import { useMemo } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { CoreProvider, tokens } from '@ag.ds-next/react/core';
import { Footer as AgDsFooter, FooterDivider } from '@ag.ds-next/react/footer';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Text } from '@ag.ds-next/react/text';

const footerLinks = [
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/about/contact-us',
		label: 'Contact us',
	},
	{
		href: '/help',
		label: 'Help',
	},
	{
		href: 'https://www.agriculture.gov.au/about/commitment/accessibility',
		rel: 'external',
		label: 'Accessibility',
	},
	{
		href: 'https://www.agriculture.gov.au/about/disclaimer',
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
			<Box palette="dark">
				<AgDsFooter background="bodyAlt">
					<nav aria-label="footer">
						<LinkList links={footerLinks} horizontal />
					</nav>
					<FooterDivider />
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						We acknowledge the traditional owners of country throughout
						Australia and recognise their continuing connection to land, waters
						and culture. We pay our respects to their Elders past, present and
						emerging.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; {year} Department of Agriculture, Fisheries and Forestry
					</Text>
				</AgDsFooter>
			</Box>
		</CoreProvider>
	);
};
