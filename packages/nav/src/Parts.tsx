import * as React from 'react';
import { Box, Stack } from '@ag.ds-next/react/box';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { boxPalette, tokens } from '@ag.ds-next/react/core';
import { Prose } from '@ag.ds-next/react/prose';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { Footer as AgDsFooter, FooterDivider } from '@ag.ds-next/react/footer';
import { PageContent } from '@ag.ds-next/react/content';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { LinkList } from '@ag.ds-next/react/link-list';
import { themed } from './Themed';
import { FC } from './FC';
import { SubnavContext } from './NavCtx';

export const Divider = () => (
	<hr
		css={{
			boxSizing: 'content-box',
			height: 0,
			overflow: 'visible',
			border: 'none',
			borderTopWidth: tokens.borderWidth.sm,
			borderTopStyle: 'solid',
			borderColor: boxPalette.borderMuted,
			width: '100%',
			// marginTop: mapSpacing(2),
			// marginBottom: mapSpacing(2),
		}}
	/>
);

const TStack = themed(Stack);

export const SampleContent = () => (
	<>
		<Breadcrumbs
			links={[
				{ label: 'Home', href: '#' },
				{ label: 'Establishments', href: '#' },
				{ label: 'Register a new establishment' },
			]}
		/>

		<H1>Establishments</H1>

		<Text as="p" fontSize={'md'} color="muted">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus
			leo, non rhoncus neque.
		</Text>

		<Prose>
			<h2>Introduction</h2>
			<p>
				The particulars of your body copy will be determined by the topic of
				your page. Regardless of topic, it&apos;s a good practice to follow the
				inverted pyramid structure when writing copy: Begin with the information
				that&apos;s most important to your users and then present information of
				less importance.
			</p>
			<h2>Eligibility</h2>
			<p>
				The particulars of your body copy will be determined by the topic of
				your page. Regardless of topic, it&apos;s a good practice to follow the
				inverted pyramid structure when writing copy: Begin with the information
				that&apos;s most important to your users and then present information of
				less importance.
			</p>
			<h2>Fees</h2>
			<p>
				The particulars of your body copy will be determined by the topic of
				your page. Regardless of topic, it&apos;s a good practice to follow the
				inverted pyramid structure when writing copy: Begin with the information
				that&apos;s most important to your users and then present information of
				less importance.
			</p>

			<h2>How to apply</h2>
			<p>
				The particulars of your body copy will be determined by the topic of
				your page. Regardless of topic, it&apos;s a good practice to follow the
				inverted pyramid structure when writing copy: Begin with the information
				that&apos;s most important to your users and then present information of
				less importance.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
				finibus leo, non rhoncus neque dolor sit.
			</p>
		</Prose>
		<H2></H2>

		<Box
			css={{ borderRadius: '8px' }}
			background={'shade'}
			height="10rem"
			padding={1}
		>
			Section A
		</Box>

		<Box
			css={{ borderRadius: '8px' }}
			background={'shade'}
			height="40rem"
			padding={1}
		>
			Section B
		</Box>
	</>
);

export const Contents: FC = ({ children }) => {
	const subnavs = Object.keys(SubnavContext.useSubnavs());

	return (
		<PageContent className="App" css={{ flex: 1 }}>
			{subnavs.length > 0 ? (
				<Columns>
					<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
						<SubnavContext.Subnavs />
					</Column>
					<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
						<Stack gap={3}>{children}</Stack>
					</Column>
				</Columns>
			) : (
				<Stack gap={3}>{children}</Stack>
			)}
		</PageContent>
	);
};

export const Footer = () => {
	return (
		<TStack padding={2} colors={{ accent: 'borderMuted' }}>
			<AgDsFooter>
				<nav aria-label="footer">
					<LinkList
						links={[
							{ label: 'Accessibility' },
							{ label: 'Disclaimer' },
							{ label: 'Privacy' },
						]}
						horizontal
					/>
				</nav>
				<FooterDivider />
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					We acknowledge the traditional owners of country throughout Australia
					and recognise their continuing connection to land, waters and culture.
					We pay our respects to their Elders past, present and emerging.
				</Text>
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					&copy; 2023 Department of Agriculture, Fisheries and Forestry
				</Text>
			</AgDsFooter>
		</TStack>
	);
};
