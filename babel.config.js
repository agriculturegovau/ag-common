/* eslint-disable @typescript-eslint/no-var-requires */
const emotionPreset = require('@emotion/babel-preset-css-prop').default;

module.exports = (api) => {
	const isTest = api.env('test');

	if (isTest) {
		return {
			presets: [
				[
					'next/babel',
					{
						'preset-react': {
							runtime: 'automatic',
							importSource: '@emotion/react',
						},
					},
				],
			],
			plugins: ['@emotion/babel-plugin'],
		};
	}

	return {
		presets: [
			['@babel/preset-env', { targets: { node: 'current' } }],
			'@babel/preset-typescript',
			emotionPreset,
		],
		plugins: ['@emotion/babel-plugin'],
	};
};
