# App layout

Common application shell for apps in the user-facing authenticated space of the Export Service

## Installation

```sh
yarn add @ag.common/app-layout
```

## Usage

```tsx
import { AppLayout } from '@ag.common/app-layout';
import { useAuth } from '@ag.common/auth';
import { useBusinessDetails } from '@ag.common/auth';
import { useRouter } from 'next/router';

function App() {
	const router = useRouter();
	const businessDetails = useBusinessDetails();

	return (
		<AppLayout activePath={router.asPath} businessDetails={businessDetails}>
			<YourApplication />
		</AppLayout>
	);
}
```
