import React from 'react';
import type { Preview } from '@storybook/react';
import { Box } from '@ag.ds-next/react/box';
import { Core } from '@ag.ds-next/react/core';
import { theme as agriculture } from '@ag.ds-next/react/ag-branding';

const storybookThemes = {
	gold: {},
	agriculture,
} as const;

type StorybookThemes = keyof typeof storybookThemes;

const globalTypes = {
	brand: {
		name: 'Brand',
		description: 'Global branding',
		defaultValue: 'agriculture',
		toolbar: {
			title: 'Brand',
			icon: 'circlehollow',
			items: Object.keys(storybookThemes),
		},
	},
	palette: {
		name: 'Palette',
		defaultValue: 'light',
		toolbar: {
			title: 'Palette',
			items: ['light', 'dark'],
		},
	},
};

function makeViewports() {
	const viewports = [
		{
			width: 320,
			breakpoint: 'xs',
		},
		{
			width: 375,
			breakpoint: 'xs',
		},
		{
			width: 576,
			breakpoint: 'sm',
		},
		{
			width: 768,
			breakpoint: 'md',
		},
		{
			width: 992,
			breakpoint: 'lg',
		},
		{
			width: 1024,
			breakpoint: 'lg',
		},
		{
			width: 1200,
			breakpoint: 'xl',
		},
	];
	return Object.fromEntries(
		viewports.map((viewport) => [
			viewport.width,
			{
				name: `${viewport.breakpoint} (${viewport.width}px)`,
				styles: {
					width: `${viewport.width}px`,
					height: '100%',
				},
			},
		])
	);
}

const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			method: 'alphabetical',
		},
	},
	viewport: {
		viewports: makeViewports(),
	},
};

const preview: Preview = {
	parameters,
	globalTypes,
	decorators: [
		(Story, context) => {
			const palette = context.globals.palette;
			return (
				<Core theme={agriculture}>
					<Box
						width="100%"
						minHeight="100vh"
						palette={palette}
						background="body"
					>
						<Story />
					</Box>
				</Core>
			);
		},
	],
};

export default preview;
