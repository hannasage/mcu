import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('App renders header and table', () => {

    beforeAll(() => {
        render(<Header />)
    })

    test('rendered header', () => {
        const title = screen.getByText(/MCU Info/i);
        expect(title).toBeInTheDocument();
    });
})