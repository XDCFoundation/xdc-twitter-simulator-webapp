import io from "socket.io-client";
import _ from "lodash";
import store from '../store';
import {eventConstants} from '../constants';

let nodesArr = [];

const socket = io("http://52.15.80.60:3000/", {
  path: "/stats-data/",
  transports: ["websocket"],
  reconnection: true,
});

socket.on("network-stats-nodes", function node(data) {
  if (!_.isEmpty(data.nodes)) socketAction("network-stats-nodes", data.nodes);
  nodesArr = data.nodes;
});

async function socketAction(action, data) {
  switch (action) {
    case "network-stats-nodes":
      nodesArr = data;

      if (nodesArr.length > 0) {
        updateActiveNodes(nodesArr);
      }
      break;
  }
}

function updateActiveNodes(data) {
  let marker = [];

  nodesArr.forEach((node) => {
    function swap(x, y) {
      return [y, x];
    }
    if (node.geo !== null) {
      marker.push({
        coords: swap(node.geo.ll[0], node.geo.ll[1]),
      });
    }
  });
  store.dispatch({ type: eventConstants.UPDATE_MARKERS, data: marker });
}
