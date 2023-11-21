# HelpReference, ArticleLink

HelpReference and ArticleLink are components that allow an application to reference export service help content from the page itself without opening a new tab and breaking a users' flow.

## Installation

```sh
yarn add @ag.common/help-reference
```

## Basic usage

```tsx
import { PageContent } from '@ag.ds-next/react/content';
import { HelpReference } from '@ag.common/help-reference';

function Page() {
	return (
		<PageContent>
			<YourPageContent />
			<HelpReference reference="your-reference" />
		</PageContent>
	);
}
```

## Using ArticleLink to trigger the drawer

You may reference an article in-app directly using an ArticleLink without needing to set up any reference content

```tsx
import { Text } from '@ag.ds-next/react/text';
import { PageContent } from '@ag.ds-next/react/content';
import { ArticleLink } from '@ag.common/help-reference';

function Page() {
	return (
		<PageContent>
			<YourPageContent />
			<Text as="p">
				You can place an ArticleLink anywhere in your page and have it{' '}
				<ArticleLink article="your-article">reference</ArticleLink> a help
				article
			</Text>
		</PageContent>
	);
}
```
