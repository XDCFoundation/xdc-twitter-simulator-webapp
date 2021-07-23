import React, { useState, useEffect } from "react";
import axios from "axios";
import Nodes from "./webSocket"

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
// const markers = [
//   {
//     markerOffset: -30,
//     coordinates: [-0.1224, 51.4964],//[long,lat]
//   },
//   { markerOffset: 15, coordinates: [2.3869, 48.9163] },
//   { markerOffset: 15, coordinates: [72.8856, 19.0748] },
//   { markerOffset: 15, coordinates: [103.8554, 1.3036] },
//   { markerOffset: 15, coordinates: [151.1866, -33.9166] },
//   { markerOffset: 15, coordinates: [3.406448, 6.465422] },
//   { markerOffset: -30, coordinates: [45.0792, 23.8859] },
//   { markerOffset: -30, coordinates: [-57.5759, -25.2637] },
//   { markerOffset: 15, coordinates: [-55.2038, 5.852] },
// ];


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const NodeChart = (props) => {
  const [node, setNode] = useState([]);

  // useEffect(() => {
  //   noOfNodes();
  // }, []);
  // let data = global.obj
  // var arr = []
  // alert(typeof (data))
  // if (data) {
  //   data.map(item => {

  //     if (item[item.length - 1] == ")") {
  //       var start = item.lastIndexOf("(") + 1
  //       var end = item.length - 1
  //       var result = item.substring(start, end)
  //       arr.push(result)
  //     } else {
  //       var start = item.lastIndexOf("-") + 1
  //       var end = item.length - 1
  //       var result = item.substr(start, end)
  //       arr.push(result)

  //     }

  //   })



  // }

  // let newarray = arr.filter(element => element !== 'Click');
  // console.log("ip result---",newarray);



  let ip = props.ipcount
  console.log('ip-------', ip)

  ip.map(item => {
    axios
      .get("http://ip-api.com/json/" + item)
      .then((res) => {
        var nodes = node
        nodes.push({ coords: [res.data.lon, res.data.lat] })
        // console.log('locations....', nodes)
        setNode(nodes);
      })
      .catch((err) => {
        console.log(err);
      });
  })


  

  return (
    <div>

      <ComposableMap
        style={
          props.dark
            ? {
              fill: "#293178",
            }
            : { fill: "#bdc1e5" }
        }
      > <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo}></Geography>
              ))
            }
          </Geographies>

          {node.map((items) => (
            <Marker coordinates={items.coords}>
              <g
                fill="#10c892"
                stroke="#10c892"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
              >
                <circle cx="12" cy="" r="9" />
              </g>
            </Marker>
          ))
          }
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default NodeChart;
