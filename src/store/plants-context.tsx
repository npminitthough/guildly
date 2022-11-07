import { createContext, useContext } from "react";
import { nanoid } from 'nanoid'

import PlantCategory from '../enums/plant-category'

interface PlantInterface {
    id: string;
    name: string;
    category: PlantCategory;
    maxWidthInMetres: number;
}

export const PlantCtx = createContext<PlantInterface[] | null>(null);

const initialPlantContext: PlantInterface[] = [
    {
        id: nanoid(4),
        name: "apricot tree",
        category: PlantCategory.SmallTree,
        maxWidthInMetres: 3
    }
];

const PlantContextProvider = ({children}: any) => {
    return <PlantCtx.Provider value={initialPlantContext}>{children}</PlantCtx.Provider>
}

export default PlantContextProvider;