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
      result: [],
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
    // await this.writing()
    await this.socketData(this.props?.savingSocket)
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

/* Socket Connection for Saving Graph */

  socketData(socket) {
    let writeGraph = this.state.saveData;
    socket.on("saving-speed-socket", (val, error) => {
      // console.log('>>>>val', val)
      this.setState({ blockSocketConnected: true })

      if (writeGraph.length >= 10)
        writeGraph.pop();
      writeGraph.unshift(val);

      this.setState({ saveData: writeGraph });
      var arr = [{
        id: "Write-graph",
        data: []
      }]
      var resultData = []

      this.state.saveData.map(items => {
        // console.log('api--', items)
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
          .map((e, i, final) => final.indexOf(e) === i && i)
          .filter(e => resultData[e]).map(e => resultData[e]);

        return saveunique;
      }
      let savingGraphdata = getSaveUnique(resultData, 'x').reverse()
      let savingnewData = savingGraphdata.slice(-1)
      let savingfirstData = Object.values(savingnewData[0])
      let savingSecondData = parseFloat(savingfirstData[1]).toFixed(2)

      this.setState({ save: savingSecondData })
      
      arr[0].data = getSaveUnique(resultData, 'x').reverse()
      this.setState({ result: arr })
    
      // console.log('apiarray--', arr)

      if (error) {
        console.log("hello error");
      }

    });
  }

  // For Saving Speed :

  async writingCount() {
    await axios
      .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVING_SPEED_DATA)
      .then((result) => {

        this.setState({ saveData: result.data.responseData[0] })
        var arr = [{
          id: "Write-graph",
          data: []
        }]
        var resultData = []

        this.state.saveData.map(items => {
          // console.log('api--', items)
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
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => resultData[e]).map(e => resultData[e]);
  
          return saveunique;
        }
        let savingGraphdata = getSaveUnique(resultData, 'x').reverse()
        let savingnewData = savingGraphdata.slice(-1)
        let savingfirstData = Object.values(savingnewData[0])
        let savingSecondData = parseFloat(savingfirstData[1]).toFixed(2)
  
        this.setState({ save: savingSecondData })
        arr[0].data = getSaveUnique(resultData, 'x').reverse()
        this.setState({ result: arr })

        // console.log('apiarray--',arr)
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    // console.log('by', this.state.result)
    // console.log('my', this.state.saveData)
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
          saveGraphdata={this.state.result}
        />
        <FooterComponent />
      </div>
    );
  }
}
