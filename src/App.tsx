import React from 'react';
import logo from './logo.svg';
import './App.css';

import PlantContextProvider from './store/plants-context'

import PlantMenu from  './components/PlantMenu'

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
