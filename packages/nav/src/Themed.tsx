import { Box } from '@ag.ds-next/react/box';
import { Theme, themeVars } from '@ag.ds-next/react/core';
import { CSSObject, Interpolation } from '@emotion/serialize';
import { FC } from './FC';

// copied and adjusted from agds to support custom themeing
export const boxPaletteVars = {
	foregroundText: '--agds-foreground-text',
	foregroundAction: '--agds-foreground-action',
	foregroundFocus: '--agds-foreground-focus',
	foregroundMuted: '--agds-foreground-muted',
	backgroundBody: '--agds-background-body',
	backgroundShade: '--agds-background-shade',
	backgroundBodyAlt: '--agds-background-body-alt',
	backgroundShadeAlt: '--agds-background-shade-alt',
	border: '--agds-border',
	borderMuted: '--agds-border-muted',
	accent: '--agds-accent',
	systemSuccess: '--agds-system-success',
	systemSuccessMuted: '--agds-system-success-muted',
	systemWarning: '--agds-system-warning',
	systemWarningMuted: '--agds-system-warning-muted',
	systemInfo: '--agds-system-info',
	systemInfoMuted: '--agds-system-info-muted',
	systemError: '--agds-system-error',
	systemErrorMuted: '--agds-system-error-muted',
} as const;

// copied and adjusted from agds to support custom themeing
export const boxPalettes: Record<
	'light' | 'dark',
	Record<PaletteVar, keyof typeof themeVars>
> = {
	light: {
		foregroundText: 'lightForegroundText',
		foregroundAction: 'lightForegroundAction',
		foregroundFocus: 'lightForegroundFocus',
		foregroundMuted: 'lightForegroundMuted',
		backgroundBody: 'lightBackgroundBody',
		backgroundShade: 'lightBackgroundShade',
		backgroundBodyAlt: 'lightBackgroundBodyAlt',
		backgroundShadeAlt: 'lightBackgroundShadeAlt',
		border: 'lightBorder',
		borderMuted: 'lightBorderMuted',
		accent: 'lightAccent',
		systemError: 'lightSystemError',
		systemErrorMuted: 'lightSystemErrorMuted',
		systemSuccess: 'lightSystemSuccess',
		systemSuccessMuted: 'lightSystemSuccessMuted',
		systemWarning: 'lightSystemWarning',
		systemWarningMuted: 'lightSystemWarningMuted',
		systemInfo: 'lightSystemInfo',
		systemInfoMuted: 'lightSystemInfoMuted',
	},
	dark: {
		foregroundText: 'darkForegroundText',
		foregroundAction: 'darkForegroundAction',
		foregroundFocus: 'darkForegroundFocus',
		foregroundMuted: 'darkForegroundMuted',
		backgroundBody: 'darkBackgroundBody',
		backgroundShade: 'darkBackgroundShade',
		backgroundBodyAlt: 'darkBackgroundBodyAlt',
		backgroundShadeAlt: 'darkBackgroundShadeAlt',
		border: 'darkBorder',
		borderMuted: 'darkBorderMuted',
		accent: 'darkAccent',
		systemError: 'darkSystemError',
		systemErrorMuted: 'darkSystemErrorMuted',
		systemSuccess: 'darkSystemSuccess',
		systemSuccessMuted: 'darkSystemSuccessMuted',
		systemWarning: 'darkSystemWarning',
		systemWarningMuted: 'darkSystemWarningMuted',
		systemInfo: 'darkSystemInfo',
		systemInfoMuted: 'darkSystemInfoMuted',
	},
};

const Themed: FC<{ theme?: Theme } & React.ComponentProps<typeof Box>> = ({
	theme,
	css,
	...prps
}) => {
	const wut = Object.fromEntries(
		Object.entries(theme ?? {}).map(([name, value]) => [
			themeVars[name as keyof typeof themeVars],
			value,
		])
	);

	return <Box css={{ ...css, ...wut }} {...prps} />;
};

export type PaletteVar = keyof typeof boxPaletteVars;

const isPaletteVar = (k: string): k is PaletteVar => k in boxPaletteVars;

export type AppColour = Exclude<PaletteVar | CSSObject['color'], undefined>;

export type PaletteColor = {
	[P in PaletteVar]?: AppColour;
};

export const resolveAppColour = (c: AppColour) =>
	typeof c === 'string' && isPaletteVar(c) ? `var(${boxPaletteVars[c]})` : c; // 🫠

export const oEntries = <T extends string, V>(o: { [P in T]?: V }): [T, V][] =>
	Object.entries(o) as [T, V][];

export type ColourVariable = { [P in string]: CSSObject['color'] };

export const colorVariables = (colours: PaletteColor): ColourVariable[] => {
	const paletteThemes = Object.values(boxPalettes);

	return oEntries(colours).flatMap(([rule, c]) => [
		...paletteThemes.map((theme) => ({
			[themeVars[theme[rule]]]: resolveAppColour(c),
		})),
		{
			[boxPaletteVars[rule]]: resolveAppColour(c),
		},
	]);
};

export const Tf: FC<PaletteColor> = ({ children, ...more }) => {
	const vars = colorVariables(more);
	return <Box css={vars}>{children}</Box>;
};

// no time to type this
export const themed =
	<T,>(C: T) =>
	({
		colors,
		css = {},
		...props
	}: React.ComponentProps<T> & {
		colors: PaletteColor;
		css?: Interpolation<Theme>;
	}) =>
		<C css={[...colorVariables(colors), css]} {...props} />;
