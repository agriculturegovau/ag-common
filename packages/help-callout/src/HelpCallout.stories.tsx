import type { Meta, StoryObj } from '@storybook/react';
import { NeedHelpCallout } from './HelpCallout';

const meta: Meta<typeof NeedHelpCallout> = {
	title: 'NeedHelpCallout',
	component: NeedHelpCallout,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof NeedHelpCallout>;

export const Basic: Story = {};

export const Minimal: Story = {
	args: {
		hideHelpArticles: true,
	},
};

export const ProdHelpPages: Story = {
	args: {
		helpHref: 'https://exports.agriculture.gov.au/help',
	},
};

export const InternalLink: Story = {
	args: {
		internal: true,
	},
};
