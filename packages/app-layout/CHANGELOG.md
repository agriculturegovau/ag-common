# @ag.common/app-layout

## 1.18.0

### Minor Changes

- 889028b: app-layout: add new component AppLayoutBreadcrumbs

## 1.17.5

### Patch Changes

- 76f5ebc: app-layout: remove beta badge label default

## 1.17.4

### Patch Changes

- 2a64d98: app-layout: remove lingering references to export service

## 1.17.3

### Patch Changes

- ff10cbf: app-layout: remove oxford comma from header

## 1.17.2

### Patch Changes

- 16525c3: app-layout: update header text and subline to support rebrand

## 1.17.1

### Patch Changes

- 2d6122f: app-layout: tweak custom sidenav activepath behaviour to skip route resolution

## 1.17.0

### Minor Changes

- dfeb949: deps: use agds at ^1.35.0
- dfeb949: app-layout: use new daff theme from agds 1.35

## 1.16.1

### Patch Changes

- b94ae5c: app-layout: add whats-new link to the footer

## 1.16.0

### Minor Changes

- d256c9a: app-layout: support subdomain prop to indicate current app area

## 1.15.0

### Minor Changes

- c248920: app-layout: support new portal dropdown and split domains
- 0ba53f5: app-layout: expose agricultureDomain helper
- c248920: deps: update agds peer dep version

## 1.14.0

### Minor Changes

- 398399e: app-layout: support custom header props and custom sidenav visibility

## 1.13.1

### Patch Changes

- f672900: app-layout: update invoicing icon

## 1.13.0

### Minor Changes

- 12dceb6: app-layout: disable people automatically when user is agent

## 1.12.0

### Minor Changes

- c1ec610: sidenav: add invoices and payments sidenav item

## 1.11.1

### Patch Changes

- c26ddf3: app-layout: add people item to sidenav

## 1.11.0

### Minor Changes

- 64aff1c: app-layout: rename export-documentation to export-systems

## 1.10.0

### Minor Changes

- f909c11: deps: Update @ag.ds-next/react to v1.29.0.

  analytics: Add `'use client'` to all exports.

  app-layout: Add `'use client'` to all exports. Use AgDS’ `PieChartIcon` instead of custom implementation.

  digital-identity: Add `'use client'` to all exports. Update internal layout components to not use deprecated versions.

  footer: Add `'use client'` to all exports.

  header: Add `'use client'` to all exports. Remove deprecated `MainNavBottomBar`.

  help-callout: Add `'use client'` to all exports.

## 1.9.0

### Minor Changes

- 08b3e5b: deps: update ag.ds version to 1.28.0, storybook to 8.6.12, react to allow 19.0.0

### Patch Changes

- 52aa454: update inbox icon

## 1.8.0

### Minor Changes

- 29a3fdf: app-layout: add prop to support internal theme

## 1.7.0

### Minor Changes

- f8fb893: app-layout: allow custom sidenav

### Patch Changes

- cb08270: app-layout: update inbox label text

## 1.6.0

### Minor Changes

- 8c8b4b2: app-layout: add licences sidenav item

## 1.5.0

### Minor Changes

- 0d25b31: app-layout: no longer use deprecated ag.ds prop

## 1.4.0

### Minor Changes

- 102a9ad: add paywall support for proofing level

## 1.3.1

### Patch Changes

- 9896214: add export documentation feature toggle, disabled by default

## 1.3.0

### Minor Changes

- 64353ce: deps: update ag.ds version to 1.25.0

## 1.2.1

### Patch Changes

- 60e0859: add feature toggle and disable quotas by default

## 1.2.0

### Minor Changes

- 9dff0d3: provide default error handling for single names

## 1.1.2

### Patch Changes

- ec8369a: app-layout: add quota service to sidebar

## 1.1.1

### Patch Changes

- 7ec69f0: footers: add contact-us link

## 1.1.0

### Minor Changes

- 578590f: updates AGDS version

### Patch Changes

- 91248c4: remove account settings url

## 1.0.0

### Major Changes

- 8467dae: integrate app-layout with new auth behaviour

### Minor Changes

- 8467dae: bump agds, support auth dropdown in app-layout

### Patch Changes

- 801046c: Made `userName` prop optional to allow client-side fetching of user name. If no `userName` is supplied, the account details in the top right of the header will not be rendered.

## 0.3.1

### Patch Changes

- 657adc3: app-layout: Improve screen reader experience of "messages" menu item when there is an unread message. Instead of announcing "Messages 6", it will now announce "Messages, 6 unread".
- 3f67db5: open help link in a new tab

## 0.3.0

### Minor Changes

- 698aa92: Updated peer dependency on `@ag.ds-next/react` to latest version

## 0.2.0

### Minor Changes

- 4c2fbf5: Added beta badge to Header
- 4c2fbf5: Updated peer dependency on `@ag.ds-next/react` to latest version

### Patch Changes

- b417b71: update app-layout links

## 0.1.1

### Patch Changes

- e2eae29: Upgraded dependency `@ag.ds-next/react` to latest version

## 0.1.0

### Minor Changes

- ad83561: Created package
