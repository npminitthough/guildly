import React, { useContext } from 'react'
import styled from 'styled-components'

import {IPlantWithItemId, IPlantPosition} from '../../ts/interfaces'
import {metresToPx} from '../../utils/conversions'
import {DesignContext} from '../../store/design-context'

import GlobalStyles from '../../constants/styles'
import {ArrowKeys} from '../../ts/enums'
import arrowKeyShift from '../../constants/arrowKeyShift'

interface IProps {
  plant: IPlantWithItemId
}

export default function Card({plant}: IProps) {
  const designCtx = useContext(DesignContext);

    function onDragStart(e: any) {
      const target = e.target;

      e.dataTransfer.setData("cardId", target.id);
      e.dataTransfer.setData(
        "offsetheight",
        target.offsetHeight
      );
      e.dataTransfer.setData(
        "offsetwidth",
        target.offsetWidth
      );
    }

    function onKeyDown (e: any) {
      if (Object.keys(arrowKeyShift).includes(e.key)) {
        e.preventDefault();
        const cardId = e.target.id;
        
        if ([ArrowKeys.up, ArrowKeys.down].includes(e.key)) {
          const top = e.target.offsetTop + arrowKeyShift[e.key] + 'px';
          e.target.style.top = top;
          
          designCtx.updatePlantPos(cardId, {
            left: e.target.offsetLeft + 'px',
            top
          });
        } else {
          const left = e.target.offsetLeft + arrowKeyShift[e.key] + 'px';
          e.target.style.left = left;

          designCtx.updatePlantPos(cardId, {
            left,
            top: e.target.offsetTop + 'px'
          });
        }  
      }
      
      if (e.key === "Backspace") {
          designCtx.removeFromCanvas(plant.itemId)
      }
    }

    return (
      <CardContainer
        id={plant.itemId}
        draggable={true}
        onDragStart={onDragStart}
        widthInMetres={plant.widthInMetres}
        onKeyDown={onKeyDown}
        tabIndex={0}
        position={plant.position}
      >
        <p>{plant.name}</p>
      </CardContainer>
    )
}

const CardContainer = styled.div<{widthInMetres: number, position: IPlantPosition }>`
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
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :focus {
    border: 1px solid #309bbf;
    color: #309bbf;
    outline: 1px solid #309bbf;
  };
  ${({position}) => {
    return position && `
      left: ${position.left};
      top: ${position.top};
    `
    }
  }
`