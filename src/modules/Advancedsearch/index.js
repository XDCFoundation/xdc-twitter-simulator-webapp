import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import BaseComponent from "../baseComponent";
import AdvancedSearch from "./advancedSearch";

export default class Advanced extends BaseComponent {
  render() {
    return (
      <div>
        <AdvancedSearch />
      </div>
    );
  }
}
