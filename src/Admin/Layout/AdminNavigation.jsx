import React, { useState } from "react";
import styled from "styled-components";
import "../../Assets/Styles/layout.css";
import { Link } from "react-router-dom";
import { adminServices } from "../../Data/navData";
import "react-responsive-modal/styles.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function AdminNavigation() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarState = () => setSidebar(!sidebar);

  return (
    <NavWrapper>
      <Nav>
        <Link rel="stylesheet" to="#" className="menu-bars">
          <FaIcons.FaBars onClick={sidebarState} style={{ color: "#43a7f5" }} />
        </Link>
      </Nav>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link rel="stylesheet" to="#" className="menu-bars">
              <AiIcons.AiOutlineClose
                onClick={sidebarState}
                style={{ color: "#43a7f5" }}
              />
            </Link>
          </li>
          {adminServices.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} target="_top">
                  {item.icon}
                  <span className="nav-title" style={{ color: "#43a7f5" }}>
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
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
