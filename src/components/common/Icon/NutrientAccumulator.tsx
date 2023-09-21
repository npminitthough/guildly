import React from "react";
import Icon from "./Icon";
import NutrientAccumulatorIcon from "../../../assets/img/nutrient-accumulator-icon.svg";
import { IBespokeIconProps } from "./ts/interfaces";

export default function NutrientAccumulator(props: IBespokeIconProps) {
  return (
    <Icon
      color="#ff8d00"
      icon={NutrientAccumulatorIcon}
      altText="nutrient accumulator"
      {...props}
    />
  );
}
