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
    position: "relative",
  },

  twitterDapp: {
    fontFamily: "Raleway,sans-serif",
    fontSize: "28px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#d6d6d6",
    marginTop: "65px",
    backgroundColor: "#0d0e2d",
    boxShadow: "none",
    paddingBottom: "6%",
  },

  paper: {
    width: "100%",
    height: "193px",
  },
  colorcontainer: {
     backgroundColor: "#0d0e2d",
  },
  imagegrid: {
   
  },
  firstrow: {
    justifyContent: "center",
  },
  secondrow: {
    justifyContent: "center",
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
  font-family: "Raleway,sans-serif";
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  position:absolute;
  top:20%;
  left:16%;

  

`;
const Content = styled.span`
  font-family: Raleway,sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  position:absolute;
  top:38%;
  left:16%;
  
  
  
`;
const Heading = styled.span`
  font-family: Raleway,sans-serif;
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
  font-family: Raleway,sans-serif;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #d6d6d6;
`;
export default function Aboutcomponent() {
  const classes = useStyles();
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
          <Paper className={classes.twitterDapp}>Twitter-D App features</Paper>

          <Grid container spacing={6} className={classes.imagegrid}>
            <Column>
              <Row className={classes.firstrow}>
                <Grid item xs={2} className={classes.oneimage} style={{marginRight:"7%"}}>
                  <Column>
                    <Img src="/images/savingspeed.svg"></Img>

                    <Heading>Saving Speed</Heading>
                    <Subheading>
                      The saved tweets per second track the rate of
                      record-keeping
                    </Subheading>
                  </Column>
                </Grid>

                <Grid item xs={2} style={{paddingRight:"7%"}} >
                  <Column>
                    <Img src="/images/readingspeed.svg"></Img>

                    <Heading>Reading Speed</Heading>
                    <Subheading>
                      The read tweets per second track the rate of record-keeping
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={2} style={{paddingRight:"3%"}}>
                  <Column>
                    <Img src="/images/savedtweets.svg" />

                    <Heading>Saved Tweets</Heading>
                    <Subheading>
                      Number of tweets saved in d-app platform
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={2}>
                  <Column>
                    <Img src="/images/newimage.svg" />

                    <Heading>Read Tweets</Heading>
                    <Subheading>
                      Number of read tweets by d-app platform
                    </Subheading>
                  </Column>
                </Grid>
              </Row>
              <Row className={classes.secondrow}>
                <Grid item xs={2} style={{marginRight:"7%"}}>
                  <Column>
                    {" "}
                    <Img src="/images/toptrending.svg" />
                    <Heading>Top trending</Heading>
                    <Subheading>
                      This twitter decentralized application pertually records the top 20 hashtags on Twitter on to the XDC Network blockchain.
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={2} style={{paddingRight:"7%"}}>
                  <Column>
                    {" "}
                    <Img src="/images/currentmax.svg" />
                    <Heading>Current Max TPS</Heading>
                    <Subheading>
                   The speed of the current and maximum transactions completed on the platform
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={2} style={{paddingRight:"3%"}}>
                  <Column>
                    {" "}
                    <Img src="/images/searchabc.svg" />
                    <Heading>Search</Heading>
                    <Subheading>
                      Search your saved tweets even if they are deleted
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={2}>
                  <Column>
                    {" "}
                    <Img src="/images/tweetarchiveimg.webp"></Img>
                    <Heading>Tweet Archive</Heading>
                    <Subheading>
                      Tweets are archived on the network and therefore are retrievable
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
