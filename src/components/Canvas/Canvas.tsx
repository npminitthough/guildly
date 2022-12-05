import { useContext } from "react";
import styled from "styled-components";

import { DesignContext } from "../../store/design-context";
import { ICard } from "../../ts/interfaces";

import Card from "./Card";

interface IProps {
  style: React.CSSProperties;
}

export default function Canvas({ style }: IProps) {
  const designCtx = useContext(DesignContext);
  const cards = designCtx.cards;

  function onDragOver(e: any) {
    e.preventDefault();
  }

  function onScroll(e: any) {
    // used in context when adding an element to the canvas.
    designCtx.updateCanvasScrollPos({
      scrollTop: e.target.scrollTop,
      scrollLeft: e.target.scrollLeft,
    });
  }

  function onDrop(e: any) {
    e.preventDefault();
    const canvasOuterContainer = e.target.closest(".l-canvas");

    const scrollTop = canvasOuterContainer.scrollTop;
    const scrollLeft = canvasOuterContainer.scrollLeft;

    const cardId = e.dataTransfer.getData("cardId");
    const cardOffsetX = e.dataTransfer.getData("xoffset");
    const cardOffsetY = e.dataTransfer.getData("yoffset");

    const card = document.getElementById(cardId);

    if (card && card.style) {
      card.style.left =
        e.clientX -
        cardOffsetX +
        scrollLeft -
        canvasOuterContainer.getBoundingClientRect().left +
        "px";

      card.style.top =
        e.clientY -
        cardOffsetY +
        scrollTop -
        canvasOuterContainer.getBoundingClientRect().top +
        "px";

      designCtx.updateCardPosition(cardId, {
        left: card.style.left,
        top: card.style.top,
      });
    }
  }

  return (
    <CanvasOuterContainer
      style={style}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onScroll={onScroll}
      className="l-canvas"
    >
      <CanvasContainer>
        {cards.map((card: ICard) => {
          return <Card key={card.itemId} {...card} />;
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
