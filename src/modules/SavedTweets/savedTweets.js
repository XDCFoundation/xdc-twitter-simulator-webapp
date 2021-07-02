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
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginTop: "-7%",
  },

  // content: {
  //   whiteSpace: "nowrap",
  //   fontFamily: "Raleway sans-serif !important",
  // },
}));
export default function SavedTweets() {
  const classes = useStyles();
  return (
    <Grid Container spacing={3}>
      <Grid item xs={12}>
        <div>
          <Paper className={classes.paper}>
            <Box>
              <Column>
                <Row>
                  <Typography
                    className="content"
                    variant="h5"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Saved Tweets
                  </Typography>
                  <Paper
                    variant="h5"
                    style={{
                      whiteSpace: "nowrap",
                      boxShadow: "none",
                      align: "justify",
                      position: "absolute",
                      right: "52%",
                      fontSize: "42px",
                    }}
                  >
                    800k
                  </Paper>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "14px",
                      color: "#09184b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Lisa Ray
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "52%",
                    }}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#8290a4",
                        whiteSpace: "nowrap",
                      }}
                    >
                      @lisaray
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <Paper
                        noWrap
                        className="content"
                        gutterBottom
                        style={{
                          fontSize: "14px",
                          color: "#09184b",
                          boxShadow: "none",
                        }}
                      >
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                      </Paper>
                    </ThemeProvider>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "14px",
                      color: "#09184b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Harry Golding
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "52%",
                    }}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#8290a4",
                        whiteSpace: "nowrap",
                      }}
                    >
                      @henrygolding
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                      }}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "14px",
                      color: "#09184b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Claire Browne
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "52%",
                    }}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#8290a4",
                        whiteSpace: "nowrap",
                      }}
                    >
                      @clairebrowne
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                      }}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "14px",
                      color: "#09184b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Shawn
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "52%",
                    }}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#8290a4",
                        whiteSpace: "nowrap",
                      }}
                    >
                      @shawnmurphy
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",

                        boxShadow: "none",
                      }}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "14px",
                      color: "#09184b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Jack Ryan
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "52%",
                    }}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#8290a4",
                        whiteSpace: "nowrap",
                      }}
                    >
                      @jackryan
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                      }}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "14px",
                      color: "#09184b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Cersie Lannister
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "52%",
                    }}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#8290a4",
                      }}
                    >
                      @cersielannister
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                      }}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "14px",
                      color: "#09184b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    J Cole
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "52%",
                    }}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#8290a4",
                      }}
                    >
                      @jcole
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                      }}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "14px",
                      color: "#09184b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Harry Maguire
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "52%",
                    }}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#8290a4",
                      }}
                    >
                      @Harrymag
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                      }}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
              </Column>
            </Box>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}
