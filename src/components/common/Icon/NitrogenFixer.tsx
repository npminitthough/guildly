import React from "react";
import Icon from "./Icon";
import NitrogenIcon from "../../../assets/img/nitrogen-icon.svg";
import { IBespokeIconProps } from "./ts/interfaces";

export default function Nitrogenfixer(props: IBespokeIconProps) {
  return (
    <Icon
      color="cornflowerblue"
      icon={NitrogenIcon}
      altText="nitrogen fixer"
      {...props}
    />
  );
}
