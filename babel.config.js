module.exports = (api) => {
	api.cache(true);

	return {
		presets: [
			['@babel/preset-env', { targets: { node: 'current' } }],
			'@babel/preset-typescript',
			'@emotion/babel-preset-css-prop',
		],
	};
};
