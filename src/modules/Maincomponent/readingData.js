import React, { useEffect, useState } from "react";
import { ResponsiveLine } from '@nivo/line';
import '../../assets/styles/custom.css';
 
// const point={}
 
const data = [
    {
        id: "japan",
        color: "hsl(262, 70%, 50%)",
        data: [
            {
                "x": "plane",
                "y": 266
            },
            {
                "x": "helicopter",
                "y": 34
            },
            {
                "x": "boat",
                "y": 67
            },
            {
                "x": "train",
                "y": 27
            },
            {
                "x": "subway",
                "y": 238
            },
            {
                "x": "bus",
                "y": 252
            },
            {
                "x": "car",
                "y": 83
            },
            {
                "x": "moto",
                "y": 68
            },
            {
                "x": "bicycle",
                "y": 131
            },
            {
                "x": "horse",
                "y": 11
            },
            {
                "x": "skateboard",
                "y": 240
            },
            {
                "x": "others",
                "y": 273
            }
        ]
    },
]
const ReadingData = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10 }}
        colors={{ scheme: "accent" }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
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
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableCrosshair={false}
        enableArea={true}
        useMesh={true}
        legends={[]}
    />
)
 
export default function App() {


 
    return (
        <div style={{ height: 70 }}>
            <ReadingData data={data} />
        </div>
    );
}