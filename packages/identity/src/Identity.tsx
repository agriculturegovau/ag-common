import { ComponentProps, ReactNode } from 'react';

import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonLink, ButtonSize } from '@ag.ds-next/react/button';
import { TextLinkExternal } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';
import { DigitalID_Logo } from './Assets';

type LinkParams = { href: string };
type ButtonParams = { onClick: () => Promise<void> };

// Support one type while disallowing another
type Without<Keep, Remove> = Keep & {
	[P in keyof Remove]?: never;
};

// Our Action can act as either a Link or a Button but not both
type Action =
	| Without<LinkParams, ButtonParams>
	| Without<ButtonParams, LinkParams>;

// Partially apply onClick to support the rest of our button props
type ActionButtonProps = Omit<
	ComponentProps<typeof Button>,
	keyof ButtonParams
>;
const ActionButton =
	({ onClick }: ButtonParams) =>
	(props: ActionButtonProps) =>
		<Button onClick={onClick} variant="text" {...props} />;

// Partially apply href to support the rest of our button props
type ActionButtonLinkProps = Omit<
	ComponentProps<typeof ButtonLink>,
	keyof LinkParams
>;
const ActionButtonLink =
	({ href }: LinkParams) =>
	(props: ActionButtonLinkProps) =>
		<ButtonLink href={href} {...props} />;

interface CommonButtonProps {
	block?: boolean;
	size?: ButtonSize;
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
	outerContent?: boolean;
}

const variantDefault = 'light';

// Just the identity button on its own
export const DigitalIdentityButton = ({
	variant = variantDefault,
	squared,
	narrow,
	href,
	onClick,
	...commonProps
}: DigitalIdentityButtonProps & Action & CommonButtonProps) => {
	// Choose the right component based on action
	const Btn =
		href === undefined ? ActionButton({ onClick }) : ActionButtonLink({ href });

	return (
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
			variant={variant === 'light' ? 'secondary' : 'primary'}
			{...commonProps}
		>
			{narrow === true ? (
				<Stack gap={0.5}>
					<DigitalID_Logo variant={variant} />
					<span>Continue with Digital Identity</span>
				</Stack>
			) : (
				<Flex alignItems={'center'} gap={0.5}>
					<DigitalID_Logo variant={variant} />
					<span>Continue with Digital Identity</span>
				</Flex>
			)}
		</Btn>
	);
};

export const DigitalIdentity = ({
	outerContent,
	container,
	variant: variant_,
	...props
}: DigitalIdentityProps & Action) => {
	const variant = variant_ ?? variantDefault;

	const outerCSS =
		container === true
			? ({
					['--agds-background-body']:
						variant === 'light' ? '#EEEEEE' : '#3f3f3f',
					['--agds-border']: variant === 'dark' ? '#000' : undefined,
					['--agds-foreground-text']: variant === 'dark' ? '#fff' : undefined,
					['--agds-foreground-action']:
						variant === 'dark' ? '#B6D2FF' : undefined,
					borderRadius: props.squared === true ? 0 : 6,
					maxWidth: props.narrow === true ? 230 : 430,
			  } as const)
			: ({ alignItems: 'center' } as const);

	const outerProps =
		container === true
			? ({
					background: 'body',
					border: true,
					borderWidth: 'md',
			  } as const)
			: {};

	const innerProps =
		container === true ? ({ borderTop: true, borderWidth: 'md' } as const) : {};

	return outerContent === true ? (
		<Stack css={outerCSS} {...outerProps}>
			<Box css={{ alignSelf: 'center' }}>
				<Box padding={1.5}>
					<DigitalIdentityButton block variant={variant} {...props} />
				</Box>
			</Box>
			<Box {...innerProps}>
				<Box padding={1.5}>
					<Text as="p">
						<TextLinkExternal href="https://www.digitalidentity.gov.au/">
							Digital Identity
						</TextLinkExternal>{' '}
						is a safe, secure and convenient way to prove and reuse your
						identity online.
					</Text>
				</Box>
			</Box>
		</Stack>
	) : (
		<DigitalIdentityButton variant={variant} {...props} />
	);
};
