import { ReactNode } from "react";
import styled, {Interpolation} from "styled-components";

import GlobalStyles from '../../../constants/styles'

interface IProps {
  children: ReactNode[],
  styles?: Interpolation<React.CSSProperties>;
  onSubmit: (e:any) => void
}

export default function ToolbarForm({children, styles, onSubmit}: IProps) {
  return <StyledForm styles={styles} onSubmit={onSubmit}>{children}</StyledForm>
}

const StyledForm = styled.form<{styles: Interpolation<React.CSSProperties>}>`
  ${({styles}) => {
    return styles
  }}
  width: 120px;
  padding: 10px;
  box-shadow: 1px 2px #85807540;
  background-color: white;
  border: 0.5px solid #85807540;
  z-index: 1000;

  label {
    margin: 0;
    color: ${GlobalStyles.colors.tertiary600};
  }

  input {
    margin-top: 10px;
    max-width: 90%;
    border: 0.5px solid ${GlobalStyles.colors.tertiary500};
    color: ${GlobalStyles.colors.tertiary600};
  }
`