import { Guest } from "../types/entity/Guest";

export class Api {

    static acceptInvitation(code: string, onSuccess: (rows: Guest[]) => void = (() => {})) {
        fetch("/api/invitation/"+code, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((json: InvitationResult) => {
                if(json.result == 'success') {
                    onSuccess(json.rows_affected ?? []);
                } else {
                    alert('Invitation code is invalid.')
                }
            })
            .catch(() => {
                alert('Unable to accept invitation. Contact administrator.');
            })
    };
}

interface InvitationResult {
    result: string;
    num_rows_affected: number;
    rows_affected?: Guest[]
}