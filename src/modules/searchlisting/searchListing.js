import React, { useState, useEffect, useLocation, useHistory } from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Writing from "./writegraphListingpage";
import Reading from "./readgraphListingPage";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "../styles/App.css";
import axios from "axios";
import moment from "moment";
import HomeIcon from "@material-ui/icons/Home";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { useParams } from "react-router";
import Loader from "./loader";

const Text = styled.div`
  font-weight: 900;
  margin-bottom: 55px;
  margin-left: 3%;
  font-family: "Raleway ,sans-serif !important";
`;

const theme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#f5f6f9",
  },
  main_dark_mode: {
    backgroundColor: "#0d0e2d",
  },

  paper: {
    color: theme.palette.text.secondary,
    width: "100%",
    marginLeft: "25px",
    borderRadius: "5px",
    boxShadow: "0px 2px 30px #0000001A",
  },
  paper_dark_mode: {
    color: theme.palette.text.secondary,
    width: "100%",
    marginLeft: "25px",
    backgroundColor: "#191d43",
    color: "white",
    borderRadius: "5px",
    border: "solid 1px #343965",
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
    marginBottom: "10px",
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
    right: "44%",
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
  mob_list_time: {
    color: "#8290a4",
    boxShadow: "none",
    position: "absolute",
    right: "13%",
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
    right: "44%",
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
  mob_list_time_dark_mode: {
    boxShadow: "none",
    position: "absolute",
    right: "13%",
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
    marginTop: "3%",
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
    marginTop: "3%",
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
    opacity: "0.3",
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
    padding: "20px 14px 29.6px 26px",
    color: theme.palette.text.secondary,
    marginTop: "15px",
    borderRadius: "5px",
    boxShadow: "0px 2px 30px #0000001A",
  },

  writing_paper_dark_mode: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#191d43",
    color: "white",
    padding: "20px 14px 29.6px 26px",
    marginTop: "15px",
    borderRadius: "5px",
    border: "solid 1px #343965",
  },

  reading_paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: "20px 14px 29.6px 26px",
    marginTop: "15px",
    borderRadius: "5px",
    boxShadow: "0px 2px 30px #0000001A",
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
    padding: "20px 14px 29.6px 26px",
    color: "white",
    marginTop: "15px",
    borderRadius: "5px",
    border: "solid 1px #343965",
  },
  dashboardDiv: {
    display: "flex",
    flexDirection: "row",
    borderRadius: "6px",
    backgroundColor: "#222864",
    width: "177px",
    height: "49px",
    padding: "14px 25.1px 14px 25px",
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
  gridcontainer: {
    display: "flex",
    width: "100%",
    paddingLeft: "10%",
    // paddingTop: "6%",
    paddingRight: "5%",
    paddingBottom: "6%",
  },

  mob_view_Gridcontainer: {
    display: "grid",
    width: "100%",
    paddingBottom: "6%",
  },

  firstGrid: {
    marginTop: "27px",
    marginLeft: "4px",
  },

  graphsGrid: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginLeft: "25px",
  },
  "@media (min-width: 1px) and (max-width: 767px)": {
    graphsGrid: {
      display: "none",
    },
  },
}));

const DesktopView = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: visible;
  }
`;
const MobileView = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: visible;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Searchlist(props) {
  const classes = useStyles();

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };

  const [dark, setMode] = useState(getMode());

  const [basic, setBasic] = useState({});
  const [advance, setAdvance] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setMode(props.dark);
    localStorage.setItem("mode", JSON.stringify(props.dark));
  }, [props.dark]);

  useEffect(() => {
    Basicsearch();
    Advancesearch();
  }, [props?.locations.split(" ")[0]]);

  const Basicsearch = () => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER +
        process.env.REACT_APP_BASIC_SEARCH +
        props?.locations.split(" ")[0]
      )
      .then((res) => {
        let basicSearch = [];
        if (
          !res &&
          !res.data &&
          !res.data.responseData &&
          res.data.responseData.length <= 0
        )
          basicSearch = [];
        else basicSearch = res.data.responseData.responseData || 0;
        setBasic(basicSearch);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Advancesearch = () => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER +
        process.env.REACT_APP_ADVANCE_SEARCH +
        "name" +
        props?.username +
        "&keyword=" +
        props?.locations.split(" ")[0] +
        "&hash=" +
        props?.hashname
      )
      .then((res) => {
        let advanceSearch = [];
        if (
          !res &&
          !res.data &&
          !res.data.responseData &&
          res.data.responseData[0].length <= 0
        )
          advanceSearch = [];
        else advanceSearch = res.data.responseData.responseData || 0;
        setAdvance(advanceSearch);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // let method = '@user'

  return (
    <div className={props.dark ? classes.main_dark_mode : classes.main}>
      <div className={classes.root}>
        <Grid xs={2}>
          <img
            style={{
              width: "5%",
            }}
          />
        </Grid>

        <div className="empty-div">
          <button className="button">
            <div>
              <HomeIcon />
            </div>
            <div className="dashboard-name">
              <a
                style={{
                  color: "white",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                href="/"
              >
                Dashboard
              </a>
            </div>
          </button>
        </div>

        <DesktopView>
          <Grid container spacing={6} className={classes.gridcontainer}>
            <Grid className={classes.firstGrid} item xs={7}>
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

                  {isLoading ? (
                    <Loader />
                  ) : (
                    basic &&
                    basic.length >= 1 &&
                    basic.map((response) => {
                      let value = response?.text || 0;
                      let author = response?.authorID || 0;
                      let str = response?.addedOn || 0;
                      let timeFormat = moment(str) || 0;
                      let time = timeFormat.format("LT") || 0;

                      let userId = response?.tweetId || 0;
                      // console.log('myuser--',userId)

                      function shortenValue(b, amountL = 80, stars = 1) {
                        return `${b?.slice(0, amountL)}${""?.repeat(
                          stars
                        )}${b?.slice(
                          // b.length - 3,
                          b?.length || 0
                        )}`;
                      }

                      return (
                        <>
                          <hr
                            className={
                              props.dark
                                ? classes.hr_page_dark_mode
                                : classes.hr_page
                            }
                          />
                          <a
                            style={{ textDecoration: "none" }}
                            href={"/archive/" + userId}
                          >
                            <Row>
                              <Typography
                                variant="h6"
                                className={
                                  props.dark
                                    ? classes.name_dark_mode
                                    : classes.name
                                }
                              >
                                {/* Lisa ray */}
                              </Typography>
                              <Paper
                                className={
                                  props.dark
                                    ? classes.time_dark_mode
                                    : classes.time
                                }
                              >
                                {time ? time : "-"}
                              </Paper>
                            </Row>

                            <Row>
                              <Column>
                                <Typography className={classes.email}>
                                  {author ? author : "-"}
                                </Typography>
                                <ThemeProvider theme={theme}>
                                  <Paper
                                    // noWrap
                                    className={
                                      props.dark
                                        ? classes.content_dark_mode
                                        : classes.content
                                    }
                                    // gutterBottom
                                  >
                                    <div className="listingPagetruncating">
                                      {value.length > 0
                                        ? shortenValue(value) || "-"
                                        : "-"}
                                    </div>
                                  </Paper>
                                </ThemeProvider>
                              </Column>
                            </Row>
                          </a>
                        </>
                      );
                    })
                  )}

                  {advance &&
                    advance.length >= 1 &&
                    advance.map((response) => {
                      let value = response?.text || 0;
                      let author = response?.id || 0;
                      let authorName = response?.name || 0;
                      let str = response?.createdAt || 0;
                      let timeFormat = moment(str) || 0;
                      let time = timeFormat.format("LT") || 0;

                      let textId = response?.id || 0;
                      // console.log('texttt--',textId)
                      function shortenValue(b, amountL = 80, stars = 1) {
                        return `${b?.slice(0, amountL)}${""?.repeat(
                          stars
                        )}${b?.slice(
                          // b.length - 3,
                          b?.length || 0
                        )}`;
                      }
                      return (
                        <>
                          <hr
                            className={
                              props.dark
                                ? classes.hr_page_dark_mode
                                : classes.hr_page
                            }
                          />
                          <a
                            style={{ textDecoration: "none" }}
                            href={"/archive/" + textId}
                          >
                            <Row>
                              <Typography
                                variant="h6"
                                className={
                                  props.dark
                                    ? classes.name_dark_mode
                                    : classes.name
                                }
                              >
                                {/* {author} */}
                              </Typography>
                              <Paper
                                className={
                                  props.dark
                                    ? classes.time_dark_mode
                                    : classes.time
                                }
                              >
                                {time}
                              </Paper>
                            </Row>

                            <Row>
                              <Column>
                                <Typography className={classes.email}>
                                  {/* {handle.length > 0 ? '@' + handle || 0 : 'undefined'} */}
                                  {authorName.length > 0 ? authorName : author}
                                </Typography>
                                <ThemeProvider theme={theme}>
                                  <Paper
                                    // noWrap
                                    className={
                                      props.dark
                                        ? classes.content_dark_mode
                                        : classes.content
                                    }
                                    // gutterBottom
                                  >
                                    <div className="listingPagetruncating">
                                      {value.length > 0
                                        ? shortenValue(value) || "-"
                                        : "-"}
                                    </div>
                                  </Paper>
                                </ThemeProvider>
                              </Column>
                            </Row>
                          </a>
                        </>
                      );
                    })}
                </Column>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <br />
                <br />
                <br />
              </Paper>
            </Grid>

            <Grid className={classes.graphsGrid} item xs={4}>
              <div>
                <div
                  className={
                    props.dark
                      ? "writing-data-one-dark-mode"
                      : "writing-data-one"
                  }
                >
                  Writing Data
                </div>
                <div>
                  <Paper
                    elevation={0}
                    className={
                      props.dark
                        ? classes.writing_paper_dark_mode
                        : classes.writing_paper
                    }
                  >
                    <div
                      className={
                        props.dark
                          ? "savingSpeed-one-dark-mode"
                          : "savingSpeed-one"
                      }
                    >
                      Saving Speed
                    </div>
                    <div
                      className={
                        props.dark ? "saveSpeed-dark-mode" : "saveSpeed"
                      }
                    >
                      {isNaN(props?.saveSpeed) ? "-" : props?.saveSpeed} / min
                    </div>
                    <div>
                      {" "}
                      <span className="hover-data">
                        {" "}
                        <Writing write={props?.saveGraphdata} />{" "}
                      </span>
                    </div>
                  </Paper>
                </div>
              </div>

              <div>
                <div
                  className={
                    props.dark
                      ? "reading-data-one-dark-mode"
                      : "reading-data-one"
                  }
                >
                  Reading Data
                </div>
                <div>
                  <Paper
                    elevation={0}
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
                    <div
                      className={
                        props.dark ? "readSpeed-dark-mode" : "readSpeed"
                      }
                    >
                      {props?.readSpeed?.length > 0 ? props?.readSpeed : " - "}
                      /min
                    </div>
                    <span className="hover-data">
                      {" "}
                      <Reading read={props?.readGraphdata} />{" "}
                    </span>
                  </Paper>
                </div>
              </div>
            </Grid>
          </Grid>
        </DesktopView>

        <MobileView>
          <Grid
            container
            spacing={6}
            className={classes.mob_view_Gridcontainer}
          >
            <Grid className={classes.firstGrid} item xs={12}>
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

                  {basic &&
                    basic.length >= 1 &&
                    basic.map((response) => {
                      let value = response?.text || 0;
                      let author = response?.authorID || 0;
                      let str = response?.addedOn || 0;
                      let timeFormat = moment(str) || 0;
                      let time = timeFormat.format("LT") || 0;

                      let userId = response?.tweetId || 0;
                      // console.log('myuser--',userId)

                      function shortenValue(b, amountL = 80, stars = 1) {
                        return `${b?.slice(0, amountL)}${""?.repeat(
                          stars
                        )}${b?.slice(
                          // b.length - 3,
                          b?.length || 0
                        )}`;
                      }

                      return (
                        <>
                          <hr
                            className={
                              props.dark
                                ? classes.hr_page_dark_mode
                                : classes.hr_page
                            }
                          />
                          <a
                            style={{ textDecoration: "none" }}
                            href={"/archive/" + userId}
                          >
                            <Row>
                              <Typography
                                variant="h6"
                                className={
                                  props.dark
                                    ? classes.name_dark_mode
                                    : classes.name
                                }
                              >
                                {/* Lisa ray */}
                              </Typography>
                              <Paper
                                className={
                                  props.dark
                                    ? classes.mob_list_time_dark_mode
                                    : classes.mob_list_time
                                }
                              >
                                {time ? time : "-"}
                              </Paper>
                            </Row>

                            <Row>
                              <Column>
                                <Typography className={classes.email}>
                                  {author}
                                </Typography>
                                <ThemeProvider theme={theme}>
                                  <Paper
                                    // noWrap
                                    className={
                                      props.dark
                                        ? classes.content_dark_mode
                                        : classes.content
                                    }
                                    // gutterBottom
                                  >
                                    <div className="moblistingPagetruncating">
                                      {value.length > 0
                                        ? shortenValue(value) || "-"
                                        : "-"}
                                    </div>
                                  </Paper>
                                </ThemeProvider>
                              </Column>
                            </Row>
                          </a>
                        </>
                      );
                    })}

                  {advance &&
                    advance.length >= 1 &&
                    advance.map((response) => {
                      let value = response?.text || 0;
                      let author = response?.id || 0;
                      let authorName = response?.name || 0;
                      let str = response?.createdAt || 0;
                      let timeFormat = moment(str) || 0;
                      let time = timeFormat.format("LT") || 0;

                      let textId = response?.id || 0;
                      // console.log('texttt--',textId)
                      function shortenValue(b, amountL = 80, stars = 1) {
                        return `${b?.slice(0, amountL)}${""?.repeat(
                          stars
                        )}${b?.slice(
                          // b.length - 3,
                          b?.length || 0
                        )}`;
                      }
                      return (
                        <>
                          <hr
                            className={
                              props.dark
                                ? classes.hr_page_dark_mode
                                : classes.hr_page
                            }
                          />
                          <a
                            style={{ textDecoration: "none" }}
                            href={"/archive/" + textId}
                          >
                            <Row>
                              <Typography
                                variant="h6"
                                className={
                                  props.dark
                                    ? classes.name_dark_mode
                                    : classes.name
                                }
                              >
                                {/* {author} */}
                              </Typography>
                              <Paper
                                className={
                                  props.dark
                                    ? classes.mob_list_time_dark_mode
                                    : classes.mob_list_time
                                }
                              >
                                {time}
                              </Paper>
                            </Row>

                            <Row>
                              <Column>
                                <Typography className={classes.email}>
                                  {/* {handle.length > 0 ? '@' + handle || 0 : 'undefined'} */}
                                  {authorName.length > 0
                                    ? authorName + ".."
                                    : author}
                                </Typography>
                                <ThemeProvider theme={theme}>
                                  <Paper
                                    // noWrap
                                    className={
                                      props.dark
                                        ? classes.content_dark_mode
                                        : classes.content
                                    }
                                    // gutterBottom
                                  >
                                    <div className="moblistingPagetruncating">
                                      {value.length > 0
                                        ? shortenValue(value) || "-"
                                        : "-"}
                                    </div>
                                  </Paper>
                                </ThemeProvider>
                              </Column>
                            </Row>
                          </a>
                        </>
                      );
                    })}
                </Column>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
                <br />
                <br />
                <br />
              </Paper>
            </Grid>
          </Grid>
        </MobileView>
      </div>
    </div>
  );
}
