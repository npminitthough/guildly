import React, { createContext, useState, ReactNode } from "react";
import { nanoid } from 'nanoid'

import {IPlant, IPlantWithItemId} from '../ts/interfaces'

const defaultDesignContext = {
  selectedPlants: [{id: '', itemId: '', name: '', widthInMetres: 0}],
  addToCanvas: (plant: IPlant) => {}
}

export const DesignContext = createContext(defaultDesignContext);

interface IProps {
  children: ReactNode
}

export default function DesignContextProvider({ children }: IProps) {
  const initialState: IPlantWithItemId[] = []
  const [selectedPlants, addPlant] = useState(initialState);

  const addToCanvas = (plant: IPlant) => {
    const plantWithItemId = { ...plant, itemId: nanoid(4) }

    addPlant((currPlants) => {
      const updatedPlants = [...currPlants];
      updatedPlants.push(plantWithItemId)
      return updatedPlants
    });
  };

  return (
    <DesignContext.Provider value={{ selectedPlants, addToCanvas }}>
      {children}
    </DesignContext.Provider>
  );
}
