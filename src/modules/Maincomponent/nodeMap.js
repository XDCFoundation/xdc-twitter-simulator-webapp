import React, { useState, useEffect } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
const markers = [
  {
    markerOffset: -30,
    coordinates: [-0.1224,51.4964]//[long,lat]
  },
  { markerOffset: 15, coordinates: [2.3869, 48.9163] },
  { markerOffset: 15, coordinates: [72.8856, 19.0748] },
  { markerOffset: 15, coordinates: [103.8554, 1.3036] },
  { markerOffset: 15, coordinates: [151.1866, -33.9166] },
  // { markerOffset: 15, coordinates: [3.406448, 6.465422] },
  // { markerOffset: -30, coordinates: [45.0792, 23.8859] },
  // { markerOffset: -30, coordinates: [-57.5759, -25.2637] },
  // { markerOffset: 15, coordinates: [-55.2038, 5.852] },
];


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const NodeChart = (props) => {

  return (
    <div>
    <ComposableMap
      style={props.dark ? {
        fill: "#293178"
      } : { fill: "#bdc1e5" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} >

            </Geography>
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
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

    </ComposableMap>
    </div>
  );
};

export default NodeChart;
