import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import {
	AppLayoutBreadcrumbProps,
	AppLayoutBreadcrumbs,
} from './AppLayoutBreadcrumbs';

afterEach(cleanup);

function renderAppLayoutBreadcrumbs(props: Partial<AppLayoutBreadcrumbProps>) {
	return render(
		<AppLayoutBreadcrumbs
			links={[{ label: 'Data and insights', href: '/intelligence' }]}
			{...props}
		/>
	);
}

describe('AppLayout', () => {
	it('renders correctly', () => {
		const { container } = renderAppLayoutBreadcrumbs({});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderAppLayoutBreadcrumbs({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
