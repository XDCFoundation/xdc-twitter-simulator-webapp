import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import Grid from "@material-ui/core/Grid";
import SavedTweets from "../SavedTweets";
import ReadTweets from "../Readtweets";
import MyResponsiveLine from "./writingData";
import ReadingData from "./readingData";
import MapChart from "./map";
import NodeChart from "./nodeMap";
import MapTabs from "./mapTabs";
import Tippy from "@tippyjs/react";
import moment from "moment";
import SavedRead from "./readSavedTweet";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "../styles/App.css";
import _ from "lodash";
import Utils from "../../utility";
import { TweetService } from "../../services/index";
import { dispatchAction } from "../../utility";
import { connect } from "react-redux";
import Speedometer from "./speedometer";
import DarkSpeedometer from "./darkSpeedometer";

const IconImg = styled.img`
  margin-left: 10px;
  height: 14px;
  width: 14px;
  margin-top: 8px;
  @media (min-width: 0px) and (max-width: 768px) {
    margin-top: 0px;
  }
  @media (min-width: 768px) and (max-width: 1464px) {
    margin-top: 6px;
  }
`;
const EyeImg = styled.img`
  margin-left: 10px;
  height: 14px;
  width: 14px;
  @media (min-width: 0px) and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const MobParentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TpsCount = styled.div`
  text-align: left;
  font: normal normal 600 18px/21px Raleway;
  letter-spacing: 0px;
  color: #09184b;
  opacity: 1;
  padding: 10px 0 0 13px;
`;
const TpsCountDark = styled.div`
  text-align: left;
  font: normal normal 600 18px/21px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  padding: 10px 0 0 13px;
`;
const ActiveNodes = styled.div`
  text-align: left;
  font: normal normal 600 18px/21px Raleway;
  color: #09184b;
  opacity: 1;
  padding: 10px 0 0 13px;
`;
const ActiveNodesDark = styled.div`
  text-align: left;
  font: normal normal 600 18px/21px Raleway;
  color: #ffffff;
  opacity: 1;
  padding: 10px 0 0 13px;
`;
const Span = styled.div`
  text-align: left;
  color: #09184b;
  opacity: 1;
  padding-top: 4px;
`;
const SpanDark = styled.div`
  text-align: left;
  color: #ffffff;
  opacity: 1;
  padding-top: 6px;
`;
const Meter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -18px;
  padding-bottom: 10px;
`;
const NodeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const FirstSection = styled.div`
  width: 50%;
  padding: 30px 0 0 18px;
`;
const SecondSection = styled.div`
  width: 50%;
`;
const SecondMainDiv = styled.div`
  padding: 49px 20px 0 20px;
`;
const ReloadImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#f5f6f9",
  },
  main_dark_mode: {
    backgroundColor: "#0d0e2d",
  },
  root: {
    flexGrow: 1,
    padding: "59px 68px 45px 65px",
  },
  root_dark_mode: {
    flexGrow: 1,
    padding: "59px 60px 45px 56px",
  },
  "@media (min-width: 768px) and (max-width: 1400px)": {
    root: {
      flexGrow: 1,
      padding: "59px 20px 45px 20px",
    },
    root_dark_mode: {
      flexGrow: 1,
      padding: "59px 15px 45px 11px",
    },
  },

  grid: {
    marginRight: "20px",
  },
  "@media (min-width: 0px) and (max-width: 767px)": {
    grid: {
      marginTop: "30px",
      marginRight: "20px",
      marginLeft: "20px",
    },
  },
  grid2: {
    marginTop: "50px",
    marginLeft: "3%",
    boxShadow: "0 2px 15px 0 rgba(0, 0, 0, 0.1)",
    backgroundColor: "#E3E7EB",
  },

  "@media (min-width: 1px) and (max-width: 767px)": {
    grid2: {
      marginTop: "50px",
      marginLeft: "0%",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  },

  grid3: {
    marginTop: "52px",
  },

  "@media (max-width: 767px)": {
    grid3: {
      marginTop: "1px",
    },
  },
  writing_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "6%",
    marginTop: "18px",
    padding: "20px 14px 29.6px 26px",
    // height: "95.5%",
    borderRadius: "10px",
    border: "1px solid #E3E7EB",
    boxShadow: "0px 2px 30px #0000001A",
  },
  writingPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "0px",
    marginTop: "18px",
    padding: "20px 14px 29.6px 26px",
  },
  writing_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    marginLeft: "6%",
    marginTop: "18px",
    padding: "20px 14px 29.6px 26px",
    borderRadius: "5px",
    boxShadow: "0px 2px 30px #0000001A",
    border: "solid 1px #343965",
  },
  writingPaperDarkMode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    marginLeft: "0px",
    marginTop: "18px",
    padding: "20px 14px 29.6px 26px",
    boxShadow: "0px 2px 30px #0000001A",
    border: "solid 1px #343965",
  },
  reading_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "5px",
    marginTop: "18px",
    padding: "20px 14px 29.6px 26px",
    // height: "95.5%",
    borderRadius: "10px",
    border: "1px solid #E3E7EB",
    boxShadow: "0px 2px 30px #0000001A",
  },
  readingPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "0px",
    marginTop: "18px",
    padding: "20px 14px 29.6px 26px",
  },
  reading_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    marginLeft: "5px",
    marginTop: "18px",
    padding: "20px 14px 29.6px 26px",
    borderRadius: "5px",
    boxShadow: "0px 2px 30px #0000001A",
    border: "solid 1px #343965",
  },
  readingPaperDarkMode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    marginLeft: "0px",
    marginTop: "18px",
    padding: "20px 14px 29.6px 26px",
    boxShadow: "0px 2px 30px #0000001A",
    border: "solid 1px #343965",
  },
  map: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "95.5%",
    width: "100%",
    padding: "0 28px 0 0",
    marginTop: "-18px",
    boxShadow: "0px 2px 30px #0000001A",
    border: "1px solid #E3E7EB",
    borderRadius: "5px",
    opacity: 1,
  },
  "@media (min-width: 305px) and (max-width: 767px)": {
    map: {
      display: "block",
      boxShadow: "none",
      border: "1px solid #E3E7EB",
    },
  },
  map_dark_mode: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "0 28px 0 0px",
    color: "white",
    marginTop: "-18px",
    backgroundColor: "#191d43",
    boxShadow: "0px 2px 30px #0000001A",
    border: "solid 1px #343965",
  },
  "@media (min-width: 304px) and (max-width: 767px)": {
    map_dark_mode: {
      display: "block",
      backgroundColor: "#191d43",
      boxShadow: "0px 2px 30px #0000001A",
      border: "solid 1px #343965",
      borderRadius: "5px",
    },
  },
  "@media (min-width: 768px) and (max-width: 1024px)": {
    map: {
      display: "flex",
      flexDirection: "row",
      height: "95.5%",
      width: "100%",
      padding: "0 28px 0 0",
      marginTop: "0px",
      boxShadow: "0px 2px 30px #0000001A",
      border: "1px solid #E3E7EB",
      borderRadius: "5px",
      opacity: 1,
    },
    map_dark_mode: {
      display: "flex",
      flexDirection: "row",
      padding: "0 28px 0 0px",
      color: "white",
      marginTop: "0px",
      backgroundColor: "#191d43",
      boxShadow: "0px 2px 30px #0000001A",
      border: "solid 1px #343965",
    },
    writingPaper: {
      boxShadow: "0px 2px 30px #0000001A",
    },
    readingPaper: {
      boxShadow: "0px 2px 30px #0000001A",
    },
  },
  node: {
    fontFamily: "Raleway",
    fontSize: "18px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    marginTop: "15px",
    lineHeight: 1.5,
    color: "#09184b",
    textAlign: "left",
    marginLeft: "30px",
  },
  "@media (min-width: 301px) and (max-width: 767px)": {
    node: {
      fontFamily: "Raleway",
      fontSize: "14px",
      fontWeight: 600,
      fontStretch: "normal",
      fontStyle: "normal",
      marginTop: "3%",
      lineHeight: 1.5,
      paddingTop: "14px",
      color: "#09184b",
      textAlign: "left",
      marginLeft: "20px",
    },
  },
  node_dark_mode: {
    fontFamily: "Raleway",
    fontSize: "18px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    marginTop: "15px",
    lineHeight: 1.5,
    color: "#09184b",
    textAlign: "left",
    marginLeft: "30px",
    color: "white",
    backgroundColor: "#191d43",
  },
  "@media (min-width: 299px) and (max-width: 767px)": {
    node_dark_mode: {
      fontFamily: "Raleway",
      fontSize: "14px",
      fontWeight: 600,
      fontStretch: "normal",
      fontStyle: "normal",
      marginTop: "3%",
      lineHeight: 1.5,
      paddingTop: "14px",
      color: "#09184b",
      textAlign: "left",
      marginLeft: "20px",
      color: "white",
      backgroundColor: "#191d43",
    },
  },
  maxTps: {
    fontFamily: "Raleway",
    fontSize: "18px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.17,
    letterSpacing: "normal",
    marginLeft: "5%",
    marginTop: "15px",
    lineHeight: 1.5,
    color: "#09184b",
    textAlign: "left",
  },
  "@media (min-width: 302px) and (max-width: 767px)": {
    maxTps: {
      fontFamily: "Raleway",
      fontSize: "14px",
      fontWeight: 600,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.17,
      letterSpacing: "normal",
      marginLeft: "5%",
      marginTop: "3%",
      lineHeight: 1.5,
      color: "#09184b",
      textAlign: "left",
      float: "right",
      marginTop: "-39px",
      marginRight: "10px",
    },
  },
  maxTps_dark_mode: {
    fontFamily: "Raleway",
    fontSize: "18px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.17,
    letterSpacing: "normal",
    marginLeft: "5%",
    marginTop: "15px",
    lineHeight: 1.5,
    color: "#09184b",
    textAlign: "left",
    color: "white",
  },

  "@media (min-width: 303px) and (max-width: 767px)": {
    maxTps_dark_mode: {
      fontFamily: "Raleway",
      fontSize: "14px",
      fontWeight: 600,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.17,
      letterSpacing: "normal",
      marginLeft: "5%",
      marginTop: "3%",
      lineHeight: 1.5,
      textAlign: "left",
      color: "white",
      float: "right",
      marginTop: "-39px",
      marginRight: "10px",
    },
  },
  mapchart: {
    width: "100%",
    height: "50%",
  },
  mapchart_dark_mode: {
    width: "100%",
    height: "50%",
    backgroundColor: "#191d43",
  },
  top20: {
    color: "#09184b",
    fontSize: "18px",
  },
  top20_dark_mode: {
    color: "white",
    fontSize: "18px",
  },
  paperNode: {
    boxShadow: "none",
    borderRadius: "4px",
  },
  paper_node: {
    marginLeft: "20px",
    marginTop: "-9px",
    boxShadow: "none",
    borderRadius: "4px",
    marginRight: "20px",
  },
  paper_dark_node: {
    marginLeft: "20px",
    marginTop: "-9px",
    boxShadow: "none",
    borderRadius: "4px",
    marginRight: "20px",
    backgroundColor: "#191d43",
  },
  top: {
    marginTop: "18px",
    marginRight: "9px",
    boxShadow: "none",
    width: "100%",
    height: "94.2%",
    boxShadow: "0px 2px 30px #0000001A",
    border: "1px solid #E3E7EB",
    borderRadius: "5px",
  },
  topMode: {
    marginTop: "10px",
    marginRight: "9px",
    boxShadow: "none",
    height: "95.5%",
    marginBottom: "40px",
  },

  top_dark_mode: {
    marginTop: "18px",
    marginRight: "9px",
    height: "94.2%",
    width: "98.5%",
    backgroundColor: "#191d43",
    boxShadow: "0px 2px 30px #0000001A",
    borderRadius: "5px",
    border: "solid 1px #343965",
  },
  topDarkMode: {
    marginTop: "10px",
    marginRight: "9px",
    boxShadow: "none",
    height: "95.5%",
    backgroundColor: "#191d43",
    marginBottom: "40px",
    boxShadow: "0px 2px 30px #0000001A",
    border: "solid 1px #343965",
  },
  readingData: {
    marginTop: "30px",
    marginRight: "20px",
    marginLeft: "20px",
  },
  topTrend: {
    marginTop: "40px",
    marginRight: "10px",
    marginLeft: "20px",
  },
  savedReadTweetConatiner: {
    marginRight: "18px",
    marginLeft: "21px",
  },
  savedReadTweetConatinerDark: {
    marginRight: "18px",
    marginLeft: "21px",
    backgroundColor: "#191d43",
  },
}));

const Text = styled.div`
  font-weight: 900;
  font-size: 14px;
  line-height: 1.17;
  margin-top: -10px;
`;
const Trending = styled.div`
  @media (max-width: 767px) {
    width: 87%;
    height: 48%;
    margin-left: 1px;
  }
  @media (min-width: 768px) and (max-width: 1002px) {
    width: 87%;
    height: 48%;
    margin-left: 1px;
  }
  @media (min-width: 1003px) and (max-width: 1400px) {
    width: 87%;
    height: 48%;
    margin-left: 1px;
  }
  @media (min-width: 1401px) and (max-width: 1600px) {
    width: 85%;
    height: 48%;
    margin-left: 10px;
  }
  @media (min-width: 1601px) and (max-width: 1800px) {
    width: 82%;
    height: 48%;
    margin-left: 15px;
  }
  @media (min-width: 1801px) and (max-width: 2000px) {
    width: 78%;
    height: 48%;
    margin-left: 25px;
  }
  @media (min-width: 2001px) and (max-width: 2200px) {
    width: 74%;
    height: 48%;
    margin-left: 30px;
  }
  @media (min-width: 2201px) and (max-width: 2400px) {
    width: 73%;
    height: 48%;
  }
  @media (min-width: 2401px) and (max-width: 2600px) {
    width: 72%;
    height: 48%;
  }
`;

const SaveGraphTrend = styled.div`
  @media (min-width: 2001px) and (max-width: 2400px) {
    margin-top: 10px;
  }
  @media (min-width: 2401px) and (max-width: 2600px) {
    margin-top: 10px;
  }
`;
const ReadGraphTrend = styled.div`
  @media (min-width: 2001px) and (max-width: 2400px) {
    margin-top: 10px;
  }
  @media (min-width: 2401px) and (max-width: 2600px) {
    margin-top: 10px;
  }
`;
const Desktop = styled.div`
  @media (min-width: 0px) and (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 1025px) {
    display: visible;
  }
`;
const MobileResponsive = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: visible;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const TabResponsive = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: visible;
  }
  @media (min-width: 1025px) {
    display: none;
  }
`;

function MainComponent(props) {
  const classes = useStyles();
  const [maxtpsvalue, setMaxtpsValue] = useState({});
  let tpsCount = props?.save;

  const [steps, setSteps] = useState(1);
  const [meterValue, setMeterValue] = useState();
  const [clicks, setClicks] = useState("");

  const click = () => {
    setSteps(2);
    setMeterValue(parseFloat(tpsCount / 60)?.toFixed(2) || 0);
    setClicks(true);
    setInterval(() => {
      setClicks("");
    }, 2000);
  };
  const secondClick = () => {
    setSteps(1);
    setClicks(true);
    setInterval(() => {
      setClicks("");
    }, 2000);
  };

  let nodeLength = props?.stats?.markers?.length || 0;

  useEffect(() => {
    fetchTps();
    setInterval(() => {
      fetchTps();
    }, 60000);
  }, []);

  //for Max-Tps count:

  const fetchTps = async () => {
    const [err, res] = await Utils.parseResponse(TweetService.getMaxTps());
    if (err) {
      return err;
    } else {
      setMaxtpsValue(res || "");
    }
  };

  //for Night mode-->
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };

  const [dark, setMode] = useState(getMode());

  useEffect(() => {
    setMode(props.dark);
    localStorage.setItem("mode", JSON.stringify(props.dark));
  }, [props.dark]);

  // let tpsCount = (count.totalTransactions / 60).toFixed(1);

  let maxtpsCount = parseFloat(maxtpsvalue)?.toFixed(2);
  let id = props?.read || 0;
  let savingData = props?.saveGraphdata;
  let readingData = props?.readGraphdata;
  let identity = props?.readSocket;
  let writeIdentity = props?.Savesocket;
  let smallSavetweet = props?.tweetData;
  let smallSaveCount = props?.tweetCount;
  let smallReadtweet = props?.state?.readtweets;
  let smallReadCount = props?.readtweetCount;

  // switch:

  const ActiveNodeColor = dark ? ActiveNodesDark : ActiveNodes;
  const ActiveTpsColor = dark ? TpsCountDark : TpsCount;
  const ActiveSpan = dark ? SpanDark : Span;

  return (
    <div className={dark ? classes.main_dark_mode : classes.main}>
      <Desktop>
        <div className={dark ? classes.root_dark_mode : classes.root}>
          <Grid container spacing={3}>
            <Grid style={{ padding: "19px" }} item xs={6}>
              <Row className="justify-space-between w-100">
                <Row className="w-100">
                  <Grid item xs={6} className={classes.grid}>
                    <Text>
                      <div
                        className={
                          dark ? "writing-data-dark-mode" : "writing-data"
                        }
                      >
                        Writing Data
                      </div>
                    </Text>
                    <Paper
                      className={
                        dark
                          ? classes.writing_paper_dark_mode
                          : classes.writing_paper
                      }
                      elevation={0}
                    >
                      <div
                        className={
                          dark ? "savingSpeed-dark-mode" : "savingSpeed"
                        }
                      >
                        Saving Speed
                        <Tippy
                          placement={"right"}
                          theme={"light"}
                          maxWidth={200}
                          content={
                            <span className="tippyBlockstyle">
                              The saved tweets per second track the rate of
                              record-keeping
                            </span>
                          }
                        >
                          <EyeImg src="../../images/ic.png" />
                        </Tippy>
                      </div>

                      <div
                        className={dark ? "saveSpeed-dark-mode" : "saveSpeed"}
                      >
                        {isNaN(tpsCount) ? "-" : tpsCount} /
                        <span className="fs-16">min</span>
                      </div>
                      <span className="hover-data">
                        {" "}
                        <MyResponsiveLine
                          writeMe={writeIdentity}
                          writeGraph={savingData}
                        />{" "}
                      </span>
                    </Paper>
                  </Grid>

                  <Grid item xs={6}>
                    <Text>
                      <div
                        className={
                          dark ? "reading-data-dark-mode" : "reading-data"
                        }
                      >
                        Reading Data
                      </div>
                    </Text>
                    <Paper
                      className={
                        dark
                          ? classes.reading_paper_dark_mode
                          : classes.reading_paper
                      }
                      elevation={0}
                    >
                      <div
                        className={
                          dark ? "savingSpeed-dark-mode" : "savingSpeed"
                        }
                      >
                        Reading Speed
                        <Tippy
                          placement={"right"}
                          theme={"light"}
                          maxWidth={190}
                          content={
                            <span className="tippyBlockstyle">
                              The read tweets per second track the rate of
                              record-keeping
                            </span>
                          }
                        >
                          <EyeImg src="../../images/ic.png" />
                        </Tippy>
                      </div>
                      <div
                        className={dark ? "readSpeed-dark-mode" : "readSpeed"}
                      >
                        {id?.length > 0 ? id : " - "} /
                        <span className="fs-16">min</span>
                      </div>
                      <span className="hover-data">
                        {" "}
                        <ReadingData
                          readData={props?.data}
                          readMe={identity}
                          readGraph={readingData}
                        />{" "}
                      </span>
                    </Paper>
                  </Grid>
                </Row>
              </Row>
              <Row className="justify-space-between w-100">
                <Row className="w-100">
                  <Grid item xs={12} className={classes.grid2}>
                    <Paper classes={{ elevation1: classes.paperNode }}>
                      <div
                        className={
                          props.dark ? classes.map_dark_mode : classes.map
                        }
                      >
                        <div
                          className={
                            props.dark
                              ? classes.maxTps_dark_mode
                              : classes.maxTps
                          }
                        >
                          <div className="tippyAdjustments">
                            Current/Max tps
                            <Tippy
                              placement={"top"}
                              theme={"light"}
                              maxWidth={220}
                              content={
                                <span className="tippyOtherblockStyle">
                                  The speed of the current and maximum
                                  transactions completed on the platform
                                </span>
                              }
                            >
                              <IconImg src="../../images/ic.png" />
                            </Tippy>
                          </div>
                          {isNaN(tpsCount)
                            ? "-"
                            : parseFloat(tpsCount / 60).toFixed(2)}{" "}
                          / {isNaN(maxtpsCount) ? "-" : maxtpsCount}
                          {(() => {
                            switch (steps) {
                              case 1:
                                return (
                                  <>
                                    {dark ? (
                                      <ReloadImg
                                        onClick={click}
                                        src="/images/Reload-white.svg"
                                      />
                                    ) : (
                                      <ReloadImg
                                        onClick={click}
                                        src="/images/Reload.svg"
                                      />
                                    )}
                                  </>
                                );
                              case 2:
                                return (
                                  <>
                                    {dark ? (
                                      <ReloadImg
                                        onClick={secondClick}
                                        src="/images/Reload-white.svg"
                                      />
                                    ) : (
                                      <ReloadImg
                                        onClick={secondClick}
                                        src="/images/Reload.svg"
                                      />
                                    )}
                                  </>
                                );
                              default:
                                return;
                            }
                          })()}
                          <div>
                            {props.dark ? (
                              <DarkSpeedometer
                                clicks={clicks}
                                steps={steps}
                                meterValue={meterValue}
                                dark={dark}
                                tpsCount={
                                  parseFloat(tpsCount / 60).toFixed(2) || ""
                                }
                              />
                            ) : (
                              <Speedometer
                                clicks={clicks}
                                steps={steps}
                                meterValue={meterValue}
                                dark={dark}
                                tpsCount={
                                  parseFloat(tpsCount / 60).toFixed(2) || ""
                                }
                              />
                            )}
                          </div>
                        </div>

                        {/* ll */}
                        <div className="nodeMapBlock">
                          <div
                            className={
                              props.dark ? classes.node_dark_mode : classes.node
                            }
                          >
                            <div className="tippyAdjustments">
                              Nodes
                              <Tippy
                                placement={"top"}
                                theme={"light"}
                                maxWidth={180}
                                content={
                                  <span className="tippyBlockstyle">
                                    Current Active Nodes
                                  </span>
                                }
                              >
                                <IconImg src="../../images/ic.png" />
                              </Tippy>
                            </div>
                            {nodeLength}
                          </div>
                          <NodeChart dark={dark} />
                        </div>
                      </div>
                    </Paper>
                  </Grid>
                </Row>
              </Row>
            </Grid>

            <Grid style={{ padding: "19px" }} item xs={6}>
              <Text
                className={props.dark ? classes.top20_dark_mode : classes.top20}
              >
                Top 20 trending
                <Tippy
                  placement={"top-start"}
                  theme={"light"}
                  maxWidth={340}
                  content={
                    <span className="tippyOtherblockStyle">
                      This twitter decentralized application pertually records
                      the top 20 hashtags on Twitter on to the XDC Network
                      blockchain.
                    </span>
                  }
                >
                  <EyeImg src="../../images/ic.png" />
                </Tippy>
              </Text>

              <Paper
                className={props.dark ? classes.top_dark_mode : classes.top}
              >
                <Trending>
                  <MapTabs dark={dark} />
                </Trending>
              </Paper>
            </Grid>

            <Grid
              style={{ padding: "19px" }}
              item
              xs={6}
              className={classes.grid3}
            >
              <SaveGraphTrend>
                <SavedTweets
                  dark={dark}
                />
              </SaveGraphTrend>
            </Grid>
            <Grid
              style={{ padding: "19px" }}
              item
              xs={6}
              className={classes.grid3}
            >
              <ReadGraphTrend>
                <ReadTweets dark={dark} />
              </ReadGraphTrend>
            </Grid>
          </Grid>
        </div>
      </Desktop>

      <TabResponsive>
        <MainDiv>
          <FirstSection>
            <Grid item xs={12} className={classes.grid}>
              <div className={dark ? "writing-data-dark-mode" : "writing-data"}>
                Writing Data
              </div>
              <Paper
                className={
                  dark ? classes.writingPaperDarkMode : classes.writingPaper
                }
                elevation={0}
              >
                <div className={dark ? "savingSpeed-dark-mode" : "savingSpeed"}>
                  Saving Speed
                  <Tippy
                    placement={"right"}
                    theme={"light"}
                    maxWidth={200}
                    content={
                      <span className="tippyBlockstyle">
                        The saved tweets per second track the rate of
                        record-keeping
                      </span>
                    }
                  >
                    <IconImg src="../../images/ic.png" />
                  </Tippy>
                </div>

                <div className={dark ? "saveSpeed-dark-mode" : "saveSpeed"}>
                  {isNaN(tpsCount) ? "-" : tpsCount} /
                  <span className="fs-16">min</span>
                </div>
                <span className="hover-data">
                  {" "}
                  <MyResponsiveLine
                    writeMe={writeIdentity}
                    writeGraph={savingData}
                  />{" "}
                </span>
              </Paper>
            </Grid>
          </FirstSection>

          <SecondSection>
            <Grid item xs={12} className={classes.readingData}>
              <div className={dark ? "reading-data-dark-mode" : "reading-data"}>
                Reading Data
              </div>
              <Paper
                className={
                  dark ? classes.readingPaperDarkMode : classes.readingPaper
                }
                elevation={0}
              >
                <div className={dark ? "savingSpeed-dark-mode" : "savingSpeed"}>
                  Reading Speed
                  <Tippy
                    placement={"right"}
                    theme={"light"}
                    maxWidth={190}
                    content={
                      <span className="tippyBlockstyle">
                        The read tweets per second track the rate of
                        record-keeping
                      </span>
                    }
                  >
                    <IconImg src="../../images/ic.png" />
                  </Tippy>
                </div>

                <div className={dark ? "readSpeed-dark-mode" : "readSpeed"}>
                  {id?.length > 0 ? id : " - "} /
                  <span className="fs-16">min</span>
                </div>
                <span className="hover-data">
                  {" "}
                  <ReadingData
                    readData={props?.data}
                    readMe={identity}
                    readGraph={readingData}
                  />{" "}
                </span>
              </Paper>
            </Grid>
          </SecondSection>
        </MainDiv>

        <SecondMainDiv>
          <Paper classes={{ elevation1: classes.paperNode }}>
            <div className={props.dark ? classes.map_dark_mode : classes.map}>
              <div
                className={
                  props.dark ? classes.maxTps_dark_mode : classes.maxTps
                }
              >
                <div className="tippyAdjustments">
                  Current/Max tps
                  <Tippy
                    placement={"top"}
                    theme={"light"}
                    maxWidth={220}
                    content={
                      <span className="tippyOtherblockStyle">
                        The speed of the current and maximum transactions
                        completed on the platform
                      </span>
                    }
                  >
                    <IconImg src="../../images/ic.png" />
                  </Tippy>
                </div>
                {isNaN(tpsCount) ? "-" : parseFloat(tpsCount / 60).toFixed(2)} /{" "}
                {isNaN(maxtpsCount) ? "-" : maxtpsCount}
                {(() => {
                  switch (steps) {
                    case 1:
                      return (
                        <>
                          {dark ? (
                            <ReloadImg
                              onClick={click}
                              src="/images/Reload-white.svg"
                            />
                          ) : (
                            <ReloadImg
                              onClick={click}
                              src="/images/Reload.svg"
                            />
                          )}
                        </>
                      );
                    case 2:
                      return (
                        <>
                          {dark ? (
                            <ReloadImg
                              onClick={secondClick}
                              src="/images/Reload-white.svg"
                            />
                          ) : (
                            <ReloadImg
                              onClick={secondClick}
                              src="/images/Reload.svg"
                            />
                          )}
                        </>
                      );
                    default:
                      return;
                  }
                })()}
                <div>
                  {props.dark ? (
                    <DarkSpeedometer
                      clicks={clicks}
                      steps={steps}
                      meterValue={meterValue}
                      dark={dark}
                      tpsCount={parseFloat(tpsCount / 60).toFixed(2) || ""}
                    />
                  ) : (
                    <Speedometer
                      clicks={clicks}
                      steps={steps}
                      meterValue={meterValue}
                      dark={dark}
                      tpsCount={parseFloat(tpsCount / 60).toFixed(2) || ""}
                    />
                  )}
                </div>
              </div>

              {/* ll */}
              <div className="nodeMapBlock">
                <div
                  className={props.dark ? classes.node_dark_mode : classes.node}
                >
                  <div className="tippyAdjustments">
                    Nodes
                    <Tippy
                      placement={"top"}
                      theme={"light"}
                      maxWidth={180}
                      content={
                        <span className="tippyBlockstyle">
                          Current Active Nodes
                        </span>
                      }
                    >
                      <IconImg src="../../images/ic.png" />
                    </Tippy>
                  </div>
                  {nodeLength}
                </div>
                <NodeChart dark={dark} />
              </div>
            </div>
          </Paper>
        </SecondMainDiv>

        <Column>
          <Grid item xs={12} className={classes.grid3}>
            <Paper
              className={
                props.dark
                  ? classes.savedReadTweetConatinerDark
                  : classes.savedReadTweetConatiner
              }
            >
              <SavedRead
                dark={dark}
                saveTweet={writeIdentity}
                savedCount={props?.saveCount}
                smallSave={smallSavetweet}
                smallcount={smallSaveCount}
                smallRead={smallReadtweet}
                countRead={smallReadCount}
              />
            </Paper>
          </Grid>
        </Column>
        <Column>
          <Grid item xs={12} className={classes.topTrend}>
            <Text
              className={props.dark ? classes.top20_dark_mode : classes.top20}
            >
              Top 20 trending
              <Tippy
                placement={"top-start"}
                theme={"light"}
                maxWidth={340}
                content={
                  <span className="tippyOtherblockStyle">
                    This twitter decentralized application pertually records the
                    top 20 hashtags on Twitter on to the XDC Network blockchain.
                  </span>
                }
              >
                <IconImg src="../../images/ic.png" />
              </Tippy>
            </Text>

            <Paper
              className={props.dark ? classes.topDarkMode : classes.topMode}
            >
              <Trending>
                <MapTabs dark={dark} />
              </Trending>
            </Paper>
          </Grid>
        </Column>
      </TabResponsive>

      <MobileResponsive>
        <Grid item xs={12}>
          <Column>
            <Grid item xs={12} className={classes.grid}>
              <div className={dark ? "writing-data-dark-mode" : "writing-data"}>
                Writing Data
              </div>
              <Paper
                className={
                  dark ? classes.writingPaperDarkMode : classes.writingPaper
                }
                elevation={0}
              >
                <div className={dark ? "savingSpeed-dark-mode" : "savingSpeed"}>
                  Saving Speed
                  <Tippy
                    placement={"right"}
                    theme={"light"}
                    maxWidth={200}
                    content={
                      <span className="tippyBlockstyle">
                        The saved tweets per second track the rate of
                        record-keeping
                      </span>
                    }
                  >
                    <IconImg src="../../images/ic.png" />
                  </Tippy>
                </div>

                <div className={dark ? "saveSpeed-dark-mode" : "saveSpeed"}>
                  {isNaN(tpsCount) ? "-" : tpsCount} /
                  <span className="fs-16">min</span>
                </div>
                <span className="hover-data">
                  {" "}
                  <MyResponsiveLine
                    writeMe={writeIdentity}
                    writeGraph={savingData}
                  />{" "}
                </span>
              </Paper>
            </Grid>
          </Column>

          <Column>
            <Grid item xs={12} className={classes.readingData}>
              <div className={dark ? "reading-data-dark-mode" : "reading-data"}>
                Reading Data
              </div>
              <Paper
                className={
                  dark ? classes.readingPaperDarkMode : classes.readingPaper
                }
                elevation={0}
              >
                <div className={dark ? "savingSpeed-dark-mode" : "savingSpeed"}>
                  Reading Speed
                  <Tippy
                    placement={"right"}
                    theme={"light"}
                    maxWidth={190}
                    content={
                      <span className="tippyBlockstyle">
                        The read tweets per second track the rate of
                        record-keeping
                      </span>
                    }
                  >
                    <IconImg src="../../images/ic.png" />
                  </Tippy>
                </div>

                <div className={dark ? "readSpeed-dark-mode" : "readSpeed"}>
                  {id?.length > 0 ? id : " - "} /
                  <span className="fs-16">min</span>
                </div>
                <span className="hover-data">
                  {" "}
                  <ReadingData
                    readData={props?.data}
                    readMe={identity}
                    readGraph={readingData}
                  />{" "}
                </span>
              </Paper>
            </Grid>
          </Column>

          <Column>
            <Grid item xs={12} className={classes.grid2}>
              <Paper
                classes={
                  props.dark
                    ? { elevation1: classes.paper_dark_node }
                    : { elevation1: classes.paper_node }
                }
              >
                <div
                  className={props.dark ? classes.map_dark_mode : classes.map}
                >
                  <MobParentSection>
                    <div>
                      <ActiveTpsColor>
                        Current Tps
                        <Tippy
                          placement={"top"}
                          theme={"light"}
                          maxWidth={220}
                          content={
                            <span className="tippyOtherblockStyle">
                              The speed of the current and maximum transactions
                              completed on the platform
                            </span>
                          }
                        >
                          <IconImg src="../../images/ic.png" />
                        </Tippy>
                        <br />
                        <ActiveSpan>
                          {isNaN(tpsCount)
                            ? "-"
                            : parseFloat(tpsCount / 60).toFixed(2)}{" "}
                          / {isNaN(maxtpsCount) ? "-" : maxtpsCount}
                          {(() => {
                            switch (steps) {
                              case 1:
                                return (
                                  <>
                                    {dark ? (
                                      <ReloadImg
                                        onClick={click}
                                        src="/images/Reload-white.svg"
                                      />
                                    ) : (
                                      <ReloadImg
                                        onClick={click}
                                        src="/images/Reload.svg"
                                      />
                                    )}
                                  </>
                                );
                              case 2:
                                return (
                                  <>
                                    {dark ? (
                                      <ReloadImg
                                        onClick={secondClick}
                                        src="/images/Reload-white.svg"
                                      />
                                    ) : (
                                      <ReloadImg
                                        onClick={secondClick}
                                        src="/images/Reload.svg"
                                      />
                                    )}
                                  </>
                                );
                              default:
                                return;
                            }
                          })()}
                        </ActiveSpan>
                      </ActiveTpsColor>
                      <Meter>
                        {props.dark ? (
                          <DarkSpeedometer
                            clicks={clicks}
                            steps={steps}
                            meterValue={meterValue}
                            dark={dark}
                            tpsCount={
                              parseFloat(tpsCount / 60).toFixed(2) || ""
                            }
                          />
                        ) : (
                          <Speedometer
                            clicks={clicks}
                            steps={steps}
                            meterValue={meterValue}
                            dark={dark}
                            tpsCount={
                              parseFloat(tpsCount / 60).toFixed(2) || ""
                            }
                          />
                        )}
                      </Meter>
                    </div>

                    <div>
                      <ActiveNodeColor>
                        Nodes
                        <Tippy
                          placement={"top"}
                          theme={"light"}
                          maxWidth={180}
                          content={
                            <span className="tippyBlockstyle">
                              Current Active Nodes
                            </span>
                          }
                        >
                          <IconImg src="../../images/ic.png" />
                        </Tippy>
                        <br />
                        <ActiveSpan> {nodeLength}</ActiveSpan>
                      </ActiveNodeColor>
                      <NodeSection>
                        <NodeChart dark={dark} />
                      </NodeSection>
                    </div>
                  </MobParentSection>

                  {/* {} */}
                </div>
              </Paper>
            </Grid>
          </Column>
          <Column>
            <Grid item xs={12} className={classes.topTrend}>
              <Text
                className={props.dark ? classes.top20_dark_mode : classes.top20}
              >
                Top 20 trending
                <Tippy
                  placement={"top-start"}
                  theme={"light"}
                  maxWidth={340}
                  content={
                    <span className="tippyOtherblockStyle">
                      This twitter decentralized application pertually records
                      the top 20 hashtags on Twitter on to the XDC Network
                      blockchain.
                    </span>
                  }
                >
                  <IconImg src="../../images/ic.png" />
                </Tippy>
              </Text>

              <Paper
                className={props.dark ? classes.topDarkMode : classes.topMode}
              >
                <Trending>
                  <MapTabs dark={dark} />
                </Trending>
              </Paper>
            </Grid>
          </Column>
          <Column>
            <Grid item xs={12} className={classes.grid3}>
              <Paper
                className={
                  props.dark
                    ? classes.savedReadTweetConatinerDark
                    : classes.savedReadTweetConatiner
                }
              >
                <SavedRead
                  dark={dark}
                  saveTweet={writeIdentity}
                  savedCount={props?.saveCount}
                  // saveUser={props?.saveAuthor}
                  // readUser={props?.readAuthor}
                  smallSave={smallSavetweet}
                  smallcount={smallSaveCount}
                  smallRead={smallReadtweet}
                  countRead={smallReadCount}
                />
              </Paper>
            </Grid>
          </Column>
        </Grid>
      </MobileResponsive>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { stats: state.stats };
};
export default connect(mapStateToProps, { dispatchAction })(MainComponent);
