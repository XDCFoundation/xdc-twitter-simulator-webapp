import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const SubContainer = styled.div`
  border-radius: 5px;
  border: solid 1px #343965;
  background-color: #191d43;
  height: 914px;
  margin-left: 227px;

  margin-top: 22px;
`;
const Mainheading = styled.span`
  color: #d6d6d6;
  padding: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-size: 22px;
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
const HomeImage = styled.img``;
const Dashboardbutton = styled.button`
  color: #ffffff;

  border: none;
  width: 25%;
  height: 45px;
  border-radius: 6px;
  background-color: #222864;
`;
const Buttondiv = styled.div`
  margin-left: 227px;
  margin-top: 25px;
`;

export default function Searchlist() {
  return (
    <Container>
      <Column>
        <Buttondiv>
          <Dashboardbutton>Dashboard</Dashboardbutton>
        </Buttondiv>

        <SubContainer>
          <Row>
            <Mainheading> Search Results</Mainheading>
            {/* <Image src="/images/infoicon.svg" /> */}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </Content>
              </Column>
            </Row>
          </Box>
        </SubContainer>
      </Column>
    </Container>
  );
}
