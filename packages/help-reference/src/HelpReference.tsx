import { createContext, useContext, useState } from 'react';
import useSWR from 'swr';
import request, { gql } from 'graphql-request';

import { Prose } from '@ag.ds-next/react/prose';
import { Drawer } from '@ag.ds-next/react/drawer';
import { Button } from '@ag.ds-next/react/button';
import { Stack } from '@ag.ds-next/react/stack';
import {
	TextLinkExternal,
	TextLinkExternalProps,
} from '@ag.ds-next/react/text-link';
import { Details } from '@ag.ds-next/react/details';
import { HelpArticleT, HelpReferenceT } from './keystatic';
import { H1 } from '@ag.ds-next/react/heading';
import { DocumentRenderer, defaultRenderers } from './renderer';
import { Text } from '@ag.ds-next/react/text';

type HelpReferenceProps = {
	reference: string;
};

type ArticleLinkProps = {
	article: string;
} & Omit<TextLinkExternalProps, 'onClick' | 'href'>;

type SlugParam = { slug: string };

const HelpReferenceContext = createContext({
	providerURL: 'https://exports.agriculture.gov.au',
});

export const HelpReferenceProvider = HelpReferenceContext.Provider;

const getReferenceQuery = gql`
	query getReference($slug: String!) {
		reference: reference(slug: $slug) {
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

const getArticleQuery = gql`
	query getArticle($slug: String!) {
		article: article(slug: $slug) {
			slug
			title
			intro
			content
		}
	}
`;

export const ArticleLink = ({ article, ...props }: ArticleLinkProps) => {
	const [expanded, setExpanded] = useState(false);
	const { providerURL } = useContext(HelpReferenceContext);

	const variables = { slug: article };

	const { data, error } = useSWR(
		{ document: getArticleQuery, variables },
		({ document, variables }) =>
			request<{ article: HelpArticleT | null }, SlugParam>({
				url: `${providerURL}/api/graphql`,
				document,
				variables,
			})
	);

	const href = `${providerURL}/help/page/${article}`;
	const t = data?.article;

	if (!t) {
		return <TextLinkExternal {...props} href={href} />;
	}

	return (
		<>
			<TextLinkExternal
				{...props}
				href={href}
				onClick={(e) => {
					setExpanded(true);
					e.preventDefault();
				}}
			/>

			<HelpDrawer
				article={t}
				href={href}
				setShowing={setExpanded}
				showing={expanded}
			/>
		</>
	);
};

export const HelpReference = (props: HelpReferenceProps) => {
	const [expanded, setExpanded] = useState(false);
	const { providerURL } = useContext(HelpReferenceContext);

	const variables = { slug: props.reference };

	const { data, error } = useSWR(
		{ document: getReferenceQuery, variables },
		({ document, variables }) =>
			request<{ reference: HelpReferenceT | null }, SlugParam>({
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
				<HelpDrawer
					article={reference.article}
					href={`${providerURL}/help/page/${reference.article.slug}`}
					showing={expanded}
					setShowing={setExpanded}
				/>
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

interface HelpDrawerProps {
	article: HelpArticleT;
	href: string;
	showing: boolean;
	setShowing: (showing: boolean) => void;
}

export const HelpDrawer = (props: HelpDrawerProps) => (
	<Drawer
		isOpen={props.showing}
		onDismiss={() => props.setShowing(false)}
		title={'Help'}
		actions={
			<TextLinkExternal href={props.href}>Open in new window</TextLinkExternal>
		}
	>
		<Stack gap={3}>
			<HelpContent article={props.article} />
		</Stack>
	</Drawer>
);
