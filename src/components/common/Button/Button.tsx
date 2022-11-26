import { Link } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "../../../constants/styles";

interface IProps {
  variant?: "primary" | "secondary";
  to?: string;
  [x: string]: any;
}

export default function Button({ to, ...rest }: IProps) {
  const { children } = rest;
  return to ? (
    <StyledLink to={to} {...rest}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}

const StyledButton = styled.button<{ variant?: string }>`
  height: 35px;
  font-family: monospace;
  ${({ variant }) => {
    return `
        background-color: ${
          variant === "secondary" ? "white" : GlobalStyles.colors.secondary500
        };
        color: ${
          variant === "secondary" ? GlobalStyles.colors.tertiary600 : "white"
        };
        border-radius: ${variant === "secondary" ? "17px" : 0};
        :hover {
          background-color:  ${
            variant === "secondary"
              ? "#03030308"
              : GlobalStyles.colors.secondary400
          };
        }
      `;
  }}
  border: none;
  padding: 1px 10px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  height: fit-content;
  text-decoration: none;
  font-family: monospace;
  background-color: ${GlobalStyles.colors.secondary500};
  color: white;
  border-radius: 17px;
  :hover {
    background-color: ${GlobalStyles.colors.secondary400};
  }
  border: none;
  padding: 1px 10px;
  cursor: pointer;
`;
