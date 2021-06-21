import React, { useState, useCallback } from "react";
import styled from "styled-components";
import "../../Assets/Styles/layout.css";
import { Link } from "react-router-dom";
import navbarData from "../../Data/navData";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ContactForm from "../Form/ContactForm";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const memoizedShowModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const memoizedCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const sidebarState = () => setSidebar(!sidebar);

  return (
    <NavWrapper>
      <Nav>
        <Link rel="stylesheet" to="#" className="menu-bars">
          <FaIcons.FaBars onClick={sidebarState} style={{ color: "#010410" }} />
        </Link>
      </Nav>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link rel="stylesheet" to="#" className="menu-bars">
              <AiIcons.AiOutlineClose
                onClick={sidebarState}
                style={{ color: "#fff" }}
              />
            </Link>
          </li>
          {navbarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} target="_top">
                  {item.icon}
                  <span className="nav-title">{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li key={3} className="nav-text">
            <button onClick={memoizedShowModal}>
              <FaIcons.FaEnvelopeOpenText />
              <span className="nav-title">Kontakt</span>
            </button>
          </li>
        </ul>
      </nav>
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
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  width: auto;
  place-items: center;
  @media (min-width: 700px) {
    width: 100%;
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
