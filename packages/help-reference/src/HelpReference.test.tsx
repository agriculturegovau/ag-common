import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { HelpReference } from './HelpReference';

afterEach(cleanup);

describe('AppLayout', () => {
	it('renders correctly', () => {
		const { container } = render(<HelpReference tag="example-tag" />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<HelpReference tag="example-tag" />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
