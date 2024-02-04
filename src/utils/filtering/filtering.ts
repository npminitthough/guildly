import { IFilters, IPlant } from "../../ts/interfaces";

interface IUpdateFiltering {
    filterState: IFilters,
    setFilteredPlants: (plants: IPlant[]) => void,
    allPlants: IPlant[]
}

export function updateFiltering({filterState, setFilteredPlants, allPlants}: IUpdateFiltering) {
    if ((!filterState || (!filterState.categoryId && !filterState.insectAttractor && !filterState.nitrogenFixer && !filterState.nutrientAccumulator))) {
        setFilteredPlants(allPlants)
    }
    else {
        let filtered = allPlants;
        
        if (filterState.categoryId) {
            filtered = filtered?.filter(el => el.categoryId === filterState.categoryId)
        }

        filtered = filtered?.filter(plant => {
            return (!filterState.insectAttractor || plant.insectAttractor) &&
            (!filterState.nitrogenFixer || plant.nitrogenFixer) &&
            (!filterState.nutrientAccumulator || plant.nutrientAccumulator)
        })
            
       setFilteredPlants(filtered)
    }
}