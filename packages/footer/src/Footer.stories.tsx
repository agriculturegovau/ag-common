import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
	title: 'Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Basic: Story = {};
