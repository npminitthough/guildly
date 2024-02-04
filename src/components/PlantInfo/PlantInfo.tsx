import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../constants/styles";
import { IPlant } from "../../ts/interfaces";

import { getDisplayValue } from "../../utils/conversions";
import Tag from "../common/Tag/Tag";

interface IProps {
  id?: string;
  plant: IPlant;
  categoryName?: string;
  style?: React.CSSProperties;
  highlightOnHover?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function PlantInfo({
  id,
  plant,
  categoryName,
  style,
  highlightOnHover,
  className,
  onClick,
}: IProps) {
  const {
    widthInMetres,
    heightInMetres,
    rootStock,
    imageUrl,
    insectAttractor,
    nitrogenFixer,
    nutrientAccumulator,
    name
  } = plant;

  const widthDisplayValue = getDisplayValue(widthInMetres);
  const heightDisplayValue = heightInMetres
    ? getDisplayValue(heightInMetres)
    : null;

  return (
    <PlantInfoContainer
      id={id}
      style={style}
      onClick={onClick}
      highlightOnHover={highlightOnHover}
      className={className}
    >
      <PlantDetailsContainer style={{ display: "flex" }}>
        <div>
          <PlantInfoItem
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <PlantName>{name}</PlantName>
          </PlantInfoItem>
          <PlantInfoItem>
            <Label>Max spread: </Label>
            <Text>
              {widthDisplayValue.value}
              {widthDisplayValue.units}
            </Text>
          </PlantInfoItem>
          {heightDisplayValue && (
            <PlantInfoItem>
              <Label>Max height: </Label>
              <Text>
                {heightDisplayValue.value}
                {heightDisplayValue.units}
              </Text>
            </PlantInfoItem>
          )}
          {rootStock && (
            <PlantInfoItem>
              <Label>Root stock: </Label>
              <Text>{rootStock}</Text>
            </PlantInfoItem>
          )}
          
        </div>

        {imageUrl && <Image src={imageUrl} alt={name} />}
      </PlantDetailsContainer>
      <TagContainer className="plant-info__tags">
        {nitrogenFixer && <Tag color="cornflowerblue">nitrogen fixer</Tag>}
        {insectAttractor && <Tag color="purple">insect attractor</Tag>}
        {nutrientAccumulator && <Tag color="orange">nutrient accumulator</Tag>}
        {categoryName && <Tag color="darkgoldenrod" variant="transparent">{categoryName.replace(/s$/, '')}</Tag>}
      </TagContainer>
    </PlantInfoContainer>
  );
}

const PlantInfoContainer = styled.div<{ highlightOnHover?: boolean }>`
  max-width: 255px;
  min-height: 40px;
  padding: 15px 20px;
  background-color: white;
  text-align: left;
  box-shadow: 0 0 1px grey;
  border-right: #bcbfba 0.05px solid;
  ${({ highlightOnHover }) => {
    return (
      highlightOnHover &&
      `:hover {
        box-shadow: inset 1px 1px 8px lightgrey;
      }`
    );
  }}
`;

const PlantDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlantName = styled.div`
  font-family: monospace;
  text-decoration: underline;
  color: ${GlobalStyles.colors.tertiary600};
  font-weight: bold;
`;

const PlantInfoItem = styled.div`
  margin-bottom: 12px;
  text-transform: capitalize;
`;

const Label = styled.span`
  color: ${GlobalStyles.colors.primary700};
`;

const Text = styled.span`
  color: ${GlobalStyles.colors.tertiary600};
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  margin-left: 15px;
`;

const TagContainer = styled.div`
  display: inline-flex;
  margin-top: 10px;
`;
