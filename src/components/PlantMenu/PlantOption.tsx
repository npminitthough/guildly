import React from "react";
import styled from "styled-components";
import { IPlant } from "../../ts/interfaces";
import PlantInfo from "../PlantInfo/PlantInfo";

function onMouseOver(e: any) {
  const plantInfoComponent = e.target.nextElementSibling;
  const pageScrollPosY = document.documentElement.scrollTop;
  const pageScrollPosX = document.documentElement.scrollLeft;
  const sideMenu = document.getElementById("side-menu");
  const edgeOfmenu = sideMenu ? sideMenu.getBoundingClientRect().right : 0;

  // put the <PlantInfo> component adjacent to the hovered menu option.
  plantInfoComponent.style.top =
    e.target.getBoundingClientRect().top + pageScrollPosY + "px";
  plantInfoComponent.style.left = edgeOfmenu + pageScrollPosX + "px";
}

interface IProps {
  className: string;
  onClick: () => void;
  plant: IPlant;
}

function PlantOption(props: IProps) {
  return (
    <>
      <Container {...props} onMouseOver={onMouseOver}>
        {props.plant.name}
      </Container>

      <PlantInfo
        id="plant-info"
        plant={props.plant}
        style={{ zIndex: 1000, position: "absolute" }}
      />
    </>
  );
}

export default PlantOption;

const Container = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
  :hover {
    box-shadow: inset 0.5px 0 1.5px white;
  }
  ~ #plant-info {
    display: none;
  }
  :hover ~ #plant-info {
    display: block;
  }
`;
