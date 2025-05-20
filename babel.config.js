module.exports = {
	presets: [
		['@babel/preset-env', { targets: { node: 'current' } }],
		'@babel/preset-typescript',
		require('@emotion/babel-preset-css-prop').default ||
			require('@emotion/babel-preset-css-prop'),
	],
};
