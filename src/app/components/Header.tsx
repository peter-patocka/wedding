import React, { useEffect } from 'react';
import './Header.css';
import { BRIDE, DATE, GROOM } from '../../data/constants';
import * as Icons from "@material-ui/icons";

export const Header = () => {

    useEffect(() => {
        if(DATE.getTime() > (new Date()).getTime()) {
            // @ts-ignore
            $('.simply-countdown-one').simplyCountdown({
                year: DATE.getFullYear(),
                month: DATE.getMonth() + 1,
                day: DATE.getDate()
            });
        }
    }, []);

    return (
        <div className="header component">
            <header id="fh5co-header" className="fh5co-cover" role="banner"
                    data-stellar-background-ratio="0.5">
                <div className="overlay"/>
                <div className="container container-full">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                    <h1>{BRIDE} &amp; {GROOM}</h1>
                                    <h2>
                                        <div className="header-date-time">
                                            <span>
                                                <Icons.CalendarToday /> {DATE.toLocaleDateString()}
                                            </span>
                                            <span>
                                                <Icons.Watch /> {DATE.toLocaleTimeString()}
                                            </span>
                                        </div>
                                        <div className="header-place">
                                            <a href="https://www.lod.sk/sk/eventova-lod-harmonia/"
                                               target="_blank"
                                               rel="noreferrer"
                                            >
                                                <Icons.DirectionsBoat /> <span className="text">Loď Harmónia</span>
                                            </a> na rieke Dunaj
                                        </div>
                                    </h2>
                                    {DATE.getMilliseconds() < new Date().getMilliseconds() && (
                                        <div className="simply-countdown simply-countdown-one"/>
                                    )}
                                    {/**
                                        <p className="save-date">
                                            <a href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N3UwZzc0YThiczkya3NzOTNkN2g4dTkwbWUgMjB2dGxncm9oODMydG9kZDgzMzZzMDFiMTBAZw&amp;tmsrc=20vtlgroh832todd8336s01b10%40group.calendar.google.com"
                                               className="btn btn-default btn-sm"
                                               rel="noreferrer"
                                               target="_blank"
                                            >
                                                Save the date<br/>
                                                <img src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" alt="Google Calendar" />
                                            </a>
                                        </p>
                                    )**/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};