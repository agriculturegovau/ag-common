import * as React from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { FC } from './FC';
import { Contents, Footer, SampleContent } from './Parts';
import { SubnavContext } from './NavCtx';
import { Side, SideProps } from './Side';
import { Top, TopProps } from './Top';

export const App: FC<React.ComponentProps<typeof Box>> = ({
	children,
	...boxProps
}) => (
	<Box
		as="div"
		{...boxProps}
		className="App"
		css={{
			display: 'flex',
			flexDirection: 'column',
			gap: '1em',
		}}
	>
		{children}
	</Box>
);

type PartsProps = SideProps & TopProps;

export interface NavProps extends PartsProps {
	space?: 'public' | 'authenticated';
	signIn?: () => Promise<void>;
	signOut?: () => Promise<void>;
}

export const fakeRoleSwitcher = {
	roles: [
		{
			active: true,
			label: 'Produce Fresh Processing',
			activate: () => {
				return Promise.resolve();
			},
		},
		{
			label: 'Produce Fresh Cold Store',
			activate: () => Promise.resolve(),
		},
	],
};

export const fakeMessages = { unreadMessageCount: 7 };

export const fakeUser = {
	organisation: 'Produce Fresh Australia',
	name: 'Rani Kulkani',
};

export const Unauth: FC = ({ children }) => (
	<>
		<header>head</header>
		<Contents>{children}</Contents>
		<footer>footer</footer>
	</>
);

export const Nav: FC<NavProps> = ({
	children,
	space = 'public',
	signIn,
	signOut,
	activePath,
	roleSwitcher,
	activeUser,
	messages,
}) => {
	const [showing, setShowing] = React.useState(true);

	return (
		<SubnavContext.Provider>
			<Flex id="wrapper">
				<Side
					showing={showing}
					setShowing={setShowing}
					activePath={activePath}
					messages={messages}
				/>

				<Stack id="content" flexGrow={1} minHeight="100vh">
					<Top
						showing={showing}
						setShowing={setShowing}
						roleSwitcher={roleSwitcher}
						activeUser={activeUser}
					/>

					<Contents>{children}</Contents>

					<Footer />
				</Stack>

				<Stack></Stack>
			</Flex>
		</SubnavContext.Provider>
	);
};

export default Nav;
