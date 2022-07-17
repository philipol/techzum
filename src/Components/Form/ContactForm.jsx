import React from "react";
import styled from "styled-components";

export default function ContactForm() {
  return (
    <FormWrapper>
      <Form
        action="mailto:info@techzum.se"
        method="POST"
        enctype="multipart/form-data"
        name="EmailForm"
      >
        <h1>Kontakta oss!</h1>
        <InputWrappers>
          <Label htmlFor="name">Namn:</Label>
          <Input type="text" name="name" />
        </InputWrappers>
        <InputWrappers>
          <Label htmlFor="company">Företagsnamn:</Label>
          <Input type="text" name="company" />
        </InputWrappers>
        <InputWrappers>
          <Label htmlFor="email">Mailadress:</Label>
          <Input type="email" name="email" />
        </InputWrappers>
        <InputWrappers>
          <Label htmlFor="phone">Mobilnummer:</Label>
          <Input type="number" name="phone" />
        </InputWrappers>
        <InputWrappers>
          <Label htmlFor="text">Meddelande:</Label>
          <textarea name="text" style={{ fontSize: "22px" }} />
        </InputWrappers>
        <Submit>Skicka</Submit>
      </Form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  display: grid;
  height: auto;
  width: 80vw;
  place-items: center;
  @media screen and (min-width: 700px) {
    width: 60vw;
  }
  @media screen and (min-width: 1200px) {
    width: 35vw;
  }
`;

const Form = styled.form`
  display: grid;
  width: 95%;
  padding: 5%;
  color: #fff;
`;

const InputWrappers = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 20px;
`;
const Input = styled.input`
  font-size: 22px;
`;

const Submit = styled.button`
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
