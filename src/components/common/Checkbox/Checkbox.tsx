import styled from "styled-components";

import GlobalStyles from "../../../constants/styles";

interface IProps {
  label: string;
  checked?: boolean;
  onChange: (e: any) => void;
  dataId?: string;
  className?: string;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  dataId,
  className,
}: IProps) {
  return (
    <Label>
      <Input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={className}
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
`;

const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: white;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  margin: 0 5px 0 0;
  border: 0.15em solid ${GlobalStyles.colors.secondary500};
  outline: none;
  cursor: pointer;

  :checked {
    background-color: white;
    position: relative;
  }

  :checked::before {
    content: "\\2714";
    font-size: 18px;
    color: ${GlobalStyles.colors.secondary500};
    position: absolute;
    top: -4px;
  }
`;
