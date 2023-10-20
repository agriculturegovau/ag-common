# App layout

Common application shell for apps in the user-facing authenticated space of the Export Service

## Installation

```sh
yarn add @ag.common/app-layout
```

## Basic usage

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

## Redirect a user to app section on business selection

It may make sense for your application to start from its root when a user changes context.

```tsx
import { AppLayout } from '@ag.common/app-layout';
import { useAuth } from '@ag.common/auth';
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
import { useAuth } from '@ag.common/auth';
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
				onDismiss={setTargetBusiness(undefined)}
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
