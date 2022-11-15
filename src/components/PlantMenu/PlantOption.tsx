import {useContext} from 'react'
import styled from "styled-components";

import {IPlant} from '../../ts/interfaces'
import {DesignContext} from '../../store/design-context'

import {getDisplayValue} from '../../utils/conversions'

import PlantInfo, {PlantInfoItem} from '../../components/PlantInfo/PlantInfo'

interface IProps {
    plant: IPlant
}

export default function PlantOption({plant}: IProps) {
    const designCtx = useContext(DesignContext)

    function onClick () {    
        designCtx.addToCanvas(plant)  
    }

    function onMouseOver (e: any) {
        const x = e.clientX;
        const y = e.clientY;

        const plantInfoComponent = e.target.nextElementSibling;
        const pageScrollPosY = document.documentElement.scrollTop;
        const pageScrollPosX = document.documentElement.scrollLeft;
        const sideMenu = document.getElementById("side-menu");
        const edgeOfmenu = sideMenu ? sideMenu.getBoundingClientRect().right : 0;
        
        // put the <PlantInfo> component adjacent to the hovered menu option.
        plantInfoComponent.style.top = e.target.getBoundingClientRect().top + pageScrollPosY + 'px';
        plantInfoComponent.style.left = edgeOfmenu + pageScrollPosX + 'px';
    }

    const {name, widthInMetres, heightInMetres, rootStock} = plant;
    const widthDisplayValue = getDisplayValue(widthInMetres);
    const heightDisplayValue = heightInMetres ? getDisplayValue(heightInMetres) : null

    return (
        <div>
            <PlantOptionContainer onClick={onClick} onMouseOver={onMouseOver}>
                {name}
            </PlantOptionContainer>
           
            <PlantInfo id="plant-info">
                <PlantInfoItem label="Max spread" value={`${widthDisplayValue.value}${widthDisplayValue.units}`} />
                {heightDisplayValue && <PlantInfoItem label="Max height" value={`${heightDisplayValue.value}${heightDisplayValue.units}`} />}
                {rootStock && <PlantInfoItem label="Root stock" value={rootStock} />}
            </PlantInfo>
        </div>
    )
}

const PlantOptionContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
  :hover~#plant-info {
    display: block;
  }
`;