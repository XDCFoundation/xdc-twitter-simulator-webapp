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
    fontSize: "16px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    marginTop: "3%",
    lineHeight: 1.5,
    color: "#09184b",
  },

  node_dark_mode: {
    fontFamily: "Raleway",
    fontSize: "16px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    marginTop: "3%",
    lineHeight: 1.5,
    color: "white",
    backgroundColor: '#191d43'
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

  maxTps_dark_mode: {
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
  }

}));

const Text = styled.div`
  font-weight: 900;
  margin-bottom: 10px;
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
      {/* <button onClick={() => setMode(!dark)}></button> */}
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={6} className={classes.grid}>

                  <Text className={dark ? "writing-data-dark-mode" : "writing-data"}>Writing Data</Text>
                  <Paper className={dark ? classes.writing_paper_dark_mode : classes.writing_paper} elevation={0}>
                    <div className={dark ? "savingSpeed-dark-mode" : "savingSpeed"}>Saving Speed</div>
                    <div className={dark ? "saveSpeed-dark-mode" : "saveSpeed"}>345/sec</div>
                    <span className="hover-data"><MyResponsiveLine /></span>
                  </Paper>

                </Grid>

                <Grid item xs={6}>
                  <Text className={dark ? "reading-data-dark-mode" : "reading-data"} >Reading Data</Text>
                  <Paper className={dark ? classes.reading_paper_dark_mode : classes.reading_paper} elevation={0}>
                    <div className={dark ? "savingSpeed-dark-mode" : "savingSpeed"}>Reading Speed</div>
                    <div className={dark ? "readSpeed-dark-mode" : "readSpeed"}>345/sec</div>
                    <span className="hover-data"><ReadingData /></span>
                  </Paper>
                </Grid>
              </Row>
            </Row>
            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={12} className={classes.grid2}>
                  <Paper className={classes.paper} >
                    <div className={props.dark ? classes.map_dark_mode : classes.map}>
                      <div className={props.dark ? classes.node_dark_mode : classes.node}>
                        Nodes
                        <br /> 8
                      </div>
                      <div className={props.dark ? classes.maxTps_dark_mode : classes.maxTps}>
                        Current Max TPS
                        <br /> 1/1000
                      </div>
                      <div style={{ width: "50%", marginLeft: "5%"}}>
                        <NodeChart dark={dark} />
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Row>
            </Row>
          </Grid>
          <Grid item xs={6}>
            <Text className={props.dark ? classes.top20_dark_mode : classes.top20}>Top 20 trending</Text>
            <Paper className={classes.paper}>
              <div className= {props.dark ? classes.mapchart_dark_mode : classes.mapchart}>
                {/* style={{ width: "94%", height: "50%"}} */}
                <MapChart dark={dark} />
              </div>
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