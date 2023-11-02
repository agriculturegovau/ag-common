import { StoryObj, Meta } from '@storybook/react';
import { HelpReference, HelpReferenceProvider } from './HelpReference';

const meta: Meta<typeof HelpReference> = {
	title: 'HelpReference',
	component: HelpReference,
	parameters: {
		layout: 'fullscreen',
	},
	render: (props) => (
		<HelpReferenceProvider value={{ providerURL: 'http://localhost:3000' }}>
			<HelpReference {...props} />
		</HelpReferenceProvider>
	),
};

export default meta;

type Story = StoryObj<typeof HelpReference>;

export const Basic: Story = {
	args: {
		tag: 'example-reference',
	},
};
