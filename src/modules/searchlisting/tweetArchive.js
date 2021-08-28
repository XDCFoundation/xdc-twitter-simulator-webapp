import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
// import Popup from "../popupbox";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useLocation, useParams } from 'react-router-dom';
import '../../assets/styles/custom.css';
import HeaderComponent from "./archiveHeader";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FooterComponent from "../Footer/footer";
import { Icon } from "@material-ui/core";
import moment from 'moment';


const Container = styled.div`
  width: 500px;
  height: 100%;
  background-color: #ffffff;
  border: solid 0.5px #D3D3D3;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 2000px)  {
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
  color: #1E90FF;
  font-size: 15px;
  padding-top: 3%;
  padding-left: 2%;
`;
const Tweetdata = styled.span`
  font-family: "Raleway", sans-serif !important;
  box-sizing: border-box;
  width: 100%;
  border: solid #5B6DCD 1px;
  border: none;
  padding: 3%;
`;
const Imagedata = styled.span`
  font-family: "Raleway", sans-serif !important;
  box-sizing: border-box;
  width: 100%;
  border: solid #5B6DCD 1px;
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
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'flex-end',
    justifyContent: 'center'
  },
  mainColumn: {
    width: '100%',
  },

  first_row: {
    padding: '2%',
  },
  second_row: {
    paddingTop: '2%'
  },
  third_row: {
    paddingBottom: '3%'
  },

  avatar: {
    marginLeft: "2%",
  },
  span_tweet: {
    fontWeight: 'bold',
    fontSize: '20',
  },
  popupgrid: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px",
  },
  hr_page: {
    width: '100%',
    color: 'red',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}));
export default function TweetArchive() {
  const classes = useStyles();
  const [search, setSearch] = useState({});
  const [advanceSearch, setAdvancesearch] = useState({});


  const userId = useParams();
  const textId = useParams();
  // console.log('id---',userId?.tweet)
  // let id = '1415545036037492700'

  useEffect(() => {
    fetchbyBasicSearch();
  }, []);
  useEffect(() => {
    fetchbyAdvanceSearch();
  }, []);
  const fetchbyBasicSearch = () => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_ARCHIVE_TWEET_FROM_TESTNET + userId?.tweet
      )
      .then((res) => {
        let basicarchiveTweet = []
        if (
          !res &&
          !res.data &&
          !res.data.responseData &&
          res.data.responseData.length <= 0
        )
          basicarchiveTweet = [];
        else basicarchiveTweet = res.data.responseData.responseData || 0;
        setSearch(basicarchiveTweet);
      })
      .catch((err) => {
        console.log("error-----", err);
      });
  };

  const fetchbyAdvanceSearch = () => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_ARCHIVE_TWEET_FROM_TESTNET_FOR_ADVANCE_SEARCH + textId?.tweet
      )
      .then((res) => {
        let advancearchiveTweet = []
        if (
          !res &&
          !res.data &&
          !res.data.responseData &&
          res.data.responseData[0].length <= 0
        )
          advancearchiveTweet = [];
        else advancearchiveTweet = res.data.responseData.responseData || 0;
        setAdvancesearch(advancearchiveTweet);
      })
      .catch((err) => {
        console.log("error-----", err);
      });
  };


  let value = search[0]?.text || 0
  // console.log('val--', value)
  let time = moment(search[0]?.addedOn).format('LL') || 0
  let date = moment(search[0]?.addedOn).format('LT') || 0
  // console.log('t---',time)
  // console.log('t---',date)
  // const colonIndex = value?.indexOf(":");
  // const atIndex = value?.indexOf("@") || 0;
  // let handler = value?.slice(atIndex, 10) || 0;
  // let name = handler?.split("@")[1] || 0;
  // let icon = name?.split(' ').map(x => x.charAt(0)).join('').substr(0, 1).toUpperCase() || 0
  // let link = value?.split("https://")[1];
  // let tweetTextMessage = value?.split(":")[1];
  // let dummyHandle = name?.slice(0, value?.length).replace(/\s/g, "").toLowerCase() || 0
  // console.log('icon--', icon)
  // console.log('naame--', name)
  // console.log('hand---', handler)
  // console.log('tm--', tweetTextMessage)

  let advanceValue = advanceSearch[0]?.text || 0
  let advanceDate = moment(advanceSearch[0]?.addedOn).format('LL') || 0
  let advanceTime = moment(advanceSearch[0]?.addedOn).format('LT') || 0
  // console.log('adv--',advanceDate)
  // console.log('advD--',advanceDate)
  // const advanceAtIndex = advanceValue?.indexOf("@");
  // let advanceHandler = advanceValue?.slice(advanceAtIndex, 10);
  // let advanceName = advanceHandler?.split("@")[1];
  // let advanceIcon = advanceName?.split(' ').map(x => x.charAt(0)).join('').substr(0, 1).toUpperCase()
  // let advanceDummyHandle = advanceName?.slice(0, value?.length).replace(/\s/g, "").toLowerCase()

  return (
    <>
      <HeaderComponent archiveId={userId?.tweet} />
      <br />
      <Grid xs={12} >
        <Mainbox >
          <Row>
            <Container >
              <Column className={classes.mainColumn} >
                <Row>
                  <BackArrow >
                    <a href='/'>
                      <ArrowBackIcon />
                    </a>
                  </BackArrow>
                  <Heading className={classes.span_tweet}>
                    <span className={classes.span_tweet}>TWEET</span>
                  </Heading>
                </Row>
                <hr className={classes.hr_page} />
                <Row>
                  <Avatar className={classes.avatar}>
                    {/* {icon || 0} */}
                  </Avatar>
                  <Name >
                    <Row className={classes.span_tweet}>
                      {/* {name || 0} */}
                    </Row>
                    <Row>
                      <Email>
                        {/* {handler || 0} */}
                      </Email>
                    </Row>
                  </Name>
                </Row>
                <br />
                <Row>
                  <Tweetdata  >
                    <span className={classes.span_tweet}>
                      {search[0] ? (value ? value : 'Loading...') : (advanceValue ? advanceValue : 'Loading...')}

                    </span>
                  </Tweetdata>
                </Row>
                {/* <Row className={classes.first_row}>
                  <Imagedata >
                    <img style={{ width: '100%', borderRadius: '10px' }} src="https://th.bing.com/th/id/OIP.sgPKPg5FwX8MKUlnFdtMuAHaDs?w=324&h=174&c=7&o=5&dpr=1.25&pid=1.7" />
                  </Imagedata>
                </Row> */}
                <hr className={classes.hr_page} />
                <Row className={classes.second_row}>
                  <Details>
                    <Time> &nbsp;&nbsp;&nbsp;&nbsp;
                      {/* {search[0] ? (time ? time : 'Loading..') : (advanceTime ? advanceTime : 'Loading..')} */}
                      &emsp;</Time>
                    <Date>&nbsp;
                      {/* {search[0] ? (date ? date : 'Loading..') : (advanceDate ? advanceDate : 'Loading..')} */}
                      &emsp;</Date>
                    {/* <Twitterwebapp>&nbsp;Twitter Web App&nbsp;.</Twitterwebapp> */}
                  </Details>
                </Row>
                <br />
              </Column>
            </Container>
          </Row>
        </Mainbox>
      </Grid>
      <br /><br />
      {/* <FooterComponent /> */}
    </>
  );
}
