import { useState, useEffect } from 'react'
import {updateFiltering} from '../../utils/filtering/filtering';

import { IFilters, IPlant } from "../../ts/interfaces";

export default function useFilterPlants(allPlants: IPlant[]) {
    const [filteredPlants, setFilteredPlants] = useState<IPlant[]>()
    const [filterState, setFilterState] = useState({
        nitrogenFixer: false,
        insectAttractor: false,
        nutrientAccumulator: false,
        categoryId: null,
      } as IFilters);

    const [searchState, setSearchState] = useState("")
      
    useEffect(() => {
        setFilteredPlants(allPlants)
    }, [allPlants])

    useEffect(() => {
        updateFiltering({filterState, setFilteredPlants, allPlants, searchState})    
    }, [filterState, allPlants, searchState])

    return {filteredPlants, setFilterState, setSearchState}
}
