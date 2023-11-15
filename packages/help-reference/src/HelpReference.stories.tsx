import { StoryObj, Meta } from '@storybook/react';
import {
	ArticleLink,
	HelpReference,
	HelpReferenceProvider,
} from './HelpReference';

import { http, HttpResponse } from 'msw';
import { useEffect } from 'react';
import { Prose } from '@ag.ds-next/react/prose';

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
