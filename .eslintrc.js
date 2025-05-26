module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'prettier',
	],
	overrides: [
		{
			// Both of these sites are hosted using GitHub pages
			// which is incompatible with @next/image
			files: ['docs/**/*', 'example-site/**/*', 'packages/**/*'],
			rules: {
				'@next/next/no-img-element': 'off',
			},
		},
		// Scrips written in plain JS need to use require
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};
