# Analytics

The `@ag.common/analytics` package aims to coordinate analytics capture across the export service. We ship the correct tracking codes out of the box for Hotjar and Google Analytics so that everything is reported to the right place.

It also provides convenient helpers for reporting custom events and managing data contexts.

See the storybook for more examples.

## Installation

```sh
yarn add @ag.common/analytics
```

## Basic usage

```tsx
import Script from 'next/script';
import { Analytics } from '@ag.common/analytics';

function App() {
	return (
		<Analytics
			scriptComponents={{
				Script: (props) => <Script {...props} strategy="afterInteractive" />,
			}}
		>
			<YourApplication />
		</Analytics>
	);
}
```

## Disable an analytics script

Hotjar and Google Analytics are enabled by default but can be turned off one by one.

```tsx
import Script from 'next/script';
import { Analytics } from '@ag.common/analytics';

function App() {
	return (
		<Analytics
			scriptComponents={{ Script }}
			hotjar={false}
			googleAnalytics={false}
		>
			<YourApplication />
		</Analytics>
	);
}
```

## Trigger analytics events

Events are reported to Google Analytics by default

```tsx
import Script from 'next/script';
import { Analytics, useAnalytics } from '@ag.common/analytics';

function TrackingButton() {
	const { trackEvent } = useAnalytics();

	return (
		<Button
			onClick={() => {
				trackEvent('login');
			}}
		>
			Log in
		</Button>
	);
}

function App() {
	return (
		<Analytics scriptComponents={{ Script }}>
			<p>Log in to get started</p>

			<TrackingButton />
		</Analytics>
	);
}
```

## Custom event handlers

You can report to an alternative analytics provider by providing an `onEvent` callback

```tsx
import Script from 'next/script';
import { Analytics } from '@ag.common/analytics';

function App() {
	return (
		<Analytics
			scriptComponents={{ Script }}
			onEvent={(name, data) => logger.info(name, data)}
		>
			<YourApplication />
		</Analytics>
	);
}
```
