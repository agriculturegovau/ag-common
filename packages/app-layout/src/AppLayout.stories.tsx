import { Prose } from '@ag.ds-next/react/prose';
import type { Meta, StoryObj } from '@storybook/react';
import { AppLayout } from './AppLayout';

const meta: Meta<typeof AppLayout> = {
	title: 'AppLayout',
	component: AppLayout,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		userName: 'Toto Wolff',
		userOrganisation: 'Orange Meat Works',
		activePath: '/account',
		unreadMessageCount: 3,
		handleSignOut: async () => console.log('sign out'),
	},
	render: (args) => (
		<AppLayout {...args}>
			<Prose>
				<h1>Authenticated App Shell</h1>
				<p>Some content</p>
			</Prose>
		</AppLayout>
	),
};

export default meta;

type Story = StoryObj<typeof AppLayout>;

export const Basic: Story = {
	args: {},
};

export const FocusMode: Story = {
	args: {
		isFocusMode: true,
	},
};

export const NoOrganisation: Story = {
	args: {
		userOrganisation: undefined,
	},
};
