import { useContext } from "react";
import styled from "styled-components";

import { DesignContext } from "../../store/design-context";
import { IPlantWithItemId } from "../../ts/interfaces";

import Card from "./Card";

export default function Canvas() {
  const designCtx = useContext(DesignContext);
  const plants = designCtx.selectedPlants;

  function onDragOver(e: any) {
    e.preventDefault();
  }

  function onScroll(e: any) {
    designCtx.updateCanvasScrollPos({
      scrollTop: e.target.scrollTop,
      scrollLeft: e.target.scrollLeft,
    });
  }

  function onDrop(e: any) {
    e.preventDefault();
    const scrollTop = e.target.parentElement.scrollTop;
    const scrollLeft = e.target.parentElement.scrollLeft;

    const cardId = e.dataTransfer.getData("cardId");
    const cardOffsetHeight = e.dataTransfer.getData("offsetheight");
    const cardOffsetWidth = e.dataTransfer.getData("offsetwidth");

    const card = document.getElementById(cardId);
    const sideMenu = document.getElementById("side-menu");
    const edgeOfmenu = sideMenu ? sideMenu.getBoundingClientRect().right : 0;

    if (card && card.style) {
      card.style.left =
        e.clientX - edgeOfmenu - cardOffsetWidth / 2 + scrollLeft + "px";
      card.style.top = e.clientY - cardOffsetHeight / 2 + scrollTop + "px";

      designCtx.updatePlantPos(cardId, {
        left: card.style.left,
        top: card.style.top,
      });
    }
  }

  return (
    <CanvasOuterContainer
      onDragOver={onDragOver}
      onDrop={onDrop}
      onScroll={onScroll}
      className="l-canvas"
    >
      <CanvasContainer>
        {plants.map((plant: IPlantWithItemId) => {
          return <Card key={plant.itemId} plant={plant} />;
        })}
      </CanvasContainer>
    </CanvasOuterContainer>
  );
}

const CanvasOuterContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 4;
  background: white;
  overflow: scroll;
`;
const CanvasContainer = styled.div`
  height: 150%;
  width: 150%;
  position: relative;
`;
