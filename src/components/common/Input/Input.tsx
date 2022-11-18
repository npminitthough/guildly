import styled from "styled-components";

interface IProps {
  label: string;
  value: string | number;
  id: string;
  type: string;
  borderColor?: string;
  width?: string;
  color?: string;
}

export default function Input({label, value, id, type, color, borderColor, width}: IProps) {
  function onInput (e: any) {
    console.log(e.target.value);
    
  }
  return <InputContainer color={color}>
    <Label htmlFor={id}>{label}</Label>
    <InputField value={value} onInput={onInput} id={id} type={type} borderColor={borderColor} width={width} />
  </InputContainer>
  
}

const InputContainer = styled.div<{color?: string}>`
  margin-bottom: 20px;
  font-family: monospace;
  ${({color}) =>{
    return color && `color: ${color}`
  }}
`

const Label = styled.label`
  margin: 10px;
`

const InputField = styled.input<{borderColor?: string; width?: string}>`
  height: 30px;
  ${({borderColor}) => {
    return borderColor && `border-color: ${borderColor};`
  }}
  ${({width}) => {
    return width && `width: ${width};`
  }}
  padding: 1px 5px;
`