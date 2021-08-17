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

  const [count, setCount] = useState({});


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
    fetchCount();
    setInterval(() => {
      fetchCount();
    }, 60000);
  }, []);

  async function listreadingData() {
    await axios
      .get(
        "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/read-speed-data"
      )
      .then((result) => {
        // console.log('result-----', result.data.responseData)
        var arr = [{
          id: "Write-graph",
          // color: "hsl(248, 70%, 50%)",
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


  //for count of tps:

  async function fetchCount() {
    await axios
      .get(
        "https://lmeqebp7fj.execute-api.us-east-1.amazonaws.com/testnet/tps-calculate"
      )
      .then((res) => {
        setCount(res.data.responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let tpsCount = (count.totalTransactions / 60).toFixed(2);


  // console.log('key--', key)
  //   console.log('hash--', hash)
  // console.log('name--',name)
  // console.log('keyword',keywords)

  return (
    <>
      <HeaderComponent CheckMode={CheckMode} />
      <Searchlist dark={dark} locations={keyword} username={advname} hashname={advhash} list={read} tps={tpsCount} />
      <FooterComponent />
    </>
  );
}

