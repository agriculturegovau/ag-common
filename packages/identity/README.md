# Analytics

## Installation

```sh
yarn add @ag.common/identity
```

## Usage

```tsx
import { DigitalIdentity } from '@ag.common/identity';

function Page() {
	return (
		<Prose>
			<h1>Sign in with Digital Identity</h1>
			<p>...<p>
			<DigitalIdentity container outerContent href="/account" />
		</Prose>
	);
}
```
