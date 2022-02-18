import React, { useState, useEffect } from "react";
import axios from "axios";
import Nodes from "./webSocket";
import utility from "../../utility";
import { LocationService } from "../../services";
import _ from "lodash";
import { dispatchAction } from "../../utility";

import { connect } from "react-redux";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import io from "socket.io-client";

const geoUrl = process.env.REACT_APP_NODES_MAP_URL;

function NodeChart(props) {
  // console.log('pt----',props.stats.markers)
  // const [newNode, setNewNode] = useState([])

  // const socket = io("http://52.15.80.60:3000/", {
  //   path: "/stats-data/",
  //   transports: ["websocket"],
  //   reconnection: true,
  // });
  // let nodess = [];
  // socket.on("network-stats-nodes", function node(data) {
  //   if (!_.isEmpty(data.nodes));
  //   nodess = data.nodes;
  //   // console.log("node--", nodess.length);

  //   let marker = [];

  //   nodess.forEach((node) => {
  //     function swap(x, y) {
  //       return [y, x];
  //     }
  //     if (node.geo !== null) {
  //       marker.push({
  //         coords: swap(node.geo.ll[0], node.geo.ll[1]),
  //       });
  //     }
  //   });
  //   setNewNode(marker);
  // });

  

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

          {props?.stats?.markers &&
            props?.stats?.markers?.length >= 1 &&
            props?.stats?.markers?.map((items, index) => (
              <Marker key={index} coordinates={items.coords}>
                <g
                  fill="#10c892"
                  stroke="#10c892"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="0" r="9" />
                </g>
              </Marker>
            ))}
        </ComposableMap>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
return { stats: state.stats };
};
export default connect(mapStateToProps, { dispatchAction })(NodeChart);
