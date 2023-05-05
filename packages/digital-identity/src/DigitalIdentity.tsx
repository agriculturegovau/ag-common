import { ComponentProps } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { BaseButton, buttonStyles } from '@ag.ds-next/react/button';
import { TextLinkExternal } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';
import { DigitalIdentityLogo } from './Assets';
import { useLinkComponent } from '@ag.ds-next/react/core';

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
	squared?: boolean;
	narrow?: boolean;
}

// Props for the entire component including outer content
interface DigitalIdentityProps extends DigitalIdentityButtonProps {
	container?: boolean;
}

const variantDefault = 'light';

// The inner identity button
const DigitalIdentityButton = ({
	variant = variantDefault,
	squared,
	narrow,
	href,
	onClick,
	block,
}: DigitalIdentityButtonProps & Action & CommonButtonProps) => {
	const Link = useLinkComponent();
	const styles = {
		...buttonStyles({
			block: block ?? false,
			size: 'md',
			variant: variant === 'light' ? 'primary' : 'secondary',
		}),
		['--agds-foreground-action']: '#000',
		['--agds-foreground-text']: '#000',
		['--agds-background-body']: '#FFF',
		['--agds-foreground-focus']: 'var(--agds-border)',
		borderWidth: '2px',
		padding: '12.5px 10px',
		borderRadius: squared === true ? 0 : '5px',
		...(narrow === true ? { height: 'auto', width: '150px' } : undefined),
	};

	const children =
		narrow === true ? (
			<Stack gap={0.5}>
				<DigitalIdentityLogo />
				<span>Continue with Digital Identity</span>
			</Stack>
		) : (
			<Flex alignItems={'center'} gap={0.5}>
				<DigitalIdentityLogo />
				<span>Continue with Digital Identity</span>
			</Flex>
		);

	return href === undefined ? (
		<BaseButton onClick={onClick} css={styles}>
			{children}
		</BaseButton>
	) : (
		<Link href={href} css={styles}>
			{children}
		</Link>
	);

	/*
		<Btn
			css={{
				['--agds-foreground-action']: '#000',
				['--agds-foreground-text']: '#000',
				['--agds-background-body']: '#FFF',
				['--agds-foreground-focus']: 'var(--agds-border)',
				borderRadius: squared === true ? 0 : undefined,
				borderWidth: '2px',
				padding: '12.5px 10px',
				height: narrow === true ? 'auto' : undefined,
				width: narrow === true ? '150px' : undefined,
			}}
			variant={variant === 'light' ? 'primary' : 'secondary'}
			{...commonProps}
		>
			{children}
		</Btn>
	);
	*/
};

export const DigitalIdentity = ({
	container,
	variant: variant_,
	...props
}: DigitalIdentityProps & Action) => {
	const variant = variant_ ?? variantDefault;

	const textColour = {
		color: variant === 'light' ? '#313131' : '#FFF',
	} as const;

	const externalLinkCSS =
		variant === 'light'
			? {}
			: ({
					color: '#B6D2FF',
					'&:hover': {
						color: '#B6D2FF',
					},
			  } as const);

	const [outerCSS, innerCSS] =
		container === true
			? [
					{
						background: variant === 'light' ? '#EEE' : '#3F3F3F',
						border: '2px solid',
						borderColor: variant === 'light' ? '#979797' : '#000',
						borderRadius: props.squared === true ? 0 : '6px',
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
