import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DigitalIdentity } from './Identity';
import { LoadingBlanket } from '@ag.ds-next/react/loading';

const meta: Meta<typeof DigitalIdentity> = {
	title: 'DigitalIdentity',
	component: DigitalIdentity,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		href: '#',
		container: undefined,
		narrow: undefined,
		squared: undefined,
		outerContent: undefined,
		variant: undefined,
	},
	render: (args) => (
		<>
			<DigitalIdentity {...args} />
		</>
	),
};

export default meta;

type Story = StoryObj<typeof DigitalIdentity>;

export const Basic: Story = {
	args: {
		container: false,
		narrow: false,
		squared: false,
		outerContent: false,
		variant: 'dark',
	},
};

export const Recommended: Story = {
	args: {
		container: true,
		outerContent: true,
	},
};

export const clickLoadingBanner: Story = {
	args: {
		container: true,
		outerContent: true,
	},
	render: ({ href: _, ...args }) => {
		const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
		const [loading, setLoading] = React.useState(false);

		return (
			<>
				{loading === true ? (
					<LoadingBlanket label="Redirecting you to Digital Identity" />
				) : null}

				<DigitalIdentity
					{...args}
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
