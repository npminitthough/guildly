import React, { MouseEvent } from 'react'
import styled from 'styled-components'

import {IPlantWithItemId} from '../../ts/interfaces'

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
      >
        <p>{plant.name}</p>
      </StyledCard>
    )
}

const StyledCard = styled.div`
  cursor: pointer;
  border: grey 1px solid;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  position: absolute;
  color: grey;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`