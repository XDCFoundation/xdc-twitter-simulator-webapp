// import io from "socket.io-client";
// import _ from "lodash";
// import store from '../store';
// import {eventConstants} from '../constants';
// import socketClient from "socket.io-client";

// const SERVER = process.env.REACT_APP_READING_SOCKET
// var connection = socketClient(SERVER, { transports: ['websocket'] })

// let readTweets= []

// connection.on(eventConstants.READ_TWEETS_EVENT, (val, err) => {
//   if (err) {
//     return err
//   }
//   else {
//     readTweets.push(val)
//   }
// })

// let nodesArr = [];

// const socket = io(process.env.REACT_APP_NODE_SOCKET, {
//   path: "/stats-data/",
//   transports: ["websocket"],
//   reconnection: true,
// });

// socket.on(eventConstants.NODE_LOCATION_EVENT, function node(data) {
//   if (!_.isEmpty(data.nodes)) socketAction(eventConstants.NODE_LOCATION_EVENT, data.nodes);
//   nodesArr = data.nodes;
// });

// async function socketAction(action, data) {
//   switch (action) {
//     case eventConstants.NODE_LOCATION_EVENT:
//       nodesArr = data;

//       if (nodesArr.length > 0) {
//         updateActiveNodes(nodesArr);
//       }
//       break;
//   }
// }

// function updateActiveNodes(data) {
//   let marker = [];

//   nodesArr.forEach((node) => {
//     function swap(x, y) {
//       return [y, x];
//     }
//     if (node.geo !== null) {
//       marker.push({
//         coords: swap(node.geo.ll[0], node.geo.ll[1]),
//       });
//     }
//   });
//   store.dispatch({ type: eventConstants.UPDATE_MARKERS, data: marker });
//   store.dispatch({ type: eventConstants.UPDATE_READ_TWEETS, data: readTweets });
// }
