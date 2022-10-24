import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
	stories: ['../packages/*/src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		{
			name: '@storybook/addon-essentials',
			options: {
				backgrounds: false,
			},
		},
		'@storybook/addon-a11y',
	],
	core: {
		builder: 'webpack5',
	},
	features: {
		/**
		 * Enable code splitting
		 * @see https://storybook.js.org/docs/react/builders/webpack#code-splitting
		 */
		storyStoreV7: true,
	},
	framework: '@storybook/react',
	webpackFinal: (config) => {
		config.module?.rules.push({
			test: /\.esm.js?$/,
			use: [
				{
					loader: require.resolve('babel-loader'),
					options: {
						presets: [
							require('@babel/preset-typescript').default,
							[
								require('@babel/preset-react').default,
								{ runtime: 'automatic' },
							],
							require('@babel/preset-env').default,
						],
					},
				},
			],
		});
		return config;
	},
};

export default config;
