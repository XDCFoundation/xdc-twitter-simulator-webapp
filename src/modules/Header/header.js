import React, { useState } from "react";
import styled from "styled-components";
import "../styles/App.css";
import DarkMode from "../components/DarkMode";
import "../styles/App.css";
import AdvanceSearch from "../Advancedsearch/advancedSearch"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Container = styled.div`
  width: 100%;
  display: flex;
  height: 66px;
  background-color: #191d43;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;
const SubContainer1 = styled.div`
  display: flex;
  background-color: #191d43;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 50px;
`;
const SubContainer2 = styled.div`
  display: flex;
  height: 62px;
  background-color: #191d43;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: 50px;
`;

const Image = styled.img`
@media (max-width:766px){
   width: 30px;
  height: 25px;
  margin-left: 0px;
}
  @media (min-width:767px) and (max-width: 900px) {
    width: 35px;
  height: 30px;
  margin-left: 0px;
  }
  @media (min-width: 901px) and (max-width: 1100) {
     width: 40px;
  height: 35px;
  margin-left: 8px;
  }
  @media (min-width: 1100px) {
   width: 40px;
  height: 35px;
  margin-left: 8px;
  }
 
`;
const Span = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  font-family: Raleway;
  margin-right: 10px;
  margin-top: 2px;
`;
const Search = styled.input`
@media (max-width:766px){
  width:100px
}
  @media (min-width:767px) and (max-width: 900px) {
    width: 150px;
  }
  @media (min-width: 901px) and (max-width: 1100) {
    width: 250px;
  }
  @media (min-width: 1100px) {
    width: 250px;
  }
  height: 30px;
  margin: 2px 5px 0 16px;
  padding: 12px 70px 12px 12px;
  background-color: #3d4270;
  border-radius: 2px;
  border: none;
  font-family: WorkSans-Roman;
  font-size: 10.5px;
  color: #fff;
  ::placeholder {
    color: #adb1d6;
    opacity: 1;
  }
`;
const Button = styled.button`
  background: #3e49b8;
  display: flex;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
`;

const Advancesearch = styled.button`
  font-family: Raleway;
  font-size: 11px;
  font-weight: 500;
  color: #a7afff;
  margin-left: 2px;
  margin-top: 3px;
  font-weight: 600;
  background: transparent;
  border: none;
  text-decoration: none;
  letter-spacing:0.5px;
`;

const About = styled.text`
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background: transparent;
  letter-spacing: 0.6px;
`;
const Line = styled.div`
  height: 20px;
  border-left: 2px solid #2c326a;
  margin-right: 4px;
`;
const Archive = styled.button`
  font-family: Raleway;
  font-size: 12px;
  color: #3366ff;
  font-weight: bold;
  background: transparent;
  border: none;
  letter-spacing: 0.5px;
  margin-right: 10px;
`;
const UnorderedList = styled.ul`
  list-style-type: none;
  margin-top: 10px;
  background-color: #222864;
  position: absolute;
  padding-left: unset;
  width: 140px;
  margin-left: 10px;
  border-radius: 4px;
  z-index:1;
`;
const List = styled.li`
  margin-top: 4px;
  margin-bottom: 4px;
`;
// const ListLast = styled.li`
//   margin-top: 0px;
//   margin-bottom: 0px;
// `;

const ListImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
`;
const AnchorTag = styled.a`
  font-size: 13px;
  color: #ffffff;
  &:hover {
    text-decoration: none;
    color: #ffffff;
  }
`;
const Border = styled.div`
  border: solid 1px #353b73;
`;
const ArrowUpIcon = styled.span`
  margin-left: 4px;
  color: #8992e2;
  font-size: 16px;
`;

const Display = styled.div`
@media (min-width:0px) and (max-width: 767px) {
   display: none;
 }

`;



export default function HeaderComponent(props) {

  const CheckMode = (mode) => {
    props.CheckMode(mode)
  }

  const [open, setOpen] = React.useState(false);
  const handleClickforadvancedsearch = () => {
    setOpen(!open);
  };
  return (
    <Container>
  
      <SubContainer1>
        <Image src="../../images/TwitterS.svg" alt="image" />
        <Span>Twitter D-App</Span>
        <Search type="text" placeholder="Search by Handle name, Hash tag" />
        <Button>
          <img
            style={{ height: "20px", width: "20px" }}
            src="../../images/Search.svg"
            alt=" "
          />
        </Button>
        {open && <AdvanceSearch clicked={handleClickforadvancedsearch} />}
    
        <Advancesearch onClick={handleClickforadvancedsearch}>
          Advance Search
        </Advancesearch>
     
      </SubContainer1>
    

      <Display>
      <SubContainer2>
        <About><a href="/about">About</a></About>
        <FFButton />
        <Line> </Line>
        <Archive href="#">Tweet Archive</Archive>
        <DarkMode CheckMode={CheckMode} />
      </SubContainer2>
      </Display>

    </Container >
  );
}
function RenderDropdown() {
  return (
    <UnorderedList>
      <List>
        <ListImg src="../../images/facebook.svg" alt=" " />
        <AnchorTag
          href="https://www.facebook.com/XinFinHybridBlockchain/"
          target="_blank"
        >
          Facebook
        </AnchorTag>
      </List>
      <Border></Border>
      <List>
        <ListImg src="../../images/twitter.svg" alt=" " />
        <AnchorTag href="https://twitter.com/XinFin_Official" target="_blank">
          Twitter
        </AnchorTag>
      </List>
      <Border></Border>
      <List>
        <ListImg src="../../images/telegram.svg" alt=" " />
        <AnchorTag href="https://t.me/xinfintalk" target="_blank">
          Telegram
        </AnchorTag>
      </List>
      <Border></Border>
      <List>
        <ListImg src="../../images/linkedin.svg" alt=" " />
        <AnchorTag
          href="https://www.linkedin.com/company/xinfin/"
          target="_blank"
        >
          Linkedin
        </AnchorTag>
      </List>
      <Border></Border>
      <List>
        <ListImg src="../../images/reddit.svg" alt=" " />
        <AnchorTag href="https://www.reddit.com/r/xinfin/" target="_blank">
          Reddit
        </AnchorTag>
        <Border></Border>
        <br />
      </List>
    </UnorderedList>
  );
}

function FFButton() {
  const [show, setShow] = useState(false);

  return (
    <div class="share">
      <button
        class="dpdown"
        type="button"
        onClick={() => setShow(!show)}
        style={{ fontSize: "13px" }}
      >
        Share
        {show ? (
          <ArrowUpIcon>
            <IoIosArrowUp />
          </ArrowUpIcon>
        ) : (
          <ArrowUpIcon>
            <IoIosArrowDown />
          </ArrowUpIcon>
        )}
        <span class="caret"></span>
      </button>
      {show && <RenderDropdown />}
    </div>
  );
}
