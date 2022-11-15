import React from "react";
import styled from "styled-components";

import GlobalStyles from '../../constants/styles';

import Menu from '../../components/Menu/Menu';
import PlantMenu from '../../components/PlantMenu/PlantMenu'
import Canvas from '../../components/Canvas/Canvas'

export default function DesignPage() {
  return <Container className="thingy">
    <Menu style={{flex: 1}}>
      <PlantMenu />
    </Menu>
    <Canvas />
  </Container>;
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 20px;
  display: flex;
`;