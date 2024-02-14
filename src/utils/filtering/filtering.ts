import { IFilters, IPlant } from "../../ts/interfaces";

interface IUpdateFiltering {
    filterState?: IFilters,
    searchState?: string,
    setFilteredPlants: (plants: IPlant[]) => void,
    allPlants: IPlant[]
}

const defaultFilterState = {
    nitrogenFixer: false,
    insectAttractor: false,
    nutrientAccumulator: false,
    categoryId: null
}

export function updateFiltering({filterState = defaultFilterState, searchState = "", setFilteredPlants, allPlants}: IUpdateFiltering) {
    if ((searchState.length < 1 && (!filterState.categoryId && !filterState.insectAttractor && !filterState.nitrogenFixer && !filterState.nutrientAccumulator))) {
        setFilteredPlants(allPlants)
    }
    else {
        let filtered = allPlants;        

        if (searchState && searchState.length > 0) {
            filtered = filtered?.filter(el => el.name.toLowerCase().indexOf(searchState.toLowerCase()) > -1)
        }
        
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