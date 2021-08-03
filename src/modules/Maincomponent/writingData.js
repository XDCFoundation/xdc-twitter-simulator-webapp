import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import "../../assets/styles/custom.css";
import axios from "axios";

// const point={}

// const data = [
//   {
//     id: "japan",
//     data: [
//       {
//         x: "plane",
//         y: 266,
//       },
//       {
//         x: "helicopter",
//         y: 34,
//       },
//       {
//         x: "boat",
//         y: 67,
//       },
//       {
//         x: "train",
//         y: 27,
//       },
//       {
//         x: "subway",
//         y: 238,
//       },
//       {
//         x: "bus",
//         y: 252,
//       },
//       {
//         x: "car",
//         y: 83,
//       },
//       {
//         x: "moto",
//         y: 68,
//       },
//       {
//         x: "bicycle",
//         y: 131,
//       },
//       {
//         x: "horse",
//         y: 11,
//       },
//       {
//         x: "skateboard",
//         y: 240,
//       },
//       {
//         x: "others",
//         y: 273,
//       },
//     ],
//   },
// ];
const MyResponsiveLine = ({ data ,readtweets, response/* see data tab */ }) => (
  
  
  <ResponsiveLine
  // response={response}
    // data={data}
    margin={{ top: 10, right: 10 }}
    colors={{ scheme: "category10" }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="basis"
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableGridX={false}
    enableGridY={false}
    // colors={{ scheme: 'purple_blue' }}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: "background" }}
    enableCrosshair={false}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    enableArea={true}
    useMesh={true}
    legends={[]}
  />
  
);

export default function App(props) {
  const [readtweets, setReadTweets] = useState([]);

  useEffect(() => {
    fetchTweets();
    setInterval(() => {
      fetchTweets();
    }, 10000);
  }, []);
  const fetchTweets = () => {
    axios
      .get(
        "https://lmeqebp7fj.execute-api.us-east-1.amazonaws.com/testnet/writing-speed"
      )

      // .then(res => res.json() )
      .then((result)=>{
        // console.log("time", result.data.responseData);
        setReadTweets(result.data.responseData);
        var arr = [{
          id:"writeData",
          data:[]
        }]
        console.log("array",arr);
        let a = readtweets;
        console.log("aaaaa",a);
        var resultData = []

       readtweets.map(items =>{
          let time = items.startTime;
          console.log("timesssss",time);
          
          
          resultData.push({
            x: time,
            y:items.endTime

          })
        })
        let graphData=resultData;
        console.log("graphdata",graphData);
      })
        
       
      
      .catch((err) => {
        console.log(err);
      });

    // console.log("resulttttttt", result);
  };
  // return (
  //   <div style={{ height: 70 }}>
  //     {console.log("readtweetsss", readtweets)}
  //     {readtweets &&
  //       readtweets.length >= 1 &&
  //       readtweets.map((response) => {
  //         console.log("writingdataaaaaaaaaaaaa", response);
  //         let value = response.totalTransactions;
  //         console.log("data",data)
          return (
            <>
              <MyResponsiveLine  />
              {/* <MyResponsiveLine response={response} /> */}
            </>
           ); 
        //  })} 
    // </div>
  // );
}
