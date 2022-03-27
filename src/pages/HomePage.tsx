import React from 'react';
import { Header } from "../app/components/Header";
import { InvitationForm } from "../app/components/InvitationForm";
import harmonia from "../assets/harmonia.jpg";
import { Map } from "../app/components/Map";
import { WeddingTables } from "../app/components/WeddingTables";
import { PhotoGallery } from "../app/components/PhotoGallery";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <InvitationForm/>
            <img src={harmonia} alt="Eventová loď Harmónia" className="full-size"/>
            <Map/>
            <WeddingTables/>
            <PhotoGallery/>
        </>
    );
};