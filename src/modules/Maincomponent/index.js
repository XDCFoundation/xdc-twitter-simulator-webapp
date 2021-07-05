import React, { useState } from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "../Footer/footer";
import HeaderComponent from "../Header/header";
import MainComponent from "./maincomponent";

export default function Main() {

  const [dark, setMode] = useState(false)

  const CheckMode = (mode) => {
    setMode(mode)
  }

  return (
    <div>
      <HeaderComponent CheckMode={CheckMode} />
      <MainComponent dark={dark} />
      <FooterComponent />
    </div>
  );
}

