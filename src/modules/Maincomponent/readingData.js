import React, { useEffect, useState } from "react";
import { ResponsiveLine } from '@nivo/line';
import '../../assets/styles/custom.css';

const data = [
    {
        "id": "japan",
        "color": "hsl(10, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 200
              },
              {
                "x": "helicopter",
                "y": 100
              },
              {
                "x": "boat",
                "y": 300
              }, {
                "x": "sheet",
                "y": 200
              }
        ]
    }
]
const ReadingData = ({ data }) => (
    <ResponsiveLine
        data={data}
        colors={{ scheme: 'accent' }}
        margin={{ top: 10, right:50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={{ orient: 'right', tickSize: 0, tickPadding:15, tickRotation: 1, legend: '', legendOffset: 0 }}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        enableArea={true}
        enableCrosshair={false}
        useMesh={true}
    />
)

export default function App() {



    return (
        <div style={{ height: 100, width: 270 }}>
            <ReadingData data={data} />
        </div>
    );
}

