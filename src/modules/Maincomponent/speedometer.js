import React, { useState } from "react";
import styled from "styled-components";
import ReactSpeedometer from "react-d3-speedometer";

const MainDiv = styled.div`
  margin: 50px 0 0 -10px;
`;

export default function Speedometer(props) {
  let v = 290;

  return (
    <MainDiv>
      <ReactSpeedometer
        width={213}
        height={137}
        forceRender={false}
        needleHeightRatio={0.6}
        needleColor={"black"}
        needleTransitionDuration={9000}
        needleTransition="easeQuadInOut"
        maxSegmentLabels={5}
        segments={5}
        customSegmentStops={[0, 200, 400, 600, 800, 1000]}
        minValue={0}
        maxValue={1000}
        ringWidth={20}
        segmentColors={["#68D0E2", "#68D0E2", "#68D0E2", "#D6E0FF", "#D6E0FF"]}
        value={v}
        currentValueText=" "
      ></ReactSpeedometer>
    </MainDiv>
  );
}
