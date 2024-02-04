import { useState, useEffect } from 'react'
import {updateFiltering} from '../../utils/filtering/filtering';

import { IFilters, IPlant } from "../../ts/interfaces";

export default function useFilterPlants(allPlants: IPlant[]) {
    const [filteredPlants, setFilteredPlants] = useState<IPlant[]>()
    const [filterState, setFilterState] = useState({
        nitrogenFixer: false,
        insectAttractor: false,
        nutrientAccumulator: false,
        categoryId: null
      } as IFilters);

    useEffect(() => {
        setFilteredPlants(allPlants)
    }, [allPlants])

    useEffect(() => {
        updateFiltering({filterState, setFilteredPlants, allPlants})    
    }, [filterState, allPlants])

    return {filteredPlants, setFilterState}
}
