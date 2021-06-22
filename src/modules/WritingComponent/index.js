import BaseComponent from "./";
import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import Writingcomponent from "./writingComponent";

export default class Writing extends BaseComponent {
  render() {
    return (
      <div>
        <Writingcomponent />
      </div>
    );
  }
}
