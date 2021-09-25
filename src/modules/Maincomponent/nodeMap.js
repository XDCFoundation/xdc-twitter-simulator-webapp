import React, { useState, useEffect } from "react";
import axios from "axios";
import Nodes from "./webSocket";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = process.env.REACT_APP_NODES_MAP_URL;

export default function NodeChart(props) {
  const [node, setNode] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props?.ipcount && props?.ipcount?.length >= 1) {
      (props?.ipcount).map((item, index) => {
        // console.log("prop--", item);
        setData(item);
      });
      axios
        .get(process.env.REACT_APP_NODE_LOCATIONS + data)
        .then((res) => {
          var nodes = node;
          nodes.push({ coords: [res.data.lon, res.data.lat] });
          // console.log("locations....", nodes);
          setNode(nodes);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props?.ipcount]);

  return (
    <>
      <div>
        <ComposableMap
          className={props.dark ? "composableNodeDarkmap" : "composableNodemap"}
        >
          {/* <ZoomableGroup zoom={1}> */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo}></Geography>
              ))
            }
          </Geographies>

          {node.map((items, index) => (
            <Marker key={index} coordinates={items.coords}>
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
          {/* </ZoomableGroup> */}
        </ComposableMap>
      </div>
    </>
  );
}
