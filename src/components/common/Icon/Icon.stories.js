import Icon from "./Icon";
import NitrogenFixer from "./NitrogenFixer";
import InsectAttractor from "./InsectAttractor";
import NutrientAccumulator from "./NutrientAccumulator";
import Edible from "./Edible";

export default {
  title: "Icon",
  component: Icon,
};

export const Icons = () => {
  return (
    <div style={{ display: " inline-flex" }}>
      <NitrogenFixer />
      <InsectAttractor />
      <NutrientAccumulator />
      <Edible />
    </div>
  );
};
