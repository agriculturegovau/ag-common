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
import { useState } from 'react';
import { Header } from '@ag.common/header';
import { useMsal } from '@azure/msal-react';

function App() {
	const { instance } = useMsal();
	const SCOPE = '...';

	const handleSignOut = async () => {
		await instance.logoutRedirect({
			postLogoutRedirectUri: '/signout',
		});
	};

	const handleSignIn = async () => {
		await instance.loginRedirect({
			scopes: [SCOPE],
			prompt: 'login',
		});
	};

	return (
		<>
			<Header
				authenticated={isAuthenticated}
				handleSignIn={handleSignIn}
				handleSignOut={handleSignOut}
			/>
			<YourApplication />
		</>
	);
}
```
