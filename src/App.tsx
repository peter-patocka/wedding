import React from 'react';
import {Map} from './app/components/Map'
import './App.css';
import {Header} from './app/components/Header';
import {PhotoGallery} from './app/components/PhotoGallery';
import harmonia from './assets/harmonia.jpg';

function App() {
  return (
    <div className="App">
        <Header/>
        <img src={harmonia} alt="Eventová loď Harmónia" className="full-size" />
        <Map/>
        <PhotoGallery/>
    </div>
  );
}

export default App;
