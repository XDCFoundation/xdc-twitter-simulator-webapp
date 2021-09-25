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
import zIndex from "@material-ui/core/styles/zIndex";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: "22px",
    whiteSpace: "nowrap",
    fontFamily: "Raleway sans-serif !important",
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingBottom: "3%",
    paddingTop: "3%",
    backgroundColor: "#3E71FF",
    whiteSpace: "nowrap",
    color: "#ffffff",
    fontSize: "16px",
    boxShadow: "none",
    border: "none",
    backgroundImage: 'url("../../images/footer.svg")',
  },

  paperfooter: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    backgroundColor: "#191d43",
    color: "#ffffff",
    fontSize: "13px",
    boxShadow: "none",
    borderRadius: "0px",
  },

  row: {
    marginTop: "1%",
  },
  root: {
    width: "100%",
  },

  papersecondrow: {
    backgroundColor: "#191d43",
    color: "#ffffff",
    fontSize: "14px",
    marginTop: "12px",
    marginLeft: "2%",
    boxShadow: "none",
    border: "none",
  },

  links: {
    marginLeft: "-40px",
    listStyle: "none",
    padding: "0",
    marginTop: "7px",
  },

  followlinks: {
    listStyle: "none",
    marginTop: "5%",
    padding: "0",
  },

  linksitem: {
    fontSize: "14px",
    fontweight: "normal",
    fontstretch: "normal",
    fontstyle: "normal",
    lineheight: 2,
    letterspacing: "normal",
    textalign: "left",
    color: "#f8f8f8",
    display: "inline-block",
    marginRight: "15px",
  },

  followitem: {
    display: "inline-block",
    marginRight: "8px",
  },

  followus: {
    fontweight: 500,
    marginTop: "5%",
    fontstretch: "normal",
    fontstyle: "normal",
    lineheight: 1.75,
    letterspacing: "normal",
    textalign: "left",
    color: "#ffffff",
  },

  otherlink: {
    marginTop: "4%",
    fontweight: "600",
    fontstretch: "normal",
    fontstyle: "normal",
    lineheight: 1.19,
    letterspacing: "normal",
    textalign: "left",
    color: "#ffffff",
  },

  mainGrid: {
    backgroundColor: '#3E71FF'
  }
}));

export default function FooterComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid Container spacing={1}>
        <Row>
          <Grid className={classes.mainGrid} item xs={12}>
            <Paper className={classes.paper}>
              {/* <img  src="../../images/footer.svg"></img> */}
              <Row style={{marginLeft: '18px'}}>
                <div class="cards">
                  <Grid className="link-grid" item xs={12} sm={6} md={4}>
                    <Paper
                      className="link-grid-paper"
                      style={{
                        background: "#3E71FF",
                        marginLeft: "1px",
                        background: "transparent",
                      }}
                      elevation={0}
                    >
                      <div className="link-text">
                        <div className={classes.otherlink}>
                          <div className="footerTextitem">Other Links</div>
                        </div>
                        <div className={classes.links}>
                          <ul>
                            <li className={classes.linksitem}>
                              <a
                                className="footerLinks"
                                href="http://twitter-dev-1478211791.us-east-2.elb.amazonaws.com/"
                              >
                                {" "}
                                Archive Tweet
                              </a>
                            </li>
                            <li className={classes.linksitem}>
                              <a
                                className="footerLinks"
                                href="https://xinfin.org/contactus"
                              >
                                Contact us
                              </a>
                            </li>
                            <li className={classes.linksitem}>
                              <a
                                className="footerLinks"
                                href="https://xinfin.org/privacy"
                              >
                                Privacy Policy
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Paper>
                  </Grid>

                  <Grid className="link-grid-2" item xs={12} sm={4} md={3}>
                    <Paper
                      className="link-grid-paper-2"
                      style={{
                        backgroundColor: "#3E71FF",
                        background: "transparent",
                      }}
                      elevation={0}
                    >
                      <div className="follow-text">
                        <div className={classes.followus}>
                          <span className="footerTextitem"> Follow us on </span>
                        </div>
                        <div>
                          <ul className={classes.followlinks}>
                            <li className={classes.followitem}>
                              <a href="https://twitter.com/XinFin_Official">
                                <img
                                  className="footericonsLink"
                                  src="../../images/twitter.svg"
                                />
                              </a>
                            </li>
                            <li className={classes.followitem}>
                              {" "}
                              <a href="https://www.facebook.com/XinFinHybridBlockchain/">
                                <img
                                  className="footericonsLink"
                                  src="../../images/facebook.svg"
                                />
                              </a>
                            </li>
                            <li className={classes.followitem}>
                              {" "}
                              <a href="https://github.com/XinFinorg">
                                <img
                                  className="footericonsLink"
                                  src="../../images/github.svg"
                                />
                              </a>
                            </li>
                            <li className={classes.followitem}>
                              {" "}
                              <a href="https://www.linkedin.com/company/xinfin/">
                                <img
                                  className="footericonsLink"
                                  className="footericonsLink"
                                  src="../../images/linkedin.svg"
                                />
                              </a>
                            </li>
                            <li className={classes.followitem}>
                              {" "}
                              <a href="https://t.me/xinfintalk">
                                <img
                                  className="footericonsLink"
                                  src="../../images/telegram.svg"
                                />
                              </a>
                            </li>
                            <li className={classes.followitem}>
                              {" "}
                              <a href="https://www.reddit.com/r/xinfin/">
                                <img
                                  className="footericonsLink"
                                  src="../../images/reddit.svg"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Paper>
                  </Grid>

                  <Grid className="link-grid-3" item xs={12} sm={4} md={3}>
                    <Paper
                      style={{
                        backgroundColor: "#3E71FF",
                        marginLeft: "20px",
                        background: "transparent",
                      }}
                      elevation={0}
                    >
                      <div className="powered-paper">
                        <a href="/">
                          <div>
                            <img
                              className="footerXdcicon"
                              src="/images/XDC-Icon.svg"
                            />
                          </div>
                        </a>
                        <div className="powered-text">Powered By XDC</div>
                      </div>
                    </Paper>
                  </Grid>
                </div>
              </Row>
            </Paper>
          </Grid>
        </Row>
      </Grid>
    </div>
  );
}
