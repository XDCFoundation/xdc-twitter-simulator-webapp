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
    fontSize: "18px",
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
  links: {
    listStyle: "none",
    margin: "10px 0 0 0",
    padding: "0",
  },
  linksitem: {
    display: "inline-block",
    marginRight: "15px",
  },
  followitem: {
    display: "inline-block",
    marginRight: "15px",
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
                padding: "3%",
              }}
            >
              <Row>
                <Grid item xs={12} sm={12} md={4}>
                  <Paper
                    className={classes.paper}
                    style={{
                      padding: "0%",
                    }}
                  >
                    Other Links
                  </Paper>
                  <ul className={classes.links}>
                    <li className={classes.linksitem}>Archive Tweets</li>
                    <li className={classes.linksitem}>Share</li>
                    <li className={classes.linksitem}>Contact us</li>
                    <li className={classes.linksitem}>Privacy Policy</li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Paper
                    className={classes.paper}
                    style={{
                      padding: "0",
                    }}
                  >
                    Follow us on{" "}
                  </Paper>
                  <ul className={classes.links}>
                    <li className={classes.followitem}>
                      <img
                        style={{ height: "20px", width: "20px" }}
                        src="../../images/twitter.svg"
                      />
                    </li>
                    <li className={classes.followitem}>
                      {" "}
                      <img
                        style={{ height: "20px", width: "20px" }}
                        src="../../images/facebook.svg"
                      />
                    </li>
                    <li className={classes.followitem}>
                      {" "}
                      <img
                        style={{ height: "20px", width: "20px" }}
                        src="../../images/github.svg"
                      />
                    </li>
                    <li className={classes.followitem}>
                      {" "}
                      <img
                        style={{ height: "20px", width: "20px" }}
                        src="../../images/linkedin.svg"
                      />
                    </li>
                    <li className={classes.followitem}>
                      {" "}
                      <img
                        style={{ height: "20px", width: "20px" }}
                        src="../../images/telegram.svg"
                      />
                    </li>
                    <li className={classes.followitem}>
                      {" "}
                      <img
                        style={{ height: "20px", width: "20px" }}
                        src="../../images/reddit.svg"
                      />
                    </li>
                  </ul>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                  <Paper className={classes.poweredpaper}>
                    <img
                      style={{ width: "12%" }}
                      src="/images/xinfintwitter.png"
                    />
                    Powered By XDC{" "}
                  </Paper>
                </Grid>
              </Row>
            </Paper>
          </Grid>
        </Row>
      </Grid>
    </div>
  );
}
