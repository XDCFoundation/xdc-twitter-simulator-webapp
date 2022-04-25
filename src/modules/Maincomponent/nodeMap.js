import React, { useState, useEffect } from "react";
import Nodes from "./webSocket";
import utility from "../../utility";
import { LocationService } from "../../services";
import _ from "lodash";
import { dispatchAction } from "../../utility";
import { eventConstants } from "../../constants";
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

let nodesArr = [];

export default function NodeChart(props) {
  const marker = props.marker;

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

          {marker &&
            marker?.length >= 1 &&
            marker?.map((items, index) => (
              <Marker key={index} coordinates={items.coords}>
                <g
                  fill="#3366FF"
                  stroke="#3366FF"
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
