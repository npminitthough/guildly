import styled from "styled-components";

import Nav from "../../components/common/Nav/Nav";
import Toolbar from "../../components/Toolbar/Toolbar";
import Menu from "../../components/Menu/Menu";
import PlantMenu from "../../components/PlantMenu/PlantMenu";
import Canvas from "../../components/Canvas/Canvas";

import DesignContextProvider from "../../store/design-context";
import FeatureFlagProvider from "../../store/feature-flag-context";

export default function DesignPage() {
  const navHeight = "40px";

  return (
    <DesignContextProvider>
      <FeatureFlagProvider>
        <div
          style={{
            height: "100vh",
          }}
        >
          <Nav height={navHeight}>
            <Toolbar />
          </Nav>
          <Container className="l-design-page" navHeight={navHeight}>
            <Menu style={{ width: "295px" }}>
              <PlantMenu />
            </Menu>
            <Canvas />
          </Container>
        </div>
      </FeatureFlagProvider>
    </DesignContextProvider>
  );
}

const Container = styled.div<{ navHeight: string }>`
  ${({ navHeight }) => {
    return `height: calc(100vh - ${navHeight});`;
  }}
  width: 100vw;
  margin: 0px;
  display: flex;
`;
