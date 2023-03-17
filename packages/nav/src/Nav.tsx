import * as React from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { FC } from './FC';
import { Contents, Footer } from './Parts';
import { SubnavContext } from './NavCtx';
import { Side, SideProps } from './Side';
import { Top, TopProps } from './Top';
import { Classic, ClassicHeaderProps } from './CopyPasta';

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

interface PublicProps {
	signIn?: () => Promise<void>;
	signOut?: () => Promise<void>;
}

type AuthenticatedProps = SideProps & TopProps;

type LayoutProps =
	| ({
			space: 'public';
	  } & PublicProps)
	| ({ space: 'authenticated' } & AuthenticatedProps);

type ClassicProps = {
	mode: 'classic';
} & ClassicHeaderProps;

type ExportLayoutProps = {
	mode: 'export-layout';
} & LayoutProps;

type Props = ClassicProps | ExportLayoutProps;

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

export const Layout: FC<Props> = ({ children, ...props }) => {
	if (props.mode === 'classic') {
		const { mode, ...classicProps } = props;
		return <Classic {...classicProps}>{children}</Classic>;
	}

	if (props.space === 'public') {
		return (
			<Classic handleSignIn={props.signIn} handleSignOut={props.signOut}>
				{children}
			</Classic>
		);
	}

	const [showing, setShowing] = React.useState(true);
	return (
		<SubnavContext.Provider>
			<Flex id="wrapper">
				<Side
					showing={showing}
					setShowing={setShowing}
					activePath={props.activePath}
					messages={props.messages}
				/>

				<Stack id="content" flexGrow={1} minHeight="100vh">
					<Top
						showing={showing}
						setShowing={setShowing}
						roleSwitcher={props.roleSwitcher}
						activeUser={props.activeUser}
					/>

					<Contents>{children}</Contents>

					<Footer />
				</Stack>
			</Flex>
		</SubnavContext.Provider>
	);
};

export default Layout;
