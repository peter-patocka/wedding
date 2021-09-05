import React from 'react';
import './Date.css';

export const Date = () => {
    return (
        <div className="date component">
            <h2>22. May 2022</h2>
            <section>
                <span className="icon">
                    <a target="_blank"
                       rel="noreferrer"
                       href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N3UwZzc0YThiczkya3NzOTNkN2g4dTkwbWUgMjB2dGxncm9oODMydG9kZDgzMzZzMDFiMTBAZw&amp;tmsrc=20vtlgroh832todd8336s01b10%40group.calendar.google.com">
                        <img src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" alt="Google Calendar" />
                    </a>
                </span>
            </section>
        </div>
    );
};