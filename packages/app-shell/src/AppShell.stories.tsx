import { ComponentMeta } from '@storybook/react';
import { Prose } from '@ag.ds-next/react/prose';
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
			<Prose>
				<h1>Authenticated App Shell</h1>
				<p>Some content</p>
			</Prose>
		</AppShell>
	);
};

export const FocusMode = () => {
	return (
		<AppShell isFocusMode={true}>
			<Prose>
				<h1>Authenticated App Shell</h1>
				<p>Some content</p>
			</Prose>
		</AppShell>
	);
};
