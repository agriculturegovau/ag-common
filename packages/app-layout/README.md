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

## environment-aware links

Starting in version ^1.15 you SHOULD specify a `domain` prop to indicate which environment your app is running in.

If your app is not running on the 'exports' subdomain you MUST also provide the `subdomain` prop.

This allows the sidenav, footer, and profile dropdown links to link to the correct environment now that we can no longer rely on relative URLs.

If you have unique requirements for local or dev check out the "routeResolver" type.

```tsx
import { AppLayout } from '@ag.common/app-layout';
import { useAuthentication } from '@ag.common/auth';
import { useBusinessDetails } from '@ag.common/auth';
import { useRouter } from 'next/router';

function App() {
	const router = useRouter();
	const businessDetails = useBusinessDetails();

	return (
		<AppLayout
			activePath={router.asPath}
			businessDetails={businessDetails}
			domain="test.agriculture.gov.au"
			subdomain="services"
		>
			<YourApplication />
		</AppLayout>
	);
}
```

## working with the type-safe domain prop

The domain property demands either 'agriculture.gov.au' or a string ending with '.agriculture.gov.au'. This is done to 'make illegal states unrepresentable'. It is likely that this value comes from your environment configuration, which makes this annoying to interact with. Due to this, we also ship the `agricultureDomain` function which uses a type guard internally to cast your unknown input into either a valid `AgricultureDomain` or `undefined`.

If you have a need to do something custom in your development environment or a unique use-case, you can also provide a function to this parameter which allows full customisation. Check out the `DevelopmentRouting` example in storybook.

```tsx
import { AppLayout, agricultureDomain } from '@ag.common/app-layout';
import { useRouter } from 'next/router';

function App() {
	const router = useRouter();
	const businessDetails = useBusinessDetails();
	const env = getYourAppEnvironment(); // you should have some form of this in your codebase

	return (
		<React.Fragment>
			<AppLayout
				activePath={router.asPath}
				domain={agricultureDomain(env.AG_DOMAIN)} // this is now type safe
			>
				<YourApplication />
			</AppLayout>

			<AppLayout
				activePath={router.asPath}
				domain={(route) => `http://localhost:3000${route.path}`} // dev env example
			>
				<YourApplication />
			</AppLayout>
		</React.Fragment>
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
