import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuestForm } from "./app/components/GuestForm";
import { HomePage } from "./pages/HomePage";

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/invitation/*" element={<GuestForm/>} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
