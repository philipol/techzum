import React from "react";

export const SetAuth = (values: any) => {
  const userName = values.username;
  userName.toLowerCase();
  if (
    userName == "philip@techzum.se" ||
    userName == "jesper@techzum.se" ||
    userName == "albin@techzum.se" ||
    userName == "admin@techzum.se"
  ) {
    console.log(values.username);
    if (values.password == "!Test123Techzum!") {
      console.log(values.password);
      return true;
    } else {
      return false;
    }
  } else {
    console.log("Felaktigt användarnamn!");
    return false;
  }
};

export const CheckAuth = () => {
  const authCheck = localStorage.getItem("Auth");
  if (authCheck === "true") {
    return true;
  } else {
    return false;
  }
};
/*import React from "react";
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";

const Auth = (values: any, renderComponent: any, exact: boolean, path: string) => {
  if (values.username == "Philip" || values.username == "Jesper") {
    console.log(values.username);
    if (values.password == "!Test123!") {
      return ( 
        <Route path={path} exact={exact} component={renderComponent} />
      )
    } else {
      console.log("Felaktigt lösenord!");
    }
  } else {
    console.log("Felaktigt användarnamn!");
  }
};

export default Auth;*/
