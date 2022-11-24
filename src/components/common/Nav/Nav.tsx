import { ReactNode } from "react";
import styled from "styled-components";

import GlobalStyles from "../../../constants/styles";

interface IProps {
  children?: ReactNode | ReactNode[];
  height?: string;
}

function Nav({ children, height }: IProps) {
  return (
    <StyledNav id='navbar' height={height}>
      <Logo>
        <p>Guildly</p>
      </Logo>
      <Contents>{children}</Contents>
    </StyledNav>
  );
}

const StyledNav = styled.nav<{height?: string}>`
  width: 100vw;
  ${({ height }) => {
    return `
      height: ${height || '40px'};
    `
  }}
  background-color: ${GlobalStyles.colors.primary600};
  display: flex;
  color: white;
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Contents = styled.div`
  flex: 4;
  z-index: 1;
`;

export default Nav;
