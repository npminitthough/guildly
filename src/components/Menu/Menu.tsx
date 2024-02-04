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
  overflow-y: hidden;
  overflow-x: hidden;
`;
