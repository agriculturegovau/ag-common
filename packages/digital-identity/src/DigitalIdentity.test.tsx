import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { DigitalIdentity } from './DigitalIdentity';

afterEach(cleanup);

describe('DigitalIdentity', () => {
	it('renders correctly', () => {
		const { container } = render(<DigitalIdentity href="/account" />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<DigitalIdentity href="/account" />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
