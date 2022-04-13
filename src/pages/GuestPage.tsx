import React, { FormEvent, useEffect, useState } from 'react';
import { Guest } from '../types/entity/Guest';
import { fetchGuests } from "../store/guests/epics";
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from "../types/applicationState";
import { useNavigate, useParams } from "react-router-dom";
import './GuestPage.css';
import main from '../main';
import { Api } from "../app/api";
import { EventDateTime } from "../app/components/EventDateTime";
import { WeddingTables } from "../app/components/WeddingTables";
import { GuestsForm } from "../app/components/GuestsForm";
import { Timeline } from "../app/components/Timeline";
import { InstagramFeed } from "../app/components/InstagramFeed";
import { Spotify } from "../app/components/Spotify";

export const GuestPage = () => {
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
        if (!isSending && !guestState.isFetching && guestState.data.length == 0) {
            navigate("/");
        }
        if (!guestState.isFetching && !guestState.error) {
            setGuests(guestState.data);
            setTimeout(() => main(), 1);
        }
    }, [guestState, isSending]);

    const updateGuest = (guest: Guest): void => {
        const index = guests.findIndex(item => item.id === guest.id);
        if(index >= 0 && index < guests.length) {
            guests[index] = guest;
            setGuests(guests);
        }
    };

    const onSubmit = (event: FormEvent): void => {
        event.preventDefault();
        if(guests.length > 0) {
            const code = guests[0].invitation_code;
            Api.updateGuests(code, guests)
                .then((result) => {
                    alert("Uložené");
                    setGuests(result);
                })
                .catch(() => {
                    alert("Error");
                });
        }

    };

    if(guests.length == 0) {
        return <></>
    }

    return (
        <>
            <header id="fh5co-header" className="fh5co-cover fh5co-cover-sm alt-bg" role="banner">
                <div className="overlay" />
                <div className="fh5co-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                    <h1>Tešíme sa na vašu účasť!</h1>
                                    <EventDateTime />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <GuestsForm guests={guests} onSubmit={onSubmit} updateGuest={updateGuest} />

            <Timeline />

            <WeddingTables/>

            <InstagramFeed />

            <Spotify />
        </>
    );
};
