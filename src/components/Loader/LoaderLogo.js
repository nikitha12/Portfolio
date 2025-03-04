import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
      <img src={require("../../assets/images/splashlogo.png")} alt={"Splash Logo"}></img>
    );
  }
}

export default LogoLoader;
