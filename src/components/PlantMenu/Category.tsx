import { useState } from "react";
import styled from "styled-components";

import GlobalStyles from '../../constants/styles'

import {ICategory} from '../../ts/interfaces'
import PlantOption from './PlantOption'

import ForwardChevron from "./img/chevron-forward-outline.svg";
import DownChevron from "./img/chevron-down-outline.svg";

interface IProps {
  category: ICategory
}

export default function Category({ category }: IProps) {
  const [showPlantOptions, setShowPlantOptions] = useState(false);

  function onHeaderClick() {
    setShowPlantOptions(!showPlantOptions);
  }

  return (
    <div>
      <CategoryHeader onClick={onHeaderClick}>
        <p>{category.name}</p>
        <Icon src={showPlantOptions ? DownChevron : ForwardChevron} />
      </CategoryHeader>
      {showPlantOptions && (
        <PlantOptions>
          {category.plants.map((plant, i) => {
            return <PlantOption key={i} plant={plant} />;
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
  font-size: 16px;
  text-transform: capitalize;
  justify-content: space-between;
  cursor: pointer;
  margin: 0 20px;
`;

const PlantOptions = styled.div`
  max-height: 160px;
  overflow-y: scroll;
  background-color: ${GlobalStyles.colors.primary500};
  scrollbar-color:  ${GlobalStyles.colors.secondary500} ${GlobalStyles.colors.primary500};
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
