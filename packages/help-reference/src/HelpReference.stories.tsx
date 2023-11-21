import { StoryObj, Meta } from '@storybook/react';
import { ArticleLink, HelpReference } from './HelpReference';

import { graphql, HttpResponse } from 'msw';
import { Prose } from '@ag.ds-next/react/prose';
import { Text } from '@ag.ds-next/react/text';
import { Stack } from '@ag.ds-next/react/stack';
import { HelpArticleT, HelpReferenceT } from './types';

const exampleArticle = {
	slug: 'example-reference-article',
	title: 'Roles in the Export Service',
	intro: [
		{
			type: 'paragraph',
			children: [
				{
					text: 'Information and support to help you create an account and use the Export Service.',
				},
			],
		},
	],
	content: [
		{
			type: 'paragraph',
			children: [
				{
					text: 'The particulars of your body copy will be determined by the topic of your page. Regardless of topic, it’s a good practice to follow the inverted pyramid structure when writing copy: Begin with the information that’s most important to your users and then present information of less importance.',
				},
			],
		},
		{
			level: 2,
			type: 'heading',
			children: [
				{
					text: 'Admins',
				},
			],
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'The particulars of your body copy will be determined by the topic of your page. Regardless of topic, it’s a good practice to follow the inverted pyramid.',
				},
			],
		},
		{
			level: 2,
			type: 'heading',
			children: [
				{
					text: 'Managers',
				},
			],
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'The particulars of your body copy will be determined by the topic of your page. Regardless of topic, it’s a good practice to follow the inverted pyramid structure when.',
				},
			],
		},
		{
			level: 2,
			type: 'heading',
			children: [
				{
					text: 'Clerks',
				},
			],
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'The particulars of your body copy will be determined by the topic of your page. Regardless of topic, it’s a good practice to follow the inverted pyramid structure when writing copy: Begin with the information that’s most.',
				},
			],
		},
	],
};

const exampleHelpReference = {
	slug: 'example-reference',
	label: 'Learn more about roles',
	content: [
		{
			type: 'paragraph',
			children: [
				{
					text: 'Most functions in the Export Service can be performed by managers.',
				},
			],
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'Admins (standard users) have less abilities but can view access to a business and quota balances. Agents have similar abilities to admins (standard users).',
				},
			],
		},
	],
	referenceText: 'Learn more about roles in the Export Service',
	articleSlug: 'example-reference-article',
	article: exampleArticle,
};

const exampleHelpReferenceMissingArticle = {
	...exampleHelpReference,
	article: null,
};

const handlers = {
	references: {
		['example-reference']: exampleHelpReference,
		['example-reference-no-article']: exampleHelpReferenceMissingArticle,
	} as Record<string, HelpReferenceT>,
	articles: {
		['example-article']: exampleArticle,
	} as Record<string, HelpArticleT>,
};

const meta: Meta<typeof HelpReference> = {
	title: 'HelpReference',
	component: HelpReference,
	parameters: {
		layout: 'fullscreen',
		msw: {
			handlers: [
				graphql.query('getReference', ({ query, variables }) => {
					const { slug } = variables;
					const reference = handlers.references?.[slug];

					return reference
						? HttpResponse.json({ data: { reference } })
						: HttpResponse.json({
								errors: [{ message: 'No help reference found' }],
						  });
				}),
				graphql.query('getArticle', ({ query, variables }) => {
					const { slug } = variables;
					const article = handlers.articles?.[slug];

					return article
						? HttpResponse.json({ data: { article } })
						: HttpResponse.json({
								errors: [{ message: 'No article found' }],
						  });
				}),
			],
		},
	},
	render: (props) => <HelpReference {...props} />,
};

export default meta;

type Story = StoryObj<typeof HelpReference>;

export const Basic: Story = {
	args: {
		reference: 'example-reference',
	},
};

export const ReferenceMissingArticle: Story = {
	args: {
		reference: 'example-reference-no-article',
	},
	render: (props) => (
		<Stack gap={1}>
			<Text as="p">
				Handle a situation where a reference may exist, but the article has gone
				missing
			</Text>

			<HelpReference {...props} />
		</Stack>
	),
};

export const UsingArticleLink: Story = {
	args: {
		reference: 'example-article',
	},
	render: (props) => (
		<Prose>
			<p>
				This is an example of using the{' '}
				<ArticleLink article={props.reference}>help article link</ArticleLink>{' '}
				in the middle of some client text.
			</p>

			<p>teams can place this anywhere they want</p>
		</Prose>
	),
};

export const BustedLinkBackend: Story = {
	args: {
		reference: 'missing-reference',
	},
	render: (props) => (
		<Text as="p">
			If the backend is misbehaving or article is missing, we rewrite{' '}
			<ArticleLink article={props.reference}>the link</ArticleLink> so that it
			attempts to open the article directly.
		</Text>
	),
};
