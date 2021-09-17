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

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #2149b9;
`;
const Image = styled.img`
  padding: 10px;
  margin-left: 55px;
  width: 57px;
  margin-top: 10px;
`;
const MobileImage = styled.img`
  padding: 10px;
  margin-left: -10px;
  width: 57px;
  margin-top: 3px;
`;
const Span = styled.span`
  color: #ffffff;
  background-color: #2149b9;
  font-size: 21px;
  margin-top: 26px;
  font-weight: 600;
  font-family: "Raleway", sans-serif !important;
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
            <a href="/">
              <Image src={require("../Header/TwitterLogo.png")} />
            </a>
            <Span>XDC Speed Test</Span>
          </Row>
        </Container>
      </DesktopView>
    </>
  );
}
