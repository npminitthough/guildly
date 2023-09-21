import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "../../../constants/styles";

interface IProps {
  children?: ReactNode | ReactNode[];
  height?: string;
}

function Nav({ children, height }: IProps) {
  return (
    <StyledNav id="navbar" height={height}>
      <Logo to="/">Guildly</Logo>
      <Contents>{children}</Contents>
    </StyledNav>
  );
}

const StyledNav = styled.nav<{ height?: string }>`
  width: 100vw;
  ${({ height }) => {
    return `
      height: ${height || "40px"};
    `;
  }}
  background-color: ${GlobalStyles.colors.primary600};
  display: flex;
  color: white;
`;

const Logo = styled(Link)`
  width: 295px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1.3em;
  font-family: "Kirang Haerang", "Arial";
`;

const Contents = styled.div`
  flex: 4;
  z-index: 1000;
`;

export default Nav;
