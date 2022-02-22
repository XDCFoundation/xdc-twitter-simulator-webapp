import React, { useState } from "react";
import styled from "styled-components";
import ReactSpeedometer from "react-d3-speedometer";

const MainDiv = styled.div`
  margin: 50px 0 0 -10px;
`;

export default function DarkSpeedometer(props) {
  let val = props.tpsCount || 0;

  return (
    <MainDiv>
      {(() => {
        switch (props.steps) {
          case 1:
            return (
              <>
                <ReactSpeedometer
                  width={213}
                  height={137}
                  forceRender={props.clicks === true ? true : false}
                  needleHeightRatio={0.6}
                  needleColor={"#ffffff"}
                  needleTransitionDuration={9000}
                  needleTransition="easeElastic"
                  maxSegmentLabels={5}
                  segments={5}
                  customSegmentStops={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]}
                  minValue={0}
                  maxValue={0.6}
                  ringWidth={20}
                  segmentColors={[
                    "#10c892",
                    "#10c892",
                    "#10c892",
                    "#191970",
                    "#191970",
                  ]}
                  value={
                    props.meterValue === undefined ? val : props.meterValue
                  }
                  currentValueText=" "
                ></ReactSpeedometer>
              </>
            );
          case 2:
            return (
              <>
                <ReactSpeedometer
                  width={213}
                  height={137}
                  forceRender={props.clicks === true ? true : false}
                  needleHeightRatio={0.6}
                  needleColor={"#ffffff"}
                  needleTransitionDuration={9000}
                  needleTransition="easeElastic"
                  maxSegmentLabels={5}
                  segments={5}
                  customSegmentStops={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]}
                  minValue={0}
                  maxValue={0.6}
                  ringWidth={20}
                  segmentColors={[
                    "#10c892",
                        "#10c892",
                        "#10c892",
                        "#191970",
                        "#191970",
                  ]}
                  value={props.meterValue}
                  currentValueText=" "
                ></ReactSpeedometer>
              </>
            );
          default:
            return;
        }
      })()}
    </MainDiv>
  );
}
