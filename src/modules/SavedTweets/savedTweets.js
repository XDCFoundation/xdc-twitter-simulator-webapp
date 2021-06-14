import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

const Container = styled.div`
  display: flex;
`;
const SubContainer = styled.div`
  width: 47%;
  border-radius: 5px;
  border: solid 1px #343965;
  background-color: #191d43;
  height: 914px;
`;
const Mainheading = styled.span`
  color: #d6d6d6;
  padding: 18px;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
`;
const Numberoftweets = styled.span`
  color: #d6d6d6;

  font-family: Raleway !important;
  font-size: 42px;
  padding: 1px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  margin-left: 60%;
`;
const Name = styled.span`
  color: #d6d6d6;
  font-size: 14px;
  font-family: Raleway !important;
  margin-left: 15px;
`;
const Image = styled.img``;
const Email = styled.span`
  color: #8290a4;
  font-size: 14px;
  font-family: Raleway !important;
  margin-left: 15px;
`;
const Content = styled.span`
  color: #d6d6d6;
  font-size: 14px;
  margin-left: 15px;
  font-family: Raleway !important;
  font-size: 12px;
`;
const Box = styled.div`
  border: solid 1px #343965;

  padding: 6px;
`;
const Time = styled.span`
  color: #8290a4;
  font-size: 13px;
  line-height: 1.15;
  padding: 5px;
  font-family: Raleway !important;
  margin-left: 453px;
`;
export default function SavedTweets() {
  return (
    <Container>
      <SubContainer>
        <Row>
          <Mainheading> Saved Tweets</Mainheading>
          <Image />
          <Numberoftweets>800k</Numberoftweets>
        </Row>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Harry Maguire</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@Harrymag</Email>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Content>
            </Column>
          </Row>
        </Box>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Harry Maguire</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@Harrymag</Email>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Content>
            </Column>
          </Row>
        </Box>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Harry Maguire</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@Harrymag</Email>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Content>
            </Column>
          </Row>
        </Box>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Harry Maguire</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@Harrymag</Email>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Content>
            </Column>
          </Row>
        </Box>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Harry Maguire</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@Harrymag</Email>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Content>
            </Column>
          </Row>
        </Box>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Harry Maguire</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@Harrymag</Email>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Content>
            </Column>
          </Row>
        </Box>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Harry Maguire</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@Harrymag</Email>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Content>
            </Column>
          </Row>
        </Box>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Harry Maguire</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@Harrymag</Email>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Content>
            </Column>
          </Row>
        </Box>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Harry Maguire</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@Harrymag</Email>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Content>
            </Column>
          </Row>
        </Box>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Harry Maguire</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@Harrymag</Email>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Content>
            </Column>
          </Row>
        </Box>
      </SubContainer>
    </Container>
  );
}
