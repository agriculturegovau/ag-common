import { createContext, useContext, useState } from 'react';
import useSWR from 'swr';
import request, { gql } from 'graphql-request';

import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import { Drawer } from '@ag.ds-next/react/drawer';
import { Button } from '@ag.ds-next/react/button';
import { Stack } from '@ag.ds-next/react/stack';
import {
	TextLinkExternal,
	TextLinkExternalProps,
} from '@ag.ds-next/react/text-link';
import { Details } from '@ag.ds-next/react/details';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';

import { HelpArticleT, HelpReferenceT } from './keystatic';
import { Box } from '@ag.ds-next/react/box';
import { Callout } from '@ag.ds-next/react/callout';
import { Card, CardInner } from '@ag.ds-next/react/card';
import { DocumentRenderer } from './DocumentRenderer';

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
			articleSlug

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

const useQuery = <T,>(document: string, variables: SlugParam) => {
	const { providerURL } = useContext(HelpReferenceContext);
	return useSWR({ document, variables }, ({ document, variables }) =>
		request<T, SlugParam>({
			url: `${providerURL}/api/graphql`,
			document,
			variables,
		})
	);
};

export const ArticleLink = ({ article, ...props }: ArticleLinkProps) => {
	const [expanded, setExpanded] = useState(false);
	const { providerURL } = useContext(HelpReferenceContext);
	const { data } = useQuery<{ article: HelpArticleT | null }>(getArticleQuery, {
		slug: article,
	});

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
				dismiss={() => setExpanded(false)}
				showing={expanded}
			/>
		</>
	);
};

export const HelpReference = (props: HelpReferenceProps) => {
	const [expanded, setExpanded] = useState(false);
	const { providerURL } = useContext(HelpReferenceContext);
	const { data } = useQuery<{ reference: HelpReferenceT | null }>(
		getReferenceQuery,
		{ slug: props.reference }
	);

	const reference = data?.reference;
	if (!reference) {
		return null;
	}

	const href = `${providerURL}/help/page/${reference.articleSlug}`;
	return (
		<>
			<Details label={reference?.label} iconBefore>
				<Prose>
					<DocumentRenderer document={reference.content ?? []} />

					<p>
						{reference.article ? (
							<Button variant="text" onClick={() => setExpanded(true)}>
								{reference.referenceText}
							</Button>
						) : (
							<TextLinkExternal href={href}>
								{reference.referenceText}
							</TextLinkExternal>
						)}
					</p>
				</Prose>
			</Details>

			{reference.article ? (
				<HelpDrawer
					article={reference.article}
					href={href}
					dismiss={() => setExpanded(false)}
					showing={expanded}
				/>
			) : null}
		</>
	);
};

const HelpContent = (props: { article: HelpArticleT }) => (
	<>
		<Stack gap={1.5}>
			<H1 maxWidth={'42rem'}>{props.article.title}</H1>
			<DocumentRenderer
				document={props.article.intro}
				renderers={{
					block: {
						paragraph: ({ children }) => (
							<Text as="p" fontSize="md" color="muted">
								{children}
							</Text>
						),
					},
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
	showing: boolean;
	dismiss: () => void;
	href: string;
}

export const HelpDrawer = (props: HelpDrawerProps) => (
	<Drawer
		isOpen={props.showing}
		onDismiss={props.dismiss}
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
