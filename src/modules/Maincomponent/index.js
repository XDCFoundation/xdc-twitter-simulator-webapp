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
      authors: {},
      readAuthors: {},
      data: [],
      read: [],
      readResult: [],
      result: [],
      readData: [],
      saveData: [],
      save: [],
      savedTweets: [],
      totalSaveTweet: [],
      readtweets: [],
      totaltweets: [],
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
    await this.fetchReadTweets()
    await this.readingCount()
    await this.writingCount()
    await this.savehandleUser()
    await this.readhandleUser()
    await this.fetchReadTweets()
    await this.socketData(this.props?.savingSocket)
    await this.readsocketData(this.props?.readingSocket)
  }


  // Socket Connections :

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

  /** For read tweets */

  readsocketData(socket) {
    let readingtweets = this.state.readtweets;
    socket.on("read-tweets-socket", (blockData, error) => {
      // console.log('>>>>>readtweet', blockData)
      this.setState({ blockSocketConnected: true })

      // let blockDataExist = blocks.findIndex((item) => {
      //   return item.number == blockData.number;
      // });
      // blockData["class"] = "first-block-age last-block-transaction height2";
      // if (blockDataExist == -1) {

      if (readingtweets.length >= 10)
        readingtweets.pop();
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
      .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_READ_TWEET)

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

        this.setState({ readtweets: tweetResponse })
        this.setState({ totaltweets: alltweets })

      })
      .catch((err) => {
        console.log(err);
      });



    setInterval(async () => {
      if (!this.state.blockSocketConnected) {
        await axios
          .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_READ_TWEET)

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

            this.setState({ readtweets: tweetResponse })
            this.setState({ totaltweets: alltweets })

          })
          .catch((err) => {
            console.log(err);
          });
      }

    }, 10000)
  };



  /* Socket Connection for Read Graph */

  readsocketData(socket) {
    let readGraph = this.state.readData;
    socket.on("read-speed-socket", (val, error) => {
      // console.log('>>>>val', val)
      this.setState({ blockSocketConnected: true })

      if (readGraph.length >= 10)
        readGraph.pop();
      readGraph.unshift(val);

      this.setState({ readData: readGraph });

      var arr = [{
        id: "Read-graph",
        data: []
      }]
      var resultData = []

      this.state.readData.map(items => {
        let graphs = (1000 * items.requestCount / items.responseTime) * 60
        resultData.push({
          x: moment(items.startTime).format('LT'),
          y: graphs
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
      let graphdata = getUnique(resultData?.slice(0, 20), 'x').reverse()
      let newData = graphdata.slice(-1)
      let firstData = Object.values(newData[0])
      let secondData = parseFloat(firstData[1]).toFixed(2)

      this.setState({ read: secondData })

      arr[0].data = getUnique(resultData.slice(0, 20), 'x').reverse()
      this.setState({ readResult: arr })

      if (error) {
        console.log("hello error");
      }

    });
  }

  // for Reading Speed :

  async readingCount() {
    await axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_READ_SPEED_DATA
      )
      .then((result) => {

        this.setState({ readData: result.data.responseData })

        var arr = [{
          id: "Write-graph",
          data: []
        }]
        var resultData = []

        this.state.readData.map(items => {
          let graphs = (1000 * items.requestCount / items.responseTime) * 60
          resultData.push({
            x: moment(items.startTime).format('LT'),
            y: graphs
          })

        })
        function getUnique(resultData, index) {

          const unique = resultData
            .map(e => e[index])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => resultData[e]).map(e => resultData[e]);

          return unique;
        }
        let graphdata = getUnique(resultData?.slice(0, 20), 'x').reverse()
        let newData = graphdata.slice(-1)
        let firstData = Object.values(newData[0])
        let secondData = parseFloat(firstData[1]).toFixed(2)

        this.setState({ read: secondData })

        arr[0].data = getUnique(resultData.slice(0, 20), 'x').reverse()
        this.setState({ readResult: arr })
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
          y: secondAxis * 60
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
            y: secondAxis * 60
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

  async savehandleUser() {

    (this.state?.savedTweets).map(item => {
      let handle = item?.authorID || '-'
      // console.log('items2--', handle)
      axios
        .get(
          process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_USERNAME_BY_AUTHOR_ID + handle
        )
        .then((res) => {
          // setAuthors(res.data.responseData?.data[0]);
          this.setState({ authors: res?.data?.responseData?.data[0]?.username })
          // console.log('save---', res.data.responseData?.data[0]?.username)
        })
        .catch((err) => {
          console.log(err);
        });
    });

  };

  async readhandleUser() {

    (this.state?.readtweets).map(item => {
      let handle = item?.authorId || '-'
      // console.log('items--', handle)
      axios
        .get(
          process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_USERNAME_BY_AUTHOR_ID + handle
        )
        .then((res) => {
          // setAuthors(res.data.responseData?.data[0]);
          this.setState({ readAuthors: res?.data?.responseData?.data[0]?.username })
          // console.log('read---', res.data.responseData?.data[0]?.username)
        })
        .catch((err) => {
          console.log(err);
        });
    });

  };

  render() {
    // console.log('by', this.state.authors)
    // console.log('my', this.state.readAuthors)
    return (
      <div>
        <HeaderComponent CheckMode={this.CheckMode.bind(this)} />
        <MainComponent dark={this.state.dark}
          Savesocket={this.props.savingSocket}
          readSocket={this.props.readingSocket}
          tweetData={this.state.savedTweets}
          tweetCount={this.state.totalSaveTweet}
          readtweetData={this.state.readtweets}
          readtweetCount={this.state.totaltweets}
          data={this.state.data}
          save={this.state.save}
          read={this.state.read}
          saveGraphdata={this.state.result}
          readGraphdata={this.state.readResult}
          saveAuthor={this.state?.authors}
          readAuthor={this.state?.readAuthors}
        />
        <FooterComponent />
      </div>
    );
  }
}
