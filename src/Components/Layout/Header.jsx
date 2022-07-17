import React from "react";
import Logo from "../../Components/Assets/Img/Logos/logoWhiteBlue.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <MainHeader>
      <LogoWrapper>
        <Link to={"/"} target="_top">
          <Mainlogo src={Logo} alt="TechZum Logo" />
        </Link>
      </LogoWrapper>
      <Navigation />
    </MainHeader>
  );
};
export default Header;

const MainHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  height: 75px;
  background-color: white;
  position: fixed;
  z-index: 11;
  place-items: center;
  @media (min-width: 700px) {
    height: 90px;
  }
`;

const LogoWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: grid;
  place-items: center;
  height: auto;
`;
const Mainlogo = styled.img`
  height: 65px;
  @media (min-width: 700px) {
    height: 75px;
  }
`;
