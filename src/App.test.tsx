import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import { BRIDE, GROOM } from './data/constants';

describe('App', () => {
    test('should render with names', () => {
        const { getAllByText } = render(<App />);

        expect(getAllByText(new RegExp(BRIDE)).length).toBeGreaterThan(0);
        expect(getAllByText(new RegExp(GROOM)).length).toBeGreaterThan(0)
    });
});
