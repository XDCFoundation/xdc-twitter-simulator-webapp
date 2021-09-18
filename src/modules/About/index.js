import React, { useEffect, useState } from "react";
import { Row, Column } from "simple-flexbox";
import BaseComponent from "../baseComponent";
import FooterComponent from "../Footer/footer";
import HeaderComponent from "../Header/header";
import Aboutcomponent from "./about";

export default function Main() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };

  const [dark, setMode] = useState(getMode());

  const CheckMode = (mode) => {
    setMode(mode);
  };
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);

  return (
    <div>
      <HeaderComponent CheckMode={CheckMode} />
      <Aboutcomponent dark={dark} />
      <FooterComponent />
    </div>
  );
}
