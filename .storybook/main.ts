import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	core: {
		builder: '@storybook/builder-vite',
	},
	features: {
		storyStoreV7: false,
	},
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-a11y',
		{ name: '@storybook/addon-essentials', options: { background: false } },
	],
	stories: ['../packages/*/src/**/*.stories.@(ts|tsx)'],
};

export default config;
