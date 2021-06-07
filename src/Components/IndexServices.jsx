import React from 'react'
import styled from "styled-components";

export default function IndexServices() {
  return (
    <ServiceWrapper>
      <ServiceHeading>Vad gör vi</ServiceHeading>
      <ServiceList>
        <ListButton onClick={() => alert("webbutveckling klickad på!")}><ListItem>Webbutveckling</ListItem></ListButton>
        <ListButton onClick={() => alert("Marknadsföring klickad på!")}><ListItem>Marknadsföring</ListItem></ListButton>
        <ListButton onClick={() => alert("Socialamedier klickad på!")}><ListItem>Sociala medier</ListItem></ListButton>
        <ListButton onClick={() => alert("Design klickad på!")}><ListItem>Design</ListItem></ListButton>
        <ListButton onClick={() => alert("System klickad på!")}><ListItem>System</ListItem></ListButton>
        <ListButton onClick={() => alert("Konsulting klickad på!")}><ListItem>Konsulting</ListItem></ListButton>
      </ServiceList>
    </ServiceWrapper>
  )
}

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  place-items: center;
  background-color: #000510;
  min-height: 53vh;
  max-height: auto;
  width: 100;
  color: white;
  padding: 10%;
`

const ServiceHeading = styled.h2`
  font-size: 36px;
  margin-top: 0;
`

const ServiceList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`

const ListItem = styled.li`
  padding-bottom: 15px;
  padding-top: 15px;
  font-size: 18px;
`

const ListButton = styled.button`
  width: 100%;
  text-align: left;
  background-color: transparent;
  color: white;
  border: none;
  border-top: 2px solid white;
`