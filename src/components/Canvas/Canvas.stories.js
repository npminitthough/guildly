import React, { useContext } from "react";

import Canvas from "./Canvas";
import DesignContextProvider, {
  DesignContext,
} from "../../store/design-context";
import { CardType } from "../../ts/enums";

export default {
  title: "Canvas",
  component: Canvas,
};

export const MyCanvas = () => {
  return (
    <DesignContextProvider>
      <Test />
      <div style={{height: '100vh'}}>
        <Canvas />
      </div>
    </DesignContextProvider>
  );
};

const Test = () => {
  const designCtx = useContext(DesignContext);

  return (
    <button
      onClick={() => {
        designCtx.addToCanvas({
          cardType: CardType.plant,
          name: "Apple",
          dimensions: {
            xInMetres: 2,
          }
        });

        designCtx.addToCanvas({
          cardType: CardType.custom,
          name: "Apple",
          dimensions: {
            xInMetres: 3,
          }
        });

        designCtx.addToCanvas({
          cardType: CardType.custom,
          name: "Wormery",
          dimensions: {
            xInMetres: 0.6,
            yInMetres: 0.3
          }
        });

        designCtx.addToCanvas({
          cardType: CardType.custom,
          name: "",
          dimensions: {
            xInMetres: 2,
            yInMetres: 2
          }
        });
      }}
    >
      Click
    </button>
  );
};
