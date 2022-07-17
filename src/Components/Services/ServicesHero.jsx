import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ContactForm from "../Form/ContactForm";

export default function ServicesHero() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const memoizedShowModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const memoizedCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);
  return (
    <HeroSection>
      <IndexHeroHeadingWrapper>
        <IndexHeading>
          {" "}
          Det här erbjuder <br />
          vi på<FirmName> TechZum</FirmName>
        </IndexHeading>
        <ContactModal onClick={memoizedShowModal}>Kontakta oss</ContactModal>
      </IndexHeroHeadingWrapper>
      <Modal
        open={isModalVisible}
        onClose={memoizedCloseModal}
        classNames={{
          modal: "customModal",
        }}
        center
      >
        <ContactForm />
      </Modal>
    </HeroSection>
  );
}

const HeroSection = styled.div`
  display: grid;
  grid-template-rows: 2fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  max-width: 100%;
  height: 70vh;
  @media screen and (min-width: 700px) {
    grid-template-rows: 1.5fr 1fr 0.5fr;
    grid-template-columns: 1.5fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;

const IndexHeroHeadingWrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-rows: auto auto auto;
  color: white;
  text-align: center;
  @media screen and (min-width: 700px) {
    grid-column: 1;
    margin-left: 13%;
  }
`;
const IndexHeading = styled.h1`
  grid-row: 1;
  text-align: left;
  font-size: 40px;
  margin: 10px 0;
  color: white;
  @media screen and (min-width: 700px) {
    font-size: 44px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 64px;
  }
`;
const FirmName = styled.span`
  color: #43a7f5;
`;

const ContactModal = styled.button`
  color: white;
  background-color: #43a7f5;
  border-radius: 5px;
  padding: 10px;
  width: 60%;
  font-size: 25px;
  text-decoration: none;
  margin: 10px 0;
  border: none;
`;
