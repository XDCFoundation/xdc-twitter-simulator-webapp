import React from "react";
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
  reading_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: '5px',
    marginTop: '10px',
    padding: '20px 14px 29.6px 26px',
  },

  map: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceAround",
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
  elevation1: {
    marginTop: '10px',
    marginRight: '9px',
    height: '93%',
    boxShadow: 'none'
  },
  paperNode: {
    marginLeft: '3.7%',
    marginTop: '-9px',
    boxShadow: 'none'

  }

}));

const Text = styled.div`
  font-weight: 900;
  font-size:14px;
  line-height:1.17;
 
  margin-top:-10px;
`;
export default function MainComponent() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={6} className={classes.grid}>

                  <Text className="writing-data">Writing Data
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
                    </Tippy></Text>
                  <Paper className={classes.writing_paper} elevation={0}>
                    <div className="savingSpeed">Saving Speed</div>
                    <div className="saveSpeed">345/sec</div>
                    <MyResponsiveLine />
                  </Paper>

                </Grid>

                <Grid item xs={6}>
                  <Text className="reading-data" >Reading Data
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
                          The read tweets per second track the rate of record-keeping
                        </span>
                      }
                    >
                      <IconImg src="../../images/ic.png" />
                    </Tippy></Text>
                  <Paper className={classes.reading_paper} elevation={0}>
                    <div className="savingSpeed">Reading Speed</div>
                    <div className="readSpeed">345/sec</div>
                    <ReadingData />
                  </Paper>
                </Grid>
              </Row>
            </Row>
            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={12} className={classes.grid2}>
                  <Paper classes={{ elevation1: classes.paperNode }}>
                    <div className={classes.map}>
                      <div className={classes.node}>
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
                        <br /> 8
                      </div>
                      <div className={classes.maxTps}>
                        Current Max TPS
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
                        <br /> 1/1000
                      </div>
                      <div style={{ width: "50%", marginLeft: "5%" }}>
                        <NodeChart />
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Row>
            </Row>
          </Grid>
          <Grid item xs={6}>
            <Text>Top 20 trending
              <Tippy
                placement={"right"}
                theme={"light"}
                maxWidth={290}
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
            <Paper classes={{ elevation1: classes.elevation1 }}  >
              <div style={{ width: "94%", height: "48%" }}>
                <MapChart />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} className={classes.grid3}>
            <SavedTweets />
          </Grid>
          <Grid item xs={6} className={classes.grid3}>
            <ReadTweets />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}