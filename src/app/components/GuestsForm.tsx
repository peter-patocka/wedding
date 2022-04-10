import React, { FormEvent } from 'react';
import './InvitationForm.css';
import { Guest } from '../../types/entity/Guest';

interface GuestsFormProps {
    guests: Guest[];
    onSubmit: (event: FormEvent) => void;
    updateGuest: (guest: Guest) => void;
}

export const GuestsForm = (props: GuestsFormProps) => {

    const { guests, onSubmit, updateGuest } = props;

    return (
        <div className="fh5co-section">
            <div className="container">
                <h4>
                    V následujúcom formulári môžete upraviť zoznam hostí a pridať poznámky.
                </h4>
                <div className="row">
                    <div className="col-md-12 animate-box">
                        <form action="#" onSubmit={onSubmit}>
                            {guests.map((guest, index) => (
                                <div key={index}>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="cursor">
                                                    <span className="mr-small">
                                                        {guest.name}
                                                    </span>
                                                <input type="checkbox"
                                                       name={`invitation_accepted-${guest.id}`}
                                                       defaultChecked={guest.invitation_accepted == 1}
                                                       onChange={() => {
                                                           guest.invitation_accepted = guest.invitation_accepted == 1 ? 0 : 1;
                                                           updateGuest(guest);
                                                       }}
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                                <textarea name={`message-${guest.id}`}
                                                          className="form-control"
                                                          placeholder="Sem napíšte, keď nam niečo chcete odkázať"
                                                          defaultValue={guest.message ?? ''}
                                                          onChange={(value) => {
                                                              guest.message = value.target.value;
                                                              updateGuest(guest);
                                                          }}
                                                />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="form-group">
                                <input type="submit" value="Uložiť" className="btn btn-primary" />
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};
