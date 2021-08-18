import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
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
  margin-top: 3px;
`;
const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: "22px",
    whiteSpace: "nowrap",
    fontFamily: "Raleway sans-serif !important",
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    marginTop: "-7%",
    // marginLeft: "3.6%",
    height: "auto",
    // height: '784px',
  },

  paper_dark_mode: {
    color: theme.palette.text.secondary,
    marginTop: "-7%",
    // marginLeft: "3.6%",
    backgroundColor: "#191d43",
    color: "white",
    height: "auto",
    // height: '784px',
  },

  tweetnumber: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "52.5%",
    fontSize: "26px",
    marginTop: "17px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",
  },
  tweetnumber_dark_mode: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "52.5%",
    fontSize: "26px",
    marginTop: "17px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
    backgroundColor: "#191d43",
  },
  row: {
    marginBottom: "15px",
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
    letterSpacing: "0px",
    textAlign: "left",
    color: "#09184b",
    marginBottom: "5px",
  },
  name_dark_mode: {
    fontSize: "11px",
    whiteSpace: "nowrap",
    fontFamily: "Raleway",
    marginLeft: "18px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "0px",
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
    // marginBottom:"5px",
    // border: "solid 1px #e8e8e8",
    fontFamily: "Raleway",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "0px",
    textAlign: "left",
    color: "#09184b",
    marginLeft: "18px",
    marginRight: "18px",
  },
  content_dark_mode: {
    fontSize: "11px",
    boxShadow: "none",
    border: "none",
    // marginBottom:"5px",
    // border: "solid 1px #e8e8e8",
    fontFamily: "Raleway",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "0px",
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
    right: "52.5%",
    // fontFamily: "Raleway",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.15",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#8290a4",
    marginBottom: "5px",
    marginLeft: "18px",
  },

  time_dark_mode: {
    // color: "#8290a4",
    boxShadow: "none",
    position: "absolute",
    right: "52.5%",
    // fontFamily: "Raleway",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.15",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#8290a4",
    backgroundColor: "#191d43",
    marginBottom: "5px",
    marginLeft: "18px",
  },
  email: {
    fontSize: "11px",
    color: "#8290a4",
    whiteSpace: "nowrap",
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
    display: "flex",
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
    display: "flex",
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
  savedTweetConatiner: {
    marginTop: "0px",
    marginLeft:"3%",
    // bordeRradius: "12px",
    boxShadow: "0 2px 15px 0 rgba(0, 0, 0, 0.1)",
    // border: "solid 1px #e3e7eb",
    backgroundColor: "#ffffff",
  },
  "@media (min-width: 0px) and (max-width: 766px)": {
    savedTweetConatiner: {
      marginTop: "30px",
      marginLeft: "-24px",
    },
  },
}));

export default function SavedTweets(props) {
  const classes = useStyles();

  const [savedTweets, setSavedTweets] = useState([]);
  const [totalSaveTweet, setTotalSaveTweet] = useState([]);
  // const [totalSave, setTotalSave] = useState([]);

  useEffect(() => {
    fetchSavedTweets();
  }, []);

  // useEffect(() => {
  //   fetchTotalTweets();
  // }, [])

  //For save-tweets

  const fetchSavedTweets = () => {
    axios
      .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVED_TWEET)

      .then((res) => {
        let tweetResponse;
        let allSaveTweets;
        if (
          !res ||
          !res.data ||
          !res.data.responseData ||
          res.data.responseData.length <= 0
        )
          tweetResponse = [];
        else tweetResponse = res.data.responseData[0];
        allSaveTweets = res.data.responseData[1];
        setSavedTweets(tweetResponse);

        setTotalSaveTweet(allSaveTweets)
        // console.log("saveTweets------", tweetResponse);
        // console.log("saveTweets------", allSaveTweets);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //For total Count--->

  // const fetchTotalTweets = () => {
  //   axios
  //     .get(process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVED_TWEET_COUNT)
  //     .then((res) => {
  //       // console.log('total-Saved-Tweet-Count-------', res.data)
  //       setTotalSave(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  let method = "...";
  //   let save = totalSave.responseData
  // console.log('mysave---',save)

  return (
    <Grid Container spacing={3}>
      <Grid item xs={12}>
        <div className={classes.savedTweetConatiner}>
          <Paper
            className={props.dark ? classes.paper_dark_mode : classes.paper}
            elevation={0}
          >
            <Column>
              <Row className={classes.row}>
                <Typography
                  className={
                    props.dark ? classes.readtweet_dark_mode : classes.readtweet
                  }
                  variant="h5"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Saved Tweets
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
                        Number of tweets saved in d-app platform
                      </span>
                    }
                  >
                    <IconImg src="../../images/ic.png" />
                  </Tippy>
                </Typography>

                <Paper
                  variant="h5"
                  className={
                    props.dark
                      ? classes.tweetnumber_dark_mode
                      : classes.tweetnumber
                  }
                >
                  {totalSaveTweet.tweetsInDb > 1000
                    ? parseInt(totalSaveTweet.tweetsInDb / 1000) + "k"
                    : totalSaveTweet.tweetsInDb}
                </Paper>
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
                            {handler.length > 0
                              ? shortenTrend(handler)
                              : method}
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
