import React from "react";
import devImg from "../Assets/Img/development.jpg";
import marketImg from "../Assets/Img/marketing.jpg";
import systemImg from "../Assets/Img/system.jpg";
import socialImg from "../Assets/Img/social.jpg";
import designImg from "../Assets/Img/design.jpg";
import consultingImg from "../Assets/Img/consulting.jpg";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as VrsIcons from "react-icons/vsc";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";

//import * as IoIcons from 'react-icons/io';

const navbarData = [
  {
    title: "Start",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Vad vi gör",
    path: "/vad-vi-gor",
    icon: <VrsIcons.VscServerProcess />,
    cName: "nav-text",
  },
  /*{
        title: "Läsvärt",
        path: "/lasvart",
        icon: <IoIcons.IoIosPaper/>,
        cName: "nav-text"
    },*/
];

export const adminServices = [
  {
    title: "Klientsidan",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "admin-nav-text",
  },
  {
    title: "Data",
    path: "/admin",
    icon: <FcIcons.FcDataSheet />,
    cName: "admin-nav-text",
  },
  {
    title: "Hämta data",
    path: "/admin/data",
    icon: <FcIcons.FcAddDatabase />,
    cName: "admin-nav-text",
  },
  {
    title: "Aktuell data",
    path: "/admin/aktuell-data",
    icon: <FcIcons.FcDataBackup />,
    cName: "admin-nav-text",
  },
  {
    title: "Godkänd data",
    path: "/admin/order-data",
    icon: <FcIcons.FcAcceptDatabase />,
    cName: "admin-nav-text",
  },
  {
    title: "Skicka mejl",
    path: "/admin/skicka",
    icon: <AiIcons.AiOutlineMail />,
    cName: "admin-nav-text",
  },
];

export const socialIcons = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/TechZum-105401088445587/?ref=page_internal",
    icon: <GrIcons.GrFacebook />,
  },
  /*{
    title: "Instagram",
    url: "/Instagram",
    icon: <GrIcons.GrInstagram />,
  },*/
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/techzum/about/?viewAsMember=true",
    icon: <SiIcons.SiLinkedin />,
  },
];

export const dataServices = [
  {
    src: devImg,
    style: {
      height: "25%",
      width: "112%",
      margin: "43px -22px 0 -22px",
      paddingLeft: "15px",
      fontSize: "24px",
      transform: "translateY(-50%)",
      color: "white",
      listStyleType: "none",
      textDecoration: "none",
      border: "none",
    },
    them: "rgb(90, 5, 49)",
    label: "Webbutveckling",
    text: `Vi tillhandahåller ett brett utbud avwebbutvecklingslösningar 
      för att kunna hjälpa ditt företag framåt, medstor erfarenhet av att 
      utveckla webbplatser åt en mängd olika branscheroch strategier som 
      du kan lita på, kan du vara säker på att Norderbergsär rätt partner 
      att utveckla din nästa eller uppdatera din befintliga hemsida.`,
  },
  {
    src: marketImg,
    style: {
      height: "25%",
      width: "112%",
      margin: "43px -22px 0 -22px",
      paddingLeft: "15px",
      fontSize: "24px",
      transform: "translateY(-50%)",
      color: "white",
      listStyleType: "none",
      textDecoration: "none",
      border: "none",
    },
    them: "rgb(230, 26, 56)",
    label: "Marknadsföring",
    text: `Vi marknadsför alla typer av företag, stora som små såatt 
      du skall kunna nå din kundgrupp snabbare och billigare. 
      Eftersom närvaron onlineär större än någonsin är det nu det 
      bästa sättet att hitta dina kunder, därför läggervårt största fokus just här.
       Några av dem trafik källorna vi jobbar mest med innefattar, 
       Visnings annonser, video annonser, sökmotor annonsering, 
       sociala medier. Denna typ av annonsering är kostnadseffektiv 
       och du betalar endast efter resultat.Vi hjälper dig att ta fram 
       allt nödvändigt material, optimera både kampanjerna efter hand 
       och din hemsida dit vi skickar kunderna för bästa resultat.`,
  },
  {
    src: systemImg,
    style: {
      height: "25%",
      width: "112%",
      margin: "43px -22px 0 -22px",
      paddingLeft: "15px",
      fontSize: "24px",
      transform: "translateY(-50%)",
      color: "white",
      listStyleType: "none",
      textDecoration: "none",
      border: "none",
    },
    them: "rgb(252, 178, 50)",
    label: "System",
    text: "Vi kan hjälpa till att integrera, underhålla och bygga system ut ifrån era önskemål.",
  },
  {
    src: socialImg,
    style: {
      height: "25%",
      width: "112%",
      margin: "43px -22px 0 -22px",
      paddingLeft: "15px",
      fontSize: "24px",
      transform: "translateY(-50%)",
      color: "white",
      listStyleType: "none",
      textDecoration: "none",
      border: "none",
    },
    them: "rgb(252, 178, 50)",
    label: "Sociala medier",
    text: `Fyra av fem Svenskar använde sociala medier 2017. Detta är en 
      av de största kanalerna som finns i nuläget och ger företagare 
      en plattform att marknadsföra på som låter oss skräddarsy material 
      efter din målgrupp ner på detaljnivå.Genom sociala medier kan vi 
      Öka/underhålla kundengagemang, direkt kommunikation - med vår 
      målgrupp, varumärkesbyggande, Skapa trovärdighet, räckvidd - Nå 
      ut med kampanjer, generera leads, kundservice,omvärldsbevakning - 
      Vad sägs om dig? Vad sägs om ditt företag? Få snabb feedback från kunderna`,
  },
  {
    src: designImg,
    style: {
      height: "25%",
      width: "112%",
      margin: "43px -22px 0 -22px",
      paddingLeft: "15px",
      fontSize: "24px",
      transform: "translateY(-50%)",
      color: "white",
      listStyleType: "none",
      textDecoration: "none",
      border: "none",
    },
    them: "rgb(252, 178, 50)",
    label: "Design",
    text: `Oavsett om du behöver en ny design till en hemsida,produktvideo, 
      animation eller en ny logotype med grafisk profil ellerbara annonsmaterial 
      så finns vi här för att lösa det. Våra begåvade designersoch videoproducenter 
      hjälper dig att visa din produkt eller företag i det bästa möjliga ljuset.`,
  },
  {
    src: consultingImg,
    style: {
      height: "25%",
      width: "112%",
      margin: "43px -22px 0 -22px",
      paddingLeft: "15px",
      fontSize: "24px",
      transform: "translateY(-50%)",
      color: "white",
      listStyleType: "none",
      textDecoration: "none",
      border: "none",
    },
    them: "rgb(252, 178, 50)",
    label: "Konsulting",
    text: "Vi erbjuder även konsultarbete innom alla ovan tjänster.",
  },
];

export default navbarData;
