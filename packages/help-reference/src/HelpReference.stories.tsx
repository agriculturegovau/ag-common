import { StoryObj, Meta } from '@storybook/react';
import { ArticleLink, HelpReference } from './HelpReference';

import { http, HttpResponse } from 'msw';
import { useEffect } from 'react';
import { Prose } from '@ag.ds-next/react/prose';
import { TextLinkExternal } from '@ag.ds-next/react/text-link';
import { HelpReferenceProvider } from './HelpReferenceContext';

http.get('/nintendo', () => HttpResponse.json(['nintendo']));

const meta: Meta<typeof HelpReference> = {
	title: 'HelpReference',
	component: HelpReference,
	parameters: {
		layout: 'fullscreen',
	},
	render: (props) => {
		useEffect(() => {
			fetch('/nintendo').then((lmao) => console.log({ lmao }));
		});

		return (
			<HelpReferenceProvider value={{ providerURL: 'http://localhost:3000' }}>
				<HelpReference {...props} />
			</HelpReferenceProvider>
		);
	},
};

export default meta;

type Story = StoryObj<typeof HelpReference>;

export const Basic: Story = {
	args: {
		reference: 'example-reference',
	},
};

export const UsingArticleLink: Story = {
	args: {
		reference: 'test-page',
	},
	render: (props) => (
		<HelpReferenceProvider value={{ providerURL: 'http://localhost:3000' }}>
			<Prose>
				<p>
					This is an example of using the{' '}
					<ArticleLink article={props.reference}>help article link</ArticleLink>{' '}
					in the middle of some client text.
				</p>

				<p>teams can place this anywhere they want</p>
			</Prose>
		</HelpReferenceProvider>
	),
};

const problematicArticles = [
	'change-business-name',
	'change-contact-details',
	'what-is-ram',
	'invite-someone-to-act-on-behalf-of-a-business',
	'change-facilities-equipment',
	'manage-contact-preferences',
	'view-application',
	'change-commodity-product-operation-function',
	'change-people-details-management-control',
	'revoke-registration',
	'access-export-resources-systems',
	'manage-who-can-act-on-behalf-of-a-business',
	'cant-create-account',
	'cant-create-account',
	'register-new-establishment',
	'manager-role-access',
	'revoke-registration-add-new-occupier',
	'create-a-mygovid',
	'link-business',
	'change-someones-access-level',
	'edit-application',
	'change-something-else-export-operations',
];

export const ProblematicArticles: Story = {
	args: {
		reference: 'test-page',
	},
	render: (props) => (
		<HelpReferenceProvider value={{ providerURL: 'http://localhost:3000' }}>
			<Prose>
				{problematicArticles.map((article) => (
					<p>
						<ArticleLink article={article}>{article}</ArticleLink> :{' '}
						<TextLinkExternal
							href={`http://localhost:3000/help/page/${article}`}
						>
							ref
						</TextLinkExternal>
					</p>
				))}
			</Prose>
		</HelpReferenceProvider>
	),
};

const knownArticles = [
	'help',
	'create-account',
	'what-is-mygovid',
	'invite-someone-to-act-on-behalf-of-a-business',
	'use-export-service-as-individual',
	'export-service-notifications-messages',
	'account-and-management-and-control',
	'roles-access-levels-export-service',
];

export const KnownArticles: Story = {
	args: {
		reference: 'test-page',
	},
	render: (props) => (
		<HelpReferenceProvider value={{ providerURL: 'http://localhost:3000' }}>
			<Prose>
				{knownArticles.map((article) => (
					<p>
						<ArticleLink article={article}>{article}</ArticleLink> :{' '}
						<TextLinkExternal
							href={`http://localhost:3000/help/page/${article}`}
						>
							ref
						</TextLinkExternal>
					</p>
				))}
			</Prose>
		</HelpReferenceProvider>
	),
};
