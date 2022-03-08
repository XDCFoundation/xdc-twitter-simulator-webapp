import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactSpeedometer from "react-d3-speedometer";

const MainDiv = styled.div`
  margin: 50px 0 0 -10px;
`;

export default function Speedometer(props) {
  const [parameter, setParameter] = useState([0, 3, 6, 9, 12, 15, 18]);
  const [maxValue, setMaxValue] = useState(18);

  let val = Number(props.tpsCount)?.toFixed(2) || 0;

  useEffect(() => {
    if (val !== null && val !== undefined && val >= 0) {
      parameterValue();
    }
  }, [val]);

  function parameterValue() {
    try {
      let value = Number((parseFloat(val) / 5).toFixed(2));
      setParameter([0, 1 * value, 2 * value, 3 * value, 4 * value, 5 * value]);
      setMaxValue(5 * value);
    } catch (e) { }
  }

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
                  forceRender={true}
                  needleHeightRatio={0.6}
                  needleColor={"black"}
                  needleTransitionDuration={9000}
                  needleTransition="easeElastic"
                  maxSegmentLabels={5}
                  segments={5}
                  customSegmentStops={parameter}
                  minValue={0}
                  maxValue={maxValue}
                  ringWidth={20}
                  segmentColors={[
                    "#68D0E2",
                    "#68D0E2",
                    "#68D0E2",
                    "#D6E0FF",
                    "#D6E0FF",
                  ]}
                  value={props.updatedMaxTps ? props.updatedMaxTps : props.currentTps}
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
                  forceRender={true}
                  needleHeightRatio={0.6}
                  needleColor={"black"}
                  needleTransitionDuration={9000}
                  needleTransition="easeElastic"
                  maxSegmentLabels={5}
                  segments={5}
                  customSegmentStops={parameter}
                  minValue={0}
                  maxValue={maxValue}
                  ringWidth={20}
                  segmentColors={[
                    "#68D0E2",
                    "#68D0E2",
                    "#68D0E2",
                    "#D6E0FF",
                    "#D6E0FF",
                  ]}
                  value={props.updatedMaxTps ? props.updatedMaxTps : props.currentTps}
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
