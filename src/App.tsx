import React from 'react';
import { GuestForm } from "./app/components/GuestForm";
import { Route, Routes } from "react-router-dom";

import './App.css';
import { HomePage } from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/accept-invitation" element={<GuestForm/>} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
