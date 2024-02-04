import { CategoryName } from "../../ts/types"
import { updateFiltering } from "./filtering"
import {PLANTS} from "./test-data"

describe('filtering', () => {
    describe('#updateFiltering', () => {
        const setFilteredPlants = jest.fn()
        it('sets filtered plants to all plants when there are no filters applied', () => {
            const filterState = {
                nitrogenFixer: false,
                insectAttractor: false,
                nutrientAccumulator: false,
                categoryId: null
            }

            updateFiltering({filterState, setFilteredPlants, allPlants: PLANTS})
            expect(setFilteredPlants).toBeCalledTimes(1)
            expect(setFilteredPlants).toBeCalledWith(PLANTS)
        })

        it('filters by category', () => {
            const filterState = {
                nitrogenFixer: false,
                insectAttractor: false,
                nutrientAccumulator: false,
                categoryId: "rKO4wursmqj8v1UBOwG2"
            }

            updateFiltering({filterState, setFilteredPlants, allPlants: PLANTS})
            expect(setFilteredPlants).toBeCalledTimes(1)
            expect(setFilteredPlants).toBeCalledWith(PLANTS.filter(plant => plant.categoryId === filterState.categoryId))
        })

        it('filters by function', () => {
            const filterState = {
                nitrogenFixer: true,
                insectAttractor: false,
                nutrientAccumulator: false,
                categoryId: null
            }

            updateFiltering({filterState, setFilteredPlants, allPlants: PLANTS})
            expect(setFilteredPlants).toBeCalledTimes(1)
            expect(setFilteredPlants).toBeCalledWith(PLANTS.filter(plant => plant.nitrogenFixer === filterState.nitrogenFixer))
        })

        it('filters by category & function', () => {
            const filterState = {
                nitrogenFixer: true,
                insectAttractor: false,
                nutrientAccumulator: false,
                categoryId: "rKO4wursmqj8v1UBOwG2"
            }

            updateFiltering({filterState, setFilteredPlants, allPlants: PLANTS})
            expect(setFilteredPlants).toBeCalledTimes(1)
            expect(setFilteredPlants).toBeCalledWith(PLANTS.filter(plant => 
                plant.nitrogenFixer === filterState.nitrogenFixer
                && plant.categoryId === filterState.categoryId
                
            ))
        })

        it('filters by multiple functions', () => {
            const filterState = {
                nitrogenFixer: true,
                insectAttractor: true,
                nutrientAccumulator: false,
                categoryId: "rKO4wursmqj8v1UBOwG2"
            }

            updateFiltering({filterState, setFilteredPlants, allPlants: PLANTS})
            expect(setFilteredPlants).toBeCalledTimes(1)
            expect(setFilteredPlants).toBeCalledWith(PLANTS.filter(plant => 
                plant.nitrogenFixer === filterState.nitrogenFixer
                && plant.insectAttractor === filterState.insectAttractor
                && plant.categoryId === filterState.categoryId
            ))
        })

        it('filters by multiple functions & category', () => {
            const filterState = {
                nitrogenFixer: true,
                insectAttractor: true,
                nutrientAccumulator: false,
                categoryId: null
            }

            updateFiltering({filterState, setFilteredPlants, allPlants: PLANTS})
            expect(setFilteredPlants).toBeCalledTimes(1)
            expect(setFilteredPlants).toBeCalledWith(PLANTS.filter(plant => 
                plant.nitrogenFixer === filterState.nitrogenFixer
                && plant.insectAttractor === filterState.insectAttractor
            ))
        })
    })
})