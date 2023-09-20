import styled from "styled-components";
import { useContext } from "react";

import { FeatureFlagCxt } from "../../store/feature-flag-context";
import Category from "./Category";
import Filters from "../Filters/Filters";
import { ICategory, IPlant } from "../../ts/interfaces";

const PlantMenuWrapper = styled.div``;

interface IPlantMenu {
  categories: ICategory[];
  plants: IPlant[];
}

export default function PlantMenu({ plants, categories }: IPlantMenu) {
  let categoriesWithPlants;
  const FeatureFlagContext = useContext(FeatureFlagCxt);

  if (!categories.length) {
    categoriesWithPlants = [
      { name: "small trees", plants: [] },
      { name: "shrubs", plants: [] },
      { name: "perennial vegetables", plants: [] },
      { name: "ornamental perennials", plants: [] },
      { name: "common herbs", plants: [] },
      { name: "bulbs", plants: [] },
      { name: "ground cover", plants: [] },
      { name: "root crops", plants: [] },
      { name: "green manures", plants: [] },
      { name: "climbers", plants: [] },
    ];

    categoriesWithPlants.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    categoriesWithPlants = categories.map((category) => {
      return {
        name: category.name,
        plants: plants.filter((plant) => plant.categoryId === category.id),
      };
    });
  }

  return (
    <PlantMenuWrapper className="l-plant-menu">
      {FeatureFlagContext.showFilters ? <Filters /> : null}
      {categoriesWithPlants.map((category, i) => {
        return <Category key={i} category={category} />;
      })}
    </PlantMenuWrapper>
  );
}
