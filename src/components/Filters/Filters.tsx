import { useContext } from "react";
import styled from "styled-components";

import { PlantCatalogueCtx } from "../../store/plant-catalogue-context";

import { IFilters } from "../../ts/interfaces";

import Checkbox from "../common/Checkbox/Checkbox";
import NitrogenFixer from "../common/Icon/NitrogenFixer";
import InsectAttractor from "../common/Icon/InsectAttractor";
import NutrientAccumulator from "../common/Icon/NutrientAccumulator";

import MenuSection from "../common/MenuSection/MenuSection";
const iconStyles = { marginLeft: "5px" };

export default function Filters() {
  const PlantCatalogueContext = useContext(PlantCatalogueCtx);
  const appliedFilters = PlantCatalogueContext.filters;

  function onCheckboxChange(e: any) {
    const key = e.target.getAttribute("data-id");
    const value = !appliedFilters[key as keyof IFilters];

    const newFilters = {
      ...appliedFilters,
      [key]: value,
    };

    PlantCatalogueContext.updateFilters(newFilters);
  }

  return (
    <MenuSection title="Filters">
      <CheckboxGroup>
        <GroupTitle>Function:</GroupTitle>
        <CheckboxContainer>
          <Checkbox
            label="nitrogen fixer"
            checked={appliedFilters.nitrogenFixer}
            dataId="nitrogenFixer"
            onChange={onCheckboxChange}
          />
          <NitrogenFixer style={iconStyles} />
        </CheckboxContainer>
        <CheckboxContainer>
          <Checkbox
            label="insect attractor"
            checked={appliedFilters.insectAttractor}
            dataId="insectAttractor"
            onChange={onCheckboxChange}
          />
          <InsectAttractor style={iconStyles} />
        </CheckboxContainer>
        <CheckboxContainer>
          <Checkbox
            label="nutrient accumulator"
            checked={appliedFilters.nutrientAccumulator}
            dataId="nutrientAccumulator"
            onChange={onCheckboxChange}
          />
          <NutrientAccumulator style={iconStyles} />
        </CheckboxContainer>
      </CheckboxGroup>
      <CheckboxGroup>
        <GroupTitle>Rootstock:</GroupTitle>
        <Checkbox
          label="quince c"
          checked={appliedFilters.quinceC}
          dataId={"quinceC"}
          onChange={onCheckboxChange}
        />
        <Checkbox
          label="M27"
          checked={appliedFilters.m27}
          dataId={"m27"}
          onChange={onCheckboxChange}
        />
        <Checkbox
          label="VVA-1"
          checked={appliedFilters.vva1}
          dataId={"vva1"}
          onChange={onCheckboxChange}
        />
      </CheckboxGroup>
    </MenuSection>
  );
}

const CheckboxGroup = styled.div`
  display: block;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const GroupTitle = styled.h5`
  margin: 0 0 20px 0;
  text-decoration: underline;
`;

const CheckboxContainer = styled.div`
  display: flex;
`;
