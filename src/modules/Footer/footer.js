import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Container = styled.div``;
const Subcontainer = styled.div`
  background-color: #191d43;

  height: 170px;
`;
const Link = styled.span`
  color: #ffffff;
  font-size: 16px;
  margin-left: 13%;
  margin-top: 3%;
`;
const Followus = styled.span`
  color: #ffffff;
  margin-top: 3%;
  font-size: 16px;
  margin-left: 27%;
`;
const Xinfinimage = styled.img`
  width: 5%;
  height: 5%;
  margin-left: 70%;
  margin-top: -5%;
`;

const Poweredby = styled.span`
  color: #ffffff;
  margin-top: -52px;
  margin-left: 1%;
  font-size: 26px;
`;
const Archivetweet = styled.span`
  color: #ffffff;
  font-size: 14px;
  margin-left: 13%;
  margin-top: 1%;
`;
const Share = styled.span`
  color: #ffffff;
  font-size: 14px;

  margin-left: 1%;
  margin-top: 1%;
`;
const Contactus = styled.span`
  color: #ffffff;
  font-size: 14px;
  margin-left: 1%;
  margin-top: 1%;
`;
const PrivacyPolicy = styled.span`
  color: #ffffff;
  font-size: 14px;
  margin-left: 1%;
  margin-top: 1%;
`;
const Facebookimage = styled.img``;
const TweetImage = styled.img`
  margin-left: 9%;
`;
const Gitimage = styled.img``;
const Linkedinimage = styled.img``;
const Telegramimage = styled.img``;
const Redditimage = styled.img``;
export default function FooterComponent() {
  return (
    <Container>
      <Subcontainer>
        <Column>
          <Row>
            <Link>other Links</Link>
            <Followus>Follow us on</Followus>
            {/* <Xinfinimage src="/images/xinfintwitter.png" />
            <Poweredby>Powered By XDC</Poweredby> */}
          </Row>
          <Row>
            <Archivetweet>Archive Tweet</Archivetweet>
            <Share>Share</Share>
            <Contactus>Contact us</Contactus>
            <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
            <TweetImage src="/images/twitter.svg" />
            <Facebookimage src="/images/facebook.svg" />
            <Gitimage src="/images/github.svg" />
            <Linkedinimage src="/images/linkedin.svg" />
            <Telegramimage src="/images/telegram.svg" />
            <Redditimage src="/images/reddit.svg" />
          </Row>
          <Row>
            <Xinfinimage src="/images/xinfintwitter.png" />
            <Poweredby>Powered By XDC</Poweredby>
          </Row>
        </Column>
      </Subcontainer>
    </Container>
  );
}
