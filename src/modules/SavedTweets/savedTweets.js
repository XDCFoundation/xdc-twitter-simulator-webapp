import React, { useState, useEffect } from "react";
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

const IconImg = styled.img`
  margin-left: 10px;
  height: 14px;
  width: 14px;
  margin-top: 8px;
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
    border: "1px solid #E3E7EB",
    borderRadius: "5px",
    opacity: 1,
    height: "auto",
    boxShadow: "0px 2px 30px #0000001A",
  },

  paper_dark_mode: {
    color: theme.palette.text.secondary,
    marginTop: "-5%",
    // marginLeft: "3.6%",
    backgroundColor: "#191d43",
    color: "d6d6d6",
    height: "auto",
    borderRadius: "5px",
    border: "solid 1px #343965",
    // height: '784px',
  },

  tweetnumber: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "52.5%",
    fontSize: "42px",
    padding: "12px 0 11px 0",
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
    fontSize: "42px",
    padding: "12px 0 11px 0",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#d6d6d6",
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
    fontSize: "14px",
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
    fontSize: "14px",
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
    fontSize: "14px",
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
    fontSize: "22px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",
    marginTop: "4%",
    marginLeft: "18px",
    whiteSpace: "noWrap",
  },
  readtweet_dark_mode: {
    display: "flex",
    fontFamily: "Raleway",
    fontSize: "22px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#d6d6d6",
    marginTop: "4%",
    marginLeft: "18px",
    whiteSpace: "noWrap",
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
    color: "#d6d6d6",
  },
  savedTweetConatiner: {
    marginTop: "0px",
    marginLeft: "3%",
  },
  "@media (min-width: 0px) and (max-width: 767px)": {
    savedTweetConatiner: {
      marginTop: "30px",
      marginLeft: "-24px",
    },
  },
  "@media (min-width: 768px) and (max-width: 1350px)": {
    time: {
      right: "55.5%",
    },
    time_dark_mode: {
      right: "55.5%",
    },
    tweetnumber: {
      right: "54.5%",
      padding: "9px 0 11px 0",
    },
    tweetnumber_dark_mode: {
      right: "54.5%",
      padding: "9px 0 11px 0",
    },
  },
}));

export default function SavedTweets(props) {
  const classes = useStyles();
  const [authors, setAuthors] = useState({});

  let text = props.tweetData[0]?.text;
  let animationclass = props.animationTime?.[text];
  let textanimationClass = props.textclass?.[text];
  let handleanimationclass = props.handleclass?.[text];
  let blockDarkanimationclass = props.blockDarkclass?.[text];
  let textdarkanimationClass = props.textDarkclass?.[text];

  let a =
    props?.tweetData?.sort((a, b) => b.createdAt.localeCompare(a.createdAt)) ||
    "";

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
                // variant="h5"
                // style={{ whiteSpace: "nowrap" }}
                >
                  Saved Tweets
                  <Tippy
                    placement={"right"}
                    theme={"light"}
                    maxWidth={"none"}
                    content={
                      <span className="tippyBlockstyle">
                        List of tweets saved on the dApp
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
                  {props?.savedCount[0]
                    ? props?.savedCount[0] > 1000
                      ? parseInt(props?.savedCount[0] / 1000) + "k"
                      : props.savedCount[0]
                    : props?.tweetCount?.blockchainTweetCount > 1000
                      ? parseInt(props?.tweetCount?.blockchainTweetCount / 1000) +
                      "k"
                      : props?.tweetCount?.blockchainTweetCount}
                </Paper>
              </Row>
              {props?.tweetData &&
                props?.tweetData.length >= 1 &&
                props?.tweetData.map((response, index) => {
                  let textVal = response?.text || 0;
                  // let value = textVal?.replaceAll(/undefined/g, '') || 0
                  let author = response?.authorID || 0;
                  // let createTime = Number(response?.createdAt || 0);
                  let createTime = Number(response?.modifiedOn || 0);
                  let str = response.addedOn;
                  let timeFormat = moment(createTime);
                  let time = timeFormat?.format("LT") || 0;

                  // let textAnimation = response?.text
                  function shortenValue(b, amountL = 80, stars = 1) {
                    return `${b?.slice(0, amountL)}${""?.repeat(
                      stars
                    )}${b?.slice(
                      // b.length - 3,
                      b?.length || 0
                    )}`;
                  }

                  return (
                    <React.Fragment>
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
                            props.dark
                              ? index == 0 && blockDarkanimationclass
                                ? blockDarkanimationclass
                                : classes.time_dark_mode
                              : index == 0 && animationclass
                                ? animationclass
                                : classes.time
                          }
                        >
                          {time ? time : "-"}
                        </Paper>
                      </Row>

                      <Row>
                        <Column>
                          <Typography
                            className={
                              index == 0 && handleanimationclass
                                ? handleanimationclass
                                : classes.email
                            }
                          >
                            {author || ""}
                            {/* {authors?.length > 0 ? "@" + authors : author} */}
                          </Typography>
                          <ThemeProvider theme={theme}>
                            <Paper
                              noWrap
                              className={
                                props.dark
                                  ? index == 0 && textdarkanimationClass
                                    ? textdarkanimationClass
                                    : classes.content_dark_mode
                                  : index == 0 && textanimationClass
                                    ? textanimationClass
                                    : classes.content
                              }
                            //  gutterBottom
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
                    </React.Fragment>
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
