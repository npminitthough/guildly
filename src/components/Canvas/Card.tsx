import React, { MouseEvent, useContext, useState } from 'react'
import styled from 'styled-components'

import {IPlantWithItemId} from '../../ts/interfaces'
import {metresToPx} from '../../utils/conversions'
import {DesignContext} from '../../store/design-context'

import GlobalStyles from '../../constants/styles'
import {ArrowKeys} from '../../ts/enums'
import arrowKeyShift from '../../constants/arrowKeyShift'

interface IProps {
  plant: IPlantWithItemId
}

export default function Card({plant}: IProps) {
  const [hightlighted, setHighlighted] = useState(false)
  const designCtx = useContext(DesignContext)

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

    function onKeyDown (e: any) {
      if (Object.keys(arrowKeyShift).includes(e.key)) {
        e.preventDefault();

        if ([ArrowKeys.up, ArrowKeys.down].includes(e.key)) {
          e.target.style.top = parseInt(e.target.style.top, 10) + arrowKeyShift[e.key] + 'px'
        } else {
          e.target.style.left = parseInt(e.target.style.left, 10) + arrowKeyShift[e.key] + 'px'
        }  
      }
      
      if (e.key === "Backspace") {
          designCtx.removeFromCanvas(plant.itemId)
      }
    }

    return (
      <StyledCard
        id={plant.itemId}
        draggable={true}
        onDragStart={onDragStart}
        widthInMetres={plant.widthInMetres}
        onKeyDown={onKeyDown}
        tabIndex={0}
        hightlighted={hightlighted}
        onFocus={() => setHighlighted(true)}
        onBlur={() => setHighlighted(false)}
      >
        <p>{plant.name}</p>
      </StyledCard>
    )
}

const StyledCard = styled.div<{widthInMetres: number, hightlighted: boolean}>`
  ${({widthInMetres}) => {
    const diameter = metresToPx(widthInMetres)
    const fontSize = diameter < 50 ? 12 : 16

    return `
      border-radius: ${diameter / 2}px;
      height: ${diameter}px;
      width: ${diameter}px;
      font-size: ${fontSize}px;
    `
  }}
  cursor: pointer;
  border: ${GlobalStyles.colors.tertiary600} 1px solid;
  color: ${GlobalStyles.colors.tertiary600};
  ${({hightlighted}) => {
    return hightlighted && `
      border: #309bbf  1px solid;
      color: #309bbf;
      `
  }}
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`