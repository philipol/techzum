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
  width: 80%;
  padding: 10%;
`

const QuoteTextLeft = styled.h2`
  color: white;
  margin: 0;
  margin-left: -30%;
  margin-bottom: -5%;
`

const QuoteTextRight = styled.h2`
  color: white;
  margin: 0;
  margin-top: -10%;
  margin-right: -30%;
`

const QuoteMark = styled.span`
  font-size: 70px;
  margin-top: 30px;
`