import { useState, useContext } from "react";

import ToolbarForm from "../ToolbarForm";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";

import { DesignContext } from "../../../../store/design-context";
import { CardType } from "../../../../ts/enums";

export default function CircleForm() {
  const designCtx = useContext(DesignContext);

  const [formState, setFormState] = useState({
    diameter: undefined,
    name: undefined,
  });

  function onInputChange (e:any) {
    setFormState(curr => {
      return {...curr, [e.target.name]: e.target.value}
    })
  }

  function onSubmit(e: any) {
    e.preventDefault();
    
    const { diameter, name } = formState;
    if (diameter) {
      designCtx.addToCanvas({
        type: CardType.custom,
        dimensions: {
          xInMetres: diameter,
        },
        name,
      });
    }
  }

  return (
    <ToolbarForm onSubmit={onSubmit}>
      <Input
        label="label"
        name="name"
        value={formState.name || ''}
        type="text"
        id="custom-circle-label"
        onChange={onInputChange}
      />
      <Input
        label="diameter (m)"
        required
        name="diameter"
        value={formState.diameter || ''}
        type="number"
        width="50px"
        id="custom-circle-diameter"
        onChange={onInputChange}
      />
      <Button type="submit">Add</Button>
    </ToolbarForm>
  );
}
