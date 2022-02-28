import React, { useEffect, useState } from 'react';
import { Guest } from '../../types/entity/Guest';
import { fetchGuests } from "../../store/guests/epics";
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from "../../types/applicationState";
import { useNavigate, useParams } from "react-router-dom";
import './GuestForm.css';

interface  GuestFormProps {
    guests?: Guest[]
}

export const GuestForm = (props: GuestFormProps) => {
    const [isSending, setIsSending] = useState(true);
    const { code } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const guestState = useSelector((state: ApplicationState) => state.guestState);

    useEffect(() => {
        if (!isSending) {
            return;
        }

        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get("code");
        if(code && guestState.data.length === 0) {
            dispatch(fetchGuests(code));
        }

        setIsSending(false);
    }, [isSending, code]);

    useEffect(() => {
        if (!isSending && !guestState.isFetching && guestState.data.length === 0) {
            navigate("/");
        }
    }, [guestState, isSending]);

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
                                    <h2>Free HTML5 templates Made by <a href="http://freehtml5.co"
                                                                        rel="noreferrer"
                                                                        target="_blank">FreeHTML5.co</a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="fh5co-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 animate-box">
                            <h3>Get In Touch</h3>
                            <form action="#">
                                {!guestState.isFetching && !guestState.error && guestState.data.map((guest, index) => (
                                    <div className="row form-group" key={index}>
                                        <div className="col-md-12">
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" id="fname" className="form-control"
                                                   placeholder={guest.name} />
                                        </div>
                                    </div>
                                ))}
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label htmlFor="fname">First Name</label>
                                        <input type="text" id="fname" className="form-control"
                                               placeholder="Your firstname" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lname">Last Name</label>
                                        <input type="text" id="lname" className="form-control"
                                               placeholder="Your lastname" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" id="email" className="form-control"
                                               placeholder="Your email address" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" className="form-control"
                                               placeholder="Your subject of this message" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message"
                                                  className="form-control" placeholder="Write us something" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary" />
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
