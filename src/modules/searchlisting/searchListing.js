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

// const theme = createMuiTheme({
//   typography: {
//     htmlFontSize: "22px",
//     whiteSpace: "nowrap",
//     fontFamily: "Raleway sans-serif !important",
//   },
// });

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//     color: theme.palette.text.secondary,
//   },
//   main: {
//     backgroundColor: "#f5f6f9",
//   },
//   root: {
//     flexGrow: 1,
//     padding: "80px 80px",
//     marginLeft: "130px",
//   },
//   grid: {},
//   grid2: {},

//   paper: {
//     padding: theme.spacing(2),
//     // textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
//   dashboard: {
//     marginBottom: "19px",
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     marginTop: "-67px",
//     backgroundColor: "#191d43",
//     color: "#ffffff",
//     fontFamily: "Raleway ,sans-serif !important",
//     fontWeight: "600",
//   },
//   image: {
//     marginTop: "-41%",
//     marginLeft: "6%",
//   },
//   savingSpeed: {
//     fontFamily: "Raleway ,sans-serif !important",
//     fontSize: "18px",
//     fontWeight: "600",
//     fontStretch: "normal",
//     fontStyle: "normal",
//     lineHeight: "1.17",
//     letterSpacing: "normal",
//     textAlign: "left",
//     color: "#d6d6d6",
//   },
//   savespeed: {
//     marginTop: "5px",
//     fontSize: "1rem",
//     fontWeight: "600",
//     fontStretch: "normal",
//     fontStyle: "normal",
//     lineHeight: "0.82",
//     letterSpacing: " normal",
//     textAlign: "left",
//     color: "#3366ff",
//   },
// }));
// const Text = styled.div`
//   font-weight: 900;
//   margin-bottom: 10px;
//   fontfamily: "Raleway ,sans-serif !important";
// `;

const Text = styled.div`
  font-weight: 900;
  margin-bottom: 10px;
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
    right: "52%",
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
    right: "52%",
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
  dashboard: { marginLeft: "180px" },
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
}));

export default function Searchlist(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Grid xs={2}>
          <img
            className={classes.image}
            style={{
              // top: "18%",
              // left: "15%",
              width: "5%",
            }}
            src="/images/home.svg"
          />
          <div className={classes.dashboard}> Dashboard</div>
        </Grid>
        <Grid
          container
          spacing={3}
          //style={{ padding: "8%" }}
        >
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
