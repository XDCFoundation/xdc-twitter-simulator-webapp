import BaseComponent from "../baseComponent";
import React, {useState, useEffect} from "react";
import Searchlist from "./searchListing";
import HeaderComponent from "../Header/header";
import FooterComponent from "../Footer/footer";

export default function Main(props) {

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

  const [dark, setMode] = useState(getMode())
  const [keyword, searchKeyword]= useState(props?.match?.params?.keyword)

  const CheckMode = (mode) => {
    setMode(mode)
  }
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

 

    return (
      <>
        <HeaderComponent CheckMode={CheckMode} />
        <Searchlist dark={dark} locations={keyword} />
        <FooterComponent />
      </>
    );
  }

