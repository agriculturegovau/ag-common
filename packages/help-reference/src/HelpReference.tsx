import { useContext, useState } from 'react';
import useSWR from 'swr';
import { Details } from '@ag.ds-next/react/details';
import { Drawer } from '@ag.ds-next/react/drawer';
import { H1 } from '@ag.ds-next/react/heading';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import {
	TextLink,
	TextLinkExternal,
	TextLinkExternalProps,
} from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';

import { DocumentRenderer } from './DocumentRenderer';
import { HelpArticleT, articleDecoder, referenceDecoder } from './types';
import { HelpReferenceContext } from './HelpReferenceContext';
import { tokens } from '@ag.ds-next/react/core';
import { Decoder, decode } from './decoder';

type HelpReferenceProps = {
	reference: string;
};

type ArticleLinkProps = {
	article: string;
} & Omit<TextLinkExternalProps, 'onClick' | 'href'>;

type SlugParam = { slug: string };

const useQuery = <T,>(
	decoder: Decoder<T>,
	resource: 'references' | 'articles',
	variables: SlugParam
) => {
	const { providerURL } = useContext(HelpReferenceContext);
	return useSWR(variables, ({ slug }) =>
		fetch(`${providerURL}/api/help/${resource}/${slug}`)
			.then((res) => (res.ok ? res.json() : Promise.reject('error')))
			.then((data) => {
				const t = decode(decoder, data);
				return t.status === 'ok' ? t.t : Promise.reject(t.msg);
			})
	);
};

export const ArticleLink = ({ article, ...props }: ArticleLinkProps) => {
	const [expanded, setExpanded] = useState(false);
	const { providerURL } = useContext(HelpReferenceContext);
	const { data } = useQuery(articleDecoder, 'articles', {
		slug: article,
	});

	const href = `${providerURL}/help/page/${article}`;
	const t = data;
	if (!t) {
		return <TextLinkExternal {...props} href={href} />;
	}

	return (
		<>
			<TextLinkExternal
				{...props}
				href={href}
				onClick={(event) => {
					if (event.metaKey) return;
					setExpanded(true);
					event.preventDefault();
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
	const { data } = useQuery(referenceDecoder, 'references', {
		slug: props.reference,
	});

	const reference = data;
	if (!reference) {
		return null;
	}

	const href = `${providerURL}/help/page/${reference.article}`;

	return (
		<>
			<Details label={reference.label} iconBefore>
				<Prose>
					<DocumentRenderer document={reference.content ?? []} />
					<p>
						{reference.helpArticle ? (
							<TextLink
								href={href}
								onClick={(event) => {
									if (event.metaKey) return;
									event.preventDefault();
									setExpanded(true);
								}}
							>
								{reference.referenceText}
							</TextLink>
						) : (
							<TextLinkExternal href={href}>
								{reference.referenceText}
							</TextLinkExternal>
						)}
					</p>
				</Prose>
			</Details>

			{reference.helpArticle ? (
				<HelpDrawer
					article={reference.helpArticle}
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
			<H1 maxWidth={tokens.maxWidth.bodyText}>{props.article.title}</H1>
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
