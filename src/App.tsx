import React from 'react';
import './App.css';

import PlantCatalogueContextProvider from './store/plant-catalogue-context'
import DesignContextProvider from './store/design-context'

import DesignPage from  './pages/DesignPage/DesignPage'

function App() {
  return (
    <PlantCatalogueContextProvider>
      <div className="App">
        <DesignContextProvider>
          <DesignPage />
        </DesignContextProvider>
      </div>
    </PlantCatalogueContextProvider>
  );
}

export default App;
