import React, { useEffect, useState } from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "../Footer/footer";
import HeaderComponent from "../Header/header";
import MainComponent from "./maincomponent";
import axios from 'axios';
import moment from 'moment';

export default function Main(props) {

  // console.log('props--', props.savingSocket)
  // console.log('props2--', props?.readingSocket)

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

  const [dark, setMode] = useState(getMode())
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
    readingData()
    setInterval(() => {
      readingData();
    }, 60000)
  }, [])

  useEffect(() => {
    writingSpeed()
    setInterval(() => {
      writingSpeed()
    }, 60000);
  }, []);

  // For reading Speed : 

  async function readingData() {
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

  // For saving speed and Current Tps: 

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
          let firstAxis = items.responseTime / 1000 || 0
          let secondAxis = (items?.savedTweets == 0 ? 0 : firstAxis / items?.savedTweets) || 0
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
        let savingGraphdata = getSaveUnique(resultData, 'x')
        let savingnewData = savingGraphdata.slice(-1)
        let savingfirstData = Object.values(savingnewData[0])
        let savingSecondData = parseFloat(savingfirstData[1]).toFixed(2)
        setSave(savingSecondData)

        // arr[0].data = getSaveUnique(resultData, 'x')
        // setsaveData(arr)
        // console.log('arr--',arr)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <HeaderComponent CheckMode={CheckMode} />
      <MainComponent dark={dark}
        data={data}
        read={read}
        Savesocket={props.savingSocket}
        readSocket={props.readingSocket}
        savingSpeed={save} />
      <FooterComponent />
    </div>
  );
}

