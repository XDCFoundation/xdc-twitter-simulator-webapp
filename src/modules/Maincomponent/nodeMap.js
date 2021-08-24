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

const geoUrl = process.env.REACT_APP_NODES_MAP_URL

const NodeChart = (props) => {
  const [node, setNode] = useState([]);

  let ip = props.ipcount
  // console.log('ip-------', ip.length)

  ip.map(item => {
    // console.log('item---',item)
    axios
      .get(process.env.REACT_APP_NODE_LOCATIONS + item)
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
              width: '100%',
              height: '218px'
            }
            : {
              fill: "#bdc1e5",
              width: '100%',
              height: '218px'
            }
        }
      >
        {/* <ZoomableGroup zoom={1}> */}
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
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </div>
  );
};

export default NodeChart;
