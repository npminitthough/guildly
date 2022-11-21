import React, { useContext } from "react";
import styled from "styled-components";

import { ICard, ICardPosition } from "../../ts/interfaces";
import { metresToPx } from "../../utils/conversions";
import { DesignContext } from "../../store/design-context";
import { onKeyDown, onDragStart } from "../../utils/elementInteraction";

import GlobalStyles from "../../constants/styles";

export default function Card(props: ICard) {
  const designCtx = useContext(DesignContext);
  const { itemId, position, name, dimensions, type } = props;

  function elementShiftCb(id: string, pos: ICardPosition) {
    designCtx.updateCardPosition(id, pos);
  }

  function elementDeleteCb(id: string) {
    designCtx.removeFromCanvas(id, type);
  }

  return (
    <CardContainer
      id={itemId}
      draggable={true}
      onDragStart={onDragStart}
      xInMetres={dimensions.xInMetres}
      yInMetres={dimensions.yInMetres}
      onKeyDown={(e) => onKeyDown(e, elementShiftCb, elementDeleteCb)}
      tabIndex={0}
      position={position}
    >
      {name && <p>{name}</p>}
    </CardContainer>
  );
}

const CardContainer = styled.div<{
  xInMetres: number;
  yInMetres: number | undefined;
  position: ICardPosition | undefined;
}>`
  ${({ xInMetres }) => {
    const widthPx = metresToPx(xInMetres);
    const fontSize = widthPx < 50 ? 12 : 16;

    return `
        width: ${widthPx}px;
        font-size: ${fontSize}px;
      `;
  }}
  ${({ yInMetres, xInMetres }) => {
    const widthPx = metresToPx(xInMetres);
    if (yInMetres) {
      const heightPx = metresToPx(yInMetres);

      return `
        height: ${heightPx}px;
      `;
    } else {
      return `
        height: ${widthPx}px;
        border-radius: ${widthPx / 2}px;
      `;
    }
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
