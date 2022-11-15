import React from 'react';
import './App.css';

import PlantCatalogueContextProvider from './store/plant-catalogue-context'

import DesignPage from  './pages/DesignPage/DesignPage'

function App() {
  return (
    <PlantCatalogueContextProvider>
      <div className="App">
      <DesignPage />
      </div>
    </PlantCatalogueContextProvider>
  );
}

export default App;
