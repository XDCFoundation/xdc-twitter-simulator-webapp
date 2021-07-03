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
    fontSize: "16px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    marginTop: "3%",
    lineHeight: 1.5,
    color: "#09184b",
  },
  maxTps: {
    fontFamily: "Raleway",
    fontSize: "16px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.17,
    letterSpacing: "normal",
    marginLeft: "5%",
    marginTop: "3%",
    lineHeight: 1.5,
    color: "#09184b",
  },
}));
 
const Text = styled.div`
  font-weight: 900;
  margin-bottom: 10px;
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
 
                  <Text className="writing-data">Writing Data</Text>
                  <Paper className={classes.writing_paper} elevation={0}>
                    <div className="savingSpeed">Saving Speed</div>
                    <div className="saveSpeed">345/sec</div>
                    <MyResponsiveLine />
                  </Paper>
 
                </Grid>
 
                <Grid item xs={6}>
                  <Text className="reading-data" >Reading Data</Text>
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
                  <Paper className={classes.paper}>
                    <div className={classes.map}>
                      <div className={classes.node}>
                        Nodes
                        <br /> 8
                      </div>
                      <div className={classes.maxTps}>   
                      Current Max TPS
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
            <Text>Top 20 trending</Text>
            <Paper className={classes.paper}>
              <div style={{ width: "94%", height: "50%" }}>
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