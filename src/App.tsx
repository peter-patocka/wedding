import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuestForm } from "./app/components/GuestForm";
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
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/invitation/:code" element={<GuestForm/>} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
