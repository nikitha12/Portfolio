import React, { Component } from "react";

export default class ProjectsImg extends Component {
  render() {
    return (
      <img src={require("../../assets/images/ProjectImg.png")} alt={"Project Details"} style={{ borderRadius: 50, padding: 20}}></img>
      
    );
  }
}
