import { useState, useContext } from "react";

import Form from "../ToolBarForm";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";

import { DesignContext } from "../../../../store/design-context";
import { CardType } from "../../../../ts/enums";

export default function RectForm() {
  const designCtx = useContext(DesignContext);

  const [formState, setFormState] = useState({
    length: undefined,
    width: undefined,
    name: undefined,
  });

  function onInputChange(e: any) {
    setFormState((curr) => {
      return { ...curr, [e.target.name]: e.target.value };
    });
  }

  function onSubmit(e: any) {
    e.preventDefault();

    const { length, width, name } = formState;
    if (length && width) {
      designCtx.addToCanvas({
        type: CardType.custom,
        dimensions: {
          xInMetres: length,
          yInMetres: width,
        },
        name,
      });
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        label="label"
        value={formState.name || ''}
        name="name"
        type="text"
        id="custom-rect-label"
        onChange={onInputChange}
      />
      <Input
        label="length (m)"
        required
        value={formState.length || ''}
        name="length"
        type="number"
        width="50px"
        id="custom-rect-length"
        onChange={onInputChange}
      />
      <Input
        label="width (m)"
        required
        value={formState.width || ''}
        name="width"
        type="number"
        width="50px"
        id="custom-rect-width"
        onChange={onInputChange}
      />
      <Button>Add</Button>
    </Form>
  );
}
