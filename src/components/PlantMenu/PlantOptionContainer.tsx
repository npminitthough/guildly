import { useContext } from "react";

import { IPlant } from "../../ts/interfaces";
import { CategoryName } from "../../ts/types";
import { DesignContext } from "../../store/design-context";

import { CardType } from "../../ts/enums";
import { IOptionComponentProps } from "./ts/interface";

interface IProps {
  plant: IPlant;
  category?: CategoryName;
  optionComponent: (props: IOptionComponentProps) => JSX.Element;
}

export default function PlantOptionContainer({
  plant,
  category,
  optionComponent,
}: IProps) {
  const designCtx = useContext(DesignContext);

  function onClick() {
    designCtx.addToCanvas({
      name: plant.name,
      dimensions: {
        xInMetres: plant.widthInMetres,
      },
      type: CardType.plant,
      colour: category && categoryColours[category],
    });
  }

  const option = optionComponent({ onClick, className: "plant-option" });

  return <div>{option}</div>;
}

const categoryColours = {
  "small trees": "#1ff78020",
  shrubs: "#ecc90c29",
  "perennial vegetables": "#5eca2e42",
  "ornamental perennials": "#0000ff1a",
  "common herbs": "#ed00ff1a",
  bulbs: "#0def8f38",
  "ground cover": "#d52f3e1a",
  "root crops": "#0f9de542",
  "green manures": "#1ee3fd3d",
  climbers: "#e8913b24",
};
