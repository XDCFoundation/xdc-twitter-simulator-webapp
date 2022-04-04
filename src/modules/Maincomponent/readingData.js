import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import "../../assets/styles/custom.css";
import moment from "moment";

const toolTipElement = (props) => {
  let stats = parseFloat(props.point?.data?.y || 0);
  return (
    <div>
      <div className="Tooltip-graph">
        <p className="Tooltip-graph-date">{props.point?.data?.x || 0}</p>
        <p className="Tooltip-graph-tx">
          {stats >= 1 ? stats.toFixed(2) : stats.toFixed(4)}/min
        </p>
      </div>
    </div>
  );
};

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
  const [data, setData] = useState([]);

  useEffect(() => {
    readingGraph();
  }, [props?.readGraph]);

  async function readingGraph() {
    setData(props?.readGraph);
  }

  return (
    <div style={{ height: 80, margin: "-5px", marginTop: "5px" }}>
      <ReadingData data={data} dark={props.dark} />
    </div>
  );
}
