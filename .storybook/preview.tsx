import React from 'react';
import { Core, tokens } from '@ag.ds-next/react/core';
import { theme } from '@ag.ds-next/react/ag-branding';

const viewportMap = {
	xs: 'mobile',
	sm: 'mobile',
	md: 'tablet',
	lg: 'laptop',
	xl: 'desktop',
};

function makeViewports(breakpoints) {
	return Object.fromEntries(
		Object.entries(breakpoints).map(([key, size]) => [
			key,
			{
				name: `${key} ${viewportMap[key]} (${size === 0 ? 320 : size}) `,
				type: viewportMap[key],
				styles: {
					width: `${size === 0 ? 320 : size}px`,
					height: '100%',
				},
			},
		])
	);
}

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: makeViewports(tokens.breakpoint),
	},
};

const withBrandTheme = (Story, context) => {
	return (
		<Core theme={theme}>
			<Story />
		</Core>
	);
};

export const decorators = [withBrandTheme];
