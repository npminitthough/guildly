import { useContext } from "react";
import styled from "styled-components";

import ToolbarDropdown from "./ToolbarDropdown";
import CircleForm from "./ToolbarForm/CircleForm/CircleForm";
import RectForm from "./ToolbarForm/RectForm/RectForm";
import ToolbarButton from "./ToolbarButton";
import Button from "../common/Button/Button";
import CardStackingButtons from "./CardStackingButtons/CardStackingButtons";

import CircleIcon from "./img/ellipse-outline.svg";
import SquareIcon from "./img/square-outline.svg";

import { DesignContext } from "../../store/design-context";

function Toolbar() {
  const designContext = useContext(DesignContext);

  return (
    <ToolbarContainer className="toolbar">
      <ToolbarDropdown
        styles={{ width: "85px" }}
        buttonComponent={
          <ToolbarButton icon={CircleIcon}>circle</ToolbarButton>
        }
        dropdownComponent={<CircleForm />}
      />
      <ToolbarDropdown
        styles={{ width: "105px" }}
        buttonComponent={
          <ToolbarButton icon={SquareIcon}>rectangle</ToolbarButton>
        }
        dropdownComponent={<RectForm />}
      />

      {<CardStackingButtons />}

      <Button
        style={{ marginLeft: "auto" }}
        onClick={designContext.clearAll}
        variant="secondary"
      >
        clear all
      </Button>
    </ToolbarContainer>
  );
}

const ToolbarContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  color: grey;
  background: white;
  box-shadow: 0 0 1px grey;
`;

export default Toolbar;
