import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import "../../assets/styles/custom.css";
import axios from "axios";
import moment from "moment";

const toolTipElement = (props) => {
  let stats = parseFloat(props.point?.data?.y) || 0

  return (
    <div>
      <div className="Tooltip-graph">
        <p className="Tooltip-graph-date">{props.point?.data?.x || 0}</p>
        <p className="Tooltip-graph-tx">{stats >= 1 ? stats.toFixed(2) || 0 : stats.toFixed(4) || 0}/sec</p>
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

export default function App(props) {
  const [data, setData] = useState([])
  // const [read, setRead] = useState({})
  //   console.log('myread---',props.readMe)

  useEffect(() => {
    readingGraph()
    setInterval(() => {
      readingGraph()
    }, 60000);
  }, []);

  async function readingGraph() {
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

        //   console.log(getUnique(resultData,'x'))
        let graphdata = getUnique(resultData, 'x').reverse()

        // To print the value of last object of y.
        // let newData = graphdata.slice(-1)
        // console.log('graph---',newData)
        // let firstData= Object.values(newData[0])
        // console.log('first---',firstData)
        // let secondData = parseFloat(1000/firstData[1])
        // console.log('second---',secondData)
        // setRead(secondData)

        arr[0].data = graphdata
        // arr[0].data = resultData
        setData(arr)

      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (
    <div style={{ height: 80, margin: '-5px', marginTop: '5px' }}>
      <ReadingData data={data} />
    </div>
  );
}