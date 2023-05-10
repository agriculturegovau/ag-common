import { ComponentProps, ReactNode, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DigitalIdentity } from './DigitalIdentity';
import { LoadingBlanket } from '@ag.ds-next/react/loading';
import { Stack } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';

const Layout = (
	args: Pick<
		ComponentProps<typeof DigitalIdentity>,
		'variant' | 'container'
	> & { children: ReactNode }
) => {
	const darkMode = args.variant === 'dark' && args.container !== true;

	return (
		<Stack
			padding={2}
			minHeight={'100vh'}
			justifyContent={'space-between'}
			css={{
				backgroundColor: darkMode ? 'black' : 'white',
			}}
		>
			{args.children}

			{darkMode ? (
				<Text
					as="p"
					fontSize="xs"
					css={{ color: 'white', alignSelf: 'center' }}
				>
					❗️ dark background set by your page
				</Text>
			) : null}
		</Stack>
	);
};

const meta: Meta<typeof DigitalIdentity> = {
	title: 'DigitalIdentity',
	component: DigitalIdentity,
	parameters: {
		layout: 'fullscreen',
	},
	render: (args) => (
		<Layout {...args}>
			<DigitalIdentity {...args} />
		</Layout>
	),
};

export default meta;

type Story = StoryObj<typeof DigitalIdentity>;

export const Recommended: Story = {
	args: {
		href: '#',
	},
};

export const BlackRoundedContainer: Story = {
	name: 'Black button, rounded corners, container',
	args: {
		href: '#',
		container: true,
	},
};

export const BlackSquareContainer: Story = {
	name: 'Black button, square corners, container',
	args: {
		href: '#',
		container: true,
		squareCorners: true,
	},
};

export const WhiteRoundedContainer: Story = {
	name: 'White button, rounded corners, container',
	args: {
		href: '#',
		container: true,
		variant: 'dark',
	},
};

export const WhiteSquareContainer: Story = {
	name: 'White button, square corners, container',
	args: {
		href: '#',
		container: true,
		squareCorners: true,
		variant: 'dark',
	},
};

export const BlackRounded: Story = {
	name: 'Black button, rounded corners, no container',
	args: {
		href: '#',
		variant: 'light',
		container: false,
	},
};

export const WhiteRounded: Story = {
	name: 'White button, rounded corners, no container',
	args: {
		href: '#',
		variant: 'dark',
		container: false,
	},
};

export const BlackNarrowRoundedContainer: Story = {
	name: 'Black button, narrow variant, rounded corners, container',
	args: {
		href: '#',
		container: true,
		narrow: true,
		variant: 'light',
	},
};

export const WhiteNarrowRoundedContainer: Story = {
	name: 'White button, narrow variant, rounded corners, container',
	args: {
		href: '#',
		container: true,
		narrow: true,
		variant: 'dark',
	},
};

export const BlackNarrowRounded: Story = {
	name: 'Black button, narrow variant, rounded corners, no container',
	args: {
		href: '#',
		narrow: true,
		variant: 'light',
		container: false,
	},
};

export const WhiteNarrowRounded: Story = {
	name: 'White button, narrow variant, rounded corners, no container',
	args: {
		href: '#',
		narrow: true,
		variant: 'dark',
		container: false,
	},
};

export const Loading: Story = {
	name: 'OnClick loading banner',
	args: {
		container: true,
	},
	render: function Render({ href, ...props }) {
		const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
		const [loading, setLoading] = useState(false);
		return (
			<Layout {...props}>
				{loading === true ? (
					<LoadingBlanket label="Redirecting you to Digital Identity" />
				) : null}
				<DigitalIdentity
					{...props}
					onClick={async () => {
						setLoading(true);
						await sleep(1500);
						setLoading(false);
					}}
				/>
			</Layout>
		);
	},
};
