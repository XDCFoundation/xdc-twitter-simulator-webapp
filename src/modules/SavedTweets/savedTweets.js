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
import { Socket } from "socket.io-client";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";


// console.log('saved---',this.props.Socket)

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
    marginTop: "-5%",
    border: '1px solid #E3E7EB',
    borderRadius: '5px',
    opacity: 1,
    height: "auto",
    boxShadow: '0px 2px 30px #0000001A',
  },

  paper_dark_mode: {
    color: theme.palette.text.secondary,
    marginTop: "-5%",
    // marginLeft: "3.6%",
    backgroundColor: "#191d43",
    color: "white",
    height: "auto",
    borderRadius: '5px',
    border: 'solid 1px #343965',
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
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.15",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#8F8FAF",
    marginBottom: "5px",
    marginLeft: "18px",
  },

  time_dark_mode: {
    boxShadow: "none",
    position: "absolute",
    right: "52.5%",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.15",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#8F8FAF",
    backgroundColor: "#191d43",
    marginBottom: "5px",
    marginLeft: "18px",
  },
  email: {
    fontSize: "11px",
    color: "#8F8FAF",
    whiteSpace: "nowrap",
    fontFamily: "Raleway",
    marginBottom: "5px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
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
    opacity: 0.4,
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  savedTweetConatiner: {
    marginTop: "0px",
    marginLeft: "3%",
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

  // console.log('saveprop2--', props.savedCount[0])
  // console.log('saveprop2--', props.tweetCount.totalTweetCount)

  let text = props.tweetData[0]?.text
  let animationclass = props.animationTime?.[text]
  let textanimationClass = props.textclass?.[text]
  let handleanimationclass = props.handleclass?.[text]
  let blockDarkanimationclass = props.blockDarkclass?.[text]
  let textdarkanimationClass = props.textDarkclass?.[text]
  // console.log('texx--',textdarkanimationClass)

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
                  {props.savedCount[0] ? (props.savedCount[0] > 1000
                    ? parseInt(props.savedCount[0] / 1000) + "k"
                    : props.savedCount[0]) :
                    (props.tweetCount.totalTweetCount) > 1000
                      ? parseInt(props.tweetCount.totalTweetCount / 1000) + "k"
                      : props.tweetCount.totalTweetCount}
                </Paper>
              </Row>
              {props.tweetData &&
                props.tweetData.length >= 1 &&
                props.tweetData.map((response) => {
                  let value = response?.text || 0;
                  let author = response?.authorID || 0;
                  let str = response.addedOn;
                  let timeFormat = moment(str);
                  let time = timeFormat?.format("LT") || 0;

                  function shortenValue(b, amountL = 80, stars = 3) {
                    return `${b?.slice(0, amountL)}${".".repeat(stars)}${b?.slice(
                      // b.length - 3,
                      b?.length || 0
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
                        <Paper className=
                          {props.dark ? (blockDarkanimationclass ? blockDarkanimationclass : classes.time_dark_mode) :
                            (animationclass ? animationclass : classes.time)}
                        >
                          {time}
                        </Paper>
                      </Row>

                      <Row>
                        <Column>
                          <Typography className={handleanimationclass ? handleanimationclass : classes.email}>
                            {author}
                          </Typography>
                          <ThemeProvider theme={theme}>
                            <Paper
                              noWrap
                              className={props.dark ?
                                (textdarkanimationClass ? textdarkanimationClass : classes.content_dark_mode) :
                                (textanimationClass ? textanimationClass : classes.content)}

                              gutterBottom
                            >
                              {shortenValue(value) || 0}
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
