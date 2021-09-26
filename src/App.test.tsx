import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('should render with date', () => {
        const { getByText } = render(<App />);

        expect(getByText(/12. 06. 2022/i)).toBeInTheDocument();
    });
});
