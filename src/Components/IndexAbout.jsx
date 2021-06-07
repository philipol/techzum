import React from 'react'
import IndexAboutBI from '../Assets/Img/indexAboutBI.jpg'
import styled from "styled-components";

export default function IndexAbout() {
  return (
    <IndexAboutWrapper>
      <AboutBI src={IndexAboutBI} alt=""/>
      <AboutBIOverlay></AboutBIOverlay>
      <AboutTextWrapper>
        <AboutHeading>
          Vi hjälper er<br/>
          att synas digitalt
        </AboutHeading>
        <AboutParagraf>
          Välkommen till oss på Digizum. Vi är ett företag 
          som hjälper andra företag små som stora att synas på. 
          Helheten av alla tjänster vi erbjuder ger er den 
          optimala verkningsgraden för att syns på internet.
        </AboutParagraf>
      </AboutTextWrapper>
    </IndexAboutWrapper>
  )
}

const IndexAboutWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  place-items: center;
  height: 80vh;
  max-width: 100vw;
`

const AboutBI = styled.img`
  grid-row: 1/4;
  grid-column: 1/4;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`

const AboutBIOverlay = styled.div`
  grid-row: 1/4;
  grid-column: 1/4;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const AboutTextWrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  display: grid;
  place-items: left;
  color: white;
  padding: 10%;
`

const AboutHeading = styled.h2`
  font-size: 36px;
`

const AboutParagraf = styled.p`
  font-size: 18px;
`