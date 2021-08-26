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
      {/* <TriangleArrowDown /> */}
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
  }

  async writing() {
    await axios
      .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVING_SPEED_DATA)
      .then((result) => {
        // console.log('val---',result.data.responseData[0])
        var arr = [{
          id: "Write-graph",
          data: []
        }]
        var resultData = []

        result.data.responseData[0].map(items => {
          let firstAxis = items.responseTime / 1000 || 0
          let secondAxis = (items?.savedTweets == 0 ? 0 : firstAxis / items?.savedTweets) || 0
          resultData.push({
            x: moment(items.saveStartTime * 1000).format('LT'),
            y: secondAxis
          })

        })
        let graphdata = resultData
        arr[0].data = graphdata
        this.setState({ data: arr })
     
      })
      .catch((err) => {
        console.log(err);
      });

    setInterval(async () => {
      // if (!this.state.blockSocketConnected) {
      await axios
        .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVING_SPEED_DATA)
        .then((result) => {
          var arr = [{
            id: "Write-graph",
            data: []
          }]
          var resultData = []

          result.data.responseData[0].map(items => {
            let firstAxis = items.responseTime / 1000 || 0
            let secondAxis = (items?.savedTweets == 0 ? 0 : firstAxis / items?.savedTweets) || 0
            resultData.push({
              x: moment(items.saveStartTime * 1000).format('LT'),
              y: secondAxis
            })

          })
          let graphdata = resultData
          arr[0].data = graphdata
          this.setState({ data: arr })
        })
        .catch((err) => {
          console.log(err);
        });
      // }

    }, 60000)
  };
  render() {
    return (
      <div style={{ height: 80, margin: '-5px', marginTop: '5px' }}>
        <MyResponsiveLine data={this.state.data} />
      </div>
    );
  }
}

