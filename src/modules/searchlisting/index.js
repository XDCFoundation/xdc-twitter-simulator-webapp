import BaseComponent from "../baseComponent";
import React, { useState, useEffect } from "react";
import Searchlist from "./searchListing";
import HeaderComponent from "../Header/header";
import FooterComponent from "../Footer/footer";

export default function Main(props) {

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

  let keywords = props?.match?.params?.keyword
  var key = keywords.split("&")[0]
  var name = keywords.split("&")[1]

  const [dark, setMode] = useState(getMode())
  // const [keyword, searchKeyword] = useState(keywords)
  const [keyword, searchKeyword] = useState(key)
  const [advname, searchname] = useState(name)


  const CheckMode = (mode) => {
    setMode(mode)
  }
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

  // console.log('key--', key)
  // console.log('name--',name)
  console.log('keyword',keywords)

  return (
    <>
      <HeaderComponent CheckMode={CheckMode} />
      <Searchlist dark={dark} locations={keyword} hashname={advname} />
      <FooterComponent />
    </>
  );
}

