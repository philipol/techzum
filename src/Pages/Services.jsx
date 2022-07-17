import React from "react";
import styled from "styled-components";
import ServicesHero from "../Components/Services/ServicesHero";
import AboutServices from "../Components/Services/AboutServices";
import MainLayout from "../Components/Layout/MainLayout";
import HeroImgOverlay from "../Components/Assets/Img/indexHeroImage.jpg";
import ServicesCards from "../Components/Services/ServicesCards";
import IndexNews from "../Components/Index/IndexNews";
import ServicesQuote from "../Components/Services/ServicesQuote";

export default function Services() {
  return (
    <MainLayout>
      <HeroImageOverlay src={HeroImgOverlay} alt="TechZum hero img" />
      <DarkOverlay></DarkOverlay>
      <ServicesHero />
      <AboutServices />
      <ServicesCards />
      <IndexNews />
      <ServicesQuote />
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
  opacity: 0.9;
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
