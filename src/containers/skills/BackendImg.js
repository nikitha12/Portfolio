import React, { Component } from "react";

export default class BackendImg extends Component {
  render() {
    return (
      <img src={require(`../../assets/images/BackendImg.png`)} alt={"BackendDeveloper"} style={{ borderRadius: 50, padding: 20}}></img>

    );
  }
}
