import React from 'react'
import styled from "styled-components";
import IndexHero from '../Components/HeroSections/IndexHero'
import IndexAbout from '../Components/IndexAbout'
import MainLayout from '../Components/Layout/MainLayout'
import HeroImg from '../Assets/Img/indexHero.jpg'
import HeroImgOverlay from '../Assets/Img/HeroImgOverlay.jpg'
import IndexServices from '../Components/IndexServices'
import IndexNews from '../Components/IndexNews';
import IndexQuote from '../Components/IndexQuote';

export default function Index() {
  return (
    <MainLayout>
      <HeroImage src={HeroImg} alt="TezhZum index hero img"/>
      <HeroImageOverlay src={HeroImgOverlay} alt="TechZum index hero img"/>
      <DarkOverlay></DarkOverlay>
      <IndexHero/>
      <IndexAbout/>
      <IndexServices/>
      <IndexNews/>
      <IndexQuote/>
    </MainLayout>
  )
}

const HeroImage = styled.img`
  object-fit: cover;
  height: 100vh;
  width: 100vw;
  z-index: -3;
  position: fixed;
`
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
`
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
`