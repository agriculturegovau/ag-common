// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy
type Directive =
	// Fetch directives
	| 'child-src'
	| 'connect-src'
	| 'default-src'
	| 'fenced-frame-src'
	| 'font-src'
	| 'frame-src'
	| 'img-src'
	| 'manifest-src'
	| 'media-src'
	| 'object-src'
	| 'prefetch-src'
	| 'script-src'
	| 'script-src-elem'
	| 'script-src-attr'
	| 'style-src'
	| 'style-src-elem'
	| 'style-src-attr'
	| 'worker-src'

	// document directives
	| 'base-uri'
	| 'sandbox'

	// Navigation directives
	| 'form-action'
	| 'frame-ancestors'

	// Reporting directives
	| 'report-to'
	| 'report-uri'

	// other directives
	| 'require-trusted-types-for'
	| 'trusted-types'
	| 'upgrade-insecure-requests';

const needsQuotes: ReadonlySet<string> = new Set([
	'none',
	'self', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self
	'strict-dynamic', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#strict-dynamic
	'report-sample', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample
	'inline-speculation-rules', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#inline-speculation-rules
	'unsafe-inline', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline
	'unsafe-eval', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval
	'unsafe-hashes', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes
	'wasm-unsafe-eval', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#wasm-unsafe-eval
	'script', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for#script
]);

const shouldBeQuoted = (raw: string) => {
	const lower = raw.toLowerCase();
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#nonce-nonce_value
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#hash_algorithm-hash_value
	return needsQuotes.has(lower) || /^(nonce|sha256|sha384|sha512)-/.test(lower);
};

const quote = (value: string) => (shouldBeQuoted(value) ? `'${value}'` : value);

// preserves autocomplete but allows strings.
type RelaxedDirective = Directive | (string & {});
type DirectiveValue = string | DirectiveValue[];
type ExpandedValue = Set<string>;
type ContentSecurityPolicy<Value> = {
	[D in RelaxedDirective]?: Value;
};

export type Policy = ContentSecurityPolicy<DirectiveValue>;
type ExpandedPolicy = ContentSecurityPolicy<ExpandedValue>;

const createExpanded = () => ({}) as ExpandedPolicy;

const expand = (directive: DirectiveValue) => {
	const expand_ = (directive: DirectiveValue): string[] => {
		if (Array.isArray(directive)) return directive.flatMap(expand_);
		if (directive === '') return [];
		return [quote(directive)];
	};

	return new Set(expand_(directive));
};

export const expandPolicy = (policy: Policy): ExpandedPolicy => {
	const expanded = createExpanded();

	Object.entries(policy).forEach(([name, value]) => {
		if (value === undefined) return;
		expanded[name] = expand(value);
	});

	return expanded;
};

const merge = (
	...policies: ContentSecurityPolicy<DirectiveValue | ExpandedValue>[]
): ExpandedPolicy => {
	const result = createExpanded();

	policies.forEach((policy) => {
		Object.entries(policy).forEach(([directive, value]) => {
			const existing = result[directive] ?? new Set();
			const current = value instanceof Set ? value : expand(value ?? []);

			result[directive] = existing.union(current);
		});
	});

	return result;
};

const renderDirective = (expanded: ExpandedValue) =>
	Array.from(expanded).join(' ');

const render = (
	...policies: ContentSecurityPolicy<DirectiveValue | ExpandedValue>[]
) =>
	Object.entries(merge(...policies))
		.flatMap(([name, value]) =>
			value === undefined
				? []
				: value.size < 1
					? [`${name};`] // some policies are 'boolean' such as "upgrade-insecure-requests;"
					: [`${name} ${renderDirective(value)};`]
		)
		.join(' ');

export const csp = { merge, render };
