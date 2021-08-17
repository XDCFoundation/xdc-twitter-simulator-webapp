import React, { useState, useEffect, useLocation, useHistory } from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MyResponsiveLine from "../Maincomponent/writingData";
import ReadingData from "../Maincomponent/readingData";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "../styles/App.css";
import axios from 'axios';
import moment from 'moment';

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { useParams } from "react-router";


const Text = styled.div`
  font-weight: 900;
  margin-bottom: 55px;
  margin-left: 3%;
  fontfamily: "Raleway ,sans-serif !important";

  /////////////////////new code

  // const IconImg = styled.img
`;

const theme = createMuiTheme({

});

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#f5f6f9",
  },
  main_dark_mode: {
    backgroundColor: '#0d0e2d'
  },

  paper: {
    color: theme.palette.text.secondary,
    marginTop: "-7%",
    marginLeft: "3.6%",
  },
  paper_dark_mode: {
    color: theme.palette.text.secondary,
    marginTop: "-7%",
    marginLeft: "3.6%",
    backgroundColor: "#191d43",
    color: "white",
  },
  tweetnumber: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "52%",
    fontSize: "26px",
    marginTop: "12px",
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
    right: "52%",
    fontSize: "26px",
    marginTop: "12px",
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
    letterSpacing: "0.6px",
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
    letterSpacing: "0.6px",
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
    letterSpacing: "0.4px",
    textAlign: "left",
    color: "#09184b",
    marginLeft: "18px",
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
    letterSpacing: "0.4px",
    textAlign: "left",
    color: "white",
    backgroundColor: "#191d43",
    marginLeft: "18px",
  },
  time: {
    color: "#8290a4",
    boxShadow: "none",
    position: "absolute",
    right: "44%",
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
    boxShadow: "none",
    position: "absolute",
    right: "44%",
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
  dashboard: {},
  savespeed: {
    marginTop: "5px",
    fontSize: "1rem",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "0.82",
    letterSpacing: " normal",
    textAlign: "left",
    color: "#3366ff",
  },
  savingSpeed: {
    fontFamily: "Raleway ,sans-serif !important",
    fontSize: "18px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#d6d6d6",
  },
  writing_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "7.5%",
    marginTop: "-30px",
    padding: "20px 14px 29.6px 26px",
  },
  writing_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    marginTop: "-30px",
    marginLeft: "7.5%",
    padding: "20px 14px 29.6px 26px",
  },
  reading_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "7.5%",
    marginTop: "-30px",
    padding: "20px 14px 29.6px 26px",
  },
  image: {
    width: "25px",
    marginTop: "6%",
    marginLeft: "54%",
  },
  reading_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    marginTop: "-30px",
    marginLeft: "7.5%",
    padding: "20px 14px 29.6px 26px",
  },
  dashboardDiv: {
    display: "flex",
    flexDirection: "row",
    borderRadius: "6px",
    backgroundColor: "#222864",
    width: "177px",
    height: "49px",
    padding: "14px 25.1px 14px 25px",
  },
  dashboard: {
    fontSize: "15px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.17,
    letterSpacing: "normal",
    textAlign: "left",
    color: "#ffffff",
  },
  gridcontainer: {
    width: "100%",
    paddingLeft: "10%",
    paddingTop: "6%",
    paddingRight: "5%",
    paddingBottom: "6%",
  },
}));

export default function Searchlist(props) {
  const classes = useStyles();

  // console.log('props---', props?.list)
  // console.log('props---', props?.tps)

  const [basic, setBasic] = useState({})
  const [advance, setAdvance] = useState({})
  // console.log('prop..',props?.locations)

  useEffect(() => {
    Basicsearch();
    Advancesearch();
  }, []);
  const Basicsearch = () => {

    axios
      .get(
        "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/basic-search?keyword=" + props?.locations
      )
      .then((res) => {
        setBasic(res.data.responseData.responseData);
        // console.log('mysearch-------', res.data.responseData.responseData)
        // console.log('my url===',url)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const Advancesearch = () => {

    axios
      .get(
        "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/advance-search?name=" + props?.username + "&keyword=" + props?.locations + "&hash=" + props?.hashname
      )
      .then((res) => {
        setAdvance(res.data.responseData.responseData);
        // console.log('myAdvancesearch-------', res.data.responseData.responseData)
        // console.log('my url===',url)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // let method = '@user'

  return (
    <div className={props.dark ? classes.main_dark_mode : classes.main}>
      <div className={classes.root}>
        <Grid xs={2}>
          <img
            style={{
              width: "5%",
            }}
          />
        </Grid>
        <div className="empty-div">
          <div className="img-parent">
            <img className="home-image" src="/images/home.svg" />
          </div>
          <div className="dashboard-name">
            <a style={{ color: 'white', cursor: 'pointer', textDecoration: 'none' }} href='/'>Dashboard</a>
          </div>
        </div>

        <Grid container spacing={3} className={classes.gridcontainer}>
          <Grid item xs={7}>
            <Paper
              className={props.dark ? classes.paper_dark_mode : classes.paper}
              elevation={0}
            >
              <Column>
                <Row className={classes.row}>
                  <Typography
                    className={
                      props.dark
                        ? classes.readtweet_dark_mode
                        : classes.readtweet
                    }
                    variant="h5"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Search Results
                  </Typography>
                </Row>
                {basic &&
                  basic.length >= 1 &&
                  basic.map((response) => {
                    let value = response.text
                    // console.log('resp--',userId)
                    const colonIndex = value.indexOf(":");
                    const atIndex = value.indexOf("@");
                    let handler = value.slice(atIndex, colonIndex);
                    let tweetTextMessage = value.split(":")[1];
                    let str = response.addedOn;
                    let timeFormat = moment(str);
                    let time = timeFormat.format("LT");

                    function shortenTrend(b, amountL = 10, amountR = 3, stars = 3) {
                      return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
                        // b.length - 3,
                        b.length
                      )}`;
                    }
                    function shortenValue(b, amountL = 100, stars = 3) {
                      return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
                        // b.length - 3,
                        b.length
                      )}`;
                    }

                    let userId = response.tweetId
                    // console.log('myuser--',userId)

                    return (
                      <>
                        <hr
                          className={
                            props.dark ? classes.hr_page_dark_mode : classes.hr_page
                          }
                        />
                        <a style={{ textDecoration: 'none' }} href={'/archive/' + userId}>
                          <Row>

                            <Typography
                              variant="h6"
                              className={
                                props.dark ? classes.name_dark_mode : classes.name
                              }
                            >
                              {/* Lisa ray */}
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
                                {shortenTrend(handler)}
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
                                </Paper>
                              </ThemeProvider>
                            </Column>

                          </Row>
                        </a>
                      </>
                    );
                  })}

                {advance &&
                  advance.length >= 1 &&
                  advance.map((response) => {
                    let value = response.text;
                    let author = response.name;
                    let handle = author?.slice(0, author?.length).replace(/\s/g, "").toLowerCase()
                    // console.log('resp2--', author)
                    // console.log('valuuuu', handle)
                    // const colonIndex = value.indexOf(":");
                    // const atIndex = value.indexOf("@");
                    // let handler = value.slice(atIndex, colonIndex);
                    let tweetTextMessage = value.split(":")[1];
                    // console.log('tt', tweetTextMessage)
                    let str = response.addedOn;
                    let timeFormat = moment(str);
                    let time = timeFormat.format("LT");
                    // let hashtags = value.split('#')
                    // console.log('hash---',hashtags)
                    // let tweetTextMessage=value.text; 


                    // function shortenTrend(b, amountL = 10, amountR = 3, stars = 3) {
                    //   return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
                    //     // b.length - 3,
                    //     b.length
                    //   )}`;
                    // }
                    function shortenValue(b, amountL = 80, stars = 3) {
                      return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
                        // b.length - 3,
                        b.length
                      )}`;
                    }

                    let textId = response.id 
                    // console.log('texttt--',textId)
                    return (
                      <>
                        <hr
                          className={
                            props.dark ? classes.hr_page_dark_mode : classes.hr_page
                          }
                        />
                        <a style={{ textDecoration: 'none' }} href={'/archive/' + textId}>
                          <Row>
                            <Typography
                              variant="h6"
                              className={
                                props.dark ? classes.name_dark_mode : classes.name
                              }
                            >

                              {author.length > 0 ? author : 'undefined'}
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
                                {handle.length > 0 ? '@' + handle : 'undefined'}
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
                                  {shortenValue(value)?.length > 0 ? shortenValue(value) : 'undefined'}
                                </Paper>
                              </ThemeProvider>
                            </Column>
                          </Row>
                        </a>
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
          </Grid>

          <Grid item xs={4}>
            <Grid item xs={12} className={classes.grid}>
              <Text
                className={
                  props.dark ? "writing-data-one-dark-mode" : "writing-data-one"
                }
              >
                Writing Data
              </Text>
              <Paper elevation={0}
                className={
                  props.dark
                    ? classes.writing_paper_dark_mode
                    : classes.writing_paper
                }
              >
                <div
                  className={
                    props.dark ? "savingSpeed-one-dark-mode" : "savingSpeed-one"
                  }
                >
                  Saving Speed
                </div>
                <div
                  className={props.dark ? "saveSpeed-dark-mode" : "saveSpeed"}
                >
                  {isNaN(props?.tps) ? "-" : props?.tps} / sec
                </div>
                <div

                >
                  {" "}
                  <span className="hover-data">  <MyResponsiveLine /> </span>

                </div>
              </Paper>
            </Grid>

            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={12} className={classes.grid2}>
                  <br /> <br />
                  <Text
                    className={
                      props.dark
                        ? "reading-data-one-dark-mode"
                        : "reading-data-one"
                    }
                  >
                    Reading Data
                  </Text>
                  <Paper elevation={0}
                    className={
                      props.dark
                        ? classes.reading_paper_dark_mode
                        : classes.reading_paper
                    }
                  >
                    <div
                      className={
                        props.dark ? "savingSpeed-dark-mode" : "savingSpeed"
                      }
                    >
                      Reading Tweet
                    </div>
                    <div
                      className={props.dark ? "readSpeed-dark-mode" : "readSpeed"}
                    >
                      {(props?.list)?.length > 0 ? props?.list : ' - '}/sec
                    </div>
                    <span className="hover-data">  <ReadingData /> </span>

                  </Paper>
                </Grid>
              </Row>
            </Row>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
