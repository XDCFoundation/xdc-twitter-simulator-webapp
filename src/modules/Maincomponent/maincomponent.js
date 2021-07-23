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
import Tippy from "@tippyjs/react";
import axios from "axios";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "../styles/App.css";
// import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket"
const client = new W3CWebSocket("wss://stats1.apothem.network/primus/?_primuscb=1642861667080-0")

// import WebSocketCountNode from "./webSocket";
const IconImg = styled.img`
  margin-left: 10px;
  height: 14px;
  width: 14px;
  // margin-top: 2px;
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
    padding: "45px",
  },
  grid: {
    marginRight: "20px",
  },
  grid2: {
    marginTop: "50px",
  },
  grid3: {
    marginTop: "50px",
  },
  writing_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "7.5%",
    marginTop: "10px",
    padding: "20px 14px 29.6px 26px",
  },
  writing_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    marginLeft: "7.5%",
    marginTop: "10px",
    padding: "20px 14px 29.6px 26px",
  },
  reading_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "5px",
    marginTop: "10px",
    padding: "20px 14px 29.6px 26px",
  },

  reading_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    marginLeft: "5px",
    marginTop: "10px",
    padding: "20px 14px 29.6px 26px",
  },

  map: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceAround",
  },

  map_dark_mode: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceAround",
    color: "white",
    backgroundColor: "#191d43",
  },
  node: {
    fontFamily: "Raleway",
    fontSize: "14px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    marginTop: "3%",
    lineHeight: 1.5,
    color: "#09184b",
    textAlign: "left",
    marginLeft: "20px",
  },

  node_dark_mode: {
    fontFamily: "Raleway",
    fontSize: "14px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    marginTop: "3%",
    lineHeight: 1.5,
    color: "#09184b",
    textAlign: "left",
    marginLeft: "20px",
    color: "white",
    backgroundColor: "#191d43",
  },

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
  },

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
    color: "#09184b",
    textAlign: "left",
    color: "white",
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
  },
  top20_dark_mode: {
    color: "white",
  },
  paperNode: {
    marginLeft: "3.7%",
    marginTop: "-9px",
    boxShadow: "none",
    borderRadius: "4px",
  },
  top: {
    marginTop: "10px",
    marginRight: "9px",
    boxShadow: "none",
    height: "95.5%",
  },
  top_dark_mode: {
    marginTop: "10px",
    marginRight: "9px",
    boxShadow: "none",
    height: "95.5%",
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

export default function MainComponent(props) {
  const classes = useStyles();
  const [value, setValue] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [count, setCount] = useState({});


  useEffect(() => {
    fetchCount();
    getValue();
    setInterval(() => {
      fetchCount();
    }, 15000);
  }, []);

  const fetchCount = () => {
    axios
      .get(
        "https://lmeqebp7fj.execute-api.us-east-1.amazonaws.com/testnet/tps-counter"
      )
      .then((res) => {
        // console.log(res.data.responseData)
        setCount(res.data.responseData);
        // let result = (res.data.responseData.totalTransactions) / 60
        // console.log("total trans", result)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
//socket-Function ---->
  const getValue = () => {
    let test = {}
    client.onopen = () => {
      console.log("connect")
    }
    client.onmessage = async (event) => {

      var msg = JSON.parse(event.data)
      if (msg.action === 'stats') {
        if (msg.data.id in test) {
          return
        } else {
          test[msg.data.id] = msg.data.stats.active

          //for socket ip counts---->
          let data= Object.keys(test)
          var arr = []
          if (data) {
            data.map(item => {

              if (item[item.length - 1] == ")") {
                var start = item.lastIndexOf("(") + 1
                var end = item.length - 1
                var result = item.substring(start, end)
                arr.push(result)
              } else {
                var start = item.lastIndexOf("-") + 1
                var end = item.length - 1
                var result = item.substr(start, end)
                arr.push(result)

              }

            })
          }
          console.log('obj------', data)

          let newarray = arr.filter(element => element !== 'Click');
          console.log("ip result---", newarray);
          setValue(newarray)

           //for socket total nodes ---->
          let nodecount = Object.keys(test).length
          console.log('nodecount-----', nodecount)
          setNodes(nodecount)
        }
      }
    }
    client.onclose = async (event) => {
      if (event.wasClean) {
        console.log(`Number of Active Nodes = ${Object.keys(test).length}`)
        setNodes(Object.keys(test).length)
      } else {
        console.log('[close] Connection died')
      }
    }
  }

//for Night mode-->
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };

  const [dark, setMode] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
    setMode(props.dark);
  }, [props.dark]);

  return (
    <div className={dark ? classes.main_dark_mode : classes.main}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={6} className={classes.grid}>
                  <Text
                    className={dark ? "writing-data-dark-mode" : "writing-data"}
                  >
                    Writing Data
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
                      className={dark ? "savingSpeed-dark-mode" : "savingSpeed"}
                    >
                      Saving Speed
                      <Tippy
                        placement={"right"}
                        theme={"light"}
                        maxWidth={200}
                        content={
                          <span
                            style={{
                              color: "#0d0e2d",
                              fontSize: "11px",
                              fontWeight: "600",
                            }}
                          >
                            The saved tweets per second track the rate of
                            record-keeping
                          </span>
                        }
                      >
                        <IconImg src="../../images/ic.png" />
                      </Tippy>
                    </div>
                    <div className={dark ? "saveSpeed-dark-mode" : "saveSpeed"}>
                      345/sec
                    </div>
                    <span className="hover-data">
                      {" "}
                      <MyResponsiveLine />{" "}
                    </span>
                  </Paper>
                </Grid>

                <Grid item xs={6}>
                  <Text
                    className={dark ? "reading-data-dark-mode" : "reading-data"}
                  >
                    Reading Data
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
                      className={dark ? "savingSpeed-dark-mode" : "savingSpeed"}
                    >
                      Reading Speed
                      <Tippy
                        placement={"right"}
                        theme={"light"}
                        maxWidth={190}
                        content={
                          <span
                            style={{
                              color: "#0d0e2d",
                              fontSize: "11px",
                              fontWeight: "600",
                            }}
                          >
                            The read tweets per second track the rate of
                            record-keeping
                          </span>
                        }
                      >
                        <IconImg src="../../images/ic.png" />
                      </Tippy>
                    </div>
                    <div className={dark ? "readSpeed-dark-mode" : "readSpeed"}>
                      345/sec
                    </div>
                    <span className="hover-data">
                      {" "}
                      <ReadingData />{" "}
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
                          props.dark ? classes.node_dark_mode : classes.node
                        }
                      >
                        Nodes
                        <Tippy
                          placement={"right"}
                          theme={"light"}
                          maxWidth={180}
                          content={
                            <span
                              style={{
                                color: "#0d0e2d",
                                fontSize: "11px",
                                fontWeight: "600",
                              }}
                            >
                              The saved tweets per second track the rate of
                              record-keeping
                            </span>
                          }
                        >
                          <IconImg src="../../images/ic.png" />
                        </Tippy>
                        <br />
                        {nodes}
                      </div>
                      <div
                        className={
                          props.dark ? classes.maxTps_dark_mode : classes.maxTps
                        }
                      >
                        Current Max TPS
                        <Tippy
                          placement={"right"}
                          theme={"light"}
                          maxWidth={220}
                          content={
                            <span
                              style={{
                                color: "#0d0e2d",
                                fontSize: "11px",
                                fontWeight: "600",
                                fontFamily: "Raleway",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight: "1.17",
                                letterSpacing: "normal",
                              }}
                            >
                              The speed of the current and maximum transactions
                              completed on the platform
                            </span>
                          }
                        >
                          <IconImg src="../../images/ic.png" />
                        </Tippy>
                        <br />
                        {count.totalTransactions}/1000
                      </div>
                      <div style={{ width: "50%", marginLeft: "5%" }}>
                        <NodeChart dark={dark} ipcount={value} />
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Row>
            </Row>
          </Grid>

          <Grid item xs={6}>
            <Text
              className={props.dark ? classes.top20_dark_mode : classes.top20}
            >
              Top 20 trending
              <Tippy
                placement={"top-start"}
                theme={"light"}
                maxWidth={340}
                content={
                  <span
                    style={{
                      color: "#0d0e2d",
                      fontSize: "11px",
                      fontWeight: "600",
                      fontFamily: "Raleway",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "1.17",
                      letterSpacing: "normal",
                    }}
                  >
                    This twitter decentralized application pertually records the
                    top 20 hashtags on Twitter on to the XDC Network blockchain.
                  </span>
                }
              >
                <IconImg src="../../images/ic.png" />
              </Tippy>
            </Text>

            <Paper className={props.dark ? classes.top_dark_mode : classes.top}>
              <Trending>
                <div>
                  <MapChart dark={dark} />
                </div>
              </Trending>
            </Paper>
            {/* <div className= "map-chart" elevation={0}>
          
       
                <div  >
                  < MapChart dark={dark} />
                </div>
           
          
            </div> */}
          </Grid>

          <Grid item xs={6} className={classes.grid3}>
            <SaveGraphTrend>
              <SavedTweets dark={dark} />
            </SaveGraphTrend>
          </Grid>
          <Grid item xs={6} className={classes.grid3}>
            <ReadGraphTrend>
              <ReadTweets dark={dark} />
            </ReadGraphTrend>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
