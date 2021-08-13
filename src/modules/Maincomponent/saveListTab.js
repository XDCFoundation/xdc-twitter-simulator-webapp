import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "../styles/App.css";
import moment from "moment";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
const IconImg = styled.img`
  margin-left: 10px;
  height: 14px;
  width: 14px;
  margin-top: 1px;
`;

const theme = createMuiTheme({
  typography: {
    htmlFontSize: "22px",
    whiteSpace: "nowrap",
    fontFamily: "Raleway sans-serif !important",
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    marginTop: "-7%",
    marginRight: "1.5%",
    height: "auto",
    marginBottom: "45px",
    // height: '784px',
  },

  paper_dark_mode: {
    color: theme.palette.text.secondary,
    marginTop: "-7%",
    marginRight: "1.5%",
    backgroundColor: "#191d43",
    color: "white",
    height: "auto",
    marginBottom: "45px",
    // height: '784px',
  },
  tweetnumber: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "4.5%",
    fontSize: "26px",
    marginTop: "-14px",
    marginRight: "17px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",
  },
  "@media (min-width: 600px) and (max-width: 766px)": {
    tweetnumber: {
      whiteSpace: "nowrap",
      boxShadow: "none",
      align: "justify",
      position: "absolute",
      right: "4.5%",
      fontSize: "26px",
      marginTop: "-9px",
      marginRight: "17px",
      fontWeight: "600",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.17",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#09184b",
    },
  },
  tweetnumber_dark_mode: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "4.5%",
    fontSize: "26px",
    marginTop: "-24px",
    marginRight: "17px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#ffffff",
  },
  "@media (min-width: 600px) and (max-width: 767px)": {
    tweetnumber_dark_mode: {
      whiteSpace: "nowrap",
      boxShadow: "none",
      align: "justify",
      position: "absolute",
      right: "4.5%",
      fontSize: "26px",
      marginTop: "-10px",
      marginRight: "17px",
      fontWeight: "600",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.17",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#ffffff",
    },
  },

  row: {
    marginBottom: "30px",
  },
  name: {
    fontSize: "11px",
    color: "#09184b",
    whiteSpace: "nowrap",
    fontFamily: "Raleway",
    marginLeft: "18px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",
    marginBottom: "5px",
  },

  name_dark_mode: {
    fontSize: "11px",
    color: "#09184b",
    whiteSpace: "nowrap",
    fontFamily: "Raleway",
    marginLeft: "18px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
    backgroundColor: "#191d43",
    marginBottom: "5px",
  },

  content: {
    fontSize: "11px",
    color: "#09184b",
    boxShadow: "none",
    border: "none",
    fontFamily: "Raleway",
    fontSize: "11px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "0.5px",
    textAlign: "left",
    color: "#09184b",
    marginLeft: "18px",
    marginRight: "18px",
  },

  content_dark_mode: {
    fontSize: "11px",
    color: "#09184b",
    boxShadow: "none",
    border: "none",
    fontFamily: "Raleway",
    fontSize: "11px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "0.5px",
    textAlign: "left",
    color: "white",
    backgroundColor: "#191d43",
    marginLeft: "18px",
    marginRight: "18px",
  },

  time: {
    color: "#8290a4",
    boxShadow: "none",
    position: "absolute",
    right: "4.5%",
    // fontFamily: "Raleway",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.15",
    marginRight: "17px",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#8290a4",
    marginBottom: "5px",
    marginLeft: "18px",
  },

  time_dark_mode: {
    color: "#8290a4",
    boxShadow: "none",
    position: "absolute",
    right: "4.5%",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.15",
    letterSpacing: "normal",
    textAlign: "left",
    marginRight: "17px",
    color: "#8290a4",
    backgroundColor: "#191d43",
    marginBottom: "5px",
    marginLeft: "18px",
  },

  email: {
    fontSize: "11px",
    color: "#8290a4",
    // whiteSpace: "nowrap",
    fontFamily: "Raleway",
    marginBottom: "5px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#8f8faf",
    marginLeft: "18px",
  },
  readtweet: {
    fontFamily: "Raleway",
    fontSize: "16px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",
    marginTop: "4%",
    marginLeft: "18px",
  },

  readtweet_dark_mode: {
    fontFamily: "Raleway",
    fontSize: "16px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
    marginTop: "4%",
    marginLeft: "18px",
  },
  hr_page: {
    width: "100%",
    height: "0px",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },

  hr_page_dark_mode: {
    width: "100%",
    height: "0px",
    backgroundColor: "#8290a4",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  readTweetContainer: {
    marginTop: "0px",
  },
  "@media (min-width: 0px) and (max-width: 766px)": {
    readTweetContainer: {
      marginTop: "30px",
    },
  },
}));

export default function ReadTweets(props) {
  const classes = useStyles();
  const [savedTweets, setSavedTweets] = useState([]);

  const [totalSave, setTotalSave] = useState([]);

  useEffect(() => {
    fetchSavedTweets();
    fetchTotalTweets();
    setInterval(() => {
      fetchSavedTweets();
      fetchTotalTweets();
    }, 30000);
  }, []);

  //For save-tweets

  const fetchSavedTweets = () => {
    axios
      .get(
        "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com//saved-tweets"
      )

      .then((res) => {
        let tweetResponse;
        if (
          !res ||
          !res.data ||
          !res.data.responseData ||
          res.data.responseData.length <= 0
        )
          tweetResponse = [];
        else tweetResponse = res.data.responseData[0];
        setSavedTweets(tweetResponse);
        // console.log("saveTweets------", tweetResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //For total Count--->

  const fetchTotalTweets = () => {
    axios
      .get(
        "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/saved-tweets-count"
      )
      .then((res) => {
        // console.log('total-Saved-Tweet-Count-------', res.data)
        setTotalSave(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let method = "@user";
  // console.log('method------',method)

  return (
    <Grid Container spacing={3}>
      <Grid item xs={12}>
        <div className={classes.readTweetContainer}>
          <Paper
            className={props.dark ? classes.paper_dark_mode : classes.paper}
            elevation={0}
          >
            <Column>
              <Row className={classes.row}>
                {/* <Typography
                  className={
                    props.dark ? classes.readtweet_dark_mode : classes.readtweet
                  }
                  variant="h5"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Read Tweets
                  <Tippy
                    placement={"right"}
                    theme={"light"}
                    maxWidth={"none"}
                    content={
                      <span
                        style={{
                          color: "#0d0e2d",
                          fontSize: "11px",
                          fontWeight: "600",
                        }}
                      >
                        Number of read tweets by d-app platform
                      </span>
                    }
                  >
                    <IconImg src="../../images/ic.png" />
                  </Tippy>
                </Typography> */}

                <div
                  variant="h5"
                  className={
                    props.dark
                      ? classes.tweetnumber_dark_mode
                      : classes.tweetnumber
                  }
                >
                  {/* {method}k */}
                  {totalSave.responseData > 1000
                    ? parseInt(totalSave.responseData / 1000) + "k"
                    : totalSave.responseData}
                </div>
              </Row>
              {savedTweets &&
                savedTweets.length >= 1 &&
                savedTweets.map((response) => {
                  let value = response.text;
                  // console.log('res--',value)
                  // const colonIndex = value.indexOf(":");
                  const atIndex = value.indexOf("@");
                  let handler = value.slice(atIndex, 10);
                  let tweetTextMessage = value.split(":")[1];
                  let str = response.addedOn;
                  let timeFormat = moment(str);
                  let time = timeFormat.format("LT");
                  // console.log("numberrrrrrrrrrrrrrrr",tweetsInDb);

                  function shortenTrend(
                    b,
                    amountL = 10,
                    amountR = 3,
                    stars = 3
                  ) {
                    return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
                      // b.length - 3,
                      b.length
                    )}`;
                  }
                  function shortenValue(b, amountL = 80, stars = 3) {
                    return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
                      // b.length - 3,
                      b.length
                    )}`;
                  }
                  return (
                    <>
                      <hr
                        className={
                          props.dark
                            ? classes.hr_page_dark_mode
                            : classes.hr_page
                        }
                      />
                      <Row>
                        <Typography
                          variant="h6"
                          className={
                            props.dark ? classes.name_dark_mode : classes.name
                          }
                        >
                          {/* {response.blockNumber} */}
                        </Typography>
                        <Paper
                          className={
                            props.dark ? classes.time_dark_mode : classes.time
                          }
                        >
                          {time}
                        </Paper>
                      </Row>

                      <Row>
                        <Column>
                          <Typography className={classes.email}>
                          {handler.length>0
                              ? shortenTrend(handler)
                              : shortenTrend(method)}
                          </Typography>
                          <ThemeProvider theme={theme}>
                            <Paper
                              noWrap
                              className={
                                props.dark
                                  ? classes.content_dark_mode
                                  : classes.content
                              }
                              gutterBottom
                            >
                                 {shortenValue(value)}
                              {/* {shortenValue(tweetTextMessage)} */}
                            </Paper>
                          </ThemeProvider>
                        </Column>
                      </Row>
                    </>
                  );
                })}
            </Column>
            <hr
              className={
                props.dark ? classes.hr_page_dark_mode : classes.hr_page
              }
            />
            <br />
            <br />
            <br />
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}