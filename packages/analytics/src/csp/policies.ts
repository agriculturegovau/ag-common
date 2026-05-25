import { expandPolicy, Policy } from './csp';

const nonce = (t: string) => `'nonce-${t}'`;

// https://www.qualtrics.com/support/website-app-feedback/getting-started-with-website-app-feedback/website-app-feedback-technical-documentation/#CSP
const qualtrics = {
	'connect-src': 'https://*.qualtrics.com',
	'frame-src': 'https://*.qualtrics.com',
	'img-src': 'https://*.qualtrics.com',
	'script-src': [
		'https://siteintercept.qualtrics.com',
		'https://*.siteintercept.qualtrics.com',
	],
} as const satisfies Policy;

// https://developers.google.com/tag-platform/security/guides/csp#enable_the_container_tag_to_use_csp
// https://developers.google.com/tag-platform/security/guides/csp#google_analytics_4
const googleAnalytics = {
	'script-src': ['https://www.googletagmanager.com'],
	'img-src': [
		'www.googletagmanager.com',
		'https://*.google-analytics.com',
		'https://*.googletagmanager.com',
	],
	'connect-src': [
		'www.googletagmanager.com',
		'www.google.com',
		'https://*.google-analytics.com',
		'https://*.analytics.google.com',
		'https://*.googletagmanager.com',
	],
} as const satisfies Policy;

type NextJS_CSP_Params = {
	nonce: string;
	isDev?: boolean;
};

// https://nextjs.org/docs/app/guides/content-security-policy
// This policy is provided to demonstrate what NextJS recommends but may not be suitable for your app.
const nextJS = (params: NextJS_CSP_Params): Policy => ({
	'default-src': 'self',
	'script-src': [
		'self',
		nonce(params.nonce),
		'strict-dynamic',
		...(params.isDev ? ['unsafe-eval'] : []),
	],
	'style-src': ['self', nonce(params.nonce)],
	'img-src': ['self', 'blob:', 'data:'],
	'font-src': 'self',
	'object-src': 'none',
	'base-uri': 'self',
	'form-action': 'self',
	'frame-ancestors': 'none',
	'upgrade-insecure-requests': [],
});

const agriculture = {
	'default-src': "'self'",
	'script-src': "'self'",
	'style-src': "'self'",
	'img-src': ["'self'", 'blob:', 'data:', 'https://*.agriculture.gov.au'],
	'connect-src': ["'self'", 'https://*.agriculture.gov.au'],
};

export const cspPresets = {
	raw: { qualtrics, googleAnalytics, agriculture },
	helpers: { nonce },

	qualtrics: expandPolicy(qualtrics),
	googleAnalytics: expandPolicy(googleAnalytics),
	agriculture: expandPolicy(agriculture),
	nextJS,
};
