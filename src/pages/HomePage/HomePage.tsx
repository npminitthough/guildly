import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button/Button";

import GuildlyLogo from "./img/guildly-logo.svg";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header>
        <Title>Guildly</Title>
        <Caption>Plant guilds for small spaces</Caption>
        <Logo src={GuildlyLogo} alt="guildly logo" />
      </Header>
      <ButtonContainer>
        <Button
          style={{
            fontSize: "1.3em",
            borderRadius: "10px",
            height: "fit-content",
            padding: "10px 15px",
            boxShadow: "2px 3px 6px grey",
            fontWeight: "bold",
          }}
          to="/design"
        >
          Start designing
        </Button>
      </ButtonContainer>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #32b59f 0%, #46b884 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  text-align: center;
  color: white;
  /* justify-self: center;
  align-self: center; */
`;

const Title = styled.h1`
  font-family: "Kirang Haerang", "Arial";
  font-size: 6em;
  margin: 0;
  font-weight: 500;
`;

const Caption = styled.h2`
  font-size: 1.2em;
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  margin: 0;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 100px;
  animation: fadeIn 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;
export default HomePage;
