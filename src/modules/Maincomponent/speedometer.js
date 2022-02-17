import React, { useState } from "react";
import styled from "styled-components";
import ReactSpeedometer from "react-d3-speedometer";

const MainDiv = styled.div`
  margin: 50px 0 0 -10px;
`;

export default function Speedometer(props) {
  let val = props.tpsCount;
  let mode = props.dark === true ? "white" : "black";

  return (
    <MainDiv>
      <ReactSpeedometer
        width={213}
        height={137}
        forceRender={false}
        needleHeightRatio={0.6}
        needleColor={mode}
        needleTransitionDuration={9000}
        needleTransition="easeQuadInOut"
        maxSegmentLabels={5}
        segments={5}
        customSegmentStops={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]}
        minValue={0}
        maxValue={0.6}
        ringWidth={20}
        segmentColors={["#68D0E2", "#68D0E2", "#68D0E2", "#D6E0FF", "#D6E0FF"]}
        value={val}
        currentValueText=" "
      ></ReactSpeedometer>
    </MainDiv>
  );
}
