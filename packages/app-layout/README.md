# App layout

Common application shell for apps in the user-facing authenticated space of the Export Service

## Installation

```sh
yarn add @ag.common/app-layout
```

## Basic usage

```tsx
import { AppLayout } from '@ag.common/app-layout';
import { useAuthentication } from '@ag.common/auth';
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

## Redirect a user to app section on business selection

It may make sense for your application to start from its root when a user changes context.

```tsx
import { AppLayout } from '@ag.common/app-layout';
import { useAuthentication } from '@ag.common/auth';
import { useBusinessDetails } from '@ag.common/auth';
import { useRouter } from 'next/router';

function App() {
	const router = useRouter();
	const businessDetails = useBusinessDetails();
	const onBusinessSelected = (business: Business) => {
		businessDetails.setSelectedBusiness(business);
		router.push('/your-app-base-path-here');
	};

	return (
		<AppLayout
			activePath={router.asPath}
			businessDetails={{
				...businessDetails,
				setSelectedBusiness: onBusinessSelected,
			}}
		>
			<YourApplication />
		</AppLayout>
	);
}
```

## Display warning modal before setting business

You may want to interrupt a user before allowing them to change their selected business if they have pending changes.

```tsx
import { AppLayout } from '@ag.common/app-layout';
import { useAuthentication } from '@ag.common/auth';
import { useBusinessDetails } from '@ag.common/auth';
import { useRouter } from 'next/router';

function App() {
	const router = useRouter();
	const businessDetails = useBusinessDetails();
	const [targetBusiness, setTargetBusiness] = useState<Business | undefined>();

	return (
		<AppLayout
			activePath={router.asPath}
			businessDetails={{
				...businessDetails,
				setSelectedBusiness: (business: Business) => {
					setTargetBusiness(business);
				},
			}}
		>
			<Modal
				isOpen={targetBusiness !== undefined}
				onClose={setTargetBusiness(undefined)}
				title="Are you sure you want to leave this page?"
				actions={
					<ButtonGroup>
						<Button
							onClick={() => {
								businessDetails.setSelectedBusiness(targetBusiness);
								setTargetBusiness(undefined);
							}}
						>
							Leave this page
						</Button>
						<Button variant="secondary" onClick={setTargetBusiness(undefined)}>
							Stay on this page
						</Button>
					</ButtonGroup>
				}
			>
				<Text as="p">You will lose all changes made since your last save.</Text>
			</Modal>
			<YourApplication />
		</AppLayout>
	);
}
```

## Single names

Your app may not handle single-named users. If you want to block these users from your app, pass through the auth claims
and the app layout will display a helpful message instead.

```tsx
import { AppLayout } from '@ag.common/app-layout';
import { authService } from '@ag.common/auth';
import { useRouter } from 'next/router';

function App() {
	const router = useRouter();
	const claims = authService.getAccountInfo()?.idTokenClaims;

	return (
		<AppLayout activePath={router.asPath} claims={claims}>
			<YourApplication />
		</AppLayout>
	);
}
```

You can provide your own error message or handle analytics by providing a component that overrides the default.

```tsx
import { AppLayout } from '@ag.common/app-layout';
import { authService } from '@ag.common/auth';
import { useRouter } from 'next/router';

function App() {
	const router = useRouter();
	const claims = authService.getAccountInfo()?.idTokenClaims;

	return (
		<AppLayout
			activePath={router.asPath}
			claims={claims}
			errorComponents={{
				MissingGivenName: (props) => (
					<Fragment>
						<p>everything is fine, actually</p>

						{props.children}
					</Fragment>
				),
			}}
		>
			<YourApplication />
		</AppLayout>
	);
}
```
