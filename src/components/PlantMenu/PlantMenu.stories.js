import React, { useContext } from "react";

import PlantMenu from "./PlantMenu";
import DesignContextProvider, {
  DesignContext,
} from "../../store/design-context";
import PlantCatalogueProvider from "../../store/plant-catalogue-context";

export default {
  title: "Plant menu",
  component: PlantMenu,
};

export const MyPlantMenu = () => {
  return (
    <div>
      <PlantCatalogueProvider>
        <DesignContextProvider>
          <PlantMenu />
          <ExampleDisplay />
        </DesignContextProvider>
      </PlantCatalogueProvider>
    </div>
  );
};

function ExampleDisplay() {
  const designCtx = useContext(DesignContext);
  console.log(designCtx);

  return (
    <div
      style={{
        minHeight: "100px",
        width: "100px",
        border: "1px solid black",
        marginTop: "20px",
      }}
    >
      {designCtx.selectedPlants.map((plant, i) => {
        return <p key={i}>{plant.name}</p>;
      })}
    </div>
  );
}
