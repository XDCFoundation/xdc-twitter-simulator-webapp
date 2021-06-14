import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const SubContainer = styled.div`
  //   width: 37%;

  //   height: 933px;

  border-radius: 5px;
  border: solid 1px #343965;
  background-color: #191d43;
`;
const Mainheading = styled.span`
  color: #d6d6d6;
  padding: 15px;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
`;
const Numberoftweets = styled.span`
  color: #d6d6d6;

  font-family: Raleway !important;
  font-size: 42px;
  padding: 1px;
  margin-left: 304px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
`;
const Name = styled.span`
  color: #d6d6d6;
  font-size: 14px;
  margin-left: 15px;
`;
const Image = styled.img``;
const Email = styled.span`
  color: #8290a4;
  font-size: 14px;
  margin-left: 15px;
`;
const Content = styled.span`
  color: #d6d6d6;
  font-size: 14px;
  margin-left: 15px;
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
  left: 470px;
  position: absolute;
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
                The Lorem Ipsum text is not only there as a placeholder. You can
                select
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
                The Lorem Ipsum text is not only there as a placeholder. You can
                select
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
                The Lorem Ipsum text is not only there as a placeholder. You can
                select
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
                The Lorem Ipsum text is not only there as a placeholder. You can
                select
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
                The Lorem Ipsum text is not only there as a placeholder. You can
                select
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
                The Lorem Ipsum text is not only there as a placeholder. You can
                select
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
                The Lorem Ipsum text is not only there as a placeholder. You can
                select
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
                The Lorem Ipsum text is not only there as a placeholder. You can
                select
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
                The Lorem Ipsum text is not only there as a placeholder. You can
                select
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
                The Lorem Ipsum text is not only there as a placeholder. You can
                select
              </Content>
            </Column>
          </Row>
        </Box>
      </SubContainer>
    </Container>
  );
}
