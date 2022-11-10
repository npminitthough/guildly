import {useContext} from 'react'
import styled from "styled-components";

import Category from "./Category";
import {PlantCatalogueCtx} from '../../store/plant-catalogue-context'

const PlantMenuWrapper = styled.div`
  max-width: 200px;
`;

export default function PlantMenu() {
  const PlantCatalogueContext = useContext(PlantCatalogueCtx);
  console.log(PlantCatalogueContext);
  const categories = PlantCatalogueContext || []
  
  return (
    <div className="l-plant-menu">
      {categories.map((category, i) => {
        return <Category key={i} category={category} />;
      })}
    </div>
  );
}
