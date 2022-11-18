import { ReactNode } from "react";
import styled from "styled-components";

import GlobalStyles from '../../../constants/styles'

interface IProps {
  children: ReactNode[]
}

export default function ToolBarForm({children}: IProps) {
  return <StyledForm>{children}</StyledForm>
}

const StyledForm = styled.form`
  width: 120px;
  padding: 10px;
  box-shadow: 2px 3px #85807540;
  border: 0.5px solid #85807540;

  label {
    margin: 0;
    color: ${GlobalStyles.colors.tertiary600};
  }

  input {
    margin-top: 10px;
    max-width: -webkit-fill-available;
    border: 0.5px solid ${GlobalStyles.colors.tertiary500};
    color: ${GlobalStyles.colors.tertiary600};
  }
`