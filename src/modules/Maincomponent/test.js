import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import axios from "axios";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
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
        // "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com//trendingHashtags-from-db"
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
          {/* <div>
          {name}
          </div> */}
          {/* <div> */}
          {/* <rect x="-5" y="-8" width="20%" height="35" rx="6"
            fill="#4c4f6c"  stroke-width="10" border="5" opacity="0.4" /> */}
          {/* <TooltipComponent
            className="tooltip-box"
            content="Tooltip Content"
            mouseTrail={true}
            showTipPointer={false}
          >
            <div id="target">Show Tooltip</div>
          </TooltipComponent>
          ); */}
          <svg width="100%" height="100%">
            <defs>
              <filter
                id="rounded-corners"
                x="-0.09"
                y="-0.09"
                width="1.2"
                height="1.9"
              >
                <feFlood flood-color="#FFAA55" />
                <feGaussianBlur stdDeviation="3" />
                <feComponentTransfer>
                  <feFuncA type="table" tableValues=" 0 0 0 2" />
                </feComponentTransfer>
                <feComposite operator="over" in="SourceGraphic" />
              </filter>

              {/* <filter id="rounded-corners-2" primitiveUnits="objectBoundingBox">
<feImage preserveAspectRatio="none" width="110%" height="110%" x="-5%" y="0%"  xlink:href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 400 40' height='40' width='400'%3E%3Crect fill='red' x='0' y='0' rx='10' ry='10' width='400' height='40'/%3E%3C/svg%3E"/>
   <feComposite operator="over" in="SourceGraphic"/>
  </filter>  */}
              {/* </defs>   */}
              {/* <Tippy content={    <text
              filter="url(#rounded-corners)"
              font-size="15"
              textAnchor="start"
              dominant-baseline="middle"
              // y={markerOffset}
              // x={markerOffset}
              // // // x="50%"
              // y="50%"
              x="20"
              y="20"
              style={{ fill: "#ffffff" }}
            >
              {name}
             </text> }>
               <img src="../../images/twitter.svg"/>

             </Tippy> */}
            </defs>
            <text
              filter="url(#rounded-corners)"
              font-size="15"
              textAnchor="start"
              dominant-baseline="middle"
              // y={markerOffset}
              // x={markerOffset}
              // // // x="50%"
              // y="50%"
              x="20"
              y="20"
              style={{ fill: "#ffffff" }}
            >
              {name}
            </text>
          </svg>

          {/* <text 
             textAnchor="absolute" 
             y={markerOffset}
             x={markerOffset} 
             style={{ fill: "#ffffff" }} 
           >
             {name}  */}
          {/* </text>  */}
          {/* </svg> */}
        </Marker>
      ))}
    </ComposableMap>
  );
};
export default MapChart;
