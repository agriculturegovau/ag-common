import { createContext, useContext, useState } from 'react';
import useSWR from 'swr';
import request, { gql } from 'graphql-request';

import { Prose } from '@ag.ds-next/react/prose';
import { Drawer } from '@ag.ds-next/react/drawer';
import { Button } from '@ag.ds-next/react/button';
import { Stack } from '@ag.ds-next/react/stack';
import { TextLinkExternal } from '@ag.ds-next/react/text-link';
import { Details } from '@ag.ds-next/react/details';
import { HelpArticleT, HelpReferenceT } from './keystatic';
import { H1 } from '@ag.ds-next/react/heading';
import { DocumentRenderer, defaultRenderers } from './renderer';
import { Text } from '@ag.ds-next/react/text';

interface HelpReferenceProps {
	tag: string;
}

const HelpReferenceContext = createContext({
	providerURL: 'https://exports.agriculture.gov.au',
});

export const HelpReferenceProvider = HelpReferenceContext.Provider;

const getReferenceQuery = gql`
	query getReference($tag: String!) {
		reference: reference(slug: $tag) {
			slug
			label
			content
			referenceText

			article {
				slug
				title
				intro
				content
			}
		}
	}
`;

export const HelpReference = (props: HelpReferenceProps) => {
	const [expanded, setExpanded] = useState(false);
	const { providerURL } = useContext(HelpReferenceContext);

	const variables = { tag: props.tag };

	const { data, error } = useSWR(
		{ document: getReferenceQuery, variables },
		({ document, variables }) =>
			request<{ reference: HelpReferenceT }>({
				url: `${providerURL}/api/graphql`,
				document,
				variables,
			})
	);

	const reference = data?.reference;
	if (!reference) {
		return null;
	}

	return (
		<>
			<Details label={reference?.label} iconBefore>
				<Prose>
					<DocumentRenderer document={reference.content ?? []} />

					<p>
						<Button variant="text" onClick={() => setExpanded(true)}>
							{reference.referenceText}
						</Button>
					</p>
				</Prose>
			</Details>

			{reference.article ? (
				<Drawer
					isOpen={expanded}
					onDismiss={() => setExpanded(false)}
					title={'Help'}
					actions={
						<TextLinkExternal
							href={`${providerURL}/help/page/${reference.article.slug}`}
						>
							Open in new window
						</TextLinkExternal>
					}
				>
					<Stack gap={3}>
						<HelpContent article={reference.article} />
					</Stack>
				</Drawer>
			) : null}
		</>
	);
};

export const HelpContent = (props: { article: HelpArticleT }) => (
	<>
		<Stack gap={1.5}>
			<H1 maxWidth={'42rem'}>{props.article.title}</H1>
			<DocumentRenderer
				document={props.article.intro}
				renderers={{
					block: {
						...defaultRenderers.block,
						paragraph: ({ children }) => (
							<Text as="p" fontSize="md" color="muted">
								{children}
							</Text>
						),
					},
					inline: defaultRenderers.inline,
				}}
			/>
		</Stack>

		<Prose>
			<DocumentRenderer document={props.article.content} />
		</Prose>
	</>
);
