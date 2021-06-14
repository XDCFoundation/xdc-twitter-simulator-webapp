import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

const Container = styled.div`
  display: flex;
`;
const SubContainer = styled.div`
  width: 37%;

  height: 933px;

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
  font-family: Raleway;
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
  margin-left: 381px;
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
