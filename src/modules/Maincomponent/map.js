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
      } : { fill: "#bdc1e5" }}
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
       <svg width="100%" height="100%" opacity="0.5" >
         <defs>
           <filter
             id="rounded-corners"
             x="-0.09"
             y="-0.09"
             width="1.2"
             height="1.4"
           >
             <feFlood flood-color="#4c4f6c" />
             <feGaussianBlur stdDeviation="1" />
             <feComponentTransfer>
               <feFuncA type="table" tableValues="0 0 0 20" />
             </feComponentTransfer>
             <feComposite operator="over" in="SourceGraphic" />
           </filter>
         </defs>
         <text filter="url(#rounded-corners)"
           font-size="16"
           fontWeight="500"
           alignment-baseline="middle"
           // y="100"
           y="30"
           x="20"
           style={{ fill: "#ffffff" }}
         >
           {name}
         </text>
       </svg>
     </Marker>
      ))}
    </ComposableMap>
  );
};
export default MapChart;
