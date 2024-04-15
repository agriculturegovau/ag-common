import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { NeedHelpCallout } from './HelpCallout';

afterEach(cleanup);

describe('NeedHelpCallout', () => {
	it('renders correctly', () => {
		const { container } = render(<NeedHelpCallout />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<NeedHelpCallout />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
