import React from 'react'
import styled from "styled-components";

import {IPlant} from './ts/interfaces'

interface IProps {
    plant: IPlant
    addToCanvas: (plant: IPlant) => {}
}

export default function PlantOption({plant, addToCanvas}: IProps) {   
    function onClick () {
        console.log(plant);
        
        //addToCanvas(plant)
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