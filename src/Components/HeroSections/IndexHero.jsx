import React from 'react'
import styled from "styled-components";

export default function IndexHero() {
  return (
    <HeroSection>
      <IndexHeroHeadingWrapper>
        <IndexHeading><FirmName>TechZum</FirmName> är <br/> en digitalbyrå!</IndexHeading>
        <IndexDescriber>Behöver ni hjälp med att digitalisera erat företag så har vi allt</IndexDescriber>
        <Link href="/">Kontakta oss</Link>
      </IndexHeroHeadingWrapper>
    </HeroSection>
  )
}

const HeroSection = styled.div`
  display: grid;
  grid-template-rows: 2fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  max-width: 100%;
  height: 80vh;
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
  text-align: left;
  width:80%;
  margin: 0;
  font-size: 40px;
`
const IndexDescriber = styled.h2`
  text-align: left;
  width: 80%;
  font-weight: normal;
  font-size: 22px;
`
const FirmName = styled.span`
  color: #43a7f5;
`
const Link = styled.a`
  color: white;
  background-color: #43a7f5;
  border-radius: 5px;
  padding: 10px;
  width: 50%;
  margin-left: -25%;
  font-size: 25px;
  text-decoration: none;
`