import React, { MouseEvent } from 'react'
import styled from 'styled-components'

import {IPlantWithItemId} from '../../ts/interfaces'
import {metresToPx} from '../../utils/conversions'

interface IProps {
  plant: IPlantWithItemId
}

export default function Card({plant}: IProps) {
    function onDragStart(e: any) {
      const target = e.target;

      e.dataTransfer.setData("cardId", target.id);

      e.dataTransfer.setData(
        "xoffset",
        target.getBoundingClientRect().left - e.clientX
      );
      e.dataTransfer.setData(
        "yoffset",
        target.getBoundingClientRect().top - e.clientY
      );
    }

    return (
      <StyledCard
        id={plant.itemId}
        draggable={true}
        onDragStart={onDragStart}
        widthInMetres={plant.widthInMetres}
      >
        <p>{plant.name}</p>
      </StyledCard>
    )
}

const StyledCard = styled.div<{widthInMetres: number}>`
  ${({widthInMetres}) => {
    const diameter = metresToPx(widthInMetres)
    return `
      border-radius: ${diameter / 2}px;
      height: ${diameter}px;
      width: ${diameter}px;
    `
  }}
  cursor: pointer;
  border: grey 1px solid;
  position: absolute;
  color: grey;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`