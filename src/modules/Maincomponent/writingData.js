import React, { useEffect, useState } from "react";
import { ResponsiveLine } from '@nivo/line';
import '../../assets/styles/custom.css';
import axios from 'axios';
import moment from 'moment';

// const point={}

const MyResponsiveLine = ({ data }) => (
  <ResponsiveLine
    data={data}
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

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    setInterval(() => {
      axios
        .get(
          "https://lmeqebp7fj.execute-api.us-east-1.amazonaws.com/testnet/saving-speed"
        )
        .then((result) => {
          console.log('result-----', result.data.responseData)
          // setData(res.data.responseData);
          var arr = [{
            id: "Write-graph",
            // color: "hsl(248, 70%, 50%)",
            data: []
          }]
          var resultData = []

          result.data.responseData.map(items => {
            // let transaction = items.totalTransactions / 1800
            resultData.push({
              x: moment(items.startTime * 1000).format('LT'),
              y: items.totalTransactions/1800
            })

          })
          let graphdata = resultData
          console.log('graph----', graphdata)
          arr[0].data = resultData
          setData(arr)
        })
        .catch((err) => {
          console.log(err);
        });

    }, 45000);
  }, []);


  return (
    <div style={{ height: 80, margin: '-5px',marginTop: '5px' }}>
      <MyResponsiveLine data={data} />
    </div>
  );
}


