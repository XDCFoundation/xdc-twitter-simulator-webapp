import React, { useEffect, useState, Component } from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "../Footer/footer";
import HeaderComponent from "../Header/header";
import MainComponent from "./maincomponent";
import axios from "axios";
import moment from "moment";
import "../../services/socket";

export default class Main extends Component {
  getMode() {
    return JSON.parse(localStorage.getItem("mode")) || false;
  }

  constructor(props) {
    super(props);
    this.state = {
      dark: this.getMode(),
      authors: {},
      // readAuthors: {},
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
    await this.socketSaveTweetData(this.props.savingSocket);
    await this.readsocketData(this.props?.readingSocket);
    await this.socketreadTweet(this.props?.readingSocket);
    await this.socketCount(this.props?.readingSocket);
  }

  // Socket Connections :

  socketSaveTweetData(socket) {
    let savingtweets = this.state.savedTweets;
    socket.on("BlockChain-socket", (blockData, error) => {
      this.setState({ blockSocketConnected: true });

      // let blockDataExist = blocks.findIndex((item) => {
      //   return item.number == blockData.number;
      // });
      // blockData["class"] = "first-block-age last-block-transaction height2";
      // if (blockDataExist == -1) {

      if (savingtweets.length >= 10) savingtweets.pop();
      savingtweets.unshift(blockData);

      // setTimeout(() => {
      //   this.setState({
      //     blockAnimation: {}, textAnimation: {}, handleAnimation: {}, textDarkAnimation: {}, blockDarkAnimation: {}
      //   })
      // }, 500)

      this.setState({ savedTweets: savingtweets });

      if (error) {
        console.log("hello error");
      }

      // }
    });
  }

  // For save count :

  socketCount(socket) {
    let tweetsCount = this.state.savingtweetsCount;
    socket.on("tweet-count-socket", (count, error) => {
      // console.log('>>>count',count)
      this.setState({ blockSocketConnected: true });

      if (tweetsCount.length >= 1) tweetsCount.pop();
      tweetsCount.unshift(count);

      this.setState({ savingtweetsCount: tweetsCount });

      if (error) {
        console.log("hello error");
      }
    });
  }

  // SaveTweets api:

  async fetchSavedTweets() {
    axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVED_TWEET
      )

      .then((res) => {
        let tweetResponse;
        let allSaveTweets;
        if (
          !res ||
          !res.data ||
          !res.data.responseData ||
          res.data.responseData.length <= 0
        )
          tweetResponse = [];
        else tweetResponse = res.data?.responseData?.response[0];
        allSaveTweets = res.data?.responseData?.response[1];

        this.setState({ savedTweets: tweetResponse });
        this.setState({ totalSaveTweet: allSaveTweets });
      })
      .catch((err) => {
        console.log(err);
      });

  }

  /** For read tweets */

  socketreadTweet(socket) {
    let readingtweets = this.state.readtweets;
    socket.on("read-tweets-socket", (blockData, error) => {
      // console.log('>>>>>readtweet', blockData)
      this.setState({ blockSocketConnected: true });

      // let blockDataExist = blocks.findIndex((item) => {
      //   return item.number == blockData.number;
      // });
      // blockData["class"] = "first-block-age last-block-transaction height2";
      // if (blockDataExist == -1) {

      if (readingtweets.length >= 10) readingtweets.pop();
      readingtweets.unshift(blockData);

      // setTimeout(() => {
      //   this.setState({
      //     blockAnimation: {}, textAnimation: {}, handleAnimation: {}, textDarkAnimation: {}, blockDarkAnimation: {}
      //   })
      // }, 500)

      this.setState({ readtweets: readingtweets });

      if (error) {
        console.log("hello error");
      }

      // } (left comment)
    });
  }

  /* Read tweets api */

  async fetchReadTweets() {
    await axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER +
          process.env.REACT_APP_READ_TWEET
      )

      .then((res) => {
        let tweetResponse;
        let alltweets;
        if (
          !res &&
          !res.data &&
          !res.data.responseData &&
          res.data.responseData.length <= 0
        )
          tweetResponse = [];
        else tweetResponse = res.data.responseData[0];
        alltweets = res.data.responseData[1];

        this.setState({ readtweets: tweetResponse });
        this.setState({ totaltweets: alltweets });
      })
      .catch((err) => {
        console.log(err);
      });

  }

  /* Socket Connection for Read Graph */

  readsocketData(socket) {
    let readGraph = this.state.readData || "";
    // console.log('res--',readGraph, readGraph?.length)
    socket.on("read-speed-socket", (val, error) => {
      // console.log('>>>>val', val)
      this.setState({ blockSocketConnected: true });

      if (readGraph?.length >= 10)
      {
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
  
        this.state.readData && this.state.readData.length >=1 && this.state.readData.map((items, index) => {
          let graphs = ((1000 * items.requestCount) / items.responseTime) * 60;
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
        console.log("hello error");
      }
    });
  }

  // for Reading Speed :

  async readingCount() {
    await axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER +
          process.env.REACT_APP_READ_SPEED_DATA
      )
      .then((result) => {
        this.setState({ readData: result.data?.responseData?.response1 });

        var arr = [
          {
            id: "Write-graph",
            data: [],
          },
        ];
        var resultData = [];

        this.state.readData && this.state.readData.length >=1 && this.state.readData.map((items, index) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* Socket Connection for Saving Graph */

  socketData(socket) {
    let writeGraph = this.state.saveData;
    socket.on("saving-speed-socket", (val, error) => {
      // console.log('>>>>val', val)
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
        // console.log('api--', items)
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

      // console.log('apiarray--', arr)

      if (error) {
        console.log("hello error");
      }
    });
  }

  // For Saving Speed :

  async writingCount() {
    await axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER +
          process.env.REACT_APP_SAVING_SPEED_DATA
      )
      .then((result) => {
        this.setState({ saveData: result.data.responseData[0] });
        var arr = [
          {
            id: "Write-graph",
            data: [],
          },
        ];
        var resultData = [];

        this.state.saveData.map((items, index) => {
          // console.log('api--', items)
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

        // console.log('apiarray--',arr)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() { 
    return (
      <div>
        <HeaderComponent CheckMode={this.CheckMode.bind(this)} />
        <MainComponent
          dark={this.state.dark}
          state={this.state}
          savingSpeed={this.writingCount.bind(this)}
          Savesocket={this.props.savingSocket}
          saveCount={this.state.savingtweetsCount}
          readSocket={this.props.readingSocket}
          tweetData={this.state.savedTweets}
          tweetCount={this.state.totalSaveTweet}
          // readtweetData={this.state.readtweets}
          readtweetCount={this.state.totaltweets}
          data={this.state.data}
          save={this.state.save}
          read={this.state.read}
          saveGraphdata={this.state.result}
          readGraphdata={this.state.readResult}
          // saveAuthor={this.state?.authors}
          // readAuthor={this.state?.readAuthors}
        />
        <FooterComponent />
      </div>
    );
  }
}
