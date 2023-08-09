import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';
import { LoadingBlanket } from '@ag.ds-next/react/loading';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
	title: 'Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Authenticated: Story = {
	args: {
		activePath: '/',
		authenticated: true,
		handleSignIn: console.log,
	},
};

export const Unauthenticated: Story = {
	args: {
		activePath: '/',
		authenticated: false,
		handleSignIn: console.log,
	},
};


export const FocusMode: Story = {
	args: {
		activePath: '/',
		authenticated: true,
		handleSignIn: console.log,
		focusMode: true, 
	},
};

export const Authentication: Story = {
	render: function Authentication() {
		const [isAuthenticating, setIsAuthenticating] = useState(false);
		const [authenticated, setAuthenticated] = useState(false);

		const handleSignIn = async () => {
			setIsAuthenticating(true);
			setTimeout(() => {
				setIsAuthenticating(false);
				setAuthenticated(true);
			}, 3000);
		};

		return (
			<Fragment>
				<Header
					activePath="/account"
					handleSignIn={handleSignIn}
					authenticated={authenticated}
				/>
				{isAuthenticating && (
					<LoadingBlanket
						fullScreen
						label="You are being redirected to myGovID"
					/>
				)}
			</Fragment>
		);
	},
};
