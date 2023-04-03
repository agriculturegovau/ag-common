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
		activePath: '/account',
		authenticated: true,
		handleSignIn: console.log,
		handleSignOut: console.log,
	},
};

export const Unauthenticated: Story = {
	args: {
		activePath: '/',
		authenticated: false,
		handleSignIn: console.log,
		handleSignOut: console.log,
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

		const handleSignOut = async () => {
			setIsAuthenticating(true);
			setTimeout(() => {
				setIsAuthenticating(false);
				setAuthenticated(false);
			}, 3000);
		};

		return (
			<Fragment>
				<Header
					activePath="/account"
					handleSignIn={handleSignIn}
					handleSignOut={handleSignOut}
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
