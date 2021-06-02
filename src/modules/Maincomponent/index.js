import React from "react";
import BaseComponent from "../baseComponent";    
import HeaderComponent from "../Header/header";
import MainComponent from "./maincomponent";

export default class Main extends BaseComponent {
  render() {
    return(
      <div>
    <HeaderComponent />
    <MainComponent />
    </div>
    )
    
}
}