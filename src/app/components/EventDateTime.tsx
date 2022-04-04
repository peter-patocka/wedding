import React from 'react';
import './Countdown.css';
import { DATE } from "../../data/constants";
import * as Icons from "@material-ui/icons";

export const EventDateTime = () => {
    return (
        <>
            <h2>
                <div className="header-date">
                    <span>
                        <Icons.CalendarToday /> {DATE.toLocaleDateString()}
                    </span>
                </div>
                <div className="header-time">
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
        </>
    );
};
