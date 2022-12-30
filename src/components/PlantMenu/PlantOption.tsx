import { useContext } from "react";
import styled from "styled-components";

import { IPlant } from "../../ts/interfaces";
import { CategoryName } from "../../ts/types";
import { DesignContext } from "../../store/design-context";

import PlantInfo from "../../components/PlantInfo/PlantInfo";
import { CardType } from "../../ts/enums";

interface IProps {
  plant: IPlant;
  category: CategoryName;
}

export default function PlantOption({ plant, category }: IProps) {
  const designCtx = useContext(DesignContext);

  function onClick() {
    designCtx.addToCanvas({
      name: plant.name,
      dimensions: {
        xInMetres: plant.widthInMetres,
      },
      type: CardType.plant,
      colour: categoryColours[category],
    });
  }

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

  const { name } = plant;

  return (
    <div>
      <PlantOptionContainer
        className="plant-option"
        onClick={onClick}
        onMouseOver={onMouseOver}
      >
        {name}
      </PlantOptionContainer>

      <PlantInfo id="plant-info" plant={plant} style={{ zIndex: 1000 }} />
    </div>
  );
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

const categoryColours = {
  "small trees": "#1ff78020",
  shrubs: "#ecc90c29",
  "perennial vegetables": "#5eca2e42",
  "ornamental perennials": "#0000ff1a",
  "common herbs": "#ed00ff1a",
  bulbs: "#0def8f38",
  "ground cover": "#d52f3e1a",
  "root crops": "#0f9de542",
  "green manures": "#1ee3fd3d",
  climbers: "#e8913b24",
};
