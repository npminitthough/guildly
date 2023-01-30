import { ArrowKeys } from "../ts/enums";
import arrowKeyShift from "../constants/arrowKeyShift";

import { ICardPosition } from "../ts/interfaces";

export function onKeyDown(
  e: any,
  elementShiftCb: (id: string, pos: ICardPosition) => void,
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
      });
    } else {
      const left = e.target.offsetLeft + arrowKeyShift[e.key] + "px";
      e.target.style.left = left;

      elementShiftCb(cardId, {
        left,
        top: e.target.offsetTop + "px",
      });
    }
  }

  if (e.key === "Backspace") {
    elementDeleteCb(cardId);
  }
}

export function onDragStart(e: any) {
  const elementDOMRect = e.target.getBoundingClientRect();

  // save the distance between the cursor and the top of the element being dragged.
  e.dataTransfer.setData(
    "yoffset",
    parseInt(e.clientY, 10) - elementDOMRect.top
  );
  e.dataTransfer.setData(
    "xoffset",
    parseInt(e.clientX, 10) - elementDOMRect.left
  );

  e.dataTransfer.setData("cardId", e.target.id);
}
