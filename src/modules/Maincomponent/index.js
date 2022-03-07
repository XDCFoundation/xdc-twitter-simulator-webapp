import React, { useEffect, useState, Component } from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "../Footer/footer";
import HeaderComponent from "../Header/header";
import MainComponent from "./maincomponent";
import _ from "lodash";
import moment from "moment";
import "../../services/socket";
import { eventConstants } from "../../constants";
import socketClient from "socket.io-client";
import Utils from "../../utility";
import { TweetService } from "../../services/index";

export default class Main extends Component {
  getMode() {
    return JSON.parse(localStorage.getItem("mode")) || false;
  }

  constructor(props) {
    super(props);
    this.state = {
      dark: this.getMode(),
      authors: {},
      data: [],
      read: [],
      readResult: [],
      result: [],
      readData: [],
      saveData: [],
      save: [],
      savedTweets: [],
      totalSaveTweet: [],
      savingtweetsCount: [],
      readtweets: [],
      totaltweets: [],
      marker: [],
      updatedMaxTps: "",
      blockSocketConnected: false,
    };
  }

  CheckMode(mode) {
    this.setState({ dark: mode });
  }
  async componentWillUpdate() {
    localStorage.setItem("mode", JSON.stringify(this.state.dark));
  }

  async componentDidMount() {
    await this.fetchSavedTweets();
    await this.fetchReadTweets();
    await this.readingCount();
    await this.writingCount();
    this.socketSaveTweetData(this.props.socket);
    this.readsocketData(this.props.readtweetSocket);
    this.socketreadTweet(this.props.readtweetSocket);
    this.socketCount(this.props.readtweetSocket);
    this.updateMapMarkers();
    this.updateMaxTpsvalue();
  }

  // Socket Connections :

  socketSaveTweetData(socket) {
    let savingtweets = this.state.savedTweets;
    socket.on(eventConstants.SAVING_TWEETS_EVENT, (blockData, error) => {
      this.setState({ blockSocketConnected: true });

      if (savingtweets.length >= 10) savingtweets.pop();
      savingtweets.unshift(blockData);

      this.setState({ savedTweets: savingtweets });

      if (error) {
        return;
      }
    });
  }

  // For save count :

  socketCount(socket) {
    let tweetsCount = this.state.savingtweetsCount;
    socket.on(eventConstants.SAVE_COUNT_EVENT, (count, error) => {
      this.setState({ blockSocketConnected: true });

      if (tweetsCount.length >= 1) tweetsCount.pop();
      tweetsCount.unshift(count);

      this.setState({ savingtweetsCount: tweetsCount });

      if (error) {
        return error;
      }
    });
  }

  // SaveTweets api:

  fetchSavedTweets = async () => {
    const [err, res] = await Utils.parseResponse(
      TweetService.getSaveTweetList()
    );
    if (err) {
      return err;
    } else {
      this.setState({ savedTweets: res?.response[0] || "" });
      this.setState({ totalSaveTweet: res?.response[1] || "" });
    }
  };

  /** For read tweets */

  socketreadTweet(socket) {
    let readingtweets = this.state.readtweets;
    socket.on(eventConstants.READ_TWEETS_EVENT, (blockData, error) => {
      this.setState({ blockSocketConnected: true });

      if (readingtweets.length >= 10) readingtweets.pop();
      readingtweets.unshift(blockData);

      this.setState({ readtweets: readingtweets });

      if (error) {
        return error;
      }

      // } (left comment)
    });
  }

  /* Read tweets api */

  fetchReadTweets = async () => {
    const [err, res] = await Utils.parseResponse(
      TweetService.getReadTweetList()
    );
    if (err) {
      return err;
    } else {
      this.setState({ readtweets: res[0] || "" });
      this.setState({ totaltweets: res[1] || "" });
    }
  };

  /* Socket Connection for Read Graph */

  readsocketData(socket) {
    let readGraph = this.state.readData || "";
    socket.on(eventConstants.READ_GRAPH_EVENTS, (val, error) => {
      this.setState({ blockSocketConnected: true });

      if (readGraph?.length >= 10) {
        readGraph.pop();
        readGraph.unshift(val);
        this.setState({ readData: readGraph });

        var arr = [
          {
            id: "Read-graph",
            data: [],
          },
        ];
        var resultData = [];

        this.state.readData &&
          this.state.readData.length >= 1 &&
          this.state.readData.map((items, index) => {
            let graphs =
              ((1000 * items.requestCount) / items.responseTime) * 60;
            resultData.push({
              x: moment(items.startTime).format("LT"),
              y: graphs,
            });
          });
        function getUnique(resultData, index) {
          const unique = resultData
            .map((e) => e[index])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter((e) => resultData[e])
            .map((e) => resultData[e]);

          return unique;
        }
        let graphdata = getUnique(resultData?.slice(0, 20), "x").reverse();
        let newData = graphdata.slice(-1);
        let firstData = Object.values(newData[0]);
        let secondData = parseFloat(firstData[1]).toFixed(2);

        this.setState({ read: secondData });

        arr[0].data = getUnique(resultData.slice(0, 20), "x").reverse();
        this.setState({ readResult: arr });
      }
      if (error) {
        return error;
      }
    });
  }

  // for Reading Speed :

  readingCount = async () => {
    const [err, res] = await Utils.parseResponse(
      TweetService.getReadGraphData()
    );
    if (err) {
      return err;
    } else {
      this.setState({ readData: res?.response1 || "" });

      var arr = [
        {
          id: "Write-graph",
          data: [],
        },
      ];
      var resultData = [];

      this.state.readData &&
        this.state.readData.length >= 1 &&
        this.state.readData.map((items, index) => {
          let graphs = ((1000 * items.requestCount) / items.responseTime) * 60;
          resultData.push({
            x: moment(items.startTime).format("LT"),
            y: graphs,
          });
        });
      function getUnique(resultData, index) {
        const unique = resultData
          .map((e) => e[index])
          .map((e, i, final) => final.indexOf(e) === i && i)
          .filter((e) => resultData[e])
          .map((e) => resultData[e]);

        return unique;
      }
      let graphdata = getUnique(resultData?.slice(0, 20), "x").reverse();
      let newData = graphdata.slice(-1);
      let firstData = Object.values(newData[0]);
      let secondData = parseFloat(firstData[1]).toFixed(2);

      this.setState({ read: secondData });

      arr[0].data = getUnique(resultData.slice(0, 20), "x").reverse();
      this.setState({ readResult: arr });
    }
  };

  /* Socket Connection for Saving Graph */

  socketData(socket) {
    let writeGraph = this.state.saveData;
    socket.on(eventConstants.SAVING_GRAPH_EVENT, (val, error) => {
      this.setState({ blockSocketConnected: true });

      if (writeGraph.length >= 10) writeGraph.pop();
      writeGraph.unshift(val);

      this.setState({ saveData: writeGraph });
      var arr = [
        {
          id: "Write-graph",
          data: [],
        },
      ];
      var resultData = [];

      this.state.saveData.map((items, index) => {
        let firstAxis = items?.savedTweets / items?.responseTime;
        let secondAxis = (firstAxis == 0 ? 0 : firstAxis * 1000) || 0;
        resultData.push({
          x: moment(items.saveStartTime * 1000).format("LT"),
          y: secondAxis * 60,
        });
      });
      function getSaveUnique(resultData, index) {
        const saveunique = resultData
          .map((e) => e[index])
          .map((e, i, final) => final.indexOf(e) === i && i)
          .filter((e) => resultData[e])
          .map((e) => resultData[e]);

        return saveunique;
      }
      let savingGraphdata = getSaveUnique(resultData, "x").reverse();
      let savingnewData = savingGraphdata.slice(-1);
      let savingfirstData = Object.values(savingnewData[0]);
      let savingSecondData = parseFloat(savingfirstData[1]).toFixed(2);

      this.setState({ save: savingSecondData });

      arr[0].data = getSaveUnique(resultData, "x").reverse();
      this.setState({ result: arr });

      if (error) {
        return error;
      }
    });
  }

  // For Saving Speed :

  writingCount = async () => {
    const [err, res] = await Utils.parseResponse(
      TweetService.getSaveGraphData()
    );
    if (err) {
      return err;
    } else {
      this.setState({ saveData: res[0] || "" });

      var arr = [
        {
          id: "Write-graph",
          data: [],
        },
      ];
      var resultData = [];

      this.state.saveData.map((items, index) => {
        let firstAxis = items?.savedTweets / items?.responseTime;
        let secondAxis = (firstAxis == 0 ? 0 : firstAxis * 1000) || 0;
        resultData.push({
          x: moment(items.saveStartTime * 1000).format("LT"),
          y: secondAxis * 60,
        });
      });
      function getSaveUnique(resultData, index) {
        const saveunique = resultData
          .map((e) => e[index])
          .map((e, i, final) => final.indexOf(e) === i && i)
          .filter((e) => resultData[e])
          .map((e) => resultData[e]);

        return saveunique;
      }
      let savingGraphdata = getSaveUnique(resultData, "x").reverse();
      let savingnewData = savingGraphdata.slice(-1);
      let savingfirstData = Object.values(savingnewData[0]);
      let savingSecondData = parseFloat(savingfirstData[1]).toFixed(2);

      this.setState({ save: savingSecondData });
      arr[0].data = getSaveUnique(resultData, "x").reverse();
      this.setState({ result: arr });
    }
  };

  // For Nodes :

  updateMapMarkers = () => {
    try {
      const _this = this;
      this.props.nodesSocket.on(
        eventConstants.NODE_LOCATION_EVENT,
        function node(data) {
          if (!_.isEmpty(data.nodes) && data.nodes.length) {
            let updatedMarker = [];

            data.nodes.forEach((node) => {
              function swap(x, y) {
                return [y, x];
              }
              if (node.geo !== null) {
                updatedMarker.push({
                  coords: swap(node.geo.ll[0], node.geo.ll[1]),
                });
              }
            });
            _this.setState({ marker: updatedMarker });
          }
        }
      );
    } catch (e) {
      this.setState({ marker: [] });
    }
  };

  updateMaxTpsvalue = () => {
    try {
      const _this = this;
      let mainData;
      this.props.nodesSocket.on("network-stats-data", function node(data) {
        mainData = data.data?.transactions || 0;
        setInterval(() => {
          if (!_.isEmpty(mainData) && mainData.length) {
            let trimmed = mainData?.slice(30, 40);
            let sum = trimmed?.reduce((a, b) => a + b, 0);
            let avg = sum / 10;
            console.log("av--", avg);
            _this.setState({ updatedMaxTps: avg });
          }
        }, 30000);
      });
    } catch (e) {
      this.setState({ updatedMaxTps: 0 });
    }
  };

  render() {
    console.log("thi--", this.state.updatedMaxTps);
    return (
      <div>
        <HeaderComponent CheckMode={this.CheckMode.bind(this)} />
        <MainComponent
          dark={this.state.dark}
          state={this.state}
          socket={this.props.socket}
          readtweetSocket={this.props.readtweetSocket}
          update={this.updateMaxTpsvalue.bind(this)}
          saveCount={this.state.savingtweetsCount}
          tweetData={this.state.savedTweets}
          tweetCount={this.state.totalSaveTweet}
          // readtweetData={this.state.readtweets}
          readtweetCount={this.state.totaltweets}
          data={this.state.data}
          save={this.state.save}
          read={this.state.read}
          saveGraphdata={this.state.result}
          readGraphdata={this.state.readResult}
        />
        <FooterComponent />
      </div>
    );
  }
}
