import React, { ReactNode } from "react";
import styled from "styled-components";

import GlobalStyles from "../../constants/styles";

interface IProps {
  children?: ReactNode | ReactNode[];
  style: React.CSSProperties;
}

export default function Menu({ children, style }: IProps) {
  return (
    <MenuWrapper id="side-menu" style={style}>
      {children}
    </MenuWrapper>
  );
}

const MenuWrapper = styled.aside`
  background: ${GlobalStyles.colors.primary600};
  height: 100%;
  padding: 0;
  color: white;
  font-family: monospace;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: ${GlobalStyles.colors.secondary500}
    ${GlobalStyles.colors.primary500};
  scrollbar-width: thin;
  scroll-behavior: smooth;
  ::-webkit-scrollbar-thumb {
    background-color: ${GlobalStyles.colors.secondary500};
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
`;
