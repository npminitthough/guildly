import { createContext, useState } from "react";

import PLANT_CATALOGUE from "./plant-catalogue";
import { ICategoryWithPlants, IFilters } from "../ts/interfaces";

const initialPlantCatalogueCtx: ICategoryWithPlants[] = PLANT_CATALOGUE;

const initialFilters = {
  nitrogenFixer: false,
  insectAttractor: false,
  nutrientAccumulator: false,
};

const defaultContext = {
  plantCatalogue: initialPlantCatalogueCtx,
  filters: initialFilters,
  updateFilters: (filters: IFilters) => {},
};

export const PlantCatalogueCtx = createContext(defaultContext);

const PlantCatalogueContextProvider = ({ children }: any) => {
  const [filters, setFilters] = useState(initialFilters);

  const updateFilters = (opts: IFilters) => {
    setFilters(opts);
  };

  return (
    <PlantCatalogueCtx.Provider
      value={{
        plantCatalogue: initialPlantCatalogueCtx,
        filters,
        updateFilters,
      }}
    >
      {children}
    </PlantCatalogueCtx.Provider>
  );
};

export default PlantCatalogueContextProvider;
