import { Guest } from "../types/entity/Guest";

export class Api {

    static async acceptInvitation(code: string, onSuccess: (rows: Guest[]) => void = (() => undefined)): Promise<Guest[]> {
        return await fetch("/api/invitation/"+code, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((json: InvitationResult) => {
            if(json.result == 'success') {
                const guests = json.rows_affected ?? [];
                onSuccess(guests);
                return guests;
            }
            return Promise.reject();
        });
    }
    static async updateGuests(code: string, guests: Guest[], onSuccess: (rows: Guest[]) => void = (() => undefined)): Promise<Guest[]> {
        return await fetch("/api/invitation/"+code, {
            method: 'POST',
            body: JSON.stringify(guests),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((json: InvitationResult) => {
                if(json.result == 'success') {
                    const guests = json.rows_affected ?? [];
                    onSuccess(guests);
                    return guests;
                }
                return Promise.reject();
            });
    }
}

interface InvitationResult {
    result: string;
    num_rows_affected: number;
    rows_affected?: Guest[]
}