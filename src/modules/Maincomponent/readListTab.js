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
    marginTop: "-13px",
    marginRight: "17px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",
  },
  "@media (min-width: 601px) and (max-width: 766px)": {
    tweetnumber: {
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
    },
  },
  tweetnumber_dark_mode: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "4.5%",
    fontSize: "26px",
    marginTop: "-27px",
    fontWeight: "600",
    marginRight: "17px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
  },
  "@media (min-width: 500px) and (max-width: 599px)": {
    tweetnumber_dark_mode: {
      whiteSpace: "nowrap",
      boxShadow: "none",
      align: "justify",
      position: "absolute",
      right: "4.5%",
      fontSize: "26px",
      marginTop: "-17px",
      fontWeight: "600",
      marginRight: "17px",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.17",
      letterSpacing: "normal",
      textAlign: "left",
      color: "white",
    },
  },
  "@media (min-width: 600px) and (max-width: 766px)": {
    tweetnumber_dark_mode: {
      whiteSpace: "nowrap",
      boxShadow: "none",
      align: "justify",
      position: "absolute",
      right: "4.5%",
      fontSize: "26px",
      marginTop: "-12px",
      fontWeight: "600",
      marginRight: "17px",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.17",
      letterSpacing: "normal",
      textAlign: "left",
      color: "white",
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
  const [readtweets, setReadTweets] = useState([]);
  const [totaltweets, setTotalTweets] = useState([]);
  const [authors, setAuthors] = useState({});

  useEffect(() => {
    fetchTweets();
  }, []);
  const fetchTweets = () => {
    axios
      .get(process.env.REACT_APP_BASE_URL_TWITTER+process.env.REACT_APP_READ_TWEET)

      .then((res) => {
        let tweetResponse;
        let alltweets;
        if (
          !res ||
          !res.data ||
          !res.data.responseData ||
          res.data.responseData.length <= 0
        )
          tweetResponse = [];
        else tweetResponse = res.data.responseData[0];
        alltweets = res.data.responseData[1];
        setReadTweets(tweetResponse);

        setTotalTweets(alltweets);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let method = "@user";

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
                  {/* {method}k */}
                  {totaltweets.tweetsInDb > 1000
                    ? parseInt(totaltweets.tweetsInDb / 1000) + "k"
                    : totaltweets.tweetsInDb}
                </div>
              </Row>
              {readtweets &&
                readtweets.length >= 1 &&
                readtweets.map((response) => {
                  let value = response.text;
                  let author = response.name;
                  let handle = author?.slice(0,author?.length).replace(/\s/g, "").toLowerCase()
                  // const atIndex = value?.indexOf("@");
                  // let handler = value?.slice(atIndex, 10);
                  // console.log('auuthorId----', author)
                  // const colonIndex = value.indexOf(":");
                  // const atIndex = value.indexOf("@");
                  // let trending = author.slice(atIndex, 10);

                  // console.log('handle----',handle)
                  let tweetText = value.split(":")[1];
                  let str = response.addedOn;
                  let timeFormat = moment(str);
                  let time = timeFormat.format("LT");

                  // function shortenTrend(
                  //   b,
                  //   amountL = 10,
                  //   amountR = 3,
                  //   stars = 3
                  // ) {
                  //   return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
                  //     // b.length - 3,
                  //     b.length
                  //   )}`;
                  // }
                  function shortenValue(b, amountL = 50, amountR = 3, stars = 3) {
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
                          {/* {author.length>0 ? author : 'undefined'} */}
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
                        {handle.length >0 ? '@'+handle : 'undefined'}
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
                              {shortenValue(value).length > 0 ? shortenValue(value) : 'undefined'}
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
