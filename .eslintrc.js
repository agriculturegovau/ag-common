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
	rules: {
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'after-used',
				ignoreRestSiblings: true,
				vars: 'all',
			},
		],
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'react',
						importNames: ['useId'],
						message: "Please import 'useId' from '/core' instead.",
					},
				],
			},
		],
	},
	overrides: [
		{
			// Our site is hosted using GitHub pages which is incompatible with @next/image
			files: ['**/*'],
			rules: { '@next/next/no-img-element': 'off' },
		},
		{
			files: ['packages/**/*', '.storybook/**/*'],
			rules: {
				'@next/next/no-html-link-for-pages': 'off',
				'@typescript-eslint/no-var-requires': 'off', // Allow require in Storybook config
			},
		},
		// Scripts written in plain JS need to use require
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
	ignorePatterns: [
		'**/dist/**',
		'**/node_modules/**',
		'.next',
		'out',
		'.history',
	],
};
