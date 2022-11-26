import CircleForm from "./CircleForm";
import DesignContextProvider from "../../../../store/design-context";

export default {
  title: "CircleForm",
  component: CircleForm,
};

export const MyCircleForm = () => {
  return (
    <DesignContextProvider>
      <CircleForm />
    </DesignContextProvider>
  );
};
