import React, { useContext } from "react";
import styled from "styled-components";

import { IPlantWithItemId, IPlantPosition } from "../../ts/interfaces";
import { metresToPx } from "../../utils/conversions";
import { DesignContext } from "../../store/design-context";
import { onKeyDown, onDragStart } from '../../utils/elementInteraction'; 

import GlobalStyles from "../../constants/styles";

interface IProps {
  plant: IPlantWithItemId;
}

export default function Card({ plant }: IProps) {
  const designCtx = useContext(DesignContext);

  function elementShiftCb (id: string, pos: IPlantPosition) {
    designCtx.updatePlantPos(id, pos)
  }

  function elementDeleteCb (id: string) {
    designCtx.removeFromCanvas(id);
  }

  return (
    <CardContainer
      id={plant.itemId}
      draggable={true}
      onDragStart={onDragStart}
      widthInMetres={plant.widthInMetres}
      onKeyDown={(e) => onKeyDown(e, elementShiftCb, elementDeleteCb)}
      tabIndex={0}
      position={plant.position}
    >
      <p>{plant.name}</p>
    </CardContainer>
  );
}

const CardContainer = styled.div<{
  widthInMetres: number;
  position: IPlantPosition;
}>`
  ${({ widthInMetres }) => {
    const diameter = metresToPx(widthInMetres);
    const fontSize = diameter < 50 ? 12 : 16;

    return `
      border-radius: ${diameter / 2}px;
      height: ${diameter}px;
      width: ${diameter}px;
      font-size: ${fontSize}px;
    `;
  }}
  cursor: pointer;
  border: ${GlobalStyles.colors.tertiary600} 1px solid;
  color: ${GlobalStyles.colors.tertiary600};
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :focus {
    border: 1px solid #309bbf;
    color: #309bbf;
    outline: 1px solid #309bbf;
  }
  ${({ position }) => {
    return (
      position &&
      `
      left: ${position.left};
      top: ${position.top};
    `
    );
  }}
`;
