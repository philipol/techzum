import React, { useCallback, useState } from "react";
import styled from "styled-components";
import "../../Assets/Styles/overall.css";
import { dataServices } from "../Layout/navData";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ContactForm from "../Form/ContactForm";

const ServicesCards = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const memoizedShowModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const memoizedCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const DataArr = Array(6).fill(0).map(Number.call, Number);

  const Cell = (props) => {
    const { index } = props;

    return (
      <CardWrapper
        className="cardWrapper"
        style={{
          minHeight: `50vh`,
          transition: "0.9s",
        }}
      >
        <ImgWrapper className="servicesImgWrapper">
          <img className="bigServiceImg" src={dataServices[index].src} alt="" />
          <img
            className="smallServiceImg"
            src={dataServices[index].src}
            alt=""
          />
        </ImgWrapper>
        <ServicesText>
          <h2 className="servicesHeading">{dataServices[index].label}</h2>
          <p>{dataServices[index].text}</p>
          <ContactModal onClick={memoizedShowModal}>Kontakta oss</ContactModal>
        </ServicesText>
      </CardWrapper>
    );
  };
  return (
    <ServiceWrapper>
      <ServiceList>
        {DataArr.map((val, i) => (
          <Cell key={i} index={i} />
        ))}
      </ServiceList>
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
    </ServiceWrapper>
  );
};

export default ServicesCards;
const ServiceWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  place-items: center;
  min-height: 53vh;
  max-height: auto;
  width: 100%;
  color: white;
`;
const CardWrapper = styled.div`
  place-items: center;
  min-height: 53vh;
  max-height: auto;
  width: 100%;
  @media screen and (min-width: 780px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and (min-width: 1225px) {
  }
`;

const ServicesText = styled.div`
  @media screen and (min-width: 780px) {
    grid-row: 1;
    padding: 5%;
  }
`;

const ImgWrapper = styled.div`
  height: 150px;
  @media screen and (min-width: 780px) {
    min-height: 150px;
    padding: 5%;
    grid-row: 1;
    transform: translateY(-65%);
  }
`;

const ServiceList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`;
const ContactModal = styled.button`
  color: white;
  background-color: #43a7f5;
  border-radius: 5px;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 25px;
  text-decoration: none;
  margin: 10px 0;
`;
