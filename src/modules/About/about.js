import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Bannerimage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 700px) {
    display: none;
  }
  @media (min-width: 700px) {
    display: visible;
  }
`;
const MobBanner = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 700px) {
    display: visible;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;
const Insideimage = styled.img`
  width: 80%;
  height: auto;

  @media (max-width: 700px) {
    display: visible;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

const useStyles = makeStyles((theme) => ({
  main: {},
  uppercomponent: {
    position: "relative",
  },

  twitterDapp: {
    fontFamily: "Raleway,sans-serif",
    fontSize: "28px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#09184b",
    marginTop: "90px",
    backgroundColor: "#f5f6f9",
    boxShadow: "none",
    paddingBottom: "3%",
  },
  twitterDapp_dark_mode: {
    fontFamily: "Raleway,sans-serif",
    fontSize: "28px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#d6d6d6",
    marginTop: "90px",
    backgroundColor: "#0d0e2d",
    boxShadow: "none",
    paddingBottom: "3%",
  },

  paper: {
    width: "100%",
    height: "193px",
  },
  colorcontainer: {
    backgroundColor: "#f5f6f9;",
  },
  colorcontainer_dark_mode: {
    backgroundColor: "#0d0e2d",
  },

  firstrow: {
    justifyContent: "center",
    paddingBottom: "2%",
  },
  secondrow: {
    // marginLeft: '20px',
    justifyContent: "center",
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  "@media (min-width: 0px) and (max-width: 499px)": {
    firstrow: {
      display: "flex !important",
      flexFlow: "row nowrap",
      flexDirection: "column !important",
      justifyContent: "center",
      alignItems: "center",
    },
    secondrow: {
      display: "flex !important",
      flexFlow: "row nowrap",
      flexDirection: "column !important",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  "@media (min-width: 500px) and (max-width: 767px)": {
    firstrow: {
      display: "flex !important",
      flexFlow: "row nowrap",
      flexDirection: "column !important",
      justifyContent: "center",
      alignItems: "center",
    },
    secondrow: {
      display: "flex !important",
      flexFlow: "row nowrap",
      flexDirection: "column !important",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  "@media (min-width: 768px) and (max-width: 1079px)": {
    firstrow: {
      display: "grid !important",
      justifyContent: "center !important",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    secondrow: {
      display: "grid !important",
      justifyContent: "center !important",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  "@media (min-width: 1081px)": {
    firstrow: {
      display: "flex !important",
      flexFlow: "row nowrap",
      gridGap: "45px",
      justifyContent: "center",
      alignItems: "center",
    },
    secondrow: {
      display: "flex",
      flexFlow: "row nowrap",
      gridGap: "45px",
      marginLeft: "20px",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  columnone: {
    padding: "30px",
    // marginRight: '18px'
  },
  columntwo: {
    padding: "16px",
    // width: "90%",
  },
  all_head_text: {
    color: "#09184b",
    fontSize: "18px",
    fontWeight: 500,
  },
  all_head_text_dark_mode: {
    color: "#d6d6d6",
    fontSize: "18px",
    fontWeight: 500,
  },
  alltext: {
    color: "#09184b",
    fontSize: "13px",
    fontWeight: 700,
  },
  alltext_dark_mode: {
    color: "#d6d6d6",
    fontSize: "12px",
    fontWeight: 700,
  },

  imagegrid: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  imagesGrid: {
    display: "flex",
    justifyContent: "center",
  },
}));
const Img = styled.img`
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Span = styled.span`
  font-family: "Raleway,sans-serif";
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  position: absolute;
  top: 20%;
  left: 7%;

  @media (max-width: 430px) {
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    position: absolute;
    top: 20px;
    left: 25%;
  }
  @media (min-width: 430px) and (max-width: 700px) {
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    position: absolute;
    top: 20px;
    left: 30%;
  }
`;
const Content = styled.span`
  width: 50%;
  height: 62%;
  font-family: Raleway, sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  position: absolute;
  top: 38%;
  left: 7%;

  @media (max-width: 430px) {
    width: 90%;
    height: 47%;
    overflow: hidden;
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    position: absolute;
    top: 50px;
  }

  @media (min-width: 430px) and (max-width: 700px) {
    width: 90%;
    height: 47%;
    overflow: hidden;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    position: absolute;
    top: 10%;
  }
  @media (min-width: 700px) {
    height: 52%;
    overflow: hidden;
  }
`;

const Heading = styled.span`
  font-family: Raleway, sans-serif;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.28;
  letter-spacing: normal;
  text-align: center;
  color: #d6d6d6;
`;
const Subheading = styled.span`
  font-family: Raleway, sans-serif;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #d6d6d6;
`;

export default function Aboutcomponent(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.uppercomponent}>
            <Span>About XDC Speed Test</Span>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure <br />{" "}
              dolor reprehenderit in voluptate velit esse cillum dolore eu{" "}
              <br /> consequat. Duis aute irure <br /> dolor reprehenderit in
              voluptate
            </Content>
            <Bannerimage src={require("../About/Banner.png")} />

            <MobBanner src={require("../About/MainHeader.png")} />

            <div className="mobSecondimage">
              <Insideimage src={require("../About/Webshot.png")} />
            </div>
          </div>
        </Grid>

        <Grid
          item
          spacing={8}
          xs={12}
          className={
            props.dark
              ? classes.colorcontainer_dark_mode
              : classes.colorcontainer
          }
        >
          <Paper
            className={
              props.dark ? classes.twitterDapp_dark_mode : classes.twitterDapp
            }
          >
            XDC Speed Test features
          </Paper>

          <Grid container spacing={0} className={classes.imagegrid}>
            <Column>
              <Row className={classes.firstrow}>
                <Grid className={classes.imagesGrid}>
                  <Column className={classes.columnone}>
                    <Img src="/images/savingspeed.svg"></Img>

                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        {" "}
                        Saving Speed
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        {" "}
                        The saved tweets per second track
                        <br />
                        the rate of record-keeping
                      </span>
                    </Subheading>
                  </Column>
                </Grid>

                <Grid>
                  <Column className={classes.columnone}>
                    <Img src="/images/readingspeed.svg"></Img>

                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Reading Speed
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        The read tweets per second track the
                        <br /> rate of record-keeping
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
                <Grid>
                  <Column className={classes.columnone}>
                    <Img src="/images/savedtweets.svg" />

                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Saved Tweets
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        Number of tweets saved in d-app
                        <br /> platform
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
                <Grid>
                  <Column className={classes.columnone}>
                    <Img src="/images/ReadTweets.png" />

                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Read Tweets
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        Number of read tweets by d-app
                        <br /> platform
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
              </Row>

              <Row className={classes.secondrow}>
                <Grid>
                  <Column className={classes.columntwo}>
                    {" "}
                    <Img src="/images/toptrending.svg" />
                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Top trending
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        This twitter decentralized
                        <br /> application pertually records the top
                        <br /> 20 hashtags on twitter on to the XDC.
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
                <Grid>
                  <Column className={classes.columntwo}>
                    {" "}
                    <Img src="/images/currentmax.svg" />
                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Current Max TPS
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        The speed of the current
                        <br /> and maximum transactions completed on the <br />{" "}
                        platform twitter on to the XDC.
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
                <Grid>
                  <Column className={classes.columntwo}>
                    {" "}
                    <Img src="/images/Searchabc.svg" />
                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Search
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        Search your saved tweets
                        <br /> even if they are deleted on the platform
                        <br /> twitter on to the XDC.
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
                <Grid>
                  <Column className={classes.columntwo}>
                    {" "}
                    <Img src="/images/tweetarchiveimg.webp"></Img>
                    <Heading>
                      <span
                        className={
                          props.dark
                            ? classes.all_head_text_dark_mode
                            : classes.all_head_text
                        }
                      >
                        Tweet Archive
                      </span>
                    </Heading>
                    <Subheading>
                      <span
                        className={
                          props.dark
                            ? classes.alltext_dark_mode
                            : classes.alltext
                        }
                      >
                        Tweets are archived on
                        <br /> the network and therefore are retrievable
                        <br /> on twitter on to the XDC.
                      </span>
                    </Subheading>
                  </Column>
                </Grid>
              </Row>
            </Column>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
