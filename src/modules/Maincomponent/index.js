import React from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "../Footer/footer";
import HeaderComponent from "../Header/header";
import MainComponent from "./maincomponent";

export default class Main extends BaseComponent {
  render() {
    return (
      <div>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    );
  }
}
