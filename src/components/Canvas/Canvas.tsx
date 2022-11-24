import { useContext } from "react";
import styled, {Interpolation} from "styled-components";

import { DesignContext } from "../../store/design-context";
import { ICard } from "../../ts/interfaces";

import Card from "./Card";

interface IProps {
  styles: Interpolation<React.CSSProperties>
}

export default function Canvas({styles}: IProps) {
  const designCtx = useContext(DesignContext);
  const cards = designCtx.cards;
  
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
    
    const nav = document.getElementById("navbar");
    const bottomOfNav = nav ? nav.getBoundingClientRect().bottom : 0;

    if (card && card.style) {
      card.style.left =
        e.clientX - edgeOfmenu - cardOffsetWidth / 2 + scrollLeft + "px";
      card.style.top = e.clientY - cardOffsetHeight / 2 + scrollTop - bottomOfNav + "px";

      designCtx.updateCardPosition(cardId, {
        left: card.style.left,
        top: card.style.top,
      });
    }
  }

  return (
    <CanvasOuterContainer
      styles={styles}
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

const CanvasOuterContainer = styled.div<{styles: Interpolation<React.CSSProperties>}>`
  ${({ styles }) => {
    return styles;
  }}
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
