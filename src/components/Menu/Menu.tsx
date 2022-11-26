import React, { ReactNode } from "react";
import styled, {Interpolation} from "styled-components";

import GlobalStyles from "../../constants/styles";

interface IProps {
  children?: ReactNode | ReactNode[],
  styles: Interpolation<React.CSSProperties>,
}

export default function Menu({ children, styles }: IProps) {
  return <MenuWrapper id="side-menu" styles={styles}>{children}</MenuWrapper>;
}

const MenuWrapper = styled.aside<{styles: Interpolation<React.CSSProperties>}>`
  ${({ styles }) => {
    return styles;
  }}
  background: ${GlobalStyles.colors.primary600};
  height: 100%;
  padding: 0;
  color: white;
  font-family: monospace;
  overflow-y: auto;
  scrollbar-color: ${GlobalStyles.colors.secondary500} ${GlobalStyles.colors.primary500};
  scrollbar-width: thin;
  scroll-behavior: smooth;
  ::-webkit-scrollbar-thumb {
    background-color: ${GlobalStyles.colors.secondary500};
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
`;
