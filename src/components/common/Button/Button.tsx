import React, { ReactNode } from 'react'
import styled from "styled-components";
import GlobalStyles from "../../../constants/styles";

interface IProps {
  children: string | ReactNode;
  [x:string]: any;
}

export default function Button({children, ...rest}: IProps) {
  return <StyledButton {...rest}>{children}</StyledButton>
}

const StyledButton = styled.button`
  height: 35px;
  font-family: monospace;
  background-color: ${GlobalStyles.colors.secondary500};
  border: none;
  color: white;
  padding: 1px 10px;
  cursor: pointer;
`
