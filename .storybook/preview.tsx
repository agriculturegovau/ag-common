import { Preview } from '@storybook/react';
import { Box } from '@ag.ds-next/react/box';
import { Core } from '@ag.ds-next/react/core';
import { theme } from '@ag.ds-next/react/ag-branding';
import { setupWorker } from 'msw/browser';

const workerOptions =
	process.env.STORYBOOK_PREVIEW_BASE_PATH === undefined
		? undefined
		: {
				serviceWorker: {
					url: `/ag-common/pr-preview/pr-81/mockServiceWorker.js`,
				},
		  };

// mock out API calls using msw
const worker = setupWorker();
const api = worker;
const server = worker.start(workerOptions);

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
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: makeViewports(),
	},
};

const preview: Preview = {
	parameters,
	decorators: [
		(Story, context) => {
			const palette = context.globals.palette;
			return (
				<Core theme={theme}>
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

	// grab any msw handlers from each story and apply them to the API
	loaders: [
		async (context) => {
			const handlers = context.parameters?.msw?.handlers;

			if (Array.isArray(handlers)) {
				api.use(...handlers);
				await server;
			}

			return {};
		},
	],
};

export default preview;
