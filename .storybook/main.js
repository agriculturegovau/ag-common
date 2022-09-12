module.exports = {
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
	framework: '@storybook/react',
	webpackFinal: (config) => {
		config.module.rules.push({
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

/*
	previewHead: (head) => `
	${head}
		<script type="module" src="http://localhost:8003/index.js"></script>
	`,
	*/
