import React, { useEffect, useState } from 'react';
import tablesJson from '../../data/guestsList.json';
import './WeddingTables.css';
import { BRIDE, GROOM } from '../../data/constants';
import css from 'classnames';

interface Tables {
    tables: Table[]
}
type Table = Guest[];
type Guest = string;

interface WeddingTableResponse {
    id: string;
    name: string;
    table_id: string;
    place_id: string;
}

export const WeddingTables = () => {
    let tables: Table[] = getDataFromJson();

    const [response, loading, hasError] = useFetch<WeddingTableResponse[]>("http://www.piixon.sk/api/wedding-tables");

    const getTotalGuests = (): number => {
        if(tables.length === 0) {
            return 0;
        }
        return tables
            .map(guests => guests.length)
            .reduce((prev, current) => prev + current);
    };

    function transformWeddingTableResponse(response: WeddingTableResponse[]): Table[] {
        let map = new Map<string,Table>();
        response.forEach(value => {
           const arr: Table = map.get(value.table_id) || [];
           arr.push(value.name);
           map.set(value.table_id, arr);
        });
        return Array.from(map, ([_index, table]) => table);
    }

    if(!hasError && !loading && response) {
        tables = transformWeddingTableResponse(response);
    }

    return (
        <div className="wedding-tables-container component" id="guests-list">
            <h2>Guests list</h2>
            <h3>Total people: {getTotalGuests()}</h3>
            <div className="wedding-tables">
                {tables.map((guests, index) => (
                    <div className="wedding-table" key={index}>
                        <h3>Table {index + 1}</h3>
                        <h4>({guests.length} people)</h4>
                        <ul>
                            {guests.map(guest => (
                                <li key={guest} className={css({ "bold": guest == GROOM || guest == BRIDE})}>{guest}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

function getDataFromJson(): Table[] {
    const tablesFile: Tables = JSON.parse(JSON.stringify(tablesJson));
    return tablesFile.tables;
}

function useFetch<T>(url: string, init?: RequestInit): [T | undefined, boolean, boolean] {

    const [response, setResponse] = useState<T>();
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            ...init,
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setResponse(json.result);
                setLoading(false);
            })
            .catch(() => {
                setHasError(true);
                setLoading(false);
                setResponse(undefined);
            })
    }, [ url ]);
    return [ response, loading, hasError ]
}
