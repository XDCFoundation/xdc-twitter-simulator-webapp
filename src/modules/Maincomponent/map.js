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

const MapChart = () => {
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
      style={{
        fill: "#bdc1e5",
      }}
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
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{
              fill: "#5D5A6D",

              border: "solid 1px #4c4f6c",
              backgroundColor: "#4c4f6c",
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};
export default MapChart;
