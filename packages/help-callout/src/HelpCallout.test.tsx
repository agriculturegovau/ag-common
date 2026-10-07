import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { HelpCallout } from './HelpCallout';

afterEach(cleanup);

describe('HelpCallout', () => {
	const when = Date.UTC(2026, 8, 1);

	it('renders correctly', () => {
		const { container } = render(<HelpCallout when={when} />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<HelpCallout when={when} />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
