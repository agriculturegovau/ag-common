# Header

## Installation

```sh
yarn add @ag.common/header
```

## Usage

```tsx
import { Header } from '@ag.common/header';

function App() {
	return (
		<>
			<Header />
			<YourApplication />
		</>
	);
}
```

## Usage with MSAL client library

```tsx
import { Fragment, useState } from 'react';
import { Header } from '@ag.common/header';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';

function App() {
	const { instance } = useMsal();
	const isAuthenticated = useIsAuthenticated();
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const SCOPE = '...';

	const handleSignOut = async () => {
		setIsAuthenticating(true);
		await instance.logoutRedirect({
			postLogoutRedirectUri: '/signout',
		});
		setIsAuthenticating(false);
	};

	const handleSignIn = async () => {
		setIsAuthenticating(true);
		await instance.loginRedirect({
			scopes: [SCOPE],
			prompt: 'login',
		});
		setIsAuthenticating(false);
	};

	return (
		<Fragment>
			<Header
				authenticated={isAuthenticated}
				handleSignIn={handleSignIn}
				handleSignOut={handleSignOut}
			/>
			{isAuthenticating && (
				<LoadingBlanket fullScreen label="You are being redirected to myGovID" />
			)}
			<YourApplication />
		</Fragment>
	);
}
```
