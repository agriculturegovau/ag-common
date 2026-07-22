import { useMemo } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { CoreProvider, tokens } from '@ag.ds-next/react/core';
import { Footer as AgDsFooter, FooterDivider } from '@ag.ds-next/react/footer';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';

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
		href: '/whats-new',
		label: "What's new",
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

const artwork =
	'https://static-content.p5.agriculture.gov.au/agds/brand-artwork.png';

export const Footer = () => {
	const year = useMemo(() => new Date().getFullYear(), []);

	return (
		<CoreProvider>
			<Box palette="light">
				<AgDsFooter
					background="body"
					borderColor={'selected'}
					artwork={{
						image: <img src={artwork} alt="Agriculture brand artowrk" />,
						position: 'right bottom',
						fit: 'none',
					}}
				>
					<nav aria-label="footer">
						<LinkList links={footerLinks} horizontal />
					</nav>

					<Text maxWidth={tokens.maxWidth.bodyText}>
						<TextLink href="https://www.agriculture.gov.au/about/copyright">
							&copy; {year} Department of Agriculture, Fisheries and Forestry
						</TextLink>
					</Text>

					<FooterDivider color="muted" />

					{/* intentionally differs from tokens.maxWith.bodyText to match design. design breaks content width rule. */}
					<Text fontSize="xs" maxWidth="672px">
						We acknowledge the continuous connection of First Nations
						Traditional Owners and Custodians to the lands, seas and waters of
						Australia. We recognise their care for and cultivation of Country.
						We pay respect to Elders past and present, and recognise their
						knowledge and contribution to the productivity, innovation and
						sustainability of Australia&apos;s agriculture, fisheries and
						forestry industries.
					</Text>

					<Text fontSize="xs" maxWidth="672px">
						Artwork: <em>Protecting our Country, Growing our Future</em>
						<br />
						&copy; Amy Allerton, contemporary Aboriginal Artist of the
						Gumbaynggirr, Bundjalung and Gamilaroi nations.
					</Text>
				</AgDsFooter>
			</Box>
		</CoreProvider>
	);
};
