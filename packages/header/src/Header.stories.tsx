import { Fragment, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoadingBlanket } from '@ag.ds-next/loading';
import { Header } from './Header';

export default {
	title: 'Header',
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Authenticated = Template.bind({});
Authenticated.args = {
	activePath: '/account',
	authenticated: true,
	handleSignIn: console.log,
	handleSignOut: console.log,
};

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {
	activePath: '/',
	authenticated: false,
	handleSignIn: console.log,
	handleSignOut: console.log,
};

export const Authentication = () => {
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
				activePath={authenticated ? '/account' : '/'}
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
};
