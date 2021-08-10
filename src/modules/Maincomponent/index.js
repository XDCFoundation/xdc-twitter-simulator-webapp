import React, { useEffect, useState } from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "../Footer/footer";
import HeaderComponent from "../Header/header";
import MainComponent from "./maincomponent";

export default function Main(props) {


  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

  const [dark, setMode] = useState(getMode())

  const CheckMode = (mode) => {
    setMode(mode)
  }
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

console.log("propsss",props.res);

  return (
    <div>
      <HeaderComponent CheckMode={CheckMode} />
      <MainComponent dark={dark} />
      <FooterComponent />
    </div>
  );
}

