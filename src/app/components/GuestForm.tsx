import React from 'react';
import './InvitationForm.css';
import { Guest } from '../../types/entity/Guest';
import { Api } from "../api";

interface  GuestFormProps {
    guests?: Guest[]
}

export const GuestForm = (props: GuestFormProps) => {
    let guests: Guest[] = props.guests || [];

    const guestsLoaded = (rows: Guest[]) => {
        guests = rows;
    };

    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");
    if(code) {
        Api.acceptInvitation(code, guestsLoaded);
    }

    return (
        <>
            <header id="fh5co-header" className="fh5co-cover fh5co-cover-sm" role="banner">
                // style="background-image:url(images/img_bg_1.jpg);"
                <div className="overlay"></div>
                <div className="fh5co-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                    <h1>Contact Us</h1>
                                    <h2>Free HTML5 templates Made by <a href="http://freehtml5.co"
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
