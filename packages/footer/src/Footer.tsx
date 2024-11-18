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
						We acknowledge the continuous connection of First Nations
						Traditional Owners and Custodians to the lands, seas and waters of
						Australia. We recognise their care for and cultivation of Country.
						We pay respect to Elders past and present, and recognise their
						knowledge and contribution to the productivity, innovation and
						sustainability of Australia&apos;s agriculture, fisheries and
						forestry industries.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; {year} Department of Agriculture, Fisheries and Forestry
					</Text>
				</AgDsFooter>
			</Box>
		</CoreProvider>
	);
};
