import React, { useContext } from "react";

import Canvas from "./Canvas";
import DesignContextProvider, {
  DesignContext,
} from "../../store/design-context";

export default {
  title: "Canvas",
  component: Canvas,
};

export const MyCanvas = () => {
  return (
    <DesignContextProvider
      initialValue={{ selectedPlants: [{ name: "test", itemID: "123" }] }}
    >
      <Test />
      <Canvas />
    </DesignContextProvider>
  );
};

const Test = () => {
  const designCtx = useContext(DesignContext);

  return (
    <button
      onClick={() => {
        designCtx.addToCanvas({
          id: "1",
          itemId: "123",
          name: "Apple",
          widthInMetres: 2,
        });

        designCtx.addToCanvas({
          id: "1",
          itemId: "1253",
          name: "Apple",
          widthInMetres: 2,
        });
      }}
    >
      Click
    </button>
  );
};
