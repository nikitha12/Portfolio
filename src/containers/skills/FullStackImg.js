import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    return (
      <img src={require(`../../assets/images/FullStackImg.png`)} alt={"FullStackDeveloper"} style={{ borderRadius: 50, padding: 20}}></img>
    );
  }
}
