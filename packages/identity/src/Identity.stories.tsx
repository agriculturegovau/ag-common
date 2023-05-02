import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DigitalIdentity } from './Identity';
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

export const Basic: Story = {
	args: {
		href: '#',
		variant: 'dark',
	},
};

export const Recommended: Story = {
	args: {
		href: '#',
		container: true,
		outerContent: true,
	},
};

export const ClickLoadingBanner: Story = {
	args: {
		container: true,
		outerContent: true,
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
