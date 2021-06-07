import React from 'react'
import styled from "styled-components";

export default function IndexServices() {
  return (
    <ServiceWrapper>
      <ServiceHeading>Vad gör vi</ServiceHeading>
      <ServiceList>
        <ListItem>Webbutveckling</ListItem>
        <ListItem>Marknadsföring</ListItem>
        <ListItem>Sociala medier</ListItem>
        <ListItem>Design</ListItem>
        <ListItem>System</ListItem>
        <ListItem>Konsulting</ListItem>
      </ServiceList>
    </ServiceWrapper>
  )
}

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  place-items: center;
  background-color: #000510;
  min-height: 60vh;
  max-height: auto;
  width: 100;
  color: white;
  padding: 10%;
`

const ServiceHeading = styled.h2`
  font-size: 36px;
  margin-top: 36px;
`

const ServiceList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`

const ListItem = styled.li`
  height: 50px;
  border-top: 2px solid white;
`