import React, { useState, useEffect, Component } from "react";
import Searchlist from "./searchListing";
import HeaderComponent from "../Header/header";
import FooterComponent from "../Footer/footer";
import moment from "moment";
import { eventConstants } from "../../constants";
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
      data: [],
      read: [],
      save: [],
      readResult: [],
      result: [],
      saveData: [],
      keyword: this.props?.match?.params?.keyword?.split("&")[0],
      advhash: this.props?.match?.params?.keyword?.split("&")[1],
      advname: this.props?.match?.params?.keyword?.split("&")[2],
      blockSocketConnected: false,
    };
  }

  CheckMode(mode) {
    this.setState({ dark: mode });
  }

  async componentDidMount() {
    await this.listreadingData();
    await this.writingSpeed();
    await this.socketData(this.props.socket);
    await this.readsocketData(this.props.readtweetSocket);
  }

  async componentWillUpdate() {
    localStorage.setItem("mode", JSON.stringify(this.state.dark));
  }

  /* Socket Connection for Read Graph */

  readsocketData(socket) {
    let readGraph = this.state.readData;
    socket.on(eventConstants.READ_GRAPH_EVENTS, (val, error) => {
      this.setState({ blockSocketConnected: true });

      if (readGraph.length >= 10) readGraph.pop();
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
        this.state.readData.forEach((items, index) => {
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

      if (error) {
        return error;
      }
    });
  }

  // For reading Speed in listing page:

  listreadingData = async () => {
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
        this.state.readData.forEach((items, index) => {
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

      this.state.saveData &&
        this.state.saveData.length >= 1 &&
        this.state.saveData.forEach((items, index) => {
          let firstAxis = items?.savedTweets / items?.responseTime;
          let secondAxis = (firstAxis === 0 ? 0 : firstAxis * 1000) || 0;
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

  // For saving speed in listing page:

  writingSpeed = async () => {
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

      this.state.saveData.forEach((items, index) => {
        let firstAxis = items?.savedTweets / items?.responseTime;
        let secondAxis = (firstAxis === 0 ? 0 : firstAxis * 1000) || 0;
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

  render() {
    return (
      <>
        <HeaderComponent CheckMode={this.CheckMode.bind(this)} />
        <Searchlist
          dark={this.state.dark}
          locations={this.state.keyword}
          username={this.state.advname}
          hashname={this.state.advhash}
          list={this.state.read}
          readSpeed={this.state.read}
          saveSpeed={this.state.save}
          saveGraphdata={this.state.result}
          readGraphdata={this.state.readResult}
        />
        <FooterComponent />
      </>
    );
  }
}
