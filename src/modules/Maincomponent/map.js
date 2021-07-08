import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  

const MapChart = (props) => {
  const [hashtag, setHashtag] = useState([]);
  useEffect(() => {
    fetchHashtag();
  }, []);
  const fetchHashtag = () => {
    axios
      .get(
        "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com//trendingHashtags-from-db"
      )
      .then((res) => {
        // alert(JSON.stringify(res));
        setHashtag(res.data.responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ComposableMap
      style={props.dark ? {
        fill: "#293178"
      }: {fill: "#bdc1e5"}}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {hashtag.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          {/* <div> */}
           <rect x="-5" y="-8" width="20%" height="35" rx="6"
        fill="#4c4f6c"  stroke-width="10" border="5" opacity="0.4" />
          <text 
            textAnchor="absolute"
            y={markerOffset}
            x={markerOffset}
            style={{ fill: "#ffffff" }}
          >
            {name}
          </text>
          {/* </div> */}
        </Marker>
      ))}
    </ComposableMap>
  );
};
export default MapChart;
