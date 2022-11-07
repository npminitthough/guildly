import { useContext } from "react";

import { PlantCtx } from "../../store/plants-context";

export default function PlantMenu(props) {
  const plantCtx = useContext(PlantCtx);
  console.log(plantCtx);
  return <div>Hello</div>;
}
