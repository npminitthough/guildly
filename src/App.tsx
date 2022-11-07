import React from 'react';
import logo from './logo.svg';
import './App.css';

import PlantContextProvider from './store/plants-context'

import PlantMenu from  './components/plant-menu'

function App() {
  return (
    <PlantContextProvider>
      <div className="App">
      <PlantMenu />
      </div>
    </PlantContextProvider>
  );
}

export default App;
