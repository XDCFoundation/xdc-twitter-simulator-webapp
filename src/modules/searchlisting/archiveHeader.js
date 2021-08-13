import styled, { css } from "styled-components";
import { Row, Column } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState } from "react";

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
  margin-left: 12px;
  width: 57px;
  margin-top: 3px;
`;
const Span = styled.span`
  color: #ffffff;
  font-size: 19px;
  margin-top: 21px;
  font-weight: 600;
  font-family: "Raleway", sans-serif !important;
  margin-left: -11px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
`;
const Input = styled.input`
  background-color: #3d4270;
  border-radius: 4px;
  font-family: WorkSans-Roman !important;
  color: #ffffff;
  border: none;
  height: 32px;
  width: 40%;
  margin-left: 33px;
  margin-top: 18px;
`;
const Button = styled.button`
  color: #ffffff;
  height: 32px;

  width: 96px;
  padding: 10px;
  margin-top: 18px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #5760bc;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.28;
  font-family: "IBM Plex Sans", sans-serif !important;
`;
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
export default function HeaderComponent(props) {
  const [inputValue, setInputValue] = useState("");
  // console.log('props--',props?.archiveId)
  return (
    <>
      <DesktopView>
        <Container>
          <Row>
            <Image src="/images/tweetarchive.svg" />
            <Span>TweetArchive</Span>

            <Input
              type="text"
              readOnly={true}
              // value={`http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/archive/`+props?.archiveId}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
              <CopyToClipboard style={{fontSize: 12}} text={inputValue}>
              {/* text={`http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/archive/`+props?.archiveId} */}
              <Button>Copy</Button>
            </CopyToClipboard>
          </Row>
        </Container>
      </DesktopView>

      <MobileView>
        <Container>
          <Row>
            <MobileImage src="/images/tweetarchive.svg" />
            <Span>TweetArchive</Span>
          </Row>
          <Column style={{ paddingBottom: '20px' }}>
            <Row>
            <Input
              type="text"
              readOnly={true}
              // value={`http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/archive/`+props?.archiveId}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <CopyToClipboard style={{fontSize: 12}} text={inputValue}>
                   {/* text={`http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/archive/`+props?.archiveId} */}
              <Button>Copy</Button>
            </CopyToClipboard>
            </Row>
          </Column>
        </Container>
      </MobileView>
    </>
  );
}
