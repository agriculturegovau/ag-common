import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
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
	activePath: '/account',
	authenticated: false,
	handleSignIn: console.log,
	handleSignOut: console.log,
};

export const Basic = Header;

export const Authentication = () => {
	const [authenticated, setAuthenticated] = useState<boolean>(false);

	const handleSignIn = async () => {
		setAuthenticated(true);
	};

	const handleSignOut = async () => {
		setAuthenticated(false);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setAuthenticated(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setAuthenticated(false);
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return (
		<Header
			handleSignIn={handleSignIn}
			handleSignOut={handleSignOut}
			handleSignOutx={handleSignOut}
			authenticated={authenticated}
		/>
	);
};
