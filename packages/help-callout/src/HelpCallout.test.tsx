import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { HelpCallout } from './HelpCallout';

afterEach(cleanup);

describe('HelpCallout', () => {
	it('renders correctly', () => {
		const { container } = render(<HelpCallout />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<HelpCallout />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
