const emotionPlugin =
	require('@emotion/babel-plugin').default || require('@emotion/babel-plugin');

module.exports = (api) => {
	api.cache(true);

	return {
		presets: [
			['@babel/preset-env', { targets: { node: 'current' } }],
			'@babel/preset-typescript',
			[
				'@babel/preset-react',
				{
					runtime: 'automatic',
					importSource: '@emotion/react',
				},
			],
		],
		plugins: ['@babel/plugin-transform-runtime', emotionPlugin],
	};
};
