import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { BaseButton, buttonStyles } from '@ag.ds-next/react/button';
import { packs, useLinkComponent } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { TextLinkExternal } from '@ag.ds-next/react/text-link';

import { DigitalIdentityLogo } from './Assets';

type LinkParams = { href: string };
type ButtonParams = { onClick: () => Promise<void> };

// Support one type while disallowing another
type Without<Keep, Remove> = Keep & {
	[P in keyof Remove]?: never;
};

// Our Action can act as either a Link or a Button but not both at the same time
type Action =
	| Without<LinkParams, ButtonParams>
	| Without<ButtonParams, LinkParams>;

interface CommonButtonProps {
	block?: boolean;
}

// Props for the inner Identity button
interface DigitalIdentityButtonProps {
	variant?: 'dark' | 'light';
	squareCorners?: boolean;
	narrow?: boolean;
}

// Props for the entire component including outer content
interface DigitalIdentityProps extends DigitalIdentityButtonProps {
	container?: boolean;
}

const variantDefault = 'light';

interface ButtonVariantPalette {
	foreground: string;
	background: string;
	outline: string;
}

const buttonVariantStyles = (t: ButtonVariantPalette) => ({
	background: t.background,
	borderColor: t.background,
	color: t.foreground,
	textDecoration: 'none',

	'&:focus': packs.outline,
	'&:not(:disabled):hover': {
		background: t.outline,
		borderColor: t.background,
		color: t.foreground,
	},
});

const palette = {
	white: '#FFF',
	black: '#000',
	lightOutline: '#333',
	darkOutline: '#EEE',
	lightBG: '#EEE',
	darkBG: '#3F3F3F',
	lightText: '#313131',
	lightBorder: '#979797',
	babyBlue: '#B6D2FF',
};

const buttonVariantPalettes: Record<'dark' | 'light', ButtonVariantPalette> = {
	light: {
		foreground: palette.white,
		background: palette.black,
		outline: palette.lightOutline,
	},
	dark: {
		foreground: palette.black,
		background: palette.white,
		outline: palette.darkOutline,
	},
};

// The inner identity button
const DigitalIdentityButton = ({
	variant = variantDefault,
	squareCorners,
	narrow,
	href,
	onClick,
	block,
}: DigitalIdentityButtonProps & Action & CommonButtonProps) => {
	const Link = useLinkComponent();
	const palette = buttonVariantPalettes[variant];

	const buttonCSS = {
		...buttonStyles({
			block: block ?? false,
			size: 'md',
			variant: variant === 'light' ? 'primary' : 'secondary',
		}),
		...buttonVariantStyles(palette),
		...(narrow === true ? { height: 'auto', width: '150px' } : undefined),

		borderWidth: '2px',
		padding: '12.5px 10px',
		borderRadius: squareCorners === true ? 0 : '5px',
	} as const;

	const children =
		narrow === true ? (
			<Stack gap={0.5}>
				<DigitalIdentityLogo />
				<span>Continue with Digital Identity</span>
			</Stack>
		) : (
			<Flex gap={0.5} alignItems={'center'}>
				<DigitalIdentityLogo />
				<span>Continue with Digital Identity</span>
			</Flex>
		);

	return href === undefined ? (
		<BaseButton onClick={onClick} css={buttonCSS}>
			{children}
		</BaseButton>
	) : (
		<Link href={href} css={buttonCSS}>
			{children}
		</Link>
	);
};

export const DigitalIdentity = ({
	container = true,
	variant: variant_,
	...props
}: DigitalIdentityProps & Action) => {
	const variant = variant_ ?? variantDefault;

	const textColour = {
		color: variant === 'light' ? palette.lightText : palette.white,
	} as const;

	const externalLinkCSS =
		variant === 'light'
			? {}
			: ({
					color: palette.babyBlue,
					'&:hover': {
						color: palette.babyBlue,
					},
			  } as const);

	const [outerCSS, innerCSS] =
		container === true
			? [
					{
						background: variant === 'light' ? palette.lightBG : palette.darkBG,
						border: '2px solid',
						borderColor:
							variant === 'light' ? palette.lightBorder : palette.black,
						borderRadius: props.squareCorners === true ? 0 : '6px',
						maxWidth: props.narrow === true ? 230 : 430,
						...textColour,
					} as const,
					{
						borderTop: 'inherit',
					} as const,
			  ]
			: [
					{
						alignItems: 'center',
					} as const,
					{},
			  ];

	return (
		<Stack css={outerCSS}>
			<Box padding={1.5} css={{ alignSelf: 'center' }}>
				<DigitalIdentityButton block variant={variant} {...props} />
			</Box>
			<Box css={innerCSS}>
				<Text padding={1.5} as="p" css={textColour}>
					<TextLinkExternal
						href="https://www.digitalidentity.gov.au/"
						css={externalLinkCSS}
					>
						Digital Identity
					</TextLinkExternal>{' '}
					is a safe, secure and convenient way to prove and reuse your identity
					online.
				</Text>
			</Box>
		</Stack>
	);
};
