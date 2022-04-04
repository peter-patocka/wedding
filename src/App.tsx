import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuestPage } from "./pages/GuestPage";
import { HomePage } from "./pages/HomePage";

import main from './main';
import './App.css';
import { useSelector } from "react-redux";
import { ApplicationState } from "./types/applicationState";

function App() {

    const guestsState = useSelector((state: ApplicationState) => state.guestState);

    useEffect(() => {
        main();
    }, [guestsState]);

    return (
        <BrowserRouter basename={'/wedding'}>
            <div className="App">
                <Routes>
                    <Route path="/inv/:code" element={<GuestPage/>} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
