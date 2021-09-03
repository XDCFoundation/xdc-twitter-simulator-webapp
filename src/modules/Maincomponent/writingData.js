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

export default function App(props) {
  const [data, setData] = useState([])

  // console.log('socky--', props?.writeGraph)
  // setData(props?.writeGraph)

  useEffect(() => {
    writingGraph()
  }, [props?.writeGraph]);

  async function writingGraph() {
      setData(props?.writeGraph)
  }
// console.log('bat--',data)

  return (
    <>
      <div style={{ height: 80, margin: '-5px', marginTop: '5px' }}>
        <MyResponsiveLine data={data} />
      </div>
    </>
  );
}

