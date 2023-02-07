import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { Nav } from './Nav';

afterEach(cleanup);

describe('Header', () => {
	describe('unauthenticated', () => {
		it('renders correctly', () => {
			const { container } = render(<Nav>yo</Nav>);
			expect(container).toMatchSnapshot();
		});
	});
});
