import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 48px 70px 48px 70px;
  background-color: #f5f6f9;
`;
 const Trending = styled.div`
 width: 281px;
 height: 176px;
 margin: 18px 26px 51px 0px;
 padding: 25px 18px 25px 18px;
 border-radius: 5px;
 background-color: #ffffff;
 border: 1px solid red;
   `;

const Title = styled.text`
  width: 177px;
  height: 21px;
  font-family: "Raleway" !important;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #09184b;
`;

const Box = styled.div`
  width: 281px;
  height: 176px;
  margin: 18px 26px 51px 0px;
  padding: 25px 18px 25px 18px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid red;
`;
const Speedtitle = styled.text`
  width: 117px;
  height: 21px;
  margin: 0 199.1px 9px 0;
  font-family: "Raleway", sans-serif !important;
  font-size: 18px;
  font-weight: 600;
`;

const Speed = styled.text`
  width: 78px;
  height: 26px;
  margin: 9px 238.1px 24px 0;
  font-family: "Raleway", sans-serif !important;
  font-size: 22px;
  font-weight: 600;
  text-align: left;
  color: #3366ff;
`;
// Xinfin twitter
export default function MainComponent() {
  return (
    <MainContainer>
      <Column>
        <Row>
          <Column>
            <Title>Writing Speed</Title>
            <Box></Box>
          </Column>
          <Column>
            <Title>Reading Speed</Title>
            <Box></Box>
          </Column>
        </Row>
        <Row>
          <Column>
            <Title>Nodes</Title>
            <Box></Box>
          </Column>
        </Row>
      </Column>
      <Column>
        <Row>
          <Trending>

          <Title>Trending</Title>
          <Box></Box>
          </Trending>
        </Row>
      </Column>
    </MainContainer>
  );
}
