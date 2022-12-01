import { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { getElementStyle } from "../../../utils/elementStyles";

import Button from "../../common/Button/Button";
import SendBackwardIcon from "./img/send-backward.svg";
import BringForwardIcon from "./img/bring-forward.svg";
import SendBackwardIconDisabled from "./img/send-backward-disabled.svg";
import BringForwardIconDisabled from "./img/bring-forward-disabled.svg";

import { DesignContext } from "../../../store/design-context";

function CardStackingButtons() {
  const designCtx = useContext(DesignContext);

  const [forwardEnabled, setForwardEnabled] = useState(false);
  const [backwardEnabled, setBackwardEnabled] = useState(false);
  const [zIndex, setZIndex] = useState<undefined | number>();
  const [maxZIndex, setMaxZIndex] = useState(designCtx.cards.length - 1);

  const minZIndex = 0;

  // set max z-index to total number of cards
  useEffect(() => {
    setMaxZIndex(designCtx.cards.length - 1);
  }, [designCtx.cards.length]);

  // store the current card's z-index in state
  useEffect(() => {
    if (designCtx.focusedCard.length < 1) {
      setZIndex(undefined);
    } else {
      const el = document.getElementById(designCtx.focusedCard);
      const value = el && getElementStyle(el, "z-index");

      // value should always be a number as it is set as a number in <Card>
      if (value) {
        setZIndex(parseInt(value));
      }
    }
  }, [designCtx.focusedCard]);

  // update state of stacking buttons based on the current card's z-index
  useEffect(() => {
    if (zIndex !== undefined && zIndex < maxZIndex) {
      setForwardEnabled(true);
    } else {
      setForwardEnabled(false);
    }

    if (zIndex !== undefined && zIndex > minZIndex) {
      setBackwardEnabled(true);
    } else {
      setBackwardEnabled(false);
    }
  }, [zIndex, maxZIndex]);

  function onBringForward() {
    const el = document.getElementById(designCtx.focusedCard);

    if (el && zIndex !== undefined) {
      const newZIndex = zIndex + 1;
      el.style.zIndex = newZIndex.toString();
      setZIndex(newZIndex);
    }
  }

  function onSendBackward() {
    const el = document.getElementById(designCtx.focusedCard);

    if (el && zIndex !== undefined) {
      const newZIndex = zIndex - 1;
      el.style.zIndex = newZIndex.toString();
      setZIndex(newZIndex);
    }
  }

  return (
    <Container>
      <Button
        disabled={!backwardEnabled}
        onClick={onSendBackward}
        variant="secondary"
        className="card-stacking-btn"
        title="send backwards"
      >
        <Icon
          src={backwardEnabled ? SendBackwardIcon : SendBackwardIconDisabled}
        />
      </Button>
      <Button
        disabled={!forwardEnabled}
        onClick={onBringForward}
        variant="secondary"
        className="card-stacking-btn"
        title="bring forewards"
      >
        <Icon
          src={forwardEnabled ? BringForwardIcon : BringForwardIconDisabled}
        />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 20px;
`;

const Icon = styled.img`
  height: 15px;
  vertical-align: bottom;
`;

export default CardStackingButtons;
