import React, { ReactNode } from 'react'
import styled from "styled-components";
import GlobalStyles from "../../../constants/styles";

interface IProps {
  children: string | ReactNode;
  variant?: 'primary' | 'secondary';
  [x:string]: any;
}

export default function Button({children, ...rest}: IProps) {
  return <StyledButton {...rest}>{children}</StyledButton>
}

const StyledButton = styled.button<{variant?: string}>`
  height: 35px;
  font-family: monospace;
  ${({variant}) => {
      return `
        background-color: ${variant === 'secondary' ? 'white' : GlobalStyles.colors.secondary500};
        color: ${variant === 'secondary' ? GlobalStyles.colors.tertiary600 : 'white'};
        border-radius: ${variant === 'secondary' ? '17px' : 0};
        :hover {
          background-color:  ${variant === 'secondary' ? '#03030308' :  GlobalStyles.colors.secondary400};
        }
      `
  }}
  border: none;
  padding: 1px 10px;
  cursor: pointer;
 
`
