# Evergreen

## Installation

```sh
yarn add @ag.common/evergreen
```

## Usage

```tsx
import { Header, Footer } from '@ag.common/evergreen';

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
			<Footer />
		</>
	);
}
```

## Usage

See @ag.common/header and @ag.common/footer for the API that these components expose.
