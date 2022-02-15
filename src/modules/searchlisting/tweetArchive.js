import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
// import Popup from "../popupbox";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import "../../assets/styles/custom.css";
import HeaderComponent from "./archiveHeader";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FooterComponent from "../Footer/footer";
import { Icon } from "@material-ui/core";
import moment from "moment";
import Header from "../Header/header";
import Loader from "./loader";

const Container = styled.div`
  width: 500px;
  height: 100%;
  background-color: #ffffff;
  border: solid 0.5px #d3d3d3;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 2000px) {
    width: 100%;
  }
`;

const Heading = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 15px;
  padding-top: 3%;
  padding-left: 4%;
  // box-sizing: border-box;
  // width: 100%;
  // border: solid #5B6DCD 1px;
  // padding: 5px;
  // border-top: none;
  // border-right: none;
  // border-bottom: visible;
  // border-left: none;
`;

const BackArrow = styled.span`
  color: #1e90ff;
  font-size: 15px;
  padding-top: 3%;
  padding-left: 2%;
`;
const Tweetdata = styled.span`
  font-family: "Raleway", sans-serif !important;
  box-sizing: border-box;
  width: 100%;
  border: solid #5b6dcd 1px;
  border: none;
  padding: 3%;
`;
const Imagedata = styled.span`
  font-family: "Raleway", sans-serif !important;
  box-sizing: border-box;
  width: 100%;
  border: solid #5b6dcd 1px;
  border-radius: 15px;
  border: Visible;
  // padding: 1%;
`;
const Name = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 15px;
  margin-left: 1%;
`;
const Email = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 11px;
`;
const Time = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const QuoteTweet = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const QuoteTweetcount = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Likes = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Date = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Twitterwebapp = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Retweets = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Retweetscount = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Likescount = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Like = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 10px;
`;
const Details = styled.div`
  border: none;
`;
const Mainbox = styled.div`
  display: flex;
  justify-content: center;
  /* @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  } */
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // justifyContent: 'flex-end',
    justifyContent: "center",
  },
  mainColumn: {
    width: "100%",
  },

  first_row: {
    padding: "2%",
  },
  second_row: {
    paddingTop: "2%",
  },
  third_row: {
    paddingBottom: "3%",
  },

  avatar: {
    marginLeft: "2%",
  },
  span_tweet: {
    fontWeight: "bold",
    fontSize: "20",
  },
  popupgrid: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px",
  },
  hr_page: {
    width: "100%",
    color: "red",
    marginLeft: "auto",
    marginRight: "auto",
  },
  mainLoaderRow: {
    display: "flex",
    flexFlow: "row-nowrap",
  },
  "@media (min-width: 0px) and (max-width: 766px)": {
    mainLoaderRow: {
      padding: "0px 76px",
      width: "100%",
    },
  },
  "@media (min-width: 2000px)": {
    mainLoaderRow: {
      width: "500px",
      height: "100%",
    },
  },
}));
export default function TweetArchive(props) {
  const classes = useStyles();
  const textId = useParams();
  const [search, setSearch] = useState({});
  const [advanceSearch, setAdvancesearch] = useState({});
  const [isLoading, setLoading] = useState(true);

  // mode: 
  
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };
  const [dark, setMode] = useState(getMode());

  const CheckMode = (mode) => {
    // console.log('hello--',mode ? "Dark" : "Light",mode)
    localStorage.setItem("mode", mode);
    setMode(mode)
  }

  useEffect(() => {
    fetchbyAdvanceSearch();
  }, []);

  const fetchbyAdvanceSearch = () => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER +
          process.env.REACT_APP_ARCHIVE_TWEET_FROM_TESTNET_FOR_ADVANCE_SEARCH +
          textId?.tweet
      )
      .then((res) => {
        // console.log('res',res.data.responseData[0])
        let advancearchiveTweet = [];
        if (
          !res &&
          !res.data &&
          !res.data.responseData &&
          res.data.responseData[0].length <= 0
        )
          advancearchiveTweet = [];
        else advancearchiveTweet = res.data.responseData || 0;
        setAdvancesearch(advancearchiveTweet);
        setLoading(false);
      })
      .catch((err) => {
        console.log("er--", err);
      });
  };

  let value = search[0]?.text || "";
  let createBasicTime = search[0]?.createdAt || "-";
  let date = moment(createBasicTime).format("LL");
  let time = moment(createBasicTime).format("LT");

  let advanceValue = advanceSearch[0]?.text || "";
  let advanceName = advanceSearch[0]?.name || "-";
  let createAdvanceTime = advanceSearch[0]?.createdAt || "-";
  let advanceDate = moment(createAdvanceTime).format("LL");
  let advanceTime = moment(createAdvanceTime).format("LT");
  let advanceIcon =
    advanceName[0]
      ?.split(" ")
      ?.map((x) => x.charAt(0))
      ?.join("")
      ?.substr(0, 1)
      ?.toUpperCase() || "-";
  let handle = "@"+ advanceName
    ?.slice(0, advanceName?.length)
    ?.replace(/\s/g, "")
    ?.toLowerCase();

  return (
    <>
      {/* <HeaderComponent archiveId={userId?.tweet} /> */}
      <Header CheckMode={CheckMode} />
      <br />
      {isLoading ? (
        <Grid xs={12}>
          <Mainbox>
            <Row className={classes.mainLoaderRow}>
              <Container>
                <Column className={classes.mainColumn}>
                  <Row>
                    {/* <BackArrow>
                      <a href="/">
                        <ArrowBackIcon />
                      </a>
                    </BackArrow> */}
                    <Heading className={classes.span_tweet}>
                      <span className={classes.span_tweet}>Tweet</span>
                    </Heading>
                  </Row>
                  <hr className={classes.hr_page} />
                  <Row>
                    <Avatar className={classes.avatar}>-</Avatar>
                    <Name>
                      <Row className={classes.span_tweet}>{""}</Row>
                      <Row>
                        <Email>{""}</Email>
                      </Row>
                    </Name>
                  </Row>
                  <br />
                  <Row>
                    <Tweetdata>
                      {""}
                      <Loader />
                      {""}
                    </Tweetdata>
                  </Row>
                  <hr className={classes.hr_page} />
                  <Row className={classes.second_row}>
                    <Details>
                      <Time>
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {""}
                        &emsp;
                      </Time>
                      <Date>
                        &nbsp;
                        {""}
                        &emsp;
                      </Date>
                    </Details>
                  </Row>
                  <br />
                </Column>
              </Container>
            </Row>
          </Mainbox>
        </Grid>
      ) : (
        <Grid xs={12}>
          <Mainbox>
            <Row className={classes.mainLoaderRow}>
              <Container>
                <Column className={classes.mainColumn}>
                  <Row>
                    {/* <BackArrow>
                      <a href="/">
                        <ArrowBackIcon />
                      </a>
                    </BackArrow> */}
                    <Heading className={classes.span_tweet}>
                      <span className={classes.span_tweet}>Tweet</span>
                    </Heading>
                  </Row>
                  <hr className={classes.hr_page} />
                  <Row>
                    <Avatar className={classes.avatar}>
                      {advanceSearch ? advanceIcon : "-"}
                    </Avatar>
                    <Name>
                      <Row className={classes.span_tweet}>
                        {advanceSearch ? advanceName : "-"}
                      </Row>
                      <Row>
                        <Email>
                          {/* {advanceSearch ? handle : ""} */}
                          </Email>
                      </Row>
                    </Name>
                  </Row>
                  <br />
                  <Row>
                    <Tweetdata>
                      <span className={classes.span_tweet}>
                        {advanceSearch[0]
                          ? advanceValue
                            ? advanceValue
                            : "Loading..."
                          : value
                          ? value
                          : "Loading..."}
                      </span>
                    </Tweetdata>
                  </Row>
                  <hr className={classes.hr_page} />
                  <Row className={classes.second_row}>
                    <Details>
                      <Time>
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {advanceSearch
                          ? advanceTime
                            ? advanceTime
                            : "Loading.."
                          : time
                          ? time
                          : "Loading.."}
                        &emsp;
                      </Time>
                      <Date>
                        &nbsp;
                        {advanceSearch
                          ? advanceDate
                            ? advanceDate
                            : "Loading.."
                          : date
                          ? date
                          : "Loading.."}
                        &emsp;
                      </Date>
                    </Details>
                  </Row>
                  <br />
                </Column>
              </Container>
            </Row>
          </Mainbox>
        </Grid>
      )}
      <br />
      <br />
    </>
  );
}
