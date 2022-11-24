import styled from "styled-components";
import GlobalStyles from "../../constants/styles";
import { IPlant } from "../../ts/interfaces";

import { getDisplayValue } from "../../utils/conversions";

import Tag from "../common/Tag/Tag";

interface IProps {
  id: string;
  plant: IPlant;
}

export default function PlantInfo({ id, plant }: IProps) {
  const {
    widthInMetres,
    heightInMetres,
    rootStock,
    imageUrl,
    insectAttractor,
    nitrogenFixer,
    nutrientAccumulator,
  } = plant;
  const widthDisplayValue = getDisplayValue(widthInMetres);
  const heightDisplayValue = heightInMetres
    ? getDisplayValue(heightInMetres)
    : null;

  return (
    <PlantInfoContainer id={id}>
      <div style={{ float: "left" }}>
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

      {imageUrl && <Image src={imageUrl} />}

      <TagContainer>
        {insectAttractor && <Tag color="purple">insect attractor</Tag>}
        {nitrogenFixer && <Tag color="cornflowerblue">nitrogen fixer</Tag>}
        {nutrientAccumulator && <Tag color="organge">insect attractor</Tag>}
      </TagContainer>
    </PlantInfoContainer>
  );
}

const PlantInfoContainer = styled.div`
  position: absolute;
  width: fit-content;
  min-height: 40px;
  padding: 15px 20px;
  background-color: white;
  text-align: left;
  z-index: 2;
  box-shadow: 0 0 1px grey;
`;

const PlantInfoItem = styled.p`
  margin-top: 0;
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
  float: right;
`;

const TagContainer = styled.div``;
