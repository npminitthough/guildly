import styled from "styled-components";

import GlobalStyles from "../../../constants/styles";

interface IProps {
  label: string;
  checked?: boolean;
  onChange: (e: any) => void;
  id?: string;
  className?: string;
  dataId?: string;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  id,
  className,
  dataId
}: IProps) {
  return (
    <Label htmlFor={id}>
      <Input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={className}
        id={id}
        data-id={dataId}
      />
      <span>{label}</span>
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: black;
  font-family: "Arial";
  font-size: 15px;
`;

const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: white;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  margin: 0 5px 0 0;
  border: 1px solid lightgrey;
  box-shadow:
  outline: none;
  cursor: pointer;

  :checked {
    background-color: ${GlobalStyles.colors.secondary600};
    position: relative;
  }

  :checked::before {
    content: "\\2714";
    font-size: 14px;
    background-color: ${GlobalStyles.colors.secondary600};
    color: white;
    position: absolute;
    top: 0px;
    left: 2px;
  }
`;
