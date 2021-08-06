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
  var hash = keywords.split("&")[1]
  var name = keywords.split("&")[2]


  const [dark, setMode] = useState(getMode())
  // const [keyword, searchKeyword] = useState(keywords)
  const [keyword, searchKeyword] = useState(key)
  const [advhash, searchHash] = useState(hash)
  const [advname, searchname] = useState(name)



  const CheckMode = (mode) => {
    setMode(mode)
  }
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

  // console.log('key--', key)
  //   console.log('hash--', hash)
  // console.log('name--',name)
  // console.log('keyword',keywords)

  return (
    <>
      <HeaderComponent CheckMode={CheckMode} />
      <Searchlist dark={dark} locations={keyword} username={advname} hashname={advhash} />
      <FooterComponent />
    </>
  );
}

