module.exports = {
	packages: ['packages/*'],
	exports: {
		envConditions: ['browser', 'worker'],
		extra: {
			'./package.json': './package.json',
		},
	},
	___experimentalFlags_WILL_CHANGE_IN_PATCH: {
		keepDynamicImportAsDynamicImportInCommonJS: true,
		preserveModuleDirective: true,
	},
};
