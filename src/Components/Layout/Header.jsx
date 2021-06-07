import React from 'react'
import Logo from '../../Assets/Img/digizumLogo.png'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from './Navigation';

const Header = () => {
  return (
    <MainHeader>
      <LogoWrapper>
        <Link to={"/"}>
          <Mainlogo src={Logo} alt="TechZum Logo"/>
        </Link>
      </LogoWrapper>
      <Navigation/>
    </MainHeader>
  )
}
export default Header

const MainHeader = styled.header `
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  height: 75px;
  background-color: white;
  position: fixed;
  z-index: 11;
  place-items: center;
`

const LogoWrapper = styled.div `
  grid-column: 1;
  width: 350px;
  height: auto;
`
const Mainlogo = styled.img `
  display: grid;
  place-items: center;
  height: 65px;
  color: white;
  padding-left: 10%;
  padding-right: 10%;
  margin-left: 10%;
`