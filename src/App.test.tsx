import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import { BRIDE, GROOM } from './data/constants';

jest.mock('./app/components/Header', () => ({ Header: () => 'mocked header' }));

describe('App', () => {
    test('should render with names', () => {
        const { getAllByText } = render(<App />);

        expect(getAllByText(new RegExp(BRIDE)).length).toBeGreaterThan(0);
        expect(getAllByText(new RegExp(GROOM)).length).toBeGreaterThan(0)
    });
});
