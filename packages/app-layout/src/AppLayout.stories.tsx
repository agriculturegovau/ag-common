import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Prose } from '@ag.ds-next/react/prose';
import { AppLayout, AppLayoutProps } from './AppLayout';

export default {
	title: 'App Shell',
	component: AppLayout,
	parameters: {
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof AppLayout>;

const commonProps: AppLayoutProps = {
	userName: 'Toto Wolff',
	userOrganisation: 'Orange Meat Works',
	activePath: '/account',
	unreadMessageCount: 3,
	handleSignOut: async () => console.log('sign out'),
};

const Template: ComponentStory<typeof AppLayout> = (args: AppLayoutProps) => (
	<AppLayout {...args}>
		<Prose>
			<h1>Authenticated App Shell</h1>
			<p>Some content</p>
		</Prose>
	</AppLayout>
);

export const Main = Template.bind({});
Main.args = {
	...commonProps,
};

export const FocusMode = Template.bind({});
FocusMode.args = {
	...commonProps,
	isFocusMode: true,
};

export const NoOrganisation = Template.bind({});
NoOrganisation.args = {
	...commonProps,
	userOrganisation: undefined,
};
