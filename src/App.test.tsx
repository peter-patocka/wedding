import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('App', () => {
    test('should render with date', () => {
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(getByText(/22. May 2022/i)).toBeInTheDocument();
    });
});
