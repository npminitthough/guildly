
import { ArrowKeys } from "../ts/enums";
import arrowKeyShift from "../constants/arrowKeyShift";

import { IPlantPosition } from "../ts/interfaces";

export function onKeyDown(
  e: any, 
  elementShiftCb: (id: string, pos: IPlantPosition) => void,
  elementDeleteCb: (id: string) => void
) {
  const cardId = e.target.id;

  if (Object.keys(arrowKeyShift).includes(e.key)) {
    e.preventDefault();

    if ([ArrowKeys.up, ArrowKeys.down].includes(e.key)) {
      const top = e.target.offsetTop + arrowKeyShift[e.key] + "px";
      e.target.style.top = top;

      elementShiftCb(cardId, {
        left: e.target.offsetLeft + "px",
        top,
      })
    } else {
      const left = e.target.offsetLeft + arrowKeyShift[e.key] + "px";
      e.target.style.left = left;

      elementShiftCb(cardId, {
        left,
        top: e.target.offsetTop + "px",
      })
    }
  }

  if (e.key === "Backspace") {
    elementDeleteCb(cardId);
  }
}

export function onDragStart(e: any) {
  const target = e.target;

  e.dataTransfer.setData("cardId", target.id);
  e.dataTransfer.setData("offsetheight", target.offsetHeight);
  e.dataTransfer.setData("offsetwidth", target.offsetWidth);
}