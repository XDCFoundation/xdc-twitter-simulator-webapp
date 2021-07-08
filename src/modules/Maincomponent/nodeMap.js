import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
const markers = [
  {
    markerOffset: -30,

    coordinates: [-5.3816, -34.6037],
  },
  { markerOffset: 15, coordinates: [78.9629, 20.5937] },
  { markerOffset: 15, coordinates: [133.7751, -25.2744] },
  { markerOffset: 15, coordinates: [-102.5528, 23.6345] },
  { markerOffset: 15, coordinates: [-3.7492, 40.4637] },
  { markerOffset: 15, coordinates: [3.406448, 6.465422] },
  { markerOffset: -30, coordinates: [45.0792, 23.8859] },
  { markerOffset: -30, coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, coordinates: [-55.2038, 5.852] },
];

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const NodeChart = () => {
  return (
    <ComposableMap
      style={{
        fill: "#bdc1e5",
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}></Geography>
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
      ))}
    </ComposableMap>
  );
};

export default NodeChart;
