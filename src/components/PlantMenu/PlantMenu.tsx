import { useContext } from "react";
import styled from "styled-components";

import Category from "./Category";
import { PlantCatalogueCtx } from "../../store/plant-catalogue-context";
import { FeatureFlagCxt } from "../../store/feature-flag-context";
import Filters from "../Filters/Filters";

const PlantMenuWrapper = styled.div``;

export default function PlantMenu() {
  const PlantCatalogueContext = useContext(PlantCatalogueCtx);
  const FeatureFlagContext = useContext(FeatureFlagCxt);

  const categories = PlantCatalogueContext.plantCatalogue || [];

  return (
    <PlantMenuWrapper className="l-plant-menu">
      {FeatureFlagContext.showFilters ? <Filters /> : null}
      {categories.map((category, i) => {
        return <Category key={i} category={category} />;
      })}
    </PlantMenuWrapper>
  );
}
