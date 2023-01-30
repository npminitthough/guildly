import React, { ReactNode, useState } from "react";
import styled, { Interpolation } from "styled-components";

interface IProps {
  buttonComponent: ReactNode;
  dropdownComponent: ReactNode;
  styles?: Interpolation<React.CSSProperties>;
}

function ToolbarDropdown({
  buttonComponent,
  dropdownComponent,
  styles,
}: IProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  function onFocus() {
    setShowDropdown(true);
  }

  function onBlur(e: any) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowDropdown(false);
    }
  }

  return (
    <DropDownContainer
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={0}
      styles={styles}
    >
      {buttonComponent}
      <div>{showDropdown && dropdownComponent}</div>
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div<{
  styles: Interpolation<React.CSSProperties>;
}>`
  ${({ styles }) => {
    return styles;
  }}
  height: 40px;
  min-width: 40px;
  z-index: 1000;
`;

export default ToolbarDropdown;
