import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const NodeChart = (props) => {
  const [node, setNode] = useState([]);
  useEffect(() => {
    noOfNodes();
    setInterval(() => {
      noOfNodes();
    }, 10000);
  }, []);
  const noOfNodes = () => {
    axios
      .get("https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/nodeNumber")
      .then((res) => {
        // alert(JSON.stringify(res));
        setNode(res.data);
        // console.log("responseDataChekk", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <Geography key={geo.rsmKey} geography={geo} style={{
              default: { outline: "none" },
              hover: { outline: "none" },
              pressed: { outline: "none" },
            }}>
             
            </Geography>
          ))
        }
      </Geographies>

      {/* {markers.map(({ name, coordinates, markerOffset }) => { */}

      {node.slice(1).map((response) => {
        let newValue = response.coordinates;
        // console.log("coordinates",newValue)
        return (
          <Marker coordinates={newValue}>
            <g
              fill="#10c892"
              stroke="#10c892"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="" r="9"></circle>
            </g>
          </Marker>
        );
      })}
      </ZoomableGroup>
    </ComposableMap>
    </div>
  );
};

export default NodeChart;
