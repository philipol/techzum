import React from "react";
import styled from "styled-components";
import IndexHero from "../Components/Index/IndexHero";
import IndexAbout from "../Components/Index/IndexAbout";
import MainLayout from "../Components/Layout/MainLayout";
import HeroImgOverlay from "../Components/Assets/Img/HeroImgOverlay.jpg";
import IndexServices from "../Components/Index/IndexServices";
import IndexNews from "../Components/Index/IndexNews";
import IndexQuote from "../Components/Index/IndexQuote";

export default function Index() {
  return (
    <MainLayout>
      <HeroImageOverlay src={HeroImgOverlay} alt="TechZum index hero img" />
      <DarkOverlay></DarkOverlay>
      <IndexHero />
      <IndexAbout />
      <IndexServices />
      <IndexNews />
      <IndexQuote />
    </MainLayout>
  );
}

const HeroImage = styled.img`
  object-fit: cover;
  height: 100vh;
  width: 100vw;
  z-index: -3;
  position: fixed;
`;
const HeroImageOverlay = styled.img`
  object-fit: cover;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -2;
  opacity: 0.4;
  position: fixed;
`;
const DarkOverlay = styled.div`
  background-color: black;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.5;
  position: fixed;
`;
