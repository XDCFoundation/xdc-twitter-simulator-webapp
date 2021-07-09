import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MyResponsiveLine from "../Maincomponent/writingData";
import ReadingData from "../Maincomponent/readingData";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "../styles/App.css";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
   

const Text = styled.div`
  font-weight: 900;
  margin-bottom: 55px;
  margin-left: 3%;
  fontfamily: "Raleway ,sans-serif !important";

  /////////////////////new code

  // const IconImg = styled.img
`;
//   margin-left: 10px;
//   height: 14px;
//   width: 14px;
//   margin-top: 2px;
// `;
const theme = createMuiTheme({
  // typography: {
  //   // Tell Material-UI what the font-size on the html element is.
  //   htmlFontSize: "22px",
  //   whiteSpace: "nowrap",
  //   fontFamily: "Raleway sans-serif !important",
  // },
});

const useStyles = makeStyles((theme) => ({
  main_dark_mode: {
    backgroundColor: "#0d0e2d",
  },
  paper: {
    color: theme.palette.text.secondary,
    marginTop: "-7%",
    marginLeft: "3.6%",
  },
  paper_dark_mode: {
    color: theme.palette.text.secondary,
    marginTop: "-7%",
    marginLeft: "3.6%",
    backgroundColor: "#191d43",
    color: "white",
  },
  tweetnumber: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "52%",
    fontSize: "26px",
    marginTop: "12px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",
  },
  tweetnumber_dark_mode: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "52%",
    fontSize: "26px",
    marginTop: "12px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
    backgroundColor: "#191d43",
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
  name_dark_mode: {
    fontSize: "11px",
    whiteSpace: "nowrap",
    fontFamily: "Raleway",
    marginLeft: "18px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "0.6px",
    textAlign: "left",
    color: "white",
    backgroundColor: "#191d43",
    marginBottom: "5px",
  },
  root: {
    flexGrow: 1,
    marginLeft: "130px",
  },

  content: {
    fontSize: "11px",
    color: "#09184b",
    boxShadow: "none",
    border: "none",
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
  content_dark_mode: {
    fontSize: "11px",
    boxShadow: "none",
    border: "none",

    fontFamily: "Raleway",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "0.4px",
    textAlign: "left",
    color: "white",
    backgroundColor: "#191d43",
    marginLeft: "18px",
  },
  time: {
    color: "#8290a4",
    boxShadow: "none",
    position: "absolute",
    right: "42%",
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
  time_dark_mode: {
    boxShadow: "none",
    position: "absolute",
    right: "42%",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.15",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#8290a4",
    backgroundColor: "#191d43",
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
    display: "flex",
    fontFamily: "Raleway",
    fontSize: "16px",
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
  readtweet_dark_mode: {
    display: "flex",
    fontFamily: "Raleway",
    fontSize: "16px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
    marginTop: "4%",
    marginLeft: "18px",
  },

  hr_page: {
    width: "100%",
    height: "0px",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },

  hr_page_dark_mode: {
    width: "100%",
    height: "0px",
    backgroundColor: "#8290a4",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  dashboard: {},
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
  writing_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "7.5%",
    marginTop: "-30px",
    padding: "20px 14px 29.6px 26px",
  },
  writing_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    marginTop: "-30px",
    marginLeft: "7.5%",
    padding: "20px 14px 29.6px 26px",
  },
  reading_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "7.5%",
    marginTop: "-30px",
    padding: "20px 14px 29.6px 26px",
  },
  image: {
    width: "25px",
    marginTop: "6%",
    marginLeft: "54%",
  },
  reading_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    marginTop: "-30px",
    marginLeft: "7.5%",
    padding: "20px 14px 29.6px 26px",
  },
  dashboardDiv: {
    display: "flex",
    flexDirection: "row",
    borderRadius: "6px",
    backgroundColor: "#222864",

    width: "177px",
    height: "49px",
    // margin: "40px 798px 35px 269px",
    padding: "14px 25.1px 14px 25px",

    // marginLeft: "8%",
    //  width: "177px",
  },
  dashboard: {
    fontSize: "15px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.17,
    letterSpacing: "normal",
    textAlign: "left",
    color: "#ffffff",
  },
}));

export default function Searchlist(props) {
  const classes = useStyles();
  return (
    <div className={props.dark ? classes.main_dark_mode : classes.dark}>
      <div className={classes.root}>
        <Grid xs={2}>
          <img
            style={{
              width: "5%",
            }}
          />
        </Grid>
        <div className="empty-div">
          <div className="img-parent">
            <img className="home-image" src="/images/home.svg" />
          </div>
          <div className="dashboard-name"> Dashboard </div>
        </div>

        <Grid container spacing={3} style={{ padding: "6%", width: "100%" }}>
          <Grid item xs={7}>
            <Paper
              className={props.dark ? classes.paper_dark_mode : classes.paper}
              elevation={0}
            >
              <Column>
                <Row className={classes.row}>
                  <Typography
                    className={
                      props.dark
                        ? classes.readtweet_dark_mode
                        : classes.readtweet
                    }
                    variant="h5"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Search Results
                  </Typography>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <Row>
                  <Typography
                    variant="h6"
                    className={
                      props.dark ? classes.name_dark_mode : classes.name
                    }
                  >
                    Lisa Ray
                  </Typography>
                  <Paper
                    className={
                      props.dark ? classes.time_dark_mode : classes.time
                    }
                  >
                    01:00 PM
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography className={classes.email}>@lisaray</Typography>
                    <ThemeProvider theme={theme}>
                      <Paper
                        noWrap
                        className={
                          props.dark
                            ? classes.content_dark_mode
                            : classes.content
                        }
                        gutterBottom
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                      </Paper>
                    </ThemeProvider>
                  </Column>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <Row>
                  <Typography
                    variant="h6"
                    className={
                      props.dark ? classes.name_dark_mode : classes.name
                    }
                  >
                    Harry Golding
                  </Typography>
                  <Paper
                    className={
                      props.dark ? classes.time_dark_mode : classes.time
                    }
                  >
                    01:00 PM
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography className={classes.email}>
                      @henrygolding
                    </Typography>
                    <Paper
                      className={
                        props.dark ? classes.content_dark_mode : classes.content
                      }
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <Row>
                  <Typography
                    variant="h6"
                    className={
                      props.dark ? classes.name_dark_mode : classes.name
                    }
                  >
                    Claire Browne
                  </Typography>

                  <Paper
                    className={
                      props.dark ? classes.time_dark_mode : classes.time
                    }
                  >
                    01:00 PM
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography className={classes.email}>
                      @clairebrowne
                    </Typography>
                    <Paper
                      className={
                        props.dark ? classes.content_dark_mode : classes.content
                      }
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <Row>
                  <Typography
                    variant="h6"
                    className={
                      props.dark ? classes.name_dark_mode : classes.name
                    }
                  >
                    Shawn
                  </Typography>
                  <Paper
                    className={
                      props.dark ? classes.time_dark_mode : classes.time
                    }
                  >
                    01:00 PM
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography className={classes.email}>
                      @shawnmurphy
                    </Typography>
                    <Paper
                      className={
                        props.dark ? classes.content_dark_mode : classes.content
                      }
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <Row>
                  <Typography
                    variant="h6"
                    className={
                      props.dark ? classes.name_dark_mode : classes.name
                    }
                  >
                    Jack Ryan
                  </Typography>
                  <Paper
                    className={
                      props.dark ? classes.time_dark_mode : classes.time
                    }
                  >
                    01:00 PM
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography className={classes.email}>@jackryan</Typography>
                    <Paper
                      className={
                        props.dark ? classes.content_dark_mode : classes.content
                      }
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <Row>
                  <Typography
                    variant="h6"
                    className={
                      props.dark ? classes.name_dark_mode : classes.name
                    }
                  >
                    Cersie Lannister
                  </Typography>
                  <Paper
                    className={
                      props.dark ? classes.time_dark_mode : classes.time
                    }
                  >
                    01:00 PM
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography className={classes.email}>
                      @cersielannister
                    </Typography>
                    <Paper
                      className={
                        props.dark ? classes.content_dark_mode : classes.content
                      }
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <Row>
                  <Typography
                    variant="h6"
                    className={
                      props.dark ? classes.name_dark_mode : classes.name
                    }
                  >
                    J Cole
                  </Typography>
                  <Paper
                    className={
                      props.dark ? classes.time_dark_mode : classes.time
                    }
                  >
                    01:00 PM
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography className={classes.email}>@jcole</Typography>
                    <Paper
                      className={
                        props.dark ? classes.content_dark_mode : classes.content
                      }
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <Row>
                  <Typography
                    variant="h6"
                    className={
                      props.dark ? classes.name_dark_mode : classes.name
                    }
                  >
                    Harry Maguire
                  </Typography>
                  <Paper
                    className={
                      props.dark ? classes.time_dark_mode : classes.time
                    }
                  >
                    01:00 PM
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography className={classes.email}>@jcole</Typography>
                    <Paper
                      className={
                        props.dark ? classes.content_dark_mode : classes.content
                      }
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <Row>
                  <Typography
                    variant="h6"
                    className={
                      props.dark ? classes.name_dark_mode : classes.name
                    }
                  >
                    Harry Maguire
                  </Typography>
                  <Paper
                    className={
                      props.dark ? classes.time_dark_mode : classes.time
                    }
                  >
                    01:00 PM
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography className={classes.email}>@jcole</Typography>
                    <Paper
                      className={
                        props.dark ? classes.content_dark_mode : classes.content
                      }
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <Row>
                  <Typography
                    variant="h6"
                    className={
                      props.dark ? classes.name_dark_mode : classes.name
                    }
                  >
                    Harry Maguire
                  </Typography>
                  <Paper
                    className={
                      props.dark ? classes.time_dark_mode : classes.time
                    }
                  >
                    01:00 PM
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography className={classes.email}>@jcole</Typography>
                    <Paper
                      className={
                        props.dark ? classes.content_dark_mode : classes.content
                      }
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <br />
                <br />
                <br />
              </Column>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Grid item xs={12} className={classes.grid}>
              <Text
                className={
                  props.dark ? "writing-data-one-dark-mode" : "writing-data-one"
                }
              >
                Writing Data
              </Text>
              <Paper
                className={
                  props.dark
                    ? classes.writing_paper_dark_mode
                    : classes.writing_paper
                }
              >
                <div
                  className={
                    props.dark ? "savingSpeed-one-dark-mode" : "savingSpeed-one"
                  }
                >
                  Saving Speed
                </div>
                <div className="saveSpeed-one">345/sec</div>
                <div
                // style={{ marginTop: "-20px" }}
                >
                  {" "}
                  <MyResponsiveLine />
                </div>
              </Paper>
            </Grid>

            <Row className="justify-space-between w-100">
              <Row className="w-100">
                <Grid item xs={12} className={classes.grid2}>
                  <br /> <br />
                  <Text
                    className={
                      props.dark
                        ? "reading-data-one-dark-mode"
                        : "reading-data-one"
                    }
                  >
                    Reading Data
                  </Text>
                  <Paper
                    className={
                      props.dark
                        ? classes.reading_paper_dark_mode
                        : classes.reading_paper
                    }
                  >
                    <div
                      className={
                        props.dark ? "savingSpeed-dark-mode" : "savingSpeed"
                      }
                    >
                      Reading Tweet
                    </div>
                    <div className={props.dark?"readSpeed-one-dark-mode":"readSpeed-one"}>345/sec</div>
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
