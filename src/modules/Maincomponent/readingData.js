import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import "../../assets/styles/custom.css";
import axios from "axios";
import moment from "moment";
import { Component } from "react";

const toolTipElement = (props) => {
  let stats = parseFloat(props.point?.data?.y)
  return (
    <div>
      <div className="Tooltip-graph">
        <p className="Tooltip-graph-date">{props.point?.data?.x}</p>
        <p className="Tooltip-graph-tx">{stats.toFixed(2)}/sec</p>
      </div>
    </div>
  )
}

const ReadingData = ({ data }) => (
  <ResponsiveLine
    data={data}
    tooltip={toolTipElement}
    margin={{ top: 10, right: 10 }}
    colors={{ scheme: "paired" }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="basis"
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableGridX={false}
    enableGridY={false}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    enableCrosshair={false}
    enableArea={true}
    useMesh={true}
    legends={[]}
  />
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      blockSocketConnected: false
    }
  }

  async componentDidMount() {
    await this.readingGraph()
    // console.log('newone---',this?.props?.readMe)
    // this.socketData(this?.props?.readMe)
  }

  // socketData(socket) {
  //   let readingGraph = this.state.data;
  //   socket.on("read-speed-socket", (blockData, error) => {
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

  // this.setState({ data: readingGraph });

  // if (error) {
  //   console.log("hello error");
  // }

  // } (left comment)

  //   });
  // }

  async readingGraph() {
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
          let graphs = items.responseTime / items.requestCount
          resultData.push({
            x: moment(items.addedOn).format('LT'),
            y: 1000 / graphs
          })

        })
        // let graphdata = resultData
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

        arr[0].data = graphdata
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
            let graphs = items.responseTime / items.requestCount
            resultData.push({
              x: moment(items.addedOn).format('LT'),
              y: 1000 / graphs
            })

          })
          // let graphdata = resultData
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
    // console.log('tat--',this.state.data)
    return (
      <div style={{ height: 80, margin: '-5px', marginTop: '5px' }}>
        <ReadingData data={this.state.data} />
      </div>
    );
  }
}