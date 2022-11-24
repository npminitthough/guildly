import styled from "styled-components";

import ToolbarDropdown from "./ToolbarDropdown";
import CircleForm from "./ToolbarForm/CircleForm/CircleForm";
import RectForm from "./ToolbarForm/RectForm/RectForm";
import ToolbarButton from "./ToolbarButton";

import CircleIcon from "./img/ellipse-outline.svg";
import SquareIcon from "./img/square-outline.svg";

function Toolbar() {
  return (
    <ToolbarContainer>
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
    </ToolbarContainer>
  );
}

const ToolbarContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  color: grey;
  background: white;
  box-shadow: 0 0 1px grey;
`;

export default Toolbar;
