import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const MyButton = () => {
  return <div>
    <Button>primary</Button>
    <Button variant="secondary">secondary</Button>
  </div>;
};
