import React from "react";
import Icon from "./Icon";
import InsectAttractorIcon from "../../../assets/img/insect-attractor-icon.svg";

import { IBespokeIconProps } from "./ts/interfaces";

export default function InsectAttractor(props: IBespokeIconProps) {
  return (
    <Icon
      color="purple"
      icon={InsectAttractorIcon}
      altText="insect attractor"
      {...props}
    />
  );
}
