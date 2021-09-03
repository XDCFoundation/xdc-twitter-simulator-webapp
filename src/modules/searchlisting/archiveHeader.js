import styled, { css } from "styled-components";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";

import React, { useState } from "react";
import { Grid } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  span: {
    marginTop: "16px",
    fontFamily: "Raleway,sans-serif !important",
    fontSize: "18px",
    display: "flex",
  },
  no_of_tweets_archived: {
    fontFamily: "Raleway,sans-serif !important",
    marginRight: "4px",
  },
}));

const DesktopView = styled.div`
@media (min-width: 0px) and (max-width: 767px) {
 display: visible;
}
@media (min-width: 768px) {
  display: visible;
}
`;


// const MobileView = styled.div`
// @media (min-width: 0px) and (max-width: 767px) {
//   display: visible;
// }
// @media (min-width: 768px) {
//   display: none;
// }
// `;


const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #191d43;
`;
const Image = styled.img`
  padding: 10px;
  margin-left: 45px;
  width: 57px;
  margin-top: 3px;
`;
const MobileImage = styled.img`
  padding: 10px;
  margin-left: -10px;
  width: 57px;
  margin-top: 3px;
`;
const Span = styled.span`
  color: #ffffff;
  background-color: #191d43;
  font-size: 19px;
  margin-top: 21px;
  font-weight: 600;
  font-family: "Raleway", sans-serif !important;
  margin-left: -11px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
`;


export default function Headerconditional() {
  const classes = useStyles();
  return (
    <>
      <DesktopView>
        <Container>
          <Row>
            <Image src="/images/tweetarchive.svg" />
            <Span>TweetArchive</Span>
          </Row>
        </Container>
      </DesktopView>

      {/* <MobileView>
        <Container>
          <Grid item xs={12}>
            <Row>
              <MobileImage src="/images/tweetarchive.svg" />
              <Span>TweetArchive</Span>
            </Row>
          </Grid>
        </Container>
      </MobileView> */}
    </>
  );
}
