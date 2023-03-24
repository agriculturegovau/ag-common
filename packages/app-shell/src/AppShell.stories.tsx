import { ComponentMeta } from '@storybook/react';
import { AppShell } from './AppShell';

export default {
	title: 'App Shell',
	component: AppShell,
	parameters: {
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof AppShell>;

export const Main = () => {
	return (
		<AppShell>
			<h1>Authenticated App Shell</h1>
			<p>Some content</p>
		</AppShell>
	);
};

export const FocusMode = () => {
	return (
		<AppShell isFocusMode={true}>
			<h1>Authenticated App Shell</h1>
			<p>Some content</p>
		</AppShell>
	);
};
