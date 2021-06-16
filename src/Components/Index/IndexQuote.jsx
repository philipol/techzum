import React from 'react'
import styled from "styled-components";

export default function IndexQuote() {
  return (
    <QuoteWrapper>
      <QuoteTextLeft><QuoteMark>"</QuoteMark>Med våra tekniker</QuoteTextLeft>
      <QuoteTextRight>får vi er att synas<QuoteMark>"</QuoteMark></QuoteTextRight>
    </QuoteWrapper>
  )
}

const QuoteWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 10%;
  margin: 0;
  @media (min-width: 1000px) {
    padding: 5%;
  } 
`

const QuoteTextLeft = styled.h2`
  color: white;
  margin: 0;
  margin-left: -30%;
  margin-bottom: -25px;
  @media (min-width: 700px) {
    font-size: 34px;
  } 
  @media (min-width: 1000px) {
    margin-bottom: -15px;
    font-size: 44px;
  } 
  @media (min-width: 1300px) {
    margin-bottom: -10px;
    margin-left: -20%;
    font-size: 54px;
  } 
`

const QuoteTextRight = styled.h2`
  color: white;
  margin: 0;
  margin-top: -25px;
  margin-right: -30%;
  @media (min-width: 700px) {
    font-size: 34px;
  } 
  @media (min-width: 1000px) {
    margin-top: -15px;
    font-size: 44px;
  } 
  @media (min-width: 1300px) {
    margin-top: -10px;
    margin-right: -20%;
    font-size: 54px;
  } 
`

const QuoteMark = styled.span`
  font-size: 70px;
  margin-top: 30px;
`