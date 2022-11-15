import {useContext} from 'react'
import styled from 'styled-components'

import {DesignContext} from '../../store/design-context'

import Card from './Card'

export default function Canvas() {    
    const designCtx = useContext(DesignContext);
    const plants = designCtx.selectedPlants;

    function onDragOver (e:any) {
        e.preventDefault();
    }

    function onDrop(e: any) {
        e.preventDefault();
        const cardId = e.dataTransfer.getData("cardId");
        const xoffset = e.dataTransfer.getData("xoffset");
        const yoffset = e.dataTransfer.getData("yoffset");

        const card = document.getElementById(cardId);

        if (card && card.style) {
            card.style.left = e.clientX + parseInt(xoffset, 10) + "px";
            card.style.top = e.clientY + parseInt(yoffset, 10) + "px";
        }
    }
    
    return (
        <CanvasContainer onDragOver={onDragOver} onDrop={onDrop}>
            {
              plants.map(plant => {
                  return <Card key={plant.itemId} plant={plant} />
              })
            }            
        </CanvasContainer>
      
    )
}

const CanvasContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 4;
    overflow: scroll;
    background: white;
`

