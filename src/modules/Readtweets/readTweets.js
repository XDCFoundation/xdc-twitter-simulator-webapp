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
import BigNumber from "bignumber.js";

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
    width: "100%",
    color: theme.palette.text.secondary,
    marginTop: "-5.1%",
    marginRight: "1.5%",
    height: "auto",
    boxShadow: "0px 2px 30px #0000001A",
    border: "1px solid #E3E7EB",
    borderRadius: "5px",
    opacity: 1,
    // height: '784px',
  },

  paper_dark_mode: {
    color: theme.palette.text.secondary,
    marginTop: "-5%",
    marginRight: "1.5%",
    backgroundColor: "#191d43",
    color: "white",
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
    right: "4.5%",
    fontSize: "26px",
    marginTop: "17px",
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
    fontSize: "26px",
    marginTop: "17px",
    fontWeight: "600",
    marginRight: "17px",
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
    lineHeight: "1.2",
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
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
    backgroundColor: "#191d43",
    marginBottom: "5px",
  },

  content: {
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
    color: "#09184b",
    marginLeft: "18px",
    marginRight: "18px",
  },

  content_dark_mode: {
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
    color: "white",
    backgroundColor: "#191d43",
    marginLeft: "18px",
    marginRight: "18px",
  },

  time: {
    color: "#8F8FAF",
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
    marginBottom: "5px",
    marginLeft: "18px",
  },

  time_dark_mode: {
    color: "#8F8FAF",
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
    backgroundColor: "#191d43",
    marginBottom: "5px",
    marginLeft: "18px",
  },

  email: {
    fontSize: "14px",
    color: "#8F8FAF",
    // whiteSpace: "nowrap",
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
    fontFamily: "Raleway",
    fontSize: "22px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
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
    opacity: 0.4,
    backgroundColor: "#8290a4",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  readTweetContainer: {
    marginTop: "0px",
    // backgroundColor: "#E3E7EB",
  },
  readTweetContainer_dark_mode: {
    marginTop: "0px",
    boxShadow: "0 2px 15px 0 rgba(0, 0, 0, 0.1)",
  },
  "@media (min-width: 0px) and (max-width: 766px)": {
    readTweetContainer: {
      marginTop: "30px",
    },
  },
}));

export default function ReadTweets(props) {
  const classes = useStyles();

  const [authors, setAuthors] = useState({});

  // let handle = props?.author
  // console.log('so--',props?.tweetreadData)

  useEffect(() => {
    userHandle();
  }, [props?.author]);

  useEffect(() => {
    // console.log('fire--',props.tweetData);
  }, [props.tweetreadData]);

  async function userHandle() {
    if (props?.author && props?.author?.length >= 1) {
      setAuthors(props?.author);
    }
    // console.log('pr--', props?.author)
  }

  // let method = authors?.username
  // console.log('method------', method)

  let text = props.tweetreadData[0]?.text;
  let animationclass = props.animationTime?.[text];
  let textanimationClass = props.textclass?.[text];
  let handleanimationclass = props.handleclass?.[text];
  let blockDarkanimationclass = props.blockDarkclass?.[text];
  let textdarkanimationClass = props.textDarkclass?.[text];
  // console.log('texxx--',animationclass)

  return (
    <Grid Container spacing={3}>
      <Grid item xs={12}>
        <div
          className={
            props.dark
              ? classes.readTweetContainer_dark_mode
              : classes.readTweetContainer
          }
        >
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
                  Read Tweets
                  <Tippy
                    placement={"right"}
                    theme={"light"}
                    maxWidth={"none"}
                    content={
                      <span className="tippyBlockstyle">
                        Number of read tweets by d-app platform
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
                  {/* {props.tweetreadCount.tweetsInDb > 1000
                    ? parseInt(props.tweetreadCount.tweetsInDb / 1000) + "k"
                    : props.tweetreadCount.tweetsInDb} */}
                </Paper>
              </Row>
              {props?.tweetreadData &&
                props?.tweetreadData.length >= 1 &&
                props?.tweetreadData.map((response, index) => {
                  let textVal =  response?.text || 0
                  let value = textVal?.replaceAll(/undefined/g, '') || 0
                  let author = response?.authorId || 0;
                  let authorName = response?.name?.slice(0, 10) || 0;

                  let str = response.addedOn;
                  let timeFormat = moment(str);
                  let time = timeFormat?.format("LT") || 0;

                  function shortenValue(b, amountL = 80, stars = 1) {
                    return `${
                      b.length > 0 ? b?.slice(0, amountL) : "-"
                    }${""?.repeat(stars)}${b?.slice(
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
                          {/* {authorName.length > 0 ? authorName : 'undefined'} */}
                        </Typography>
                        <Paper
                          className={
                            props.dark
                              ? blockDarkanimationclass
                                ? blockDarkanimationclass
                                : classes.time_dark_mode
                              : animationclass
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
                              handleanimationclass
                                ? handleanimationclass
                                : classes.email
                            }
                          >
                            {/* {authorName.length > 0 ? authorName : author} */}
                            {/* {author}<br/> */}
                            {authors?.length > 0 ? "@" + authors : author}
                          </Typography>

                          <ThemeProvider theme={theme}>
                            <Paper
                              className={
                                props.dark
                                  ? textdarkanimationClass
                                    ? textdarkanimationClass
                                    : classes.content_dark_mode
                                  : textanimationClass
                                  ? textanimationClass
                                  : classes.content
                              }
                              // noWrap
                              // gutterBottom
                            >
                              <div className="wordTruncating">
                                {value.length > 0
                                  ? shortenValue(value) || "-"
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
