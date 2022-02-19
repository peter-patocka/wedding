import React from 'react';
import { Header } from "../app/components/Header";
import { InvitationForm } from "../app/components/InvitationForm";
import harmonia from "../assets/harmonia.jpg";
import { Map } from "../app/components/Map";
import { WeddingTables } from "../app/components/WeddingTables";
import { PhotoGallery } from "../app/components/PhotoGallery";
import { Guest } from "../types/entity/Guest";

interface  HomePageProps {

}

export const HomePage = (props: HomePageProps) => {

    const onUpdate = (rows: Guest[]) => {
        alert('Thanks for your attendance!');
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
