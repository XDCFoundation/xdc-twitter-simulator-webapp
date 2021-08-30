import React, { useEffect, useState, Component } from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "../Footer/footer";
import HeaderComponent from "../Header/header";
import MainComponent from "./maincomponent";
import axios from 'axios';
import moment from 'moment';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dark: false,
      data: [],
      read: [],
      saveData: [],
      save: [],
      savedTweets: [],
      totalSaveTweet: [],
      savingtweetsCount: [],
      blockSocketConnected: false
    }
  }

  dark = false
  CheckMode(mode) {
    // console.log('hello--',mode ? "Dark" : "Light")
    this.setState({ dark: mode })
  }

  async componentDidMount() {
    await this.fetchSavedTweets()
    await this.readingCount()
    await this.writingCount()
    this.socketData(this.props?.savingSocket)
  }

  
  // Socket Connections:

  socketData(socket) {
    let savingtweets = this.state.savedTweets;
    socket.on("BlockChain-socket", (blockData, error) => {
      // console.log('>>>>>savetweet', blockData)
      this.setState({ blockSocketConnected: true })

      // let blockDataExist = blocks.findIndex((item) => {
      //   return item.number == blockData.number;
      // });
      // blockData["class"] = "first-block-age last-block-transaction height2";
      // if (blockDataExist == -1) {

      if (savingtweets.length >= 10)
        savingtweets.pop();
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

  // SaveTweets api: 

  async fetchSavedTweets() {
    axios
      .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVED_TWEET)

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
        else tweetResponse = res.data.responseData[0];
        allSaveTweets = res.data.responseData[1];

        this.setState({ savedTweets: tweetResponse })
        this.setState({ totalSaveTweet: allSaveTweets })

      })
      .catch((err) => {
        console.log(err);
      });

    setInterval(async () => {
      if (!this.state.blockSocketConnected) {
        await axios
          .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVED_TWEET)

          .then((res) => {
            let tweetResponse;
            let allSaveTweets;
            if (
              !res &&
              !res.data &&
              !res.data.responseData &&
              res.data.responseData.length <= 0
            )
              tweetResponse = [];
            else tweetResponse = res.data.responseData[0] || 0;
            allSaveTweets = res.data.responseData[1] || 0;

            this.setState({ savedTweets: tweetResponse })
            this.setState({ totalSaveTweet: allSaveTweets })

          })
          .catch((err) => {
            console.log(err);
          });
      }

    }, 10000)
  };

  // for Reading Speed :

  async readingCount() {
    await axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_READ_SPEED_DATA
      )
      .then((result) => {
        var arr = [{
          id: "Write-graph",
          data: []
        }]
        var resultData = []

        result.data.responseData.map(items => {
          resultData.push({
            x: moment(items.addedOn).format('LT'),
            y: items.responseTime / items.requestCount
          })

        })
        function getUnique(resultData, index) {

          const unique = resultData
            .map(e => e[index])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => resultData[e]).map(e => resultData[e]);

          return unique;
        }
        let graphdata = getUnique(resultData, 'x').reverse()
        let newData = graphdata.slice(-1)
        let firstData = Object.values(newData[0])
        let secondData = parseFloat(1000 / firstData[1]).toFixed(2)

        this.setState({ read: secondData })

        arr[0].data = getUnique(resultData, 'x').reverse()
        this.setState({ data: arr })
      })
      .catch((err) => {
        console.log(err);
      });

    setInterval(async () => {
      // if (!this.state.blockSocketConnected) {
      await axios
        .get(
          process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_READ_SPEED_DATA
        )
        .then((result) => {
          var arr = [{
            id: "Write-graph",
            data: []
          }]
          var resultData = []

          result.data.responseData.map(items => {

            resultData.push({
              x: moment(items.addedOn).format('LT'),
              y: items.responseTime / items.requestCount
            })

          })
          function getUnique(resultData, index) {

            const unique = resultData
              .map(e => e[index])

              // store the keys of the unique objects
              .map((e, i, final) => final.indexOf(e) === i && i)

              // eliminate the dead keys & store unique objects
              .filter(e => resultData[e]).map(e => resultData[e]);

            return unique;
          }
          let graphdata = getUnique(resultData, 'x').reverse()
          let newData = graphdata.slice(-1)
          let firstData = Object.values(newData[0])
          let secondData = parseFloat(1000 / firstData[1]).toFixed(2)

          this.setState({ read: secondData })

          // arr[0].data = getUnique(resultData, 'x').reverse()
          // this.setState({ data: arr })

        })
        .catch((err) => {
          console.log(err);
        });
      // }

    }, 60000)
  };

  // For Saving Speed :

  async writingCount() {
    await axios
      .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVING_SPEED_DATA)
      .then((result) => {
        var arr = [{
          id: "Write-graph",
          data: []
        }]
        var resultData = []

        result.data.responseData[0].map(items => {
          // let firstAxis = items.responseTime / 1000 || 0
          // let secondAxis = (items?.savedTweets == 0 ? 0 : firstAxis / items?.savedTweets) || 0
          let firstAxis = items?.savedTweets / items?.responseTime
          let secondAxis = (firstAxis == 0 ? 0 : firstAxis * 1000) || 0
          resultData.push({
            x: moment(items.saveStartTime * 1000).format('LT'),
            y: secondAxis
          })

        })
        function getSaveUnique(resultData, index) {

          const saveunique = resultData
            .map(e => e[index])

            // store the keys of the saveunique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store saveunique objects
            .filter(e => resultData[e]).map(e => resultData[e]);

          return saveunique;
        }
        let savingGraphdata = getSaveUnique(resultData, 'x').reverse()
        let savingnewData = savingGraphdata.slice(-1)
        let savingfirstData = Object.values(savingnewData[0])
        let savingSecondData = parseFloat(savingfirstData[1]).toFixed(2)

        this.setState({ save: savingSecondData })
        arr[0].data = getSaveUnique(resultData, 'x')
        this.setState({ saveData: arr })
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    return (
      <div>
        <HeaderComponent CheckMode={this.CheckMode.bind(this)} />
        <MainComponent dark={this.state.dark}
          Savesocket={this.props.savingSocket}
          readSocket={this.props.readingSocket}
          tweetData={this.state.savedTweets}
          tweetCount={this.state.totalSaveTweet}
          read={this.state.read}
          data={this.state.data}
          save={this.state.save}
          saveGraphdata={this.state.saveData}
        />
        <FooterComponent />
      </div>
    );
  }
}
