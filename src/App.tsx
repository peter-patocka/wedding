import React from 'react';
import {Map} from './app/components/Map'
import './App.css';
import {Date} from './app/components/Date';
import {PhotoGallery} from './app/components/PhotoGallery';

function App() {
  return (
    <div className="App">
      <Date/>
      <Map/>
      <PhotoGallery/>
    </div>
  );
}

export default App;
