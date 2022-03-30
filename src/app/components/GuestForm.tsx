import React, { useEffect, useMemo, useState } from 'react';
import { Guest } from '../../types/entity/Guest';
import { fetchGuests } from "../../store/guests/epics";
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from "../../types/applicationState";
import { useNavigate, useParams } from "react-router-dom";
import './GuestForm.css';
import { Api } from "../api";

export const GuestForm = () => {
    const [isSending, setIsSending] = useState(true);
    const [guests, setGuests] = useState<Guest[]>([]);
    const guestState = useSelector((state: ApplicationState) => state.guestState);
    const { code } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isSending) {
            return;
        }

        if(code && guestState.data.length === 0) {
            dispatch(fetchGuests(code));
        }

        setIsSending(false);
    }, [isSending, code]);

    useEffect(() => {
        if (!isSending && guestState.error) {
            navigate("/");
        }
        if (!guestState.isFetching && !guestState.error) {
            setGuests(guestState.data);
        }
    }, [guestState, isSending]);

    const onSubmit = () => {
        console.log("SUBMIT!");
        Api.updateGuests("testCode", guests)
            .then((result) => {
                alert("Updated");
                setGuests(result);
            })
            .catch(() => {
                alert("Error");
            });
    };

    return (
        <>
            <header id="fh5co-header" className="fh5co-cover fh5co-cover-sm alt-bg" role="banner">
                <div className="overlay"></div>
                <div className="fh5co-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                    <h1>Thanks for your attendance!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {guests && (
                <div className="fh5co-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <form action="#" onSubmit={onSubmit}>
                                    {guests.map((guest, index) => (
                                        <div key={index}>
                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label>
                                                        <span className="mr-small">
                                                            {guest.name}
                                                        </span>
                                                        <input type="checkbox"
                                                               name={`invitation_accepted-${guest.id}`}
                                                               value="1"
                                                               checked={guest.invitation_accepted == 1}
                                                               onChange={() => {
                                                                   guest.invitation_accepted = guest.invitation_accepted ? 0 : 1;
                                                               }}
                                                        />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <textarea name={`message-${guest.id}`}
                                                              className="form-control"
                                                              placeholder="Write us something"
                                                              defaultValue={guest.message ?? ''}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="form-group">
                                        <input type="submit" value="Save" className="btn btn-primary" />
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};
