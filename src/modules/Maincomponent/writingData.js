import React, { useEffect, useState } from "react";
import { ResponsiveLine } from '@nivo/line';
import '../../assets/styles/custom.css';
import axios from 'axios';
import moment from 'moment';
import { Component } from "react";

const toolTipElement = (props) => {
  let stats = parseFloat(props.point?.data?.y)
  return (
    <div>
      <div className="Tooltip-graph">
        <p className="Tooltip-graph-date">{props.point?.data?.x}</p>
        <p className="Tooltip-graph-tx">{stats.toFixed(2)}/sec.</p>
      </div>
    </div>
  )
}

const MyResponsiveLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    tooltip={toolTipElement}
    margin={{ top: 10, right: 10 }}
    colors={{ scheme: "category10" }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false, }}
    yFormat=" >-.2f"
    curve="basis"
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableGridX={false}
    enableGridY={false}
    // colors={{ scheme: 'purple_blue' }}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    enableCrosshair={false}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    enableArea={true}
    useMesh={true}
    legends={[]}
  />
)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      blockSocketConnected: false
    }
  }

  async componentDidMount() {
    await this.writing()
    // console.log('this---', this?.props?.writeMe)
    // this.socketData(this?.props?.writeMe)
  }

  // socketData(socket) {
  //   let writingGraph = this.state.data;
  //   socket.on("saving-speed-socket", (blockData, error) => {
  //     console.log('>>>>>', blockData)
  //     this.setState({ blockSocketConnected: true })

  // let blockDataExist = blocks.findIndex((item) => {
  //   return item.number == blockData.number;
  // });
  // blockData["class"] = "first-block-age last-block-transaction height2";
  // if (blockDataExist == -1) {

  // if (readingGraph.length >= 10)
  //   readingGraph.pop();
  // readingGraph.unshift(blockData);

  // setTimeout(() => {
  //   this.setState({
  //     blockAnimation: {}, textAnimation: {}, handleAnimation: {}, textDarkAnimation: {}, blockDarkAnimation: {}
  //   })
  // }, 500)

  // this.setState({ data: writingGraph });

  // if (error) {
  //   console.log("hello error");
  // }

  // } (left comment)

  //   });
  // }

  async writing() {
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
        let graphdata = resultData.reverse()
        arr[0].data = graphdata
        this.setState({ data: arr })

      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div style={{ height: 80, margin: '-5px', marginTop: '5px' }}>
        <MyResponsiveLine data={this.state.data} />
      </div>
    );
  }
}

