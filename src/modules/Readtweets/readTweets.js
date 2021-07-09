import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "../styles/App.css";
import Divider from '@material-ui/core/Divider';
import axios from "axios";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
const IconImg = styled.img`
  margin-left: 10px;
  height: 14px;
  width: 14px;
  margin-top: 1px;
`;


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
    marginRight: "1.5%",
  },

  paper_dark_mode: {
    // padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginTop: "-7%",
    marginRight: "1.5%",
    backgroundColor: '#191d43',
    color: 'white'
  },

  tweetnumber: {
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "4.5%",
    fontSize: "26px",
    marginTop: "12px",
    marginRight: "17px",
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
    right: "4.5%",
    fontSize: "26px",
    marginTop: "12px",
    fontWeight: "600",
    marginRight: "17px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "left",
    color: "white",
    backgroundColor: '#191d43',
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
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",
    marginBottom: "5px",
  },

  name_dark_mode: {
    fontSize: "11px",
    color: "#09184b",
    whiteSpace: "nowrap",
    fontFamily: "Raleway",
    marginLeft: "18px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "normal",
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
    // marginBottom:"5px",
    // border: "solid 1px rgb(243 242 242)",
    fontFamily: "Raleway",
    fontSize: "11px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "0.5px",
    textAlign: "left",
    color: "#09184b",
    marginLeft: "18px",

  },

  content_dark_mode: {
    fontSize: "11px",
    color: "#09184b",
    boxShadow: "none",
    border: "none",
    // marginBottom:"5px",
    // border: "solid 1px rgb(243 242 242)",
    fontFamily: "Raleway",
    fontSize: "11px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "0.5px",
    textAlign: "left",
    color: "white",
    backgroundColor: "#191d43",
    marginLeft: "18px",

  },

  time: {
    color: "#8290a4",
    boxShadow: "none",
    position: "absolute",
    right: "4.5%",
    // fontFamily: "Raleway",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.15",
    marginRight: "17px",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#8290a4",
    marginBottom: "5px",
    marginLeft: "18px",
  },

  time_dark_mode: {
    color: "#8290a4",
    boxShadow: "none",
    position: "absolute",
    right: "4.5%",
    // fontFamily: "Raleway",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.15",
    letterSpacing: "normal",
    textAlign: "left",
    marginRight: "17px",
    color: "#8290a4",
    backgroundColor: '#191d43',
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

}));


export default function ReadTweets(props) {
  const classes = useStyles();

  // const [readtweets, setReadTweets] = useState([]);
  // useEffect(() => {
  //   fetchTweets();
  // }, []);
  // const fetchTweets = () => {
  //   axios
  //     .get(
  //       " "
  //     )
  //     .then((res) => {
  //       // alert(JSON.stringify(res));
  //       setReadTweets(res.data.responseData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  return (
    <Grid Container spacing={3}>
      <Grid item xs={12}>
        <div>
          <Paper className={props.dark ? classes.paper_dark_mode : classes.paper} elevation={0}>

            <Column>

              <Row  className={classes.row}>

                <Typography
                  className={props.dark ? classes.readtweet_dark_mode : classes.readtweet}
                  variant="h5"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Read Tweets
                  <Tippy
                    placement={"right"}
                    theme={"light"}
                    maxWidth={"none"}
                    content={
                      <span
                        style={{
                          color: "#0d0e2d",
                          fontSize: "11px",
                          fontWeight: "600",
                        }}
                      >
                        Number of read tweets by d-app platform
                      </span>
                    }
                  >
                    <IconImg src="../../images/ic.png" />
                  </Tippy>
                </Typography>
                {/* <Divider /> */}
                <Paper
                  variant="h5" className={props.dark ? classes.tweetnumber_dark_mode : classes.tweetnumber}

                >
                  740k
                </Paper>

              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page}
              />
              <Row>
                <Typography
                  variant="h6"
                  className={props.dark ? classes.name_dark_mode : classes.name}

                >
                  Lisa Ray
                </Typography>
                <Paper
                  className={props.dark ? classes.time_dark_mode : classes.time}

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

                      className={props.dark ? classes.content_dark_mode : classes.content}
                      gutterBottom

                    >

                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </ThemeProvider>
                </Column>
              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page} />
              <Row>
                <Typography
                  variant="h6"
                  className={props.dark ? classes.name_dark_mode : classes.name}

                >
                  Harry Golding
                </Typography>
                <Paper
                  className={props.dark ? classes.time_dark_mode : classes.time}

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
                  {/* <Divider /> */}
                  <Paper

                    className={props.dark ? classes.content_dark_mode : classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page} />
              <Row>
                <Typography
                  variant="h6" className={props.dark ? classes.name_dark_mode : classes.name}

                >
                  Claire Browne
                </Typography>

                <Paper

                  className={props.dark ? classes.time_dark_mode : classes.time}
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

                    className={props.dark ? classes.content_dark_mode : classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page} />
              <Row>
                <Typography
                  variant="h6"
                  className={props.dark ? classes.name_dark_mode : classes.name}

                >
                  Shawn
                </Typography>
                <Paper
                  className={props.dark ? classes.time_dark_mode : classes.time}

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
                    className={props.dark ? classes.content_dark_mode : classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page} />
              <Row>
                <Typography
                  variant="h6"
                  className={props.dark ? classes.name_dark_mode : classes.name}

                >
                  Jack Ryan
                </Typography>
                <Paper

                  className={props.dark ? classes.time_dark_mode : classes.time}
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

                    className={props.dark ? classes.content_dark_mode : classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page} />
              <Row>
                <Typography
                  variant="h6"
                  className={props.dark ? classes.name_dark_mode : classes.name}

                >
                  Cersie Lannister
                </Typography>
                <Paper
                  className={props.dark ? classes.time_dark_mode : classes.time}
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

                    className={props.dark ? classes.content_dark_mode : classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page} />
              <Row>
                <Typography
                  variant="h6"
                  className={props.dark ? classes.name_dark_mode : classes.name}

                >
                  J Cole
                </Typography>
                <Paper
                  className={props.dark ? classes.time_dark_mode : classes.time}

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

                    className={props.dark ? classes.content_dark_mode : classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page} />
              <Row>
                <Typography
                  variant="h6"
                  className={props.dark ? classes.name_dark_mode : classes.name}

                >
                  Harry Maguire
                </Typography>
                <Paper
                  className={props.dark ? classes.time_dark_mode : classes.time}
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

                    className={props.dark ? classes.content_dark_mode : classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page} />
              <Row>
                <Typography
                  variant="h6"
                  className={props.dark ? classes.name_dark_mode : classes.name}

                >
                  Harry Maguire
                </Typography>
                <Paper
                  className={props.dark ? classes.time_dark_mode : classes.time}
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

                    className={props.dark ? classes.content_dark_mode : classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page} />
              <Row>
                <Typography
                  variant="h6"
                  className={props.dark ? classes.name_dark_mode : classes.name}

                >
                  Harry Maguire
                </Typography>
                <Paper
                  className={props.dark ? classes.time_dark_mode : classes.time}
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

                    className={props.dark ? classes.content_dark_mode : classes.content}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </Paper>
                </Column>
              </Row>
              <hr className={props.dark ? classes.hr_page_dark_mode : classes.hr_page} />
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
