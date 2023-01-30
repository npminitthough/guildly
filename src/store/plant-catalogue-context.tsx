import { createContext } from "react";

import PLANT_CATALOGUE from "./plant-catalogue";
import { ICategory } from "../ts/interfaces";

export const PlantCatalogueCtx = createContext<ICategory[] | null>(null);

const initialPlantCatalogueCtx: ICategory[] = PLANT_CATALOGUE;

const PlantCatalogueContextProvider = ({ children }: any) => {
  return (
    <PlantCatalogueCtx.Provider value={initialPlantCatalogueCtx}>
      {children}
    </PlantCatalogueCtx.Provider>
  );
};

export default PlantCatalogueContextProvider;
