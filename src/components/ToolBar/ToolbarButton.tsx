import React from "react";
import styled, { Interpolation } from "styled-components";
import GlobalStyles from "../../constants/styles";

interface IProps {
  children?: string;
  icon?: string;
  styles?: Interpolation<React.CSSProperties>;
}

function ToolbarButton({ children, icon, styles }: IProps) {
  return (
    <Button styles={styles} icon={icon}>
      {icon && <img src={icon} />}
      {children && <span>{children}</span>}
    </Button>
  );
}

const Button = styled.button<{
  icon?: string;
  styles?: Interpolation<React.CSSProperties>;
}>`
  ${({ styles }) => {
    return styles;
  }}
  ${({ icon }) => {
    return (
      icon &&
      `
        span {
          margin-left: 10px;
        }
        img {
          width: 20px;
        }
      `
    );
  }}

  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${GlobalStyles.colors.tertiary600};
  background-color: transparent;
  :focus {
    background-color: #00000005;
  }
  :hover {
    background-color: #00000005;
    border-bottom: 1px solid ${GlobalStyles.colors.highlight500};
  }
`;

export default ToolbarButton;
