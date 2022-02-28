import React from 'react';
import { Header } from "../app/components/Header";
import { InvitationForm } from "../app/components/InvitationForm";
import harmonia from "../assets/harmonia.jpg";
import { Map } from "../app/components/Map";
import { WeddingTables } from "../app/components/WeddingTables";
import { PhotoGallery } from "../app/components/PhotoGallery";
import { Guest } from "../types/entity/Guest";
import { onFetchGuestsSuccess } from "../store/guests/epics";
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {

    const navigate = useNavigate();

    const onUpdate = (rows: Guest[]) => {
        alert('Thanks for your attendance!');
        if(rows.length > 0) {
            onFetchGuestsSuccess(rows);
            navigate("/invitation/"+ rows[0].invitation_code);
        }
    };

    return (
        <>
            <Header/>
            <InvitationForm onUpdate={onUpdate}/>
            <img src={harmonia} alt="Eventová loď Harmónia" className="full-size"/>
            <Map/>
            <WeddingTables/>
            <PhotoGallery/>
        </>
    );
};