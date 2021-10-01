import React from 'react';
import './Header.css';
import { BRIDE, DATE, GROOM } from '../../data/constants';

export const Header = () => {
    return (
        <div className="header component">
            <div className="info-block">
                <div className="names">
                    <span>{BRIDE}</span> + <span>{GROOM}</span>
                </div>
                <div className="date">📅 {DATE.toLocaleDateString()}</div>
                <div className="time">⌚ {DATE.toLocaleTimeString()}</div>
                <div className="place">
                    <a href="https://www.lod.sk/sk/eventova-lod-harmonia/" target="_blank">
                         🚢 <span className="text">Loď Harmónia</span>
                    </a> na rieke Dunaj
                </div>
                <section>
                <div className="icons">
                    <a target="_blank"
                       rel="noreferrer"
                       href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N3UwZzc0YThiczkya3NzOTNkN2g4dTkwbWUgMjB2dGxncm9oODMydG9kZDgzMzZzMDFiMTBAZw&amp;tmsrc=20vtlgroh832todd8336s01b10%40group.calendar.google.com">
                        <img src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" alt="Google Calendar" />
                    </a>
                </div>
                </section>
            </div>
        </div>
    );
};