import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Footer() {
  const [footerText, setFooterText] = useState('\u00A9')

  async function setCompanyName() {
    const companyName = "Digizum AB"
    const date = new Date();
    const year = date.getFullYear();
    setFooterText("\u00A9" + "Copyright " + year + " - " + companyName)
  }
  useEffect(() => { 
    setCompanyName()
  }, [])
  return (
    <FooterWrapper>
      <ContactInfoWrapper>
        <h2>Kontakt</h2>
        <a href="/">info@digizum.com</a>
      </ContactInfoWrapper>
      <SocialMediaWrapper>
        <h2>Håll dig uppdaterad</h2>
        <a href="/">
          <img src=""/>
          <h3>Facebook</h3>
        </a>
        <a href="/">
          <img src=""/>
          <h3>Instagram</h3>
        </a>
        <a href="/">
          <img src=""/>
          <h3>Linked in</h3>
        </a>
      </SocialMediaWrapper>
      <ContactWrapper>
        <h2>Ska vi kontakta dig?</h2>
        <label htmlFor="">Email:</label><br/>
        <input type="text"/><br/>
        <button>Skicka</button>
      </ContactWrapper>
      <PoweredByWrapper>
        {footerText}
      </PoweredByWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  background-color: #010410;
  color: white;
`

const ContactInfoWrapper = styled.div`
  width: 80%;
  padding: 10%;
  padding-bottom: 0;
  a{
    color: white;
  }
`

const SocialMediaWrapper = styled.div`
  width: 80%;
  padding: 10%;
  padding-bottom: 0;
  h2{
    margin: 0;
  }
  h3{
    color: white;
    margin: 0;
  }
`

const ContactWrapper = styled.div`
  width: 80%;
  padding: 10%;
  h2{
    margin-top: 0;
  }
  label{
    font-weight: bold;
  }
  input{
    border-radius: 5px;
    border: 1px solid black;
    height: 30px;
    width: 98%;
    margin: 5px 0 5px 0;
  }
  button{
    background-color: #44a7f5;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    width: 100%;
    margin: 0;
  }
`

const PoweredByWrapper = styled.div`
  display: grid;
  place-items: center;
  background-color: white;
  color: black;
  width: 100%;
  height: 50px;
`