import React from "react";
import styled from "styled-components";

import GlobalStyles from "../../constants/styles";

export default function Menu({ children }: any) {
  return <MenuWrapper id="side-menu">{children}</MenuWrapper>;
}

const MenuWrapper = styled.aside`
  flex: 1;
  background: ${GlobalStyles.colors.primary600};
  height: 100%;
  padding: 0;
  color: white;
  font-family: monospace;
  overflow-y: scroll;
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
