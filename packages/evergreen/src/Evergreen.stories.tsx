import { Fragment, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Evergreen } from './Evergreen';

export default {
	title: 'Evergreen',
	component: Evergreen,
} as ComponentMeta<typeof Evergreen>;

const Template: ComponentStory<typeof Evergreen> = (args) => (
	<Evergreen {...args} />
);

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
			<Evergreen
				activePath="/account"
				handleSignIn={handleSignIn}
				handleSignOut={handleSignOut}
				authenticated={authenticated}
			/>
			{isAuthenticating && <div>loading...</div>}
		</Fragment>
	);
};
