import React, { ReactNode, useState } from "react";
import styled from "styled-components";

import GlobalStyles from "../../../constants/styles";
import PlusIcon from "../../../assets/img/plus-icon.svg";
import MinusIcon from "../../../assets/img/minus-icon.svg";

interface IProps {
  title: string;
  children: ReactNode | ReactNode[];
}

export default function MenuSection({ title, children }: IProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <TitleContainer onClick={() => setOpen(!open)}>
        <Title>{title}</Title>
        <img
          src={open ? MinusIcon : PlusIcon}
          alt={open ? "minimise" : "expand"}
        />
      </TitleContainer>
      {open && <Content>{children}</Content>}
    </div>
  );
}

const Content = styled.div`
  padding: 10px 10px;
  background-color: ${GlobalStyles.colors.primary500};
`;
const Title = styled.h3`
  color: white;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: ${GlobalStyles.colors.primary600};
  padding: 0 10px;
  cursor: pointer;
`;
