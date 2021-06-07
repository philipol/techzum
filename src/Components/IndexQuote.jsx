import React from 'react'
import styled from "styled-components";

export default function IndexQuote() {
  return (
    <QuoteWrapper>
      <QuoteText><QuoteMark>"</QuoteMark>Med våra tekniker</QuoteText>
      <QuoteText>får vi er att synas<QuoteMark>"</QuoteMark></QuoteText>
    </QuoteWrapper>
  )
}

const QuoteWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 80%;
  padding: 10%;
`

const QuoteText = styled.h2`
  color: white;
  margin: 0;
`

const QuoteMark = styled.span`
  font-size: 70px;
  margin-top: 30px;
`