import React from 'react';
import { Map } from './app/components/Map'
import './App.css';
import { Header } from './app/components/Header';
import { PhotoGallery } from './app/components/PhotoGallery';
import harmonia from './assets/harmonia.jpg';
import { WeddingTables } from './app/components/WeddingTables';
import { InvitationForm } from './app/components/InvitationForm';

function App() {
  return (
    <div className="App">
        <Header/>
        <InvitationForm />
        <img src={harmonia} alt="Eventová loď Harmónia" className="full-size" />
        <Map/>
        <WeddingTables />
        <PhotoGallery />
    </div>
  );
}

export default App;
