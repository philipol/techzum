import React from "react";
import Icon from "../../Components/Assets/Img/Logos/iconWhiteBlack.png";
import styled from "styled-components";

export default function AboutServices() {
  return (
    <ServicesAboutWrapper>
      <AboutTextWrapper>
        <AboutHeading>
          <img src={Icon} alt="" style={{ width: "50%", maxWidth: "180px" }} />
        </AboutHeading>
        <AboutParagraf>
          Vi är ett företag som hjälper andra företag små som stora att synas.
          Vi anser att helheten av alla tjänster vi erbjuder ger er den optimala
          verkningsgraden för att syns på internet. Vi kan även hjälpa er med
          enskilda projekt så som att designa en logga, bygga en webbsida ,
          marknadsföring, driva era sociala medier, integrera våra system på er
          befintliga webbsidor eller konsultarbeten som rör allting där imellan
        </AboutParagraf>
      </AboutTextWrapper>
    </ServicesAboutWrapper>
  );
}

const ServicesAboutWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  place-items: center;
  height: 500px;
  min-height: 65vh;
  max-width: 100vw;
  background-color: #010410;
`;

const AboutTextWrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  display: grid;
  place-items: left;
  color: white;
  padding: 10%;
  text-align: center;
  @media (min-width: 1000px) {
    padding: 10% 20%;
  }
`;

const AboutHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  @media (min-width: 700px) {
    font-size: 40px;
  }
`;

const AboutParagraf = styled.p`
  font-size: 18px;
  @media (min-width: 700px) {
    font-size: 20px;
  }
`;
