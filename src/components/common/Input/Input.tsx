import styled from "styled-components";

import GlobalStyles from '../../../constants/styles'

interface IProps {
  label: string;
  value: string | number | undefined;
  id: string;
  type: string;
  borderColor?: string;
  width?: string;
  color?: string;
  name?: string;
  onChange: (e:any) => void,
  required?: boolean
}

export default function Input({
  label,
  value,
  id,
  type,
  color,
  borderColor,
  width,
  name,
  onChange,
  required,
}: IProps) {
  return (
    <InputContainer color={color}>
      <Label htmlFor={id}>
        {label} {required && <Required>*</Required> }
        </Label>
      <InputField
        name={name}
        value={value}
        id={id}
        type={type}
        borderColor={borderColor}
        width={width}
        onChange={onChange}
      />
    </InputContainer>
  );
}

const InputContainer = styled.div<{ color?: string }>`
  margin-bottom: 20px;
  font-family: monospace;
  ${({ color }) => {
    return color && `color: ${color}`;
  }}
`;

const Label = styled.label`
  margin: 10px;
  display: inline-flex;
`;

const Required = styled.div`
  color: ${GlobalStyles.colors.error500};
`;

const InputField = styled.input<{ borderColor?: string; width?: string }>`
  height: 30px;
  ${({ borderColor }) => {
    return borderColor && `border-color: ${borderColor};`;
  }}
  ${({ width }) => {
    return width && `width: ${width};`;
  }}
  padding: 1px 5px;
  :focus {
    outline: 0.5px solid ${GlobalStyles.colors.highlight500};
    border-color: ${GlobalStyles.colors.highlight500};
  }
`;
