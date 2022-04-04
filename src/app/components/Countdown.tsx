import React, { useEffect } from 'react';
import './Countdown.css';
import { DATE } from "../../data/constants";
import { EventDateTime } from "./EventDateTime";

export const Countdown = () => {

    useEffect(() => {
        if(isVisible()) {
            // @ts-ignore
            $('.simply-countdown-one').simplyCountdown({
                year: DATE.getFullYear(),
                month: DATE.getMonth() + 1,
                day: DATE.getDate()
            });
        }
    }, []);

    const isVisible = (): boolean => DATE.getTime() > (new Date()).getTime();

    return (
        <div className="countdown component">
            <EventDateTime />
            {isVisible() && (
                <>
                    <div className="simply-countdown simply-countdown-one"/>
                    <p className="save-date">
                        <a href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N3UwZzc0YThiczkya3NzOTNkN2g4dTkwbWUgMjB2dGxncm9oODMydG9kZDgzMzZzMDFiMTBAZw&amp;tmsrc=20vtlgroh832todd8336s01b10%40group.calendar.google.com"
                           className="btn btn-default btn-sm"
                           rel="noreferrer"
                           target="_blank"
                        >
                            <img src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" alt="Google Calendar" />
                        </a>
                    </p>
                </>
            )}

        </div>
    );
};
