import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { socialIcons } from "./navData";

export default function Footer() {
  const [footerText, setFooterText] = useState("\u00A9");

  async function setCompanyName() {
    const companyName = "TechZum AB";
    const date = new Date();
    const year = date.getFullYear();
    setFooterText("\u00A9" + "Copyright " + year + " - " + companyName);
  }
  useEffect(() => {
    setCompanyName();
  }, []);
  return (
    <FooterWrapper>
      <ContactInfoWrapper>
        <h2>Kontakt</h2>

        <a href="mailto: admin@techzum.se" style={{ fontSize: "18px" }}>
          admin@techzum.se
        </a>
      </ContactInfoWrapper>
      <SocialMediaWrapper>
        <h2>Håll dig uppdaterad</h2>
        {socialIcons.map((item, index) => {
          return (
            <a
              href={item.url}
              key={index}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <h3 style={{ marginTop: "10px" }}>
                <span style={{ marginRight: "10px" }}>{item.icon}</span>
                {item.title}
              </h3>
            </a>
          );
        })}
      </SocialMediaWrapper>
      <ContactWrapper>
        <h2>Ska vi kontakta dig?</h2>
        <label htmlFor="" style={{ fontSize: "18px" }}>
          Email:
        </label>
        <br />
        <input
          style={{ paddingLeft: "1%" }}
          type="text"
          placeholder="Skriv din E-postadress här!"
        />
        <br />
        <button>Skicka</button>
      </ContactWrapper>
      <PoweredByWrapper>{footerText}</PoweredByWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  background-color: #010410;
  color: white;
  @media screen and (min-width: 780px) {
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ContactInfoWrapper = styled.div`
  width: 80%;
  padding: 10%;
  padding-bottom: 0;
  a {
    color: white;
  }
  @media screen and (min-width: 780px) {
    padding: 7%;
    padding-left: 20%;
    transform: translateX(25%);
  }
`;

const SocialMediaWrapper = styled.div`
  width: 80%;
  padding: 10%;
  padding-bottom: 0;
  h2 {
    margin: 0;
  }
  h3 {
    color: white;
    margin: 0;
  }
  @media screen and (min-width: 780px) {
    padding: 7%;
    transform: translateX(25%);
  }
`;

const ContactWrapper = styled.div`
  padding: 10%;
  h2 {
    margin-top: 0;
  }
  label {
    font-weight: bold;
  }
  input {
    border-radius: 5px;
    border: 1px solid black;
    height: 30px;
    width: 100%;
    margin: 5px 0 5px 0;
  }
  button {
    background-color: #44a7f5;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    width: 100%;
    margin: 0;
  }
  @media screen and (min-width: 780px) {
    padding: 7%;
    padding-right: 10%;
  }
  @media screen and (min-width: 1200px) {
    padding-right: 20%;
  }
`;

const PoweredByWrapper = styled.div`
  display: grid;
  place-items: center;
  background-color: white;
  color: black;
  width: 100%;
  height: 50px;
  @media screen and (min-width: 780px) {
    grid-column: 1/4;
  }
`;
