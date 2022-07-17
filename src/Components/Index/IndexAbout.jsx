import React from "react";
import IndexAboutBI from "../../Components/Assets/Img/indexAboutBI.jpg";
import styled from "styled-components";
import peopleIcon from "../../Components/Assets/Img/peopleIcon.png";

export default function IndexAbout() {
  return (
    <IndexAboutWrapper>
      <AboutBI src={IndexAboutBI} alt="" />
      <AboutBIOverlay></AboutBIOverlay>
      <PeopleIconWrapper>
        <img
          src={peopleIcon}
          alt=""
          style={{ width: "266px", gridRow: "2", gridColumn: "2" }}
        />
      </PeopleIconWrapper>
      <AboutTextWrapper>
        <AboutHeading>
          Vi hjälper er
          <br />
          att synas digitalt
        </AboutHeading>
        <AboutParagraf>
          Välkommen till oss på TechZum. Vi är ett företag som hjälper andra
          företag små som stora att synas på internet. Helheten av alla tjänster
          vi erbjuder ger er den optimala verkningsgraden för att syns på
          internet.
        </AboutParagraf>
      </AboutTextWrapper>
    </IndexAboutWrapper>
  );
}

const IndexAboutWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  place-items: center;
  height: 500px;
  min-height: 50vh;
  max-width: 100vw;
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutBI = styled.img`
  grid-row: 1/4;
  grid-column: 1/4;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const AboutBIOverlay = styled.div`
  grid-row: 1/4;
  grid-column: 1/4;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const AboutTextWrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  display: grid;
  place-items: left;
  color: white;
  padding: 10%;
  @media (min-width: 1000px) {
    padding-left: 0;
  }
  @media (min-width: 1400px) {
    padding-right: 40%;
    margin-left: -15%;
  }
`;
const PeopleIconWrapper = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  left: -132px;
  top: 785px;
  background-color: rgb(144, 121, 94);
  border-radius: 29px;
  display: none;
  grid-template-rows: 1fr auto 1fr;
  grid-template-column: 1fr auto 1fr;
  z-index: -1;
  @media (min-width: 700px) {
    display: grid;
  }
  @media (min-width: 1000px) {
    left: 10%;
    top: 825px;
  }
  @media (min-width: 1400px) {
    left: 20%;
    top: 825px;
  }
`;

const AboutHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  color: white;
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
