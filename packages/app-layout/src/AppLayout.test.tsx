import '@testing-library/jest-dom';
import 'html-validate/jest';
import { Prose } from '@ag.ds-next/react/prose';
import { cleanup, render } from '../../../test-utils';
import { AppLayout } from './AppLayout';

afterEach(cleanup);

function AppLayoutTest({ isFocusMode = false }) {
	return (
		<AppLayout
			isFocusMode={isFocusMode}
			activePath="#home"
			userName="Toto Wolff"
			userOrganisation="Orange Meat Works"
			unreadMessageCount={3}
			onSignOut={() => console.log('sign out')}
		>
			<Prose>
				<h1>Authenticated App Shell</h1>
				<p>Some content</p>
			</Prose>
		</AppLayout>
	);
}

describe('AuthenticatedAppLayout', () => {
	it('renders a valid HTML structure', () => {
		const { container } = render(<AppLayoutTest />);
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
		const { container } = render(<AppLayoutTest isFocusMode />);
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
