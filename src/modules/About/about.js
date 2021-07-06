import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

const Bannerimage = styled.img`
  width: 100%;
  height: 335px;
`;
const useStyles = makeStyles((theme) => ({
  main: {},
  uppercomponent: {
    backgroundColor: "#0d0e2d",
  },

  twitterDapp: {
    fontFamily: "Raleway",
    fontSize: "28px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#d6d6d6",
    marginTop: "65px",
    backgroundColor: "#191d43",
    boxShadow: "none",
    paddingBottom: "8%",
  },

  paper: {
    width: "100%",
    height: "193px",
  },
  colorcontainer: {
    backgroundColor: "#191d43",
  },
  imagegrid: {
    //  marginLeft: "20px",
  },
  secondrow: {
    paddingTop: "5%",
    paddingBottom: "8%",
  },
}));
const Img = styled.img`
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Span = styled.span`
  font-family: Raleway;
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  position: absolute;
  top: 20%;
  left: 17%;
`;
const Content = styled.span`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  position: absolute;
  top: 27%;
  left: 17%;
`;
const Heading = styled.span`
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.28;
  letter-spacing: normal;
  text-align: center;
  color: #d6d6d6;
`;
const Subheading = styled.span`
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.28;
  letter-spacing: normal;
  text-align: center;
  color: #d6d6d6;
`;
export default function Aboutcomponent() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  return (
    <div className={classes.main}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.uppercomponent}>
            <Span>About Twitter-D App</Span>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              <br />
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              <br />
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor{" "}
              <br />
              reprehenderit in voluptate velit esse cillum dolore eu <br />
            </Content>
            <Bannerimage src="/images/banner.png" />
          </div>
        </Grid>

        <Grid item spacing={6} xs={12} className={classes.colorcontainer}>
          <Paper className={classes.twitterDapp}>TwitterD-App features</Paper>

          <Grid container spacing={6} className={classes.imagegrid}>
            <Column>
              <Row>
                <Grid item xs={3} className={classes.oneimage}>
                  <Column>
                    <Img src="/images/savingspeed.svg"></Img>

                    <Heading>Saving Speed</Heading>
                    <Subheading>
                      The saved tweets per second track the rate of
                      record-keeping
                    </Subheading>
                  </Column>
                </Grid>

                <Grid item xs={3}>
                  <Column>
                    <Img src="/images/readingspeed.svg"></Img>

                    <Heading>Reading Speed</Heading>
                    <Subheading>
                      The read tweets per second track the rate of
                      record-keeping
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={3}>
                  <Column>
                    <Img src="/images/savedtweets.svg" />

                    <Heading>Saved Tweets</Heading>
                    <Subheading>
                      Number of tweets saved in d-app platform
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={3}>
                  <Column>
                    <Img src="/images/searchabc.svg" />

                    <Heading>Read Tweets</Heading>
                    <Subheading>
                      Number of read tweets by d-app platform
                    </Subheading>
                  </Column>
                </Grid>
              </Row>
              <Row className={classes.secondrow}>
                <Grid item xs={3}>
                  <Column>
                    {" "}
                    <Img src="/images/toptrending.svg" />
                    <Heading>Top trending</Heading>
                    <Subheading>
                      This twitter decentralized application pertually records
                      the top 20 hashtags on Twitter on to the XDC Network
                      blockchain.
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={3}>
                  <Column>
                    {" "}
                    <Img src="/images/currentmax.svg" />
                    <Heading>Current Max TPS</Heading>
                    <Subheading>
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam,{" "}
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={3}>
                  <Column>
                    {" "}
                    <Img src="/images/searchabc.svg" />
                    <Heading>Search</Heading>
                    <Subheading>
                      Search your saved tweets even if they are deleted
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={3}>
                  <Column>
                    {" "}
                    <Img src="/images/tweetarchiveimg.webp"></Img>
                    <Heading>Tweet Archive</Heading>
                    <Subheading>
                      Tweets are archived on the network and therefore are
                      retrievable
                    </Subheading>
                  </Column>
                </Grid>
              </Row>
            </Column>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
