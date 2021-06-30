import BaseComponent from "../baseComponent";
import React from "react";
import Searchlist from "./searchListing";
import HeaderComponent from "../Header/header";
import FooterComponent from "../Footer/footer";

export default class Search extends BaseComponent {
  render() {
    return (
      <>
        <HeaderComponent />
        <Searchlist />

        <FooterComponent />
      </>
    );
  }
}
