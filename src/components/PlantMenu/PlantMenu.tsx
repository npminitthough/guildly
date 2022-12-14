import { useContext } from "react";
import styled from "styled-components";

import Category from "./Category";
import { PlantCatalogueCtx } from "../../store/plant-catalogue-context";

const PlantMenuWrapper = styled.div``;

export default function PlantMenu() {
  const PlantCatalogueContext = useContext(PlantCatalogueCtx);
  const categories = PlantCatalogueContext || [];

  return (
    <PlantMenuWrapper className="l-plant-menu">
      {categories.map((category, i) => {
        return <Category key={i} category={category} />;
      })}
    </PlantMenuWrapper>
  );
}
