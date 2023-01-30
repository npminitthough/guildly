import React, { createContext, useState, ReactNode } from "react";
import { nanoid } from "nanoid";

import {
  IScrollPosition,
  ICardMetaData,
  ICardPosition,
  ICard,
} from "../ts/interfaces";
import { CardType } from "../ts/enums";

const defaultDesignContext = {
  canvasScrollPos: { scrollTop: 0, scrollLeft: 0 },
  updateCanvasScrollPos: ({ scrollTop, scrollLeft }: IScrollPosition) => {},

  cards: [
    {
      itemId: "",
      position: { left: "", top: "" },
      type: CardType.plant,
      dimensions: { xInMetres: 1 },
    },
  ],
  focusedCard: "",
  setFocusedCard: (id: string) => {},
  addToCanvas: (cardMetaData: ICardMetaData) => {},
  updateCardPosition: (itemId: string, pos: ICardPosition) => {},
  removeFromCanvas: (itemId: string, cardType: CardType) => {},
  clearAll: () => {}
};

export const DesignContext = createContext(defaultDesignContext);

interface IProps {
  children: ReactNode;
}

function setInitialPlantPos(scrollPos: IScrollPosition) {
  const initialPos = {
    top: 15 + scrollPos.scrollTop + "px",
    left: 20 + scrollPos.scrollLeft + "px",
  };

  return initialPos;
}

export default function DesignContextProvider({ children }: IProps) {
  const initialCardsState: ICard[] = [];

  const [canvasScrollPos, updateCanvasScrollPos] = useState({
    scrollTop: 0,
    scrollLeft: 0,
  });
  const [cards, updateCards] = useState(initialCardsState);
  const [focusedCard, setFocusedCard] = useState("");

  const addToCanvas = (cardMetaData: ICardMetaData) => {
    const itemId = nanoid(4);
    const cardData = {
      itemId,
      ...cardMetaData,
      position: {
        left: setInitialPlantPos(canvasScrollPos).left,
        top: setInitialPlantPos(canvasScrollPos).top,
      },
    };

    updateCards((curr: ICard[]) => {
      const newCards = [...curr];
      newCards.push(cardData);

      return newCards;
    });
  };

  const removeFromCanvas = (itemId: string) => {
    updateCards((curr: ICard[]) => {
      return curr.filter((el) => el.itemId !== itemId);
    });
  };

  const updateCardPosition = (itemId: string, pos: ICardPosition) => {
    updateCards((curr: ICard[]) => {
      const index = curr.findIndex((p) => p.itemId === itemId);

      const newCards = [...curr];
      newCards[index].position = pos;

      return newCards;
    });
  };

  const clearAll = () => updateCards([]);

  return (
    <DesignContext.Provider
      value={{
        removeFromCanvas,
        canvasScrollPos,
        updateCanvasScrollPos,
        updateCardPosition,
        cards,
        addToCanvas,
        clearAll,
        focusedCard,
        setFocusedCard
      }}
    >
      {children}
    </DesignContext.Provider>
  );
}
