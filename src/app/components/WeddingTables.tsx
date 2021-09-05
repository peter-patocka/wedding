import React from 'react';
import tablesJson from '../../data/guestsList.json';
import './WeddingTables.css';

interface Tables {
    tables: Table[]
}
type Table = Guest[];
type Guest = string;

export const WeddingTables = () => {
    const tablesFile: Tables = JSON.parse(JSON.stringify(tablesJson));
    const tables: Table[] = tablesFile.tables;

    const getTotalGuests = (): number => {
        return tables
            .map(guests => guests.length)
            .reduce((prev, current) => prev + current);
    };

    return (
        <div className="wedding-tables-container component">
            <h2>Guests list</h2>
            <h3>Total people: {getTotalGuests()}</h3>
            <div className="wedding-tables">
                {tables.map((guests, index) => (
                    <div className="wedding-table">
                        <h3>Table {index + 1}</h3>
                        <h4>({guests.length} people)</h4>
                        <ul>
                            {guests.map(guest => (
                                <li>{guest}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
