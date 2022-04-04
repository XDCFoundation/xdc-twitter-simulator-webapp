import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import "../../assets/styles/custom.css";
import styled from "styled-components";

import moment from "moment";
import { Component } from "react";

const GraphSize = styled.div`
  height: 88px;
  width: auto;
  margin-top: 1rem;
  [stroke="url(#someGradientId)"] {
    stroke: #3366ff;
  }
  @media (max-width: 767px) {
    height: 102px;
  }
`;
// const height = 140;

const width = "none";
const gradProps = {
  gradientUnits: "userSpaceOnUse",
  x1: "0",
  y1: "0",
  x2: "0",
  y2: "0",
};
const toolTipElement = (props) => {
  let stats = parseFloat(props.point?.data?.y) || 0;

  return (
    <div>
      <div className="Tooltip-graph">
        <p className="Tooltip-graph-date">{props.point?.data?.x || 0}</p>
        <p className="Tooltip-graph-tx">
          {stats >= 1 ? stats.toFixed(2) || 0 : stats.toFixed(4) || 0}/min
        </p>
      </div>
    </div>
  );
};

const MyResponsiveLine = ({ data }) => (
  <GraphSize>
    <ResponsiveLine
      data={data}
      tooltip={toolTipElement}
      margin={{ top: 10, right: 10 }}
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
      colors={["url(#someGradientId)"]}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      enableCrosshair={false}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      useMesh={true}
      legends={[]}
    />
    <svg>
      <defs>
        <linearGradient id="someGradientId" {...gradProps}>
          <stop offset="80%" stopColor="#3366FF" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
    </svg>
  </GraphSize>
);

export default function App(props) {
  const [data, setData] = useState([]);
  // setData(props?.writeGraph)

  useEffect(() => {
    writingGraph();
  }, [props?.writeGraph]);

  async function writingGraph() {
    setData(props?.writeGraph);
  }

  return (
    <>
      <div style={{ height: 80, margin: "-5px", marginTop: "5px" }}>
        <MyResponsiveLine data={data} />
      </div>
    </>
  );
}
