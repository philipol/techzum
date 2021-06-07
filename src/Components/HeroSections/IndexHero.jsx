import React from 'react'
import styled from "styled-components";

export default function IndexHero() {
  return (
    <HeroSection>
      <IndexHeroHeadingWrapper>
        <IndexHeading><FirmName>DIGIZUM</FirmName> är <br/> en digitalbyrå!</IndexHeading>
        <h2>Behöver ni hjälp med att digitalisera erat företag så har vi allt</h2>
        <Link href="/">Kontakta oss</Link>
      </IndexHeroHeadingWrapper>
    </HeroSection>
  )
}

const HeroSection = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  max-width: 100%;
  height: 90vh;
`

const IndexHeroHeadingWrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-rows: auto auto auto;
  width: 100%;
  place-items: center;
  color: white;
  text-align: center;
`
const IndexHeading = styled.h1`
  grid-row: 1;
  margin: 10px;
  font-size: 50px;
`
const FirmName = styled.span`
  color: #43a7f5;
`
const Link = styled.a`
  color: white;
  background-color: #43a7f5;
  border-radius: 10px;
  padding: 10px;
  width: 50%;
  font-size: 25px;
  text-decoration: none;
  font-weight: bold;
`