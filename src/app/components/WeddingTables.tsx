import React, { useEffect, useState } from 'react';
import tablesJson from '../../data/guestsList.json';
import './WeddingTables.css';
import { BRIDE, ENABLE_STATIC_GUESTS_LIST, GROOM } from '../../data/constants';
import css from 'classnames';
import { Guest } from '../../types/entity/Guest';
import { Api } from "../api";

interface Tables {
    tables: Table[]
}
type Table = TableGuest[];
type TableGuest = string;

export const WeddingTables = () => {
    const queryParams = new URLSearchParams(window.location.search);
    if(queryParams.get("showGuestList") != '1') {
        return (
          <></>
        );
    }

    const getDataFromJson = (): Table[] => {
        const tablesFile: Tables = JSON.parse(JSON.stringify(tablesJson));
        return tablesFile.tables;
    }

    const [isSending, setIsSending] = useState(true);
    const [tables, setTables] = useState<Table[]>(ENABLE_STATIC_GUESTS_LIST ? getDataFromJson() : []);

    const getTotalGuests = (): number => {
        if(tables.length === 0) {
            return 0;
        }
        return tables
            .map(guests => guests.length)
            .reduce((prev, current) => prev + current);
    };

    function transformWeddingTableResponse(response: Guest[]): Table[] {
        const map = new Map<string,Table>();
        response.forEach(value => {
            const arr: Table = map.get(value.table_id) || [];
            arr.push(value.name);
            map.set(value.table_id, arr);
        });
        return Array.from(map, ([_index, table]) => table);
    }

    useEffect(() => {
        if (!isSending) {
            return;
        }

        Api.getWeddingTables()
            .then(guests => {
                setTables(transformWeddingTableResponse(guests));
            })
            .catch(error => {
                console.error(error);
            });

        setIsSending(false);
    }, [isSending]);

    const isGroomOrBride = (guest: TableGuest): boolean => {
        return guest == GROOM || guest == BRIDE;
    }

    if (!tables) {
        return <></>
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
                                <li key={guest} className={css({ "bold": isGroomOrBride(guest)})}>{guest}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
