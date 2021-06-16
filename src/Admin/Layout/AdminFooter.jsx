import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Footer() {
  const [footerText, setFooterText] = useState("\u00A9");

  async function setCompanyName() {
    const companyName = "TechZum AB";
    const date = new Date();
    const year = date.getFullYear();
    setFooterText("\u00A9" + "Copyright " + year + " - " + companyName);
  }
  useEffect(() => {
    setCompanyName();
  }, []);
  return (
    <FooterWrapper>
      <PoweredByWrapper>{footerText}</PoweredByWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  background-color: #010410;
  color: white;
  @media screen and (min-width: 780px) {
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const PoweredByWrapper = styled.div`
  display: grid;
  place-items: center;
  background-color: white;
  color: black;
  width: 100%;
  height: 50px;
  @media screen and (min-width: 780px) {
    grid-column: 1/4;
  }
`;
