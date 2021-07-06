import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MyResponsiveLine from "../Maincomponent/writingData";
import ReadingData from "../Maincomponent/readingData";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: "22px",
    whiteSpace: "nowrap",
    fontFamily: "Raleway sans-serif !important",
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  main: {
    backgroundColor: "#f5f6f9",
  },
  root: {
    flexGrow: 1,
    padding: "80px 80px",
    marginLeft: "130px",
  },
  grid: {},
  grid2: {},

  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
  dashboard: {
    marginBottom: "19px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "-67px",
    backgroundColor: "#191d43",
    color: "#ffffff",
    fontFamily: "Raleway ,sans-serif !important",
    fontWeight: "600",
  },
  image: {
    marginTop: "-41%",
    marginLeft: "6%",
  },
  savingSpeed: {
    fontFamily: "Raleway ,sans-serif !important",
    fontSize: "18px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#d6d6d6",
  },
  savespeed: {
    marginTop: "5px",
    fontSize: "1rem",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "0.82",
    letterSpacing: " normal",
    textAlign: "left",
    color: "#3366ff",
  },
}));
const Text = styled.div`
  font-weight: 900;
  margin-bottom: 10px;
  fontfamily: "Raleway ,sans-serif !important";
`;

export default function Searchlist() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Grid xs={2}>
          <img
            className={classes.image}
            style={{
    top: "18%",
    left: "15%",width:"15%"
}}
            src="/images/home.svg"
          />
          <Paper className={classes.dashboard}> Dashboard</Paper>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Paper>
              <Column>
                <Row>
                  <Typography
                    className="content"
                    variant="h5"
                    style={{ whiteSpace: "nowrap", marginLeft: "2%" }}
                  >
                    Search Results
                  </Typography>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "14px",
                      color: "#09184b",
                      whiteSpace: "nowrap",
                      marginLeft: "2%",
                    }}
                  >
                    Lisa Ray
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "41%",
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
                        marginLeft: "2%",
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
                          marginLeft: "2%",
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
                      marginLeft: "2%",
                    }}
                  >
                    Harry Golding
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",

                      right: "41%",
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
                        marginLeft: "2%",
                      }}
                    >
                      @henrygolding
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                        marginLeft: "2%",
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
                      marginLeft: "2%",
                    }}
                  >
                    Claire Browne
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "41%",
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
                        marginLeft: "2%",
                      }}
                    >
                      @clairebrowne
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                        marginLeft: "2%",
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
                      marginLeft: "2%",
                    }}
                  >
                    Shawn
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "41%",
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
                        marginLeft: "2%",
                      }}
                    >
                      @shawnmurphy
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        marginLeft: "2%",
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
                      marginLeft: "2%",
                    }}
                  >
                    Jack Ryan
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "41%",
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
                        marginLeft: "2%",
                      }}
                    >
                      @jackryan
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                        marginLeft: "2%",
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
                      marginLeft: "2%",
                    }}
                  >
                    Cersie Lannister
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "41%",
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
                        marginLeft: "2%",
                      }}
                    >
                      @cersielannister
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                        marginLeft: "2%",
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
                      marginLeft: "2%",
                    }}
                  >
                    J Cole
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "41%",
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
                        marginLeft: "2%",
                      }}
                    >
                      @jcole
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                        marginLeft: "2%",
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
                      marginLeft: "2%",
                    }}
                  >
                    Harry Maguire
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "41%",
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
                        marginLeft: "2%",
                      }}
                    >
                      @Harrymag
                    </Typography>
                    <Paper
                      style={{
                        fontSize: "14px",
                        color: "#09184b",
                        boxShadow: "none",
                        marginLeft: "2%",
                      }}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
              </Column>
            </Paper>
            {/* </div> */}
          </Grid>

          <Grid item xs={4}>
            <Grid item xs={12} className={classes.grid}>
              <Text>Writing Data</Text>
              <Paper className={classes.paper}>
                <div className="savingSpeed">Saving Speed</div>
                <div className="saveSpeed">345/sec</div>

                <MyResponsiveLine />
              </Paper>
            </Grid>

            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={12} className={classes.grid2}>
                  <Text>Reading Data</Text>
                  <Paper className={classes.paper}>
                    <div className="savingSpeed">Reading Tweet</div>
                    <div className="readSpeed">345/sec</div>
                    <ReadingData />
                  </Paper>
                </Grid>
              </Row>
            </Row>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
