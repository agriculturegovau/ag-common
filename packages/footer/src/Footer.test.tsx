import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { Footer } from './Footer';

afterEach(cleanup);

describe('Footer', () => {
	it('renders correctly', () => {
		const { container } = render(<Footer />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<Footer />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
