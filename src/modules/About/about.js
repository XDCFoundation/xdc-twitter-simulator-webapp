import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Bannerimage = styled.img`
  width: 100%;
  height: auto;
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

    color: "#09184b",
    marginTop: "90px",
    backgroundColor: "#f5f6f9",
    boxShadow: "none",
    paddingBottom: "6%",
  },
  twitterDapp_dark_mode: {
    fontFamily: "Raleway,sans-serif",
    fontSize: "28px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#d6d6d6",
    marginTop: "90px",
    backgroundColor: "#0d0e2d",
    boxShadow: "none",
    paddingBottom: "6%",
  },

  paper: {
    width: "100%",
    height: "193px",
  },
  colorcontainer: {
    backgroundColor: "#f5f6f9;",
  },
  colorcontainer_dark_mode: {
    backgroundColor: "#0d0e2d",
  },
  imagegrid: { width: "100%" },
  firstrow: {
    justifyContent: "center",
  },
  "@media (min-width: 0px) and (max-width: 399px)": {
    firstrow: {
      display: "flex !important",
      flexFlow: "row nowrap",
      flexDirection: "column !important",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  "@media (min-width: 400px) and (max-width: 1080px)": {
    firstrow: {
      display: "flex !important",
      flexFlow: "row nowrap",
      flexDirection: "column !important",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  "@media (min-width: 1081px)" : {
    firstrow: {
      display: "flex !important",
      flexFlow: "row nowrap",
      gridGap: '45px',
      justifyContent: "center",
      alignItems: "center",
    },
  },
  secondrow: {
    justifyContent: "center",
    paddingTop: "5%",
    paddingBottom: "8%",
  },
  "@media (min-width: 1px) and (max-width: 399px)": {
    secondrow: {
      display: "flex !important",
      flexFlow: "row nowrap",
      flexDirection: "column !important",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  "@media (min-width: 400px) and (max-width: 1081px)": {
    secondrow: {
      display: "flex",
      flexFlow: "row nowrap",
      flexDirection: "column !important",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  "@media (min-width: 1082px)": {
    secondrow: {
      display: "flex",
      flexFlow: "row nowrap",
      gridGap: '45px',
      justifyContent: "center",
      alignItems: "center",
    },
  },
  columnone: {
    width: "90%",
    marginTop: '40px'
  },
  columntwo: {
    width: "90%",
    marginTop: '40px'
  },
  all_head_text: {
    color: "#09184b",
    fontSize: '15px',
    fontWeight: 500
  },
  all_head_text_dark_mode: {
    color: "#d6d6d6",
    fontSize: '15px',
    fontWeight: 500

  },
  alltext: {
    color: "#09184b",
    fontSize: '12px',
    fontWeight: 700
  },
  alltext_dark_mode: {
    color: "#d6d6d6",
    fontSize: '12px',
    fontWeight: 700

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
  position: absolute;
  top: 20%;
  left: 11%;
  @media (min-width: 1px) and (max-width: 399px) {
    font-family: Raleway, sans-serif;
    font-size: 11px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    position: absolute;
    top: 20%;
    left: 5%;
  }
  @media (min-width: 400px) and (max-width: 1080px) {
    font-family: Raleway, sans-serif;
    font-size: 11px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    position: absolute;
    top: 20%;
    left: 5%;
  }
`;
const Content = styled.span`
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  position: absolute;
  top: 38%;
  left: 11%;
  @media (min-width: 0px) and (max-width: 399px) {
    display: none;
  }
  @media (min-width: 400px) and (max-width: 1080px) {
    display: none;
    // font-family: Raleway, sans-serif;
    // font-size: 11px;
    // font-weight: 500;
    // font-stretch: normal;
    // font-style: normal;
    // line-height: 1.78;
    // letter-spacing: normal;
    // text-align: left;
    // color: #ffffff;
    // position: absolute;
    // top: 38%;
    // left: 5%;
  }
`;

const Heading = styled.span`
  font-family: Raleway, sans-serif;
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
  font-family: Raleway, sans-serif;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #d6d6d6;
`;

export default function Aboutcomponent(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.uppercomponent}>
            <Span>About Twitter DApp</Span>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud <br />
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure <br /> dolor reprehenderit in voluptate
              velit esse cillum dolore eu <br />
            </Content>
            <Bannerimage src="/images/banner.png" />
          </div>
        </Grid>

        <Grid
          item
          spacing={8}
          xs={12}
          className={
            props.dark
              ? classes.colorcontainer_dark_mode
              : classes.colorcontainer
          }
        >
          <Paper
            className={
              props.dark ? classes.twitterDapp_dark_mode : classes.twitterDapp
            }
          >
            Twitter-D App features
          </Paper>

          <Grid container spacing={0} className={classes.imagegrid}>
            <Column>
              <Row className={classes.firstrow}>
                <Grid item xs={6} sm={3} md={2} className={classes.imagesGrid}>
                  <Column className={classes.columnone}>
                    <Img src="/images/savingspeed.svg"></Img>

                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        {" "}
                        Saving Speed
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        {" "}
                        The saved tweets per second track the rate of
                        record-keeping
                      </span>
                    </Subheading>
                  </Column>
                </Grid>

                <Grid item xs={6} sm={3} md={2}>
                  <Column className={classes.columnone}>
                    <Img src="/images/readingspeed.svg"></Img>

                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Reading Speed
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        The read tweets per second track the rate of
                        record-keeping
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                  <Column className={classes.columnone}>
                    <Img src="/images/savedtweets.svg" />

                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Saved Tweets
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        Number of tweets saved in d-app platform
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                  <Column className={classes.columnone}>
                    <Img src="/images/Read.svg" />

                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Read Tweets
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        Number of read tweets by d-app platform
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
              </Row>

              <Row className={classes.secondrow}>
                <Grid item xs={6} sm={3} md={2}>
                  <Column className={classes.columntwo}>
                    {" "}
                    <Img src="/images/toptrending.svg" />
                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Top trending
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        This twitter decentralized application pertually records
                        the top 20 hashtags on Twitter on to the XDC Network
                        blockchain.
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                  <Column className={classes.columntwo}>
                    {" "}
                    <Img src="/images/currentmax.svg" />
                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Current Max TPS
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        The speed of the current and maximum transactions
                        completed on the platform
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                  <Column className={classes.columntwo}>
                    {" "}
                    <Img src="/images/Searchabc.svg" />
                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Search
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        Search your saved tweets even if they are deleted
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                  <Column className={classes.columntwo}>
                    {" "}
                    <Img src="/images/tweetarchiveimg.webp"></Img>
                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Tweet Archive
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        Tweets are archived on the network and therefore are
                        retrievable
                      </span>
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
