import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-essentials',
			options: { background: false },
		},
		'@chromatic-com/storybook',
	],
	stories: ['../packages/*/src/**/*.stories.@(ts|tsx)'],
	typescript: {
		reactDocgen: false,
	},
	viteFinal: (config) => {
		return mergeConfig(config, {
			build: {
				rollupOptions: {
					onwarn(warning, warn) {
						// Suppress "use client" and eval warnings
						if (
							warning.message.includes('Module level directives') ||
							(warning.message.includes('Use of eval') &&
								warning.id?.includes('@storybook/core'))
						) {
							return;
						}
						warn(warning);
					},
				},
			},
		});
	},
};

export default config;
