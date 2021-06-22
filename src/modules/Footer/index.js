import React from "react";
import BaseComponent from "../baseComponent";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import FooterComponent from "./footer";

export default class Footer extends BaseComponent {
  render() {
    return (
      <div>
        <FooterComponent />
      </div>
    );
  }
}
