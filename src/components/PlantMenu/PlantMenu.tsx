import { useContext, useRef, useState } from "react";
import styled from "styled-components";

import useFilterPlants from "../../hooks/useFilterPlants/useFilterPlants";
import useGetCategories from "../../hooks/useGetCategories/useGetCategories";
import useGetPlants from "../../hooks/useGetPlants/useGetPlants";
import { FeatureFlagCxt } from "../../store/feature-flag-context";
import { IFilters } from "../../ts/interfaces";
import Searchbar from "../Searchbar/Searchbar";
import Filters from "../Filters/Filters";
import PlantInfo from "../PlantInfo/PlantInfo";
import PlantOption from "./PlantOption";
import PlantOptionContainer from "./PlantOptionContainer";
import { IOptionComponentProps } from "./ts/interface";

const PlantMenuWrapper = styled.div``;

export default function PlantMenu() {
  const FeatureFlagContext = useContext(FeatureFlagCxt);
  const [searchInputValue, setSearchInputValue] = useState("")
  const {result: categoryRes} = useGetCategories()

  const {loading, error, result} = useGetPlants({
    loading: true, error: false, result: undefined
  })
  
  const {filteredPlants, setFilterState, setSearchState} = useFilterPlants(result)

  const plantOptionsComponent = useRef<HTMLDivElement>(null);

  function updateSearchValue(value: string) {
    setSearchInputValue(value)
    setSearchState(value)
  }

  function updateFilters(filters: IFilters) {
    setFilterState(filters)

    if (plantOptionsComponent.current)
      plantOptionsComponent.current.scrollTo({ top: 0 });
  }

  return (
    

    <PlantMenuWrapper className="l-plant-menu">
      {FeatureFlagContext.showFilters ? (
        <>
        <Filters updateFilters={updateFilters} categories={categoryRes}/>
        <Searchbar value={searchInputValue} updateValue={updateSearchValue}/>
        </>
      ) : null}
        <PlantOptions className="plant-options" ref={plantOptionsComponent}>
          {
          loading ? <p>Loading plants...</p> : error ? <p>Error occurred loading plants</p>
          :
          filteredPlants?.map((plant, i) => { 
            return (
              <PlantOptionContainer
                key={i}
                plant={plant}
                optionComponent={(props: IOptionComponentProps) => {
                  if (FeatureFlagContext.showFilters) {
                    return (
                      <PlantInfo
                        {...props}
                        plant={plant}
                        highlightOnHover
                        style={{ cursor: "pointer" }}
                        categoryName={categoryRes && plant.categoryId && categoryRes[plant.categoryId]}
                      />
                    );
                  } else {
                    return <PlantOption {...props} plant={plant} />;
                  }
                }}
              />
            );
          })}
        
        </PlantOptions>
    </PlantMenuWrapper>

  );
}

const PlantOptions = styled.div`
  max-height: calc(100vh - 124px);
  overflow-y: auto;
`;
