import BaseComponent from "../baseComponent";
import React, { useState, useEffect } from "react";
import Searchlist from "./searchListing";
import HeaderComponent from "../Header/header";
import FooterComponent from "../Footer/footer";
import axios from 'axios';
import moment from 'moment';

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

  const [data, setData] = useState([])
  const [read, setRead] = useState([])

  const [save, setSave] = useState([])

  const CheckMode = (mode) => {
    setMode(mode)
  }
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

  useEffect(() => {
    listreadingData()
    setInterval(() => {
      listreadingData();
    }, 60000)
  }, [dark])

  useEffect(() => {
    writingSpeed()
    setInterval(() => {
      writingSpeed()
    }, 60000);
  }, []);

  // For reading Speed in listing page: 

  async function listreadingData() {
    await axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_READ_SPEED_DATA
      )
      .then((result) => {
        var arr = [{
          id: "Write-graph",
          data: []
        }]
        var resultData = []

        result.data.responseData.map(items => {

          resultData.push({
            x: moment(items.addedOn).format('LT'),
            y: items.responseTime / items.requestCount
          })

        })
        function getUnique(resultData, index) {

          const unique = resultData
            .map(e => e[index])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => resultData[e]).map(e => resultData[e]);

          return unique;
        }
        let graphdata = getUnique(resultData, 'x').reverse()
        let newData = graphdata.slice(-1)
        let firstData = Object.values(newData[0])
        let secondData = parseFloat(1000 / firstData[1]).toFixed(2)
        setRead(secondData)
        arr[0].data = getUnique(resultData, 'x').reverse()
        setData(arr)
      })
      .catch((err) => {
        console.log(err);
      });

  }

  // For saving speed in listing page: 

  async function writingSpeed() {
    await axios
      .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVING_SPEED_DATA)
      .then((result) => {
        var arr = [{
          id: "Write-graph",
          data: []
        }]
        var resultData = []

        result.data.responseData[0].map(items => {
            let firstAxis = items?.savedTweets/items?.responseTime
            let secondAxis =  (firstAxis == 0 ? 0 : firstAxis*1000) || 0
          resultData.push({
            x: moment(items.saveStartTime * 1000).format('LT'),
            y: secondAxis
          })

        })
        function getSaveUnique(resultData, index) {

          const saveunique = resultData
            .map(e => e[index])

            // store the keys of the saveunique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store saveunique objects
            .filter(e => resultData[e]).map(e => resultData[e]);

          return saveunique;
        }
        let savingGraphdata = getSaveUnique(resultData, 'x').reverse()
        let savingnewData = savingGraphdata.slice(-1)
        let savingfirstData = Object.values(savingnewData[0])
        let savingSecondData = parseFloat(savingfirstData[1]).toFixed(2)
        // console.log('savinggraph----', savingfirstData[1])
        setSave(savingSecondData)

        // arr[0].data = getSaveUnique(resultData, 'x')
        // setsaveData(arr)
        // console.log('arr--',arr)
      })
      .catch((err) => {
        console.log(err);
      });

  }
  // console.log('key--', key)
  //   console.log('hash--', hash)

  return (
    <>
      <HeaderComponent CheckMode={CheckMode} />
      <Searchlist dark={dark} locations={keyword} username={advname} hashname={advhash} list={read} saveSpeed={save} />
      <FooterComponent />
    </>
  );
}

