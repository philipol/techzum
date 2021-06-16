import React from "react";
import "../../Assets/Styles/overall.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dataServices } from "../Layout/navData";

const IndexServices = () => {
  const DataArr = Array(6).fill(0).map(Number.call, Number);

  const Cell = (props) => {
    const { index } = props;

    return (
      <div
        id="cardContainer"
        style={{
          height: `100px`,
          transition: "0.9s",
        }}
      >
        <div
          id="firstDisplay"
          style={{
            backgroundImage: `url(${dataServices[index].src})`,
            backgroundSize: "100% auto",
          }}
        >
          <Link
            to="/vad-vi-gor"
            target="_top"
            style={dataServices[index].style}
          >
            <h3 className="titelLink">{dataServices[index].label} &#x2192; </h3>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <ServiceWrapper>
      <ServiceHeading>Vad gör vi</ServiceHeading>
      <ServiceList>
        {DataArr.map((val, i) => (
          <Cell key={i} index={i} />
        ))}
      </ServiceList>
    </ServiceWrapper>
  );
};

export default IndexServices;
const ServiceWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  place-items: center;
  background-color: #000510;
  min-height: 53vh;
  max-height: auto;
  width: 100%;
  color: white;
  padding: 10%;
`;

const ServiceHeading = styled.h2`
  font-size: 36px;
  margin-top: 0;
`;

const ServiceList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  @media screen and (min-width: 780px) {
    display: grid;
    gap: 5%;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1225px) {
    display: grid;
    gap: 5%;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

/*const DataArr = Array(6)
  .fill(0)
  .map(Number.call, Number);
	
	const Cell = (props)=> {
  const { index } = props;
  const [active, handleActive] = useState(isMobile ? false : false);

  return !isMobile ? 
    (
      <div className="card card-1" style={{backgroundImage: `url(${Services[index].src})`, backgroundSize: "100% auto"}}>
        <div 
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.4)",       
            width: "80%",
            height: "36%",
            borderRadius: "6px",
            margin: "-20px",
          }}>

      </div>
        <div className="card__icon">{Services[index].label}<i className="fas fa-bolt"></i></div>
        <p className="card__title">{Services[index].text}</p>
        <p className="card__apply"><a href="#">Kontakta oss<i className="fas fa-arrow-right"> 	&#x2192; </i></a></p>
      </div>
    )
    :
    (
    <div
      id="cardContainer"
      style={{
        height: active ? `260px` : `100px`,
        transition: "0.9s"
      }}
      onClick={() => {
        !isMobile && handleActive(!active);
      }}
    >
      <div id="firstDisplay" style={{backgroundImage: `url(${Services[index].src})`, backgroundSize: "100% auto"}}>
        <h2 style={Services[index].style}>{Services[index].label} &#x2192; </h2>
      </div>
      
      <div
        id="first"
        style={{
          transform: active
            ? `rotate3d(1, 0, 0, -180deg)`
            : `rotate3d(1, 0, 0, 0deg)`,
          transitionDelay: active ? "0s" : "0.3s"
        }}
      >
        <div id="firstTop">
          <img src={`${Services[index].src}`} style={{width: "100%", height: "100px", opacity: 0.5, objectFit: "cover"}} alt="" />
          <h2 style={Services[index].textStyle}>{Services[index].label}</h2>
        </div>

        <div id="firstBehind">
          <div id="firstBehindDisplay">
            <div id="firstBehindRow">
              <p>{Services[index].text}</p>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
}*/
