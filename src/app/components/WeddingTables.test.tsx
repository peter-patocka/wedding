import React from 'react';
import { render } from '@testing-library/react';
import { WeddingTables } from "./WeddingTables";

describe('WeddingTables', () => {

    test('display guests list', () => {
        // given
        jest.spyOn(URLSearchParams.prototype, "get").mockReturnValue("1");

        // when
        const { getAllByText } = render(<WeddingTables />);

        // then
        expect(getAllByText(new RegExp("Guests list")).length).toBeGreaterThan(0);
    });
});
