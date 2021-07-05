
import React from "react";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
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
    // padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginTop: "-7%",
    marginLeft: "3.6%"
  },
  tweetnumber: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "52%",
    fontSize: "36px",
    marginTop: "10px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",

  },
  row: {
    marginBottom: "30px",
  },
  name: {
    fontSize: "11px",
    color: "#09184b",
    whiteSpace: "nowrap",
    fontFamily: "Raleway",
    marginLeft: "18px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "0.6px",
    textAlign: "left",
    color: "#09184b",
    marginBottom: "5px",


  },
  content: {
    fontSize: "11px",
    color: "#09184b",
    boxShadow: "none",
    border: "none",
    // marginBottom:"5px",
    // border: "solid 1px #e8e8e8",
    fontFamily: "Raleway",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "0.4px",
    textAlign: "left",
    color: "#09184b",
    marginLeft: "18px",

  },
  time: {
    color: "#8290a4",
    boxShadow: "none",
    position: "absolute",
    right: "52%",
    // fontFamily: "Raleway",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.15",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#8290a4",
    marginBottom: "5px",
    marginLeft: "18px",

  },
  email: {
    fontSize: "11px",
    color: "#8290a4",
    whiteSpace: "nowrap",
    fontFamily: "Raleway",
    marginBottom: "5px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#8f8faf",
    marginLeft: "18px",
  },
  readtweet: {
    fontFamily: "Raleway",
    fontSize: "22px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",
    marginTop: "4%",
    marginLeft: "18px",

  },

}));


export default function SavedTweets() {
  const classes = useStyles();
  return (
    <Grid Container spacing={3}>
      <Grid item xs={12}>
        <div>
          <Paper className={classes.paper} elevation={0}>

            <Column>

              <Row className={classes.row}>

                <Typography
                  className={classes.readtweet}
                  variant="h5"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Saved Tweets
                </Typography>
                {/* <Divider /> */}
                <Paper
                  variant="h5" className={classes.tweetnumber}

                >
                  800k
                </Paper>

              </Row>
              <hr
                style={{
                  width: "100%", border: "solid 0.2px rgb(243 242 242)", marginTop: "0.5rem", marginBottom: "0.5rem"
                }} />
              <Row>
                <Typography
                  variant="h6"
                  className={classes.name}

                >
                  Lisa Ray
                </Typography>
                <Paper
                  className={classes.time}

                >
                  01:00 PM
                </Paper>
              </Row>

              <Row>
                <Column>
                  <Typography

                    className={classes.email}
                  >
                    @lisaray
                  </Typography>
                  <ThemeProvider theme={theme}>
                    <Paper
                      noWrap

                      className={classes.content}
                      gutterBottom

                    >

                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </ThemeProvider>
                </Column>
              </Row>
              <hr
                style={{
                  width: "100%", border: "solid 0.2px rgb(243 242 242)", marginTop: "0.5rem", marginBottom: "0.5rem"
                }} />
              <Row>
                <Typography
                  variant="h6"
                  className={classes.name}

                >
                  Harry Golding
                </Typography>
                <Paper
                  className={classes.time}

                >
                  01:00 PM
                </Paper>
              </Row>

              <Row>
                <Column>
                  <Typography
                    className={classes.email}
                  >
                    @henrygolding
                  </Typography>
                  <Paper

                    className={classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr
                style={{
                  width: "100%", border: "solid 0.2px rgb(243 242 242)", marginTop: "0.5rem", marginBottom: "0.5rem"
                }} />
              <Row>
                <Typography
                  variant="h6" className={classes.name}

                >
                  Claire Browne
                </Typography>

                <Paper

                  className={classes.time}
                >
                  01:00 PM
                </Paper>
              </Row>

              <Row>
                <Column>
                  <Typography
                    className={classes.email}
                  >
                    @clairebrowne
                  </Typography>
                  <Paper

                    className={classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr
                style={{
                  width: "100%", border: "solid 0.2px rgb(243 242 242)", marginTop: "0.5rem", marginBottom: "0.5rem"
                }} />
              <Row>
                <Typography
                  variant="h6"
                  className={classes.name}

                >
                  Shawn
                </Typography>
                <Paper
                  className={classes.time}

                >
                  01:00 PM
                </Paper>
              </Row>

              <Row>
                <Column>
                  <Typography
                    className={classes.email}
                  >
                    @shawnmurphy
                  </Typography>
                  <Paper
                    className={classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr
                style={{
                  width: "100%", border: "solid 0.2px rgb(243 242 242)", marginTop: "0.5rem", marginBottom: "0.5rem"
                }} />
              <Row>
                <Typography
                  variant="h6"
                  className={classes.name}

                >
                  Jack Ryan
                </Typography>
                <Paper

                  className={classes.time}
                >
                  01:00 PM
                </Paper>
              </Row>

              <Row>
                <Column>
                  <Typography
                    className={classes.email}
                  >
                    @jackryan
                  </Typography>
                  <Paper

                    className={classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr
                style={{
                  width: "100%", border: "solid 0.2px rgb(243 242 242)", marginTop: "0.5rem", marginBottom: "0.5rem"
                }} />
              <Row>
                <Typography
                  variant="h6"
                  className={classes.name}

                >
                  Cersie Lannister
                </Typography>
                <Paper
                  className={classes.time}
                >
                  01:00 PM
                </Paper>
              </Row>

              <Row>
                <Column>
                  <Typography
                    className={classes.email}
                  >
                    @cersielannister
                  </Typography>
                  <Paper

                    className={classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr
                style={{
                  width: "100%", border: "solid 0.2px rgb(243 242 242)", marginTop: "0.5rem", marginBottom: "0.5rem"
                }} />
              <Row>
                <Typography
                  variant="h6"
                  className={classes.name}

                >
                  J Cole
                </Typography>
                <Paper
                  className={classes.time}

                >
                  01:00 PM
                </Paper>
              </Row>

              <Row>
                <Column>
                  <Typography
                    className={classes.email}
                  >
                    @jcole
                  </Typography>
                  <Paper

                    className={classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr
                style={{
                  width: "100%", border: "solid 0.2px rgb(243 242 242)", marginTop: "0.5rem", marginBottom: "0.5rem"
                }} />
              <Row>
                <Typography
                  variant="h6"
                  className={classes.name}

                >
                  Harry Maguire
                </Typography>
                <Paper
                  className={classes.time}
                >
                  01:00 PM
                </Paper>
              </Row>

              <Row>
                <Column>
                  <Typography
                    className={classes.email}
                  >
                    @Harrymag
                  </Typography>
                  <Paper

                    className={classes.content}
                    style={{ marginBottom: "14px" }}
                  >

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>

                </Column>
              </Row>
              <hr
                style={{
                  width: "100%", border: "solid 0.2px rgb(243 242 242)", marginTop: "0rem", marginBottom: "0.5rem"
                }} />
              <br />
              <br />
              <br />
            </Column>

          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}
