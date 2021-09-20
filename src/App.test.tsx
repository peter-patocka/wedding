import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('should render with date', () => {
        const { getByText } = render(<App />);

        expect(getByText(/22. May 2022/i)).toBeInTheDocument();
    });
});
