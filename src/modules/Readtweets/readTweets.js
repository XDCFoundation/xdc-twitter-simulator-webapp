import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const SubContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  border: solid 1px #343965;
  background-color: #191d43;
  height: 865px;
`;
const Mainheading = styled.span`
  color: #d6d6d6;

  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  padding: 18px;
`;
const Numberoftweets = styled.span`
  color: #d6d6d6;
  font-family: Raleway;
  font-size: 42px;
  margin-left: 64%;
  padding: 1px;

  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
`;
const Name = styled.span`
  color: #d6d6d6;
  font-size: 14px;
  margin-left: 15px;
  font-family: Raleway !important;
`;
const Image = styled.img``;
const Email = styled.span`
  color: #8290a4;
  font-size: 14px;
  margin-left: 15px;
  font-family: Raleway !important;
`;
const Content = styled.span`
  color: #d6d6d6;

  margin-left: 15px;
  font-size: 12px;
  font-family: Raleway !important;
`;
const Box = styled.div`
  border: solid 1px #343965;

  padding: 6px;
`;
const Time = styled.span`
  color: #8290a4;
  font-size: 13px;
  line-height: 1.15;
  left: 42%;
  padding: 5px;

  position: absolute;
  font-family: Raleway !important;
`;
export default function ReadTweets() {
  return (
    <Container>
      <SubContainer>
        <Row>
          <Mainheading> Read Tweets</Mainheading>
          <Image />
          <Numberoftweets>740k</Numberoftweets>
        </Row>
        <Box>
          <Row>
            <Column>
              <Row>
                <Name>Lisa Ray</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@lisaray</Email>
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
                <Name>Harry Golding</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@henrygolding</Email>
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
                <Name>Claire Browne</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@clairebrowne</Email>
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
                <Name>Shawn </Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@shawnmurphy</Email>
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
                <Name>Susan Murphy</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@susanmurphy</Email>
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
                <Name>Jack Ryan</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@jackryan</Email>
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
                <Name>Cersie Lannister</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@cersielannister</Email>
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
                <Name>J Cole</Name>
                <Time>01:00pm</Time>
              </Row>

              <Email>@jcole</Email>
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
