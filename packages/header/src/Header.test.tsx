import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '../../../test-utils';
import { Header } from './Header';

afterEach(cleanup);

describe('Header', () => {
	describe('unauthenticated', () => {
		it('renders correctly', () => {
			const { container } = render(
				<Header authenticated={false} activePath="/" />
			);
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = render(
				<Header authenticated={false} activePath="/" />
			);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: { 'no-inline-style': 'off' },
			});
		});

		it('sign in button calls handleSignIn when clicked', async () => {
			const handleSignIn = jest.fn();
			render(
				<Header
					authenticated={false}
					activePath="/"
					handleSignIn={handleSignIn}
				/>
			);
			const signInButton = screen.getByText('Sign in')
				.parentElement as HTMLButtonElement;
			expect(signInButton).toBeInTheDocument();
			expect(signInButton.tagName).toBe('BUTTON');
			expect(signInButton).toHaveAccessibleName('Sign in');
			await userEvent.click(signInButton);
			expect(handleSignIn).toHaveBeenCalledTimes(1);
		});
	});

	describe('authenticated', () => {
		it('renders correctly', () => {
			const { container } = render(
				<Header activePath="/" authenticated={true} />
			);
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = render(
				<Header activePath="/" authenticated={true} />
			);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: { 'no-inline-style': 'off' },
			});
		});

		it('authenticated: sign out button calls handleSignOut when clicked',  () => {
			render(
				<Header
					authenticated={true}
					activePath="/account"
				/>
			);
			const myAccountLink = screen.getByText('My account')
				.parentElement as HTMLAnchorElement;
			expect(myAccountLink).toBeInTheDocument();
			expect(myAccountLink.tagName).toBe('A');
			expect(myAccountLink).toHaveAccessibleName('My account');
			expect(myAccountLink).toHaveAttribute('href', '/account');
		});
	});
});
