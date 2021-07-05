import React, { useEffect, useState } from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "../Footer/footer";
import HeaderComponent from "../Header/header";
import MainComponent from "./maincomponent";

export default function Main() {

  // const getMode = () => {
  //   return JSON.parse(localStorage.getItem("mode")) || false
  // }

  const [dark, setMode] = useState(false)

  const CheckMode = (mode) => {
    setMode(mode)
  }
  // useEffect(() => {
  //   localStorage.setItem("mode", JSON.stringify(dark))
  // }, [dark])



  return (
    <div>
      <HeaderComponent CheckMode={CheckMode} />
      <MainComponent dark={dark} />
      <FooterComponent />
    </div>
  );
}

