import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},

    addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-a11y'),
		{ name: '@storybook/addon-essentials', options: { background: false } },
		getAbsolutePath("@chromatic-com/storybook"),
	],

    stories: ['../packages/*/src/**/*.stories.@(ts|tsx)'],

    typescript: {
		reactDocgen: 'react-docgen-typescript',
	},

    docs: {
        autodocs: true
    }
};

export default config;

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}
