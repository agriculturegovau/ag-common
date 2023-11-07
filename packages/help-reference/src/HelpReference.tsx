import {
	PropsWithChildren,
	ReactElement,
	ReactNode,
	createContext,
	useContext,
	useState,
} from 'react';
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

	const { data, error } = useQuery<{ article: HelpArticleT | null }>(
		getArticleQuery,
		{ slug: article }
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
	const { data, error } = useQuery<{ reference: HelpReferenceT | null }>(
		getReferenceQuery,
		{ slug: props.reference }
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
	showing: boolean;
	setShowing: (showing: boolean) => void;
}

export const HelpDrawer = (props: HelpDrawerProps) => {
	const { providerURL } = useContext(HelpReferenceContext);

	return (
		<Drawer
			isOpen={props.showing}
			onDismiss={() => props.setShowing(false)}
			title={'Help'}
			actions={
				<TextLinkExternal
					href={`${providerURL}/help/page/${props.article.slug}`}
				>
					Open in new window
				</TextLinkExternal>
			}
		>
			<Stack gap={3}>
				<HelpContent article={props.article} />
			</Stack>
		</Drawer>
	);
};

export const Reegegegegege = (props: HelpReferenceProps | ArticleLinkProps) => {
	if ('reference' in props) {
		return <HelpReference {...props} />;
	}

	return <ArticleLink {...props} />;
};

interface G_Props<Data> {
	document: string;
	variables: SlugParam;
	getArticle: (t: Data) => HelpArticleT | null | undefined;
	children: (props: {
		data: Data | undefined;
		setShowing: () => void;
	}) => ReactElement | null;
}

export const G = <Data,>(props: G_Props<Data>) => {
	const [expanded, setExpanded] = useState(false);
	const { data, error } = useQuery<Data>(props.document, props.variables);
	const setShowing = () => setExpanded(true);

	if (data === undefined) {
		return props.children({ data, setShowing });
	}

	const article = props.getArticle(data);
	return (
		<>
			{props.children({ data, setShowing })}

			{article ? (
				<HelpDrawer
					article={article}
					showing={expanded}
					setShowing={setExpanded}
				/>
			) : null}
		</>
	);
};

export const HelpReference2 = (props: HelpReferenceProps) => (
	<G<{ reference: HelpReferenceT | null }>
		document={getReferenceQuery}
		variables={{ slug: props.reference }}
		getArticle={(data) => data?.reference?.article}
	>
		{({ data, setShowing }) =>
			data?.reference ? (
				<Details label={data.reference.label} iconBefore>
					<Prose>
						<DocumentRenderer document={data.reference.content ?? []} />

						<p>
							<Button variant="text" onClick={setShowing}>
								{data.reference.referenceText}
							</Button>
						</p>
					</Prose>
				</Details>
			) : null
		}
	</G>
);

export const ArticleLink2 = (props: ArticleLinkProps) => {
	const href = `/help/page/${props.article}`;

	return (
		<G<{ article: HelpArticleT | null }>
			document={getArticleQuery}
			variables={{ slug: props.article }}
			getArticle={(data) => data?.article}
		>
			{({ data, setShowing }) =>
				data?.article ? (
					<TextLinkExternal
						{...props}
						href={href}
						onClick={(e) => {
							setShowing();
							e.preventDefault();
						}}
					/>
				) : (
					<TextLinkExternal {...props} href={href} />
				)
			}
		</G>
	);
};
