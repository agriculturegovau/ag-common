import '@testing-library/jest-dom';
import 'html-validate/jest';
import { Prose } from '@ag.ds-next/react/prose';
import { cleanup, render } from '../../../test-utils';
import { AppShell } from './AppShell';

afterEach(cleanup);

function AppShellTest({ isFocusMode = false }) {
	return (
		<AppShell
			isFocusMode={isFocusMode}
			activePath="#home"
			userName="Toto Wolff"
			userOrganisation="Orange Meat Works"
			userMenuHref="#account"
			unreadMessageCount={3}
			onSignOut={() => console.log('sign out')}
		>
			<Prose>
				<h1>Authenticated App Shell</h1>
				<p>Some content</p>
			</Prose>
		</AppShell>
	);
}

describe('AuthenticatedAppShell', () => {
	it('renders a valid HTML structure', () => {
		const { container } = render(<AppShellTest />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
				'no-inline-style': 'off',
			},
		});
	});

	it('renders a valid HTML structure when in focus mode', () => {
		const { container } = render(<AppShellTest isFocusMode />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
				'no-inline-style': 'off',
			},
		});
	});
});
