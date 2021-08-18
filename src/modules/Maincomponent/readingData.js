import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import "../../assets/styles/custom.css";
import axios from "axios";
import moment from "moment";

// const point={}
const toolTipElement = (props) => {
  // console.log(props.point?.data?.x, "<<prop")
  // console.log(props, "<<")
  let stats = parseFloat(props.point?.data?.y)
  return (
      <div>
          <div className="Tooltip-graph">
              <p className="Tooltip-graph-date">{props.point?.data?.x}</p>
              <p className="Tooltip-graph-tx">{stats.toFixed(2)}/sec</p>
          </div>
          {/* <TriangleArrowDown /> */}
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

export default function App() {
  const [data, setData] = useState([])
  // const [read, setRead] = useState({})
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
        // console.log('result-----', result.data.responseData)
        // setData(res.data.responseData);
        var arr = [{
          id: "Write-graph",
          // color: "hsl(248, 70%, 50%)",
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
        // console.log('graph----', graphdata)

        // To print the value of last object of y.
        // let newData = graphdata.slice(-1)
        // console.log('graph---',newData)
        // let firstData= Object.values(newData[0])
        // console.log('first---',firstData)
        // let secondData = parseFloat(1000/firstData[1])
        // console.log('second---',secondData)
        // setRead(secondData)


        // console.log('graph--',graphdata)
        arr[0].data = graphdata
        // arr[0].data = resultData
        setData(arr)

      })
      .catch((err) => {
        console.log(err);
      });

  }


  // let ex = read
  // console.log('graph---',ex)

  return (
    <div style={{ height: 80, margin: '-5px', marginTop: '5px' }}>
      <ReadingData data={data} />
    </div>
  );
}
