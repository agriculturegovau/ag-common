import { StoryObj, Meta } from '@storybook/react';
import {
	ArticleLink,
	ArticleLink2,
	HelpReference,
	HelpReference2,
	HelpReferenceProvider,
} from './HelpReference';

const meta: Meta<typeof HelpReference> = {
	title: 'HelpReference',
	component: HelpReference,
	parameters: {
		layout: 'fullscreen',
	},
	render: (props) => (
		<HelpReferenceProvider value={{ providerURL: 'http://localhost:3000' }}>
			<HelpReference {...props} />
			<br />
			<HelpReference reference="example-reference" />
			<HelpReference2 reference="example-reference" />
			<br />
			<ArticleLink article="link-business">link one</ArticleLink>
			<ArticleLink2 article="link-business">link one</ArticleLink2>

			<ArticleLink article="link">link one</ArticleLink>
			<ArticleLink2 article="link">link one</ArticleLink2>
		</HelpReferenceProvider>
	),
};

export default meta;

type Story = StoryObj<typeof HelpReference>;

export const Basic: Story = {
	args: {
		reference: 'example-reference',
	},
};
