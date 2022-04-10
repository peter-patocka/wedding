import React from 'react';
import { Header } from "../app/components/Header";
import { InvitationForm } from "../app/components/InvitationForm";
import harmonia from "../assets/harmonia.jpg";
import { Map } from "../app/components/Map";
import { PhotoGallery } from "../app/components/PhotoGallery";
import { Countdown } from "../app/components/Countdown";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <Countdown />
            <InvitationForm/>
            <img src={harmonia} alt="Eventová loď Harmónia" className="full-size"/>
            <Map/>
            <PhotoGallery/>
        </>
    );
};
