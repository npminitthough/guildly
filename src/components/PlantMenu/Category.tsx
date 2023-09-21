import { useState, useContext } from "react";
import styled from "styled-components";

import GlobalStyles from "../../constants/styles";

import { FeatureFlagCxt } from "../../store/feature-flag-context";

import { ICategoryWithPlants } from "../../ts/interfaces";
import { CategoryName } from "../../ts/types";
import PlantInfo from "../PlantInfo/PlantInfo";

import ForwardChevron from "./img/chevron-forward-outline.svg";
import DownChevron from "./img/chevron-down-outline.svg";
import PlantOptionContainer from "./PlantOptionContainer";
import PlantOption from "./PlantOption";

import { IOptionComponentProps } from "./ts/interface";

interface IProps {
  category: ICategoryWithPlants;
}

export default function Category({ category }: IProps) {
  const [showPlantOptions, setShowPlantOptions] = useState(false);
  const FeatureFlagContext = useContext(FeatureFlagCxt);

  function onHeaderClick() {
    setShowPlantOptions(!showPlantOptions);
  }

  return (
    <div>
      <CategoryHeader onClick={onHeaderClick}>
        <p>
          {category.name} <Count>({category.plants.length})</Count>
        </p>
        <Icon src={showPlantOptions ? DownChevron : ForwardChevron} />
      </CategoryHeader>
      {showPlantOptions && (
        <PlantOptions className="plant-options">
          {category.plants.map((plant, i) => {
            return (
              <PlantOptionContainer
                key={i}
                plant={plant}
                category={category.name as CategoryName}
                optionComponent={(props: IOptionComponentProps) => {
                  if (FeatureFlagContext.showFilters) {
                    return (
                      <PlantInfo
                        {...props}
                        plant={plant}
                        highlightOnHover
                        style={{ cursor: "pointer" }}
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
      )}
    </div>
  );
}

const CategoryHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 16px;
  text-transform: capitalize;
  justify-content: space-between;
  cursor: pointer;
  margin: 0 20px;
`;

const Count = styled.span`
  color: white;
  font-size: 14px;
`;

const PlantOptions = styled.div`
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${GlobalStyles.colors.primary500};
  scrollbar-color: ${GlobalStyles.colors.secondary500}
    ${GlobalStyles.colors.primary500};
  scrollbar-width: thin;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${GlobalStyles.colors.secondary500};
  }
`;

const Icon = styled.img`
  height: 20px;
`;
