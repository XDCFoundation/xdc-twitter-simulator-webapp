import React, { useEffect, useState } from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "../Footer/footer";
import HeaderComponent from "../Header/header";
import MainComponent from "./maincomponent";
import axios from 'axios';
import moment from 'moment';

export default function Main(props) {


  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

  const [dark, setMode] = useState(getMode())
  const [data, setData] = useState([])
  const [read, setRead] = useState([])

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

  async function readingData(){
    await axios
        .get(
          process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_READ_SPEED_DATA
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
                  y: items.responseTime/items.requestCount
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
          
 
        let graphdata = getUnique(resultData,'x').reverse()
        
        let newData = graphdata.slice(-1)
      
        let firstData= Object.values(newData[0])
       
        let secondData = parseFloat(1000/firstData[1]).toFixed(2)
       
        setRead(secondData)
       

       
        arr[0].data = getUnique(resultData,'x').reverse()
       
        setData(arr)

        })
        .catch((err) => {
            console.log(err);
        });

}    


// let ex = read
// console.log('read---',ex)

  return (
    <div>
      <HeaderComponent CheckMode={CheckMode} />
      <MainComponent dark={dark} data={data} read={read}/>
      <FooterComponent />
    </div>
  );
}

