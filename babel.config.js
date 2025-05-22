module.exports = (api) => {
	api.cache(true);

	const isStorybook = process.env.STORYBOOK === 'true';

	return {
		presets: [
			['@babel/preset-env', { targets: { node: 'current' } }],
			'@babel/preset-typescript',
			// Use string format for Storybook, require for other builds
			isStorybook
				? '@emotion/babel-preset-css-prop'
				: require('@emotion/babel-preset-css-prop').default ||
					require('@emotion/babel-preset-css-prop'),
		],
	};
};
