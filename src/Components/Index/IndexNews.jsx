import React from "react";
import styled from "styled-components";
import NewsImg from "../../Components/Assets/Img/news.jpg";

export default function IndexNews() {
  return (
    <NewsWrapper>
      <NewsHeading>Det här kan vara bra att veta</NewsHeading>
      <NewsImage src={NewsImg} alt="" />
      <NewsTextOverlay>
        <NewsTextHeader>SEO</NewsTextHeader>
        <NewsTextParagraf>
          För att ranka bra och synas i sökmotorer behöver man arbeta med -
          sökmotoroptimering. Att kontinuerligt arbeta med innehåll och
          nyckelord känner många företag redan till.
        </NewsTextParagraf>
      </NewsTextOverlay>
      <ReadMoreBtn>Jag vill vet mer</ReadMoreBtn>
    </NewsWrapper>
  );
}

const NewsWrapper = styled.div`
  display: none;
  grid-template-rows: 100px 30% auto auto;
  height: 60vh;
  padding: 10%;
  color: black;
  background-color: white;
  text-align: center;
`;

const NewsHeading = styled.h2`
  font-size: 36px;
  margin-top: 10px;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NewsTextOverlay = styled.div`
  width: 70%;
  background-color: white;
  margin-top: -20%;
  margin-left: 10%;
  padding: 5%;
  padding-bottom: 0;
  text-align: left;
  overflow: hidden;
`;

const NewsTextHeader = styled.h3``;

const NewsTextParagraf = styled.p``;

const ReadMoreBtn = styled.button`
  margin-top: -50px;
  font-size: 20px;
  height: 45px;
  border-radius: 15px;
  border: none;
  background-color: #43a7f5;
  color: white;
`;
