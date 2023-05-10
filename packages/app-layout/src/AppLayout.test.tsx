import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { AppLayout, AppLayoutProps } from './AppLayout';

afterEach(cleanup);

function renderAppLayout({
	focusMode = false,
	userName = 'Toto Wolff',
	userOrganisation = 'Orange Meat Works',
	unreadMessageCount = 6,
	activePath = '/',
	handleSignOut = async () => undefined,
}: Partial<AppLayoutProps>) {
	return render(
		<AppLayout
			focusMode={focusMode}
			userName={userName}
			userOrganisation={userOrganisation}
			unreadMessageCount={unreadMessageCount}
			activePath={activePath}
			handleSignOut={handleSignOut}
		>
			<p>Test</p>
		</AppLayout>
	);
}

describe('AppLayout', () => {
	it('renders correctly', () => {
		const { container } = renderAppLayout({});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderAppLayout({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
