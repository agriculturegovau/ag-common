import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DigitalIdentity } from './DigitalIdentity';
import { LoadingBlanket } from '@ag.ds-next/react/loading';

const meta: Meta<typeof DigitalIdentity> = {
	title: 'DigitalIdentity',
	component: DigitalIdentity,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof DigitalIdentity>;

export const Recommended: Story = {
	args: {
		href: '#',
		container: true,
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
		squared: true,
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
		squared: true,
		variant: 'dark',
	},
};

export const BlackRounded: Story = {
	name: 'Black button, rounded corners, no container',
	args: {
		href: '#',
		variant: 'light',
	},
};

export const WhiteRounded: Story = {
	name: 'White button, rounded corners, no container',
	args: {
		href: '#',
		variant: 'dark',
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
	},
};

export const WhiteNarrowRounded: Story = {
	name: 'White button, narrow variant, rounded corners, no container',
	args: {
		href: '#',
		narrow: true,
		variant: 'dark',
	},
};

export const Loading: Story = {
	name: 'OnClick loading banner',
	args: {
		container: true,
	},
	render: function Render({ href: _, ...props }) {
		const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
		const [loading, setLoading] = useState(false);
		return (
			<>
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
			</>
		);
	},
};
