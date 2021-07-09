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
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "../styles/App.css";
import WebSocketCountNode from "./webSocket";
const IconImg = styled.img`
  margin-left: 10px;
  height: 14px;
  width: 14px;
  margin-top: 2px;
`;

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#f5f6f9",
  },
  main_dark_mode: {
    backgroundColor: '#0d0e2d'
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
    marginLeft: '7.5%',
    marginTop: '10px',
    padding: '20px 14px 29.6px 26px',

  },
  writing_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: 'white',
    marginLeft: '7.5%',
    marginTop: '10px',
    padding: '20px 14px 29.6px 26px',

  },
  reading_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: '5px',
    marginTop: '10px',
    padding: '20px 14px 29.6px 26px',
  },

  reading_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: 'white',
    marginLeft: '5px',
    marginTop: '10px',
    padding: '20px 14px 29.6px 26px',
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
    color: 'white',
    backgroundColor: '#191d43'
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
    textAlign: 'left',
    marginLeft: '20px',

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
    textAlign: 'left',
    marginLeft: '20px',
    color: "white",
    backgroundColor: '#191d43'
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
    textAlign: 'left',
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
    textAlign: 'left',
    color: "white",
  },

  mapchart: {
    width: '100%',
    height: '50%',
  },
  mapchart_dark_mode: {
    width: '100%',
    height: '50%',
    backgroundColor: '#191d43',
  },

  top20: {
    color: '#09184b'
  },
  top20_dark_mode: {
    color: 'white'
  },

  // elevation1: {
  //   marginTop: '10px',
  //   marginRight: '9px',
  //   height: '93%',
  //   boxShadow: 'none'
  // },
  // elevation1_dark_mode: {
  //   marginTop: '10px',
  //   marginRight: '9px',
  //   height: '93%',
  //   boxShadow: 'none',
  //   backgroundColor: '#191d43'
  // },
  paperNode: {
    marginLeft: '3.7%',
    marginTop: '-9px',
    boxShadow: 'none',
    borderRadius: '4px'

  },
  top: {
    marginTop: "10px",
    marginRight: "9px",
    boxShadow: 'none',
    height: '95.5%'
  },
  top_dark_mode: {
    marginTop: "10px",
    marginRight: "9px",
    boxShadow: 'none',
    height: '95.5%',
    backgroundColor: '#191d43'
  }

}));

const Text = styled.div`
  font-weight: 900;
  font-size:14px;
  line-height:1.17;
 
  margin-top:-10px;
`;
const Trending = styled.div`
@media (max-width:767px){
  width: 84%;
  height: 48%;
}
  @media (min-width:768px) and (max-width: 1002px) {
   width: 84%;
  height: 48%;
  }
   @media (min-width:1003px) and (max-width: 2400px) {
   width: 79%;
  height: 48%;
  }
`;
export default function MainComponent(props) {
  const classes = useStyles();

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

  const [dark, setMode] = useState(getMode())

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
    setMode(props.dark)
  }, [props.dark])

  return (
    <div className={dark ? classes.main_dark_mode : classes.main}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={6} className={classes.grid}>

                  <Text className={dark ? "writing-data-dark-mode" : "writing-data"}>Writing Data
                  </Text>
                  <Paper className={dark ? classes.writing_paper_dark_mode : classes.writing_paper} elevation={0}>
                    <div className={dark ? "savingSpeed-dark-mode" : "savingSpeed"}>Saving Speed
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
                            The saved tweets per second track the rate of record-keeping
                          </span>
                        }
                      >
                        <IconImg src="../../images/ic.png" />
                      </Tippy>
                    </div>
                    <div className={dark ? "saveSpeed-dark-mode" : "saveSpeed"}>345/sec</div>
                    <span className="hover-data">  <MyResponsiveLine /> </span>
                  </Paper>

                </Grid>

                <Grid item xs={6}>
                  <Text className={dark ? "reading-data-dark-mode" : "reading-data"} >Reading Data
                  </Text>
                  <Paper className={dark ? classes.reading_paper_dark_mode : classes.reading_paper} elevation={0}>
                    <div className={dark ? "savingSpeed-dark-mode" : "savingSpeed"}>Reading Speed
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
                            The read tweets per second track the rate of record-keeping
                          </span>
                        }
                      >
                        <IconImg src="../../images/ic.png" />
                      </Tippy>
                    </div>
                    <div className={dark ? "readSpeed-dark-mode" : "readSpeed"}>345/sec</div>
                    <span className="hover-data">  <ReadingData /> </span>
                  </Paper>
                </Grid>
              </Row>
            </Row>
            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={12} className={classes.grid2}>
                  <Paper classes={{ elevation1: classes.paperNode }}>
                    <div className={props.dark ? classes.map_dark_mode : classes.map}>
                      <div className={props.dark ? classes.node_dark_mode : classes.node}>
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
                              The saved tweets per second track the rate of record-keeping
                            </span>
                          }
                        >
                          <IconImg src="../../images/ic.png" />
                        </Tippy>
                        <br /> <WebSocketCountNode/>
                      </div>
                      <div className={props.dark ? classes.maxTps_dark_mode : classes.maxTps}>
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
                              }}
                            >
                              The speed of the current and maximum transactions completed on the platform
                            </span>
                          }
                        >
                          <IconImg src="../../images/ic.png" />
                        </Tippy>
                        <br /> 1/1000
                      </div>
                      <div style={{ width: "50%", marginLeft: "5%" }}>
                        <NodeChart dark={dark} />
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Row>
            </Row>
          </Grid>
          <Grid item xs={6}>
            <Text className={props.dark ? classes.top20_dark_mode : classes.top20}>Top 20 trending
              <Tippy
                placement={"right"}
                theme={"light"}
                maxWidth={300}
                content={
                  <span
                    style={{
                      color: "#0d0e2d",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    This twitter decentralized application pertually records the top 20 hashtags on Twitter on to the XDC
                  </span>
                }
              >
                <IconImg src="../../images/ic.png" />
              </Tippy>
            </Text>

            <Paper className={props.dark ? classes.top_dark_mode : classes.top} >
              <Trending> < MapChart dark={dark} />
              </Trending>
            </Paper>
          </Grid>
          <Grid item xs={6} className={classes.grid3}>
            <SavedTweets dark={dark} />
          </Grid>
          <Grid item xs={6} className={classes.grid3}>
            <ReadTweets dark={dark} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}