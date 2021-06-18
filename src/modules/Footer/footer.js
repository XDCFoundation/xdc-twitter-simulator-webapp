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
  padding: 45px;
`;
const Followus = styled.span`
  color: #ffffff;
  padding: 45px;
  font-size: 16px;
`;
const Xinfinimage = styled.img`
  width: 5%;
  height: 5%;
`;

const Poweredby = styled.span`
  color: #ffffff;
  padding: 45px;
  font-size: 16px;
`;
const Archivetweet = styled.span`
  color: #ffffff;
  font-size: 16px;
`;
const Share = styled.span`
  color: #ffffff;
  font-size: 16px;
`;
const Contactus = styled.span`
  color: #ffffff;
  font-size: 16px;
`;
const PrivacyPolicy = styled.span`
  color: #ffffff;
  font-size: 16px;
`;
const Facebookimage = styled.img``;
const TweetImage = styled.img``;
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
            <Xinfinimage src="/images/xinfintwitter.png" />
            <Poweredby>Powered By XDC</Poweredby>
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
        </Column>
      </Subcontainer>
    </Container>
  );
}
