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
  const [advanceSearch ,setAdvancesearch] = useState({});


  const userId = useParams();
  const textId = useParams();
  // console.log('id---',userId?.tweet)


  // let id = '1415545036037492700'



  useEffect(() => {
    fetchbyBasicSearch();
    fetchbyAdvanceSearch();
  }, []);
  const fetchbyBasicSearch = () => {
    axios
      .get(
        "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/archived-tweet-from-testnet?id=" + userId?.tweet
      )
      .then((res) => {
        setSearch(res.data.responseData.responseData);
        // console.log("tweets----", res.data.responseData.responseData)
        // console.log('link---',url)
      })
      .catch((err) => {
        console.log("error-----", err);
      });
  };

  const fetchbyAdvanceSearch = () => {
    axios
      .get(
        "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/archived-tweet-from-testnet-advancesearch?id=" + textId?.tweet
      )
      .then((res) => {
        setAdvancesearch(res.data.responseData.responseData);
        console.log("tweets----", res.data.responseData.responseData)
        // console.log('link---',url)
      })
      .catch((err) => {
        console.log("error-----", err);
      });
  };

  // let adv = advanceSearch[0]
  // console.log('adv--',adv)

  let value = search[0]?.text
  let time = moment(search[0]?.createdAt).format('LT')
  let date = moment(search[0]?.createdAt).format('LL');
  // const colonIndex = value?.indexOf(":");
  const atIndex = value?.indexOf("@");
  let handler = value?.slice(atIndex, 10);
  let name = handler?.split("@")[1];
  let icon = name?.split(' ').map(x => x.charAt(0)).join('').substr(0, 1).toUpperCase()
  let link = value?.split("https://")[1];
  let tweetTextMessage = value?.split(":")[1];
  let dummyHandle = name?.slice(0, value?.length).replace(/\s/g, "").toLowerCase()
  // console.log('icon--', icon)
  // console.log('naame--', name)
  // console.log('hand---', handler)
  // console.log('tm--', tweetTextMessage)

  let advanceValue = advanceSearch[0]?.text
  // console.log('ad--',advanceValue)
  let advanceDate = moment(advanceSearch[0]?.createdAt).format('LL')
  // console.log('adv--',advanceTime)
  let advanceTime = moment(advanceSearch[0]?.createdAt).format('LT')
  // console.log('adv--',advanceDate)
  // console.log('advD--',advanceDate)
  // const advanceAtIndex = advanceValue?.indexOf("@");
  // let advanceHandler = advanceValue?.slice(advanceAtIndex, 10);
  // let advanceName = advanceHandler?.split("@")[1];
  // let advanceIcon = advanceName?.split(' ').map(x => x.charAt(0)).join('').substr(0, 1).toUpperCase()
  // let advanceDummyHandle = advanceName?.slice(0, value?.length).replace(/\s/g, "").toLowerCase()

  // function shortenTrend(
  //   b,
  //   amountL = 10,
  //   amountR = 3,
  //   stars = 3
  // ) {
  //   return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
  //     // b.length - 3,
  //     b.length
  //   )}`;
  // }
  // function shortenValue(b, amountL = 80, stars = 3) {
  //   return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
  //     // b.length - 3,
  //     b.length
  //   )}`;
  // }


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
                  <Avatar className={classes.avatar}>{icon ? icon : '-'}</Avatar>
                  <Name >
                    <Row className={classes.span_tweet}>
                      {name ? name + '...' : 'Undefined'}
                    </Row>
                    <Row>
                      <Email>
                        {handler ? handler + '...' : '@' + dummyHandle}
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
                    <Time> &nbsp;&nbsp;&nbsp;&nbsp;{search[0] ? (time ? time : 'Loading..') : (advanceTime ? advanceTime : 'Loading..')}&emsp;</Time>
                    <Date>&nbsp;{search[0] ? (date ? date : 'Loading..') : (advanceDate ? advanceDate : 'Loading..')}&emsp;</Date>
                    {/* <Twitterwebapp>&nbsp;Twitter Web App&nbsp;.</Twitterwebapp> */}
                  </Details>
                </Row>
                <br />
                {/* <hr className={classes.hr_page} /> */}
                {/* <Row className={classes.third_row}>
                  <Details>
                    <Time> &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className={classes.span_tweet}>13</span> ReadTweets
                      &emsp;.
                    </Time>
                    <Date>&nbsp;
                      <span className={classes.span_tweet}>3</span> QuoteTweets
                      &emsp;.
                    </Date>
                    <Twitterwebapp>&nbsp;
                      <span className={classes.span_tweet}>139</span> Likes
                      &nbsp;.
                    </Twitterwebapp>
                  </Details>
                </Row> */}
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
