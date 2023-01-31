import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

export const Checked = () => {
  return <Checkbox label="nitrogen fixer" checked={true} />;
};

export const Unchecked = () => {
  return <Checkbox label="edible" checked={false} />;
};
