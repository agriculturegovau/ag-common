import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Prose } from '@ag.ds-next/react/prose';
import { AppShell, AppShellProps } from './AppShell';

export default {
	title: 'App Shell',
	component: AppShell,
	parameters: {
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof AppShell>;

const commonProps: AppShellProps = {
	userName: 'Toto Wolff',
	userOrganisation: 'Orange Meat Works',
	userMenuHref: '#account',
	activePath: '#home',
	unreadMessageCount: 3,
	onSignOut: () => console.log('sign out'),
};

const Template: ComponentStory<typeof AppShell> = (args: AppShellProps) => (
	<AppShell {...args}>
		<Prose>
			<h1>Authenticated App Shell</h1>
			<p>Some content</p>
		</Prose>
	</AppShell>
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
