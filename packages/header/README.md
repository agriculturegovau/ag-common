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
			<Header
				activePath="/"
				authenticated={false}
				handleSignIn={console.log}
				handleSignOut={console.log}
			/>
			<YourApplication />
		</>
	);
}
```

## Usage with skip links

By default, this component renders the main navigation element with the ID of `main-nav`. This can be overridden using the `mainNavId` prop.

We encourage this component to be paired with the `SkipLinks` component available from the `@ag.ds-next/skip-links` package.

```tsx
import { Header } from '@ag.common/header';
import { SkipLinks } from '@ag.ds-next/skip-links';

function App() {
	return (
		<>
			<SkipLinks
				links={[
					{ href: '#main-content', label: 'Skip to main content' },
					{ href: '#main-nav', label: 'Skip to main navigation' },
				]}
			/>
			<Header />
			<YourApplication id="main-content" />
		</>
	);
}
```

## Usage with MSAL client library

```tsx
import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { Header } from '@ag.common/header';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';

function App() {
	const router = useRouter();
	const { instance } = useMsal();
	const authenticated = useIsAuthenticated();
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
				activePath={router.asPath}
				authenticated={authenticated}
				handleSignIn={handleSignIn}
				handleSignOut={handleSignOut}
			/>
			{isAuthenticating && (
				<LoadingBlanket
					fullScreen
					label="You are being redirected to myGovID"
				/>
			)}
			<YourApplication />
		</Fragment>
	);
}
```
