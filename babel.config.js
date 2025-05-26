module.exports = () => {
	return {
		presets: [
			['@babel/preset-env', { targets: { node: 'current' } }],
			'@babel/preset-typescript',
			'@emotion/babel-preset-css-prop',
		],
		plugins: ['@emotion/babel-plugin'],
	};
};
