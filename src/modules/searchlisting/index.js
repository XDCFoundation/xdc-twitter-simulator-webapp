import BaseComponent from "../baseComponent";
import React from "react";
import Searchlist from "./searchListing";
import HeaderComponent from "../Header/header";

export default class Search extends BaseComponent {
  render() {
    return (
      <>
        <HeaderComponent />
        <Searchlist />
        ////footer
      </>
    );
  }
}
