import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { ArticleLink, HelpReference } from './HelpReference';

afterEach(cleanup);

describe('HelpReference', () => {
	it('renders correctly', () => {
		const { container } = render(<HelpReference reference="example-tag" />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<HelpReference reference="example-tag" />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});

describe('ArticleLink', () => {
	it('renders correctly', () => {
		const { container } = render(<ArticleLink article="example-tag" />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<ArticleLink article="example-tag" />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
