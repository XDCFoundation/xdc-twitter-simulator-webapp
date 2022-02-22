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
    fontSize: "22px",
    marginTop: "-12px",
    marginRight: "17px",
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
    right: "4.5%",
    fontSize: "22px",
    marginTop: "-12px",
    marginRight: "17px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#ffffff",
  },
  "@media (min-width: 500px) and (max-width: 766px)": {
    tweetnumber: {
      fontSize: "22px",
      marginTop: "5px",
      marginRight: "17px",
    },
    tweetnumber_dark_mode: {
      fontSize: "22px",
      marginTop: "5px",
      marginRight: "17px",
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
    width: "104%",
    height: "0px",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },

  hr_page_dark_mode: {
    width: "104%",
    height: "0px",
    marginLeft: "-15px",
    backgroundColor: "#C0C0C0",
    marginTop: "0.7rem",
    marginBottom: "0.7rem",
    opacity: 0.2,
  },

  "@media (max-width: 767px)": {
    hr_page_dark_mode: {
      backgroundColor: "#C0C0C0",
    },
  },

  "@media (min-width: 360px) and (max-width: 440px)": {
    hr_page: {
      width: "107%",
    },
    hr_page_dark_mode: {
      width: "107%",
    },
  },

  readTweetContainer: {
    marginTop: "0px",
  },
  "@media (min-width: 0px) and (max-width: 766px)": {
    readTweetContainer: {
      marginTop: "30px",
    },
  },
  "@media (min-width: 768px) and (max-width: 1024px)": {
    readTweetContainer: {
      marginTop: "54px",
    },
  },
}));

export default function ReadTweets(props) {
  const classes = useStyles();

  useEffect(() => {
  
  }, [props?.savetweetData, props?.saveCountData]);

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
                <div
                  variant="h5"
                  className={
                    props.dark
                      ? classes.tweetnumber_dark_mode
                      : classes.tweetnumber
                  }
                >
                  {props?.saveCountData[0]
                    ? props?.saveCountData[0] > 1000
                      ? parseInt(props?.saveCountData[0] / 1000) + "k"
                      : props?.saveCountData[0]
                    : props?.saveTweetCount?.blockchainTweetCount > 1000
                    ? parseInt(
                        props?.saveTweetCount?.blockchainTweetCount / 1000
                      ) + "k"
                    : props?.saveTweetCount?.blockchainTweetCount}
                </div>
              </Row>
              {props?.savetweetData &&
                props?.savetweetData.length >= 1 &&
                props?.savetweetData.map((response, index) => {
                  let textVal = response?.text || 0;
                  // let value = textVal?.replaceAll(/undefined/g, "") || 0;
                  let author = response?.authorID || 0;
                  let createTime = Number(response?.createdAt || 0);
                  let str = response.addedOn;
                  let timeFormat = moment(createTime);
                  let time = timeFormat?.format("LT") || 0;

                  function shortenValue(b, amountL = 80, stars = 1) {
                    return `${b?.slice(0, amountL)}${" "?.repeat(
                      stars
                    )}${b?.slice(
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
                      <Row key={index}>
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
                          {time ? time : "-"}
                        </Paper>
                      </Row>

                      <Row>
                        <Column>
                          <Typography className={classes.email}>
                            {author || ""}
                          </Typography>
                          <ThemeProvider theme={theme}>
                            <Paper
                              noWrap
                              className={
                                props.dark
                                  ? classes.content_dark_mode
                                  : classes.content
                              }
                              // gutterBottom
                            >
                               <div className="wordTruncating">
                                {textVal.length > 0
                                  ? shortenValue(textVal) || "-"
                                  : "-"}
                              </div>
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
