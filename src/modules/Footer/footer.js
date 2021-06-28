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

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: "22px",
    whiteSpace: "nowrap",
    fontFamily: "Raleway sans-serif !important",
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    backgroundColor: "#191d43",
    color: "#ffffff",
    fontSize: "16px",
    boxShadow: "none",

    // position: "absolute",
  },
  poweredpaper: {
    backgroundColor: "#191d43",
    color: "#ffffff",
    fontSize: "26px",
    marginTop: "12px",
    marginLeft: "2%",
    boxShadow: "none",
  },
  row: {
    marginTop: "1%",
  },
  root: {
    // flexGrow: 1,
    // padding: "20px 20px",
  },
  papersecondrow: {
    backgroundColor: "#191d43",
    color: "#ffffff",
    fontSize: "14px",
    marginTop: "12px",
    marginLeft: "2%",
    boxShadow: "none",
  },
}));
export default function FooterComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid Container spacing={1}>
        <Row>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              style={{
                padding: "5%",
              }}
            >
              <Row>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>other Links</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>Follow us on </Paper>
                </Grid>
                <img style={{ width: "5%" }} src="/images/xinfintwitter.png" />
                <Grid item xs={4}>
                  <Paper className={classes.poweredpaper}>
                    Powered By XDC{" "}
                  </Paper>
                </Grid>
              </Row>
              <Row>
                <Grid item xs={4}>
                  <Row>
                    <Paper className={classes.papersecondrow}>
                      Archive Tweets
                    </Paper>

                    <Paper className={classes.papersecondrow}>Share </Paper>

                    <Paper className={classes.papersecondrow}>
                      Contact us{" "}
                    </Paper>

                    <Paper className={classes.papersecondrow}>
                      Privacy Policy{" "}
                    </Paper>
                  </Row>
                </Grid>
                <Row className={classes.row}>
                  <Grid item xs={4}>
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src="../../images/twitter.svg"
                    />
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src="../../images/facebook.svg"
                    />
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src="../../images/github.svg"
                    />
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src="../../images/linkedin.svg"
                    />
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src="../../images/telegram.svg"
                    />
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src="../../images/reddit.svg"
                    />
                  </Grid>
                </Row>
              </Row>
            </Paper>
          </Grid>
        </Row>
      </Grid>
    </div>
  );
}
