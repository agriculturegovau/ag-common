import { Fragment, useContext, useState } from 'react';
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
import { Decoder, resolve } from './decoder';

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
	const { contentAPI } = useContext(HelpReferenceContext);
	return useSWR(variables, ({ slug }) =>
		fetch(`${contentAPI}/${resource}/${slug}`)
			.then((res) => (res.ok ? res.json() : Promise.reject('error')))
			.then(resolve(decoder))
	);
};

export const ArticleLink = ({ article, ...props }: ArticleLinkProps) => {
	const [expanded, setExpanded] = useState(false);
	const { exportServiceURL } = useContext(HelpReferenceContext);
	const { data } = useQuery(articleDecoder, 'articles', {
		slug: article,
	});

	const href = `${exportServiceURL}/help/page/${article}`;
	const t = data;
	if (!t) {
		return <TextLinkExternal {...props} href={href} />;
	}

	return (
		<Fragment>
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
		</Fragment>
	);
};

export const HelpReference = (props: HelpReferenceProps) => {
	const [expanded, setExpanded] = useState(false);
	const { exportServiceURL } = useContext(HelpReferenceContext);
	const { data } = useQuery(referenceDecoder, 'references', {
		slug: props.reference,
	});

	const reference = data;
	if (!reference) {
		return null;
	}

	const href = `${exportServiceURL}/help/page/${reference.article}`;

	return (
		<Fragment>
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
		</Fragment>
	);
};

const HelpContent = (props: { article: HelpArticleT }) => (
	<Fragment>
		<Stack gap={1.5}>
			<H1>{props.article.title}</H1>
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
	</Fragment>
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
		width="lg"
	>
		<Stack gap={3}>
			<HelpContent article={props.article} />
		</Stack>
	</Drawer>
);
