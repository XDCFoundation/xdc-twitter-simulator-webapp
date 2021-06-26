import React from "react";

import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { getClassSet } from "react-bootstrap/lib/utils/bootstrapUtils";
import { black } from "material-ui/styles/colors";

const theme = createMuiTheme({});
const useStyles = makeStyles((theme) => ({
  main: {
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  },

  mainpaper: {
    backgroundColor: "#191d43",
    boxShadow: "none",
    border: "none",
    borderRadius: "5px",
  },
  grid: {
    backgroundColor: "#191d43",
    marginTop: "180px",
    width: "250%",
    boxShadow: "none",
    border: "none",
    borderRadius: "5px",
    marginLeft: "-52%",
    marginRight: "15%",
  },

  advancedpaper: {
    fontSize: "22px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#ffffff",
    backgroundColor: "#191d43",
    boxShadow: "none",
    color: "#ffffff",

    fontFamily: "Raleway, sans-serif !important",
    marginTop: "20px",
    boxShadow: "none",
    marginLeft: "50px",
  },
  words: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    marginTop: "24px",
    boxShadow: "none",
    marginLeft: "50px",
  },
  maincolor: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    marginTop: "20px",
    boxShadow: "none",
  },
  inputallofthewords: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    boxShadow: "none",
    border: "none",
  },
  hashtags: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    marginTop: "20px",
    boxShadow: "none",
    border: "none",

    marginLeft: "50px",
    width: "115%",
  },
  inputwords: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    boxShadow: "none",
    border: "none",
    width: "115%",
  },
  account: {
    marginLeft: "50px",
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    marginTop: "20px",
    boxShadow: "none",
  },
  inputallofthewords: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway sans-serif !important",
    boxShadow: "none",
    border: "none",
    width: "115%",
  },
  button: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    boxShadow: "none",
    borderRadius: "5px",
    border: "solid 1px #4a508a",
    width: "115%",
  },
  totheseaccounts: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    boxShadow: "none",
    border: "none",
    width: "115%",

    FontSize: "14px",
    marginLeft: "50px",
  },
  fromtheseaccounts: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway ,sans-serif !important",
    boxShadow: "none",
    FontSize: "14px",
    border: "none",
    width: "115%",
    marginLeft: "50px",
  },

  button: {
    marginTop: "24px",
    backgroundColor: "#3366ff",
    width: "115%",
    color: "#f8f8fa",
    FontSize: "14px",
    fontFamily: "Raleway ,sans-serif !important",
    marginLeft: "50px",
    borderRadius: "5px",
    border: "none",
  },
}));
export default function AdvancedSearch() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid className={classes.grid} container spacing={4}>
        <Grid item xs={8} className={classes.griditem}>
          <Paper className={classes.mainpaper}>
            <Column>
              <Row>
                <Paper className={classes.advancedpaper}>Advanced Search</Paper>
                <img />
              </Row>
              <Paper className={classes.words}>Words</Paper>
              <Paper className={classes.words}>
                <input
                  className={classes.inputallofthewords}
                  placeholder="All of the words"
                />
              </Paper>

              <input placeholder="Hashtags" className={classes.hashtags} />
              <Paper />
              <Paper className={classes.account}>Accounts</Paper>
              <Paper className={classes.maincolor}>
                <input
                  placeholder="From these accounts"
                  className={classes.fromtheseaccounts}
                />
              </Paper>
              <Paper className={classes.maincolor}>
                <input
                  placeholder="To these accounts"
                  className={classes.totheseaccounts}
                />
              </Paper>

              <button className={classes.button}>Search</button>
            </Column>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
