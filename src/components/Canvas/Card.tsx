import React, { useContext } from "react";
import styled from "styled-components";

import { ICard, ICardPosition } from "../../ts/interfaces";
import { metresToPx } from "../../utils/conversions";
import { DesignContext } from "../../store/design-context";
import { onKeyDown, onDragStart } from "../../utils/elementInteraction";

import GlobalStyles from "../../constants/styles";

export default function Card(props: ICard) {
  const designCtx = useContext(DesignContext);

  const { itemId, position, name, dimensions, type, colour } = props;

  function elementShiftCb(id: string, pos: ICardPosition) {
    designCtx.updateCardPosition(id, pos);
  }

  function elementDeleteCb(id: string) {
    designCtx.removeFromCanvas(id, type);
  }

  function onFocus(e: any) {
    designCtx.setFocusedCard(e.target.id);
  }

  function onBlur(e: any) {
    // maintain card focus if one of the card stacking buttons is clicked.
    requestAnimationFrame(() => {
      if (
        e.relatedTarget &&
        e.relatedTarget.classList.contains("card-stacking-btn")
      ) {
        e.target.focus();
      } else if (
        !e.relatedTarget ||
        !e.relatedTarget.classList.contains("card")
      ) {
        designCtx.setFocusedCard("");
      }
    });
  }

  return (
    <CardContainer
      id={itemId}
      className="card"
      draggable={true}
      onDragStart={onDragStart}
      xInMetres={dimensions.xInMetres}
      yInMetres={dimensions.yInMetres}
      onKeyDown={(e: any) => onKeyDown(e, elementShiftCb, elementDeleteCb)}
      tabIndex={0}
      position={position}
      colour={colour}
      onBlur={onBlur}
      onFocus={onFocus}
      zIndex={designCtx.cards.length - 1}
    >
      {name && <p>{name}</p>}
    </CardContainer>
  );
}

interface IContainerProps {
  xInMetres: number;
  yInMetres: number | undefined;
  position: ICardPosition | undefined;
  colour?: string;
  zIndex?: number;
}

const CardContainer = styled.div.attrs(({position}: IContainerProps) => {
  // set position using attrs method to prevent classes being created everytime a card is shifted.
  return {
    style: {
      left: position?.left,
      top: position?.top
    }
  }
})<IContainerProps>`
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
  ${({ zIndex }) => {
  return `
     z-index: ${zIndex};
  `;
  }}
  cursor: pointer;
  ${({ colour }) => {
    return `
      background-color: ${colour || "transparent"};
      border: ${colour || GlobalStyles.colors.tertiary500 + "40"} 1.5px solid;
    `;
  }}
  color: ${GlobalStyles.colors.tertiary600};
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :focus {
    border: 1px solid ${GlobalStyles.colors.highlight500};
    color: ${GlobalStyles.colors.highlight500};
    outline: 1px solid ${GlobalStyles.colors.highlight500};
  }
 
`;