import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import "../../assets/styles/custom.css";
import axios from "axios";
import moment from "moment";

// const point={}

const ReadingData = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 10 }}
    colors={{ scheme: "accent" }}
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
  const [data, setData] = useState([]);
  useEffect(() => {
    reading();
    setInterval(() => {
      reading();
    }, 10000);
  }, []);

  function reading() {
    axios
      .get("https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/read-speed")
      .then((result) => {
        var arr = [
          {
            id: "Write-graph",
            data: [],
          },
        ];
        var resultData = [];
        result.data.responseData.map((items) => {
          resultData.push({
            x: moment(items.startTime * 1000).format("LT"),
            y: items.totalTransactions / 3600
          });
        });
        // let graphdata = resultData;
        // let res = graphdata[resultData.length - 1];
        arr[0].data = resultData;
        setData(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{ height: 80, margin: "-5px", marginTop: "5px" }}>
      <ReadingData data={data} />
    </div>
  );
}
