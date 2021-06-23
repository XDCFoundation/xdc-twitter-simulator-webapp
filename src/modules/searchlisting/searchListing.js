import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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
  },
  main: {
    backgroundColor: "#f5f6f9",
  },
  root: {
    flexGrow: 1,
    padding: "80px 80px",
    marginLeft: "190px",
  },
  grid: {
    // marginRight: "20px",
    // padding: "200px200px",
  },
  grid2: {
    // marginTop: "53px",
  },

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
  },
}));
const Text = styled.div`
  font-weight: 900;
  margin-bottom: 10px;
`;
const Image = styled.img`
  margin-left: 5%;
  width: 35px;
`;

export default function Searchlist() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Grid xs={2}>
          <Image src="public/images/home.svg" />
          <Paper className={classes.dashboard}> Dashboard</Paper>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper>
              <Column>
                <Row>
                  <Typography
                    className="content"
                    variant="h5"
                    style={{ whiteSpace: "nowrap" }}
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
                    }}
                  >
                    Lisa Ray
                  </Typography>
                  <Paper
                    style={{
                      color: "#8290a4",
                      boxShadow: "none",
                      position: "absolute",
                      right: "46%",
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

                      right: "46%",
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
                      right: "46%",
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
                      right: "46%",
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
                      right: "46%",
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
                      right: "46%",
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
                      right: "46%",
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
                      right: "46%",
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
            </Paper>
            {/* </div> */}
          </Grid>

          <Grid item xs={4}>
            <Grid item xs={12} className={classes.grid}>
              <Text>Writing Data</Text>
              <Paper className={classes.paper}>
                HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial
              </Paper>
            </Grid>

            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={12} className={classes.grid2}>
                  <Text>Reading Data</Text>
                  <Paper className={classes.paper}>
                    HTML Tutorial CSS Tutorial JavaScript Tutorial How
                    Tosdjifkofsklfjskjflkjzkldfjklzjclkzjlcljckckjk
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
