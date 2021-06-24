import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import Grid from "@material-ui/core/Grid";
import SavedTweets from "../SavedTweets";
import ReadTweets from "../Readtweets";
import MyResponsiveLine from "./writingData"
import ReadingData from "./readingData"

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#f5f6f9",
  },
  root: {
    flexGrow: 1,
    padding: "98px 98px",
  },
  grid: {
    marginRight: "20px",
  },
  grid2: {
    marginTop: "53px",
  },
  grid3: {
    marginTop: "53px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
                  <Text>Writing Data</Text>
                  <Paper className={classes.paper}>
                    <div className="savingSpeed">Saving Speed</div>
                    <div className="saveSpeed">345/sec</div>
                  <MyResponsiveLine/>
                  </Paper>
                </Grid>

                <Grid item xs={6}>
                  <Text>Reading Data</Text>
                  <Paper className={classes.paper}>
                  <div className="savingSpeed">Reading Speed</div>
                  <div className="readSpeed">345/sec</div>
                  <ReadingData/>
                  </Paper>
                </Grid>
              </Row>
            </Row>
            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={12} className={classes.grid2}>
                  <Text>Writing Data</Text>
                  <Paper className={classes.paper}>
                    HTML Tutorial CSS Tutorial JavaScript Tutorial How To
                    Tutorial SQL Tutorial Python Tutorial W3.CSS Tutorial
                    Bootstrap Tutorial PHP Tutorial Java Tutorial C++ Tutorial
                  </Paper>
                </Grid>
              </Row>
            </Row>
          </Grid>
          <Grid item xs={6}>
            <Text>Top 20 trending</Text>
            <Paper className={classes.paper}>
              HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL
              Tutorial Python Tutorial W3.CSS Tutorial Bootstrap Tutorial PHP
              Tutorial Java Tutorial C++ TutorialHTML Tutorial CSS Tutorial
              JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutorial
              W3.CSS Tutorial Bootstrap Tutorial PHP Tutorial Java Tutorial C++
              TutorialHTML Tutorial CSS Tutorial JavaScript Tutorial How To
              Tutorial SQL Tutorial Python Tutorial W3.CSS Tutorial Bootstrap
              Tutorial PHP Tutorial Java Tutorial C++ TutorialHTML Tutorial CSS
              Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python
              Tutorial W3.CSS Tutorial Bootstrap Tutorial PHP Tutorial Java
              Tutorial C++ TutorialHTML Tutorial CSS Tutorial JavaScript
              Tutorial How To Tutorial SQL Tutorial Python Tutorial W3.CSS
              Tutorial Bootstrap Tutorial PHP Tutorial Java Tutorial C++
              Tutorial Tutorial C++ TutorialHTML Tutorial CSS Tutorial
              JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutorial
              W3.CSS Tutorial Bootstrap Tutorial
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
