import BaseComponent from "../baseComponent";
import React, { useState, useEffect, Component } from "react";
import Searchlist from "./searchListing";
import HeaderComponent from "../Header/header";
import FooterComponent from "../Footer/footer";
import axios from 'axios';
import moment from 'moment';
import socketClient from "socket.io-client";

let saveSocketgraph = socketClient('http://ec2-3-144-11-7.us-east-2.compute.amazonaws.com:3000/', { transports: ['websocket'] })

// let keywords = this.props?.match?.params?.keyword

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dark: false,
      data: [],
      read: [],
      save: [],
      result: [],
      saveData: [],
      keyword: this.props?.match?.params?.keyword?.split('&')[0],
      advhash: this.props?.match?.params?.keyword?.split('&')[1],
      advname: this.props?.match?.params?.keyword?.split('&')[2],
      blockSocketConnected: false
    }
  }

  dark = false
  CheckMode(mode) {
    // console.log('hello--',mode ? "Dark" : "Light")
    this.setState({ dark: mode })
  }

  async componentDidMount() {
    await this.listreadingData()
    await this.writingSpeed()
    await this.socketData(saveSocketgraph)
  }

  // For reading Speed in listing page: 

  async listreadingData() {
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
        // setRead(secondData)
        this.setState({ read: secondData })
        arr[0].data = getUnique(resultData, 'x').reverse()
        // setData(arr)
        this.setState({ data: arr })
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

  // For saving speed in listing page: 

  async writingSpeed() {
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
    return (
      <>
        <HeaderComponent CheckMode={this.CheckMode.bind(this)} />
        <Searchlist dark={this.state.dark} locations={this.state.keyword} username={this.state.advname} hashname={this.state.advhash}
          list={this.state.read} saveSpeed={this.state.save} saveGraphdata={this.state.result} />
        <FooterComponent />
      </>
    );
  }
}


