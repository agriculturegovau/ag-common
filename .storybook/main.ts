import { dirname, join } from "path";
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},

    core: {
		builder: getAbsolutePath("@storybook/builder-vite"),
	},

    addons: [
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-a11y"),
        { name: '@storybook/addon-essentials', options: { background: false } },
        '@chromatic-com/storybook'
    ],

    stories: ['../packages/*/src/**/*.stories.@(ts|tsx)'],

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};

export default config;

function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, "package.json")));
}
