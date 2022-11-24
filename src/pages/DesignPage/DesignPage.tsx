import React from "react";
import styled from "styled-components";

import Nav from "../../components/common/Nav/Nav";
import Toolbar from "../../components/ToolBar/Toolbar";
import Menu from "../../components/Menu/Menu";
import PlantMenu from "../../components/PlantMenu/PlantMenu";
import Canvas from "../../components/Canvas/Canvas";

export default function DesignPage() {
  const navHeight = '40px';
  
  return (
    <div
      style={{
        height: '100vh'
      }}
    >
      <Nav height={navHeight}>
        <Toolbar />
      </Nav>
      <Container className="l-design-page" navHeight={navHeight}>
        <Menu styles={{ flex: 1 }}>
          <PlantMenu />
        </Menu>
        <Canvas styles={{ flex: 4 }} />
      </Container>
    </div>
  );
}

const Container = styled.div<{navHeight: string}>`
  ${({ navHeight }) => {
    return `height: calc(100vh - ${navHeight});`
  }}
  width: 100vw;
  margin: 0px;
  display: flex;
`;
