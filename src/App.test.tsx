import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BRIDE, GROOM } from './data/constants';

const unmockedFetch = global.fetch;

jest.mock('./app/components/Header', () => ({ Header: () => 'mocked header' }));

describe('App', () => {

    beforeAll(() => {
        // @ts-ignore
        global.fetch = () => Promise.resolve({
                json: () => Promise.resolve([
                    { name: BRIDE, table_id: 1 }, { name: GROOM, table_id: 1 }
                ]),
            });
    });

    afterAll(() => {
        global.fetch = unmockedFetch;
    });

    test.skip('display Groom and Bride name', () => {
        // given
        jest.spyOn(URLSearchParams.prototype, "get").mockReturnValue("1");

        // when
        const { getAllByText } = render(<App />);

        // then
        expect(getAllByText(new RegExp(BRIDE)).length).toBeGreaterThan(0);
        expect(getAllByText(new RegExp(GROOM)).length).toBeGreaterThan(0)
    });
});
