import React, { createContext, useState, ReactNode } from "react";
import { nanoid } from 'nanoid'

import {IPlant, IPlantWithItemId, IPlantPosition, IScrollPosition} from '../ts/interfaces'

const defaultDesignContext = {
  selectedPlants: [{itemId: '', name: '', widthInMetres: 0, position: {top: '', left: ''}}],
  addToCanvas: (plant: IPlant) => {},
  removeFromCanvas: (itemId: string) => {},
  updatePlantPos: (itemId: string, position: IPlantPosition) => {},
  canvasScrollPos: {scrollTop: 0, scrollLeft: 0},
  updateCanvasScrollPos: ({scrollTop, scrollLeft}: IScrollPosition) => {}
}

export const DesignContext = createContext(defaultDesignContext);

interface IProps {
  children: ReactNode
}

function setInitialPlantPos (scrollPos: IScrollPosition) {
  const initialPos = {
    top: 15 + scrollPos.scrollTop + 'px',
    left: 20 + scrollPos.scrollLeft + 'px'
  }

  return initialPos;
}

export default function DesignContextProvider({ children }: IProps) {
  const initialState: IPlantWithItemId[] = []
  const [selectedPlants, updatePlants] = useState(initialState);
  const [canvasScrollPos, updateCanvasScrollPos] = useState({scrollTop: 0, scrollLeft: 0})

  const addToCanvas = (plant: IPlant) => {
    const plantWithItemId = { ...plant, itemId: nanoid(4), position: setInitialPlantPos(canvasScrollPos) }

    updatePlants((currPlants: IPlantWithItemId[]) => {
      const newPlants = [...currPlants];
      newPlants.push(plantWithItemId)
      return newPlants
    });
  };

  const updatePlantPos = (itemId: string, position: IPlantPosition)  => {

    updatePlants((currPlants: IPlantWithItemId[]) => {
      const plantIndex = currPlants.findIndex(p => p.itemId === itemId)
      const newPlants = [...currPlants];
      newPlants[plantIndex].position = position;

      return newPlants;
    })
  }

  const removeFromCanvas = (itemId: string) => {
    updatePlants((currPlants: IPlantWithItemId[]) => {
      return currPlants.filter(p => p.itemId !== itemId)
    })
  }

  return (
    <DesignContext.Provider value={{ selectedPlants, addToCanvas, removeFromCanvas, updatePlantPos, canvasScrollPos, updateCanvasScrollPos }}>
      {children}
    </DesignContext.Provider>
  );
}
