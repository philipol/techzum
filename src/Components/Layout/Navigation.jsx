import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <NavWrapper>
      <Nav>
        <NavItems to={"/"}>Start</NavItems>
        <NavItems to={"/vad-vi-gor"}>Vad vi gör</NavItems>
        <NavItems to={"/"}>Läsvärt</NavItems>
        <NavItems to={"/"}>Kontakt</NavItems>
      </Nav>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  grid-column: 2;
  display: grid;
  place-items: center;
`
const Nav = styled.nav `
  display: grid;
  place-items: center;
  grid-template-rows: auto auto auto auto;
  position: absolute;
  top:0;
  left: 0;
  height: auto;
  padding: 30% 5% 30% 5%;
  gap: 30px;
  width: 90%;
  background-color: #010410;
  @media screen and (min-width: 700px) {
    background-color: #ffffff;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 1fr;
    position: relative;
    padding: 0;
    width: 100%;
  }
`
const NavItems = styled(Link)`
  max-width: 100px;
  color: #0CA2EF;
  text-decoration: none;
  list-style: none;
  font-size: 22px;
  font-weight: 400;
  cursor: pointer;
  :active {
    color: #000510;
    //color: #e9d0aa;
  }
`