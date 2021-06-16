import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ContactForm from "../Form/ContactForm";

export default function ServicesQuote() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const memoizedShowModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const memoizedCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <QuoteWrapper>
      <QuoteText>
        <QuoteMark>"</QuoteMark> Väx digitalt med oss! <QuoteMark>"</QuoteMark>
      </QuoteText>
      <ContactModal onClick={memoizedShowModal}>Kontakta oss</ContactModal>
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
    </QuoteWrapper>
  );
}

const QuoteWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 10%;
  margin: 0;
  @media (min-width: 1000px) {
    padding: 5%;
  }
`;

const QuoteText = styled.h2`
  color: white;
  margin: 0;
  @media (min-width: 700px) {
    font-size: 34px;
  }
  @media (min-width: 1000px) {
    font-size: 44px;
  }
  @media (min-width: 1300px) {
    font-size: 54px;
  }
`;

const QuoteMark = styled.span`
  font-size: 50px;
  margin-top: 30px;
  @media (min-width: 700px) {
    font-size: 70px;
  }
`;
const ContactModal = styled.button`
  color: white;
  background-color: #43a7f5;
  border-radius: 5px;
  border: none;
  padding: 10px;
  width: 60%;
  font-size: 25px;
  text-decoration: none;
  margin: 10px 0;
  @media (min-width: 700px) {
    width: 30%;
  }
`;
