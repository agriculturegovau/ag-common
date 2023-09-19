import type { Meta, StoryObj } from '@storybook/react';
import { HelpCallout } from './HelpCallout';

const meta: Meta<typeof HelpCallout> = {
	title: 'HelpCallout',
	component: HelpCallout,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof HelpCallout>;

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
