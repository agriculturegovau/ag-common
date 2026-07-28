---
'@ag.common/app-layout': minor
---

Add `FeaturesInput` type and `normalizeFeatures` utility to `app-layout`.

`AppLayout.features` now accepts either a plain `Features` object (existing behaviour, fully backward compatible) or an array of `Record<string, boolean>` records merged left-to-right. This enables feature flags to be composed from multiple sources — for example, a centralised Portal Config API response alongside local app overrides.

```tsx
// Existing usage — unchanged, still works
<AppLayout features={{ quotas: true, invoices: true }} />

// New array form — compose from multiple sources
<AppLayout features={[portalConfigFlags, { myLocalFlag: true }]} />
```

`FeaturesInput`, `Features`, and `normalizeFeatures` are exported from the package for use by consumers.
