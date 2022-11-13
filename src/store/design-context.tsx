import React, { createContext, useState, ReactNode } from "react";
import { nanoid } from 'nanoid'

import {IPlant, IPlantWithItemId} from '../ts/interfaces'

const defaultDesignContext = {
  selectedPlants: [{itemId: '', name: '', widthInMetres: 0}],
  addToCanvas: (plant: IPlant) => {},
  removeFromCanvas: (itemId: string) => {}
}

export const DesignContext = createContext(defaultDesignContext);

interface IProps {
  children: ReactNode
}

export default function DesignContextProvider({ children }: IProps) {
  const initialState: IPlantWithItemId[] = []
  const [selectedPlants, updatePlants] = useState(initialState);

  const addToCanvas = (plant: IPlant) => {
    const plantWithItemId = { ...plant, itemId: nanoid(4) }

    updatePlants((currPlants) => {
      const updatedPlants = [...currPlants];
      updatedPlants.push(plantWithItemId)
      return updatedPlants
    });
  };

  const removeFromCanvas = (itemId: string) => {
    updatePlants(currPlants => {
      return currPlants.filter(p => p.itemId !== itemId)
    })
  }

  return (
    <DesignContext.Provider value={{ selectedPlants, addToCanvas, removeFromCanvas }}>
      {children}
    </DesignContext.Provider>
  );
}
