import {useContext} from 'react'
import styled from "styled-components";

import {IPlant} from './ts/interfaces'
import {DesignContext} from '../../store/design-context'

interface IProps {
    plant: IPlant
    // addToCanvas: (plant: IPlant) => {}
}

export default function PlantOption({plant, }: IProps) {
    const designCtx = useContext(DesignContext) 
    function onClick () {
        console.log(plant);
        
        designCtx.addToCanvas(plant)
    }
    return (
        <StyledPlantOption onClick={onClick}>{plant.name}</StyledPlantOption>
    )
}

const StyledPlantOption = styled.div`
  height: 40px;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
`;