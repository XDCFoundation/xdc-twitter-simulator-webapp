import React,{useState} from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import "../styles/App.css";
import DarkMode from "../components/DarkMode";
import "../styles/App.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 88px;
  background-color: #191d43;
  flex-flow: row nowrap;
  align-items:center;
  justify-content: space-between;
`;
const SubContainer1 = styled.div`
  display: flex;
  background-color: #191d43;
  flex-flow: row nowrap;
  align-items:center;
  margin-left:50px;
`;
const SubContainer2 = styled.div`
  display: flex;
  height: 88px;
  background-color: #191d43;
  flex-flow: row nowrap;
  align-items:center;
  margin-right:50px;
`;

const Image = styled.img`
  width: 50px;
`;
const Span = styled.span`
  font-size: 21px;
  font-weight: 600;
  color: #ffffff;
  font-family: Raleway;
  margin-left:5px
`;
const Search = styled.input`
  // width:360px;
  @media (max-width: 900px) {
    width:150px;
  }
  @media (min-width: 901px) and (max-width:1100) {
    width:250px;
  }
  @media (min-width: 1100px)  {
    width:360px;
  }
  height: 42px;
  margin: 0 5px 0 32px;
  padding: 12px 97px 12px 15px;
  background-color: #3d4270;
  border-radius: 2px;
  border: none;
  font-family: Work Sans;
  font-size: 15px;
  color: #adb1d6;
`;
const Button = styled.button`
  background: #3e49b8;
  display: flex;
  height: 42px;
  width:42px;
  border: none;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Advancesearch = styled.button`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 500;
  color: #a7afff;
  margin-left:15px;
  font-weight: 500;
  background: transparent;
  border: none;

`;

const About = styled.text`
font-size: 18px;

color: #ffffff;
background: transparent;

}
`;
const Line = styled.div`
  height: 20px;
  border-left: 2px solid #2c326a;
`;
const Archive = styled.button`
  font-family: Raleway;
  font-size: 15px;
  font-weight: 500;
  color: #a7afff;
  background: transparent;
  border: none;
`;
const UnorderedList=styled.ul`
    list-style-type:none;
    margin-top: 25px;
    background-color: #222864;
    position: absolute;
   padding-left:unset;
   width:160px;
`;
const List=styled.li`
   margin-top:10px;
   margin-bottom:10px;
`;
const ListReddit=styled.li`
   margin-top:10px;
   margin-bottom:30px;
`;
const ListImg=styled.img`
   width:25px;
   height:25px;
   margin-right:10px;
   margin-left:10px;
`;
const AnchorTag=styled.a`
   font-size:16px;
   color:#ffffff;
   &:hover { 
    text-decoration: none;
    color:#ffffff;
  }
`;
const Border=styled.div`
    border: solid 1px #353b73;
  }
`;
const ArrowUpIcon=styled.span`
    margin-left:10px;
    color:#8992e2;
  }
`;

export default function HeaderComponent() {
  return (
    <Container>
      <SubContainer1>
        <Image src="../../images/TwitterS.svg" alt="image" />
        <Span>Twitter D-App</Span>
        <Search type="text" placeholder="Search by Handle name, Hash tag" />
        <Button>
          <img
            style={{ height: "20px", width: "20px"}}
            src="../../images/Search.svg"
            alt=" "
          />
        </Button>
        <Advancesearch>Advance Search</Advancesearch>
      </SubContainer1>
      <SubContainer2>
        <About>About</About>
        <FFButton />
        <Line> </Line>
        <Archive href="#">Tweet Archive</Archive>
        <DarkMode />
      </SubContainer2>
    </Container>
  );
}
function  RenderDropdown() {
  return (
    <UnorderedList>
      <List>
      <ListImg
          src="../../images/facebook.svg"
          alt=" "
        />
        <AnchorTag href="https://www.facebook.com/XinFinHybridBlockchain/" target="_blank">Facebook</AnchorTag>
      </List>
      <Border></Border>
      <List>
      <ListImg
          src="../../images/twitter.svg"
          alt=" "
        />
        <AnchorTag href="https://twitter.com/XinFin_Official" target="_blank">Twitter</AnchorTag>
      </List>
      <Border></Border>
      <List>
      <ListImg
          src="../../images/telegram.svg"
          alt=" "
        />
        <AnchorTag href="https://t.me/xinfintalk" target="_blank">Telegram</AnchorTag>
      </List>
      <Border></Border>
      <List>
      <ListImg
          src="../../images/linkedin.svg"
          alt=" "
        />
        <AnchorTag href="https://www.linkedin.com/company/xinfin/" target="_blank">Linkedin</AnchorTag>
      </List>
      <Border></Border>
      <ListReddit>
      <ListImg
          src="../../images/reddit.svg"
          alt=" "
        />
        <AnchorTag href="https://www.reddit.com/r/xinfin/" target="_blank">Reddit</AnchorTag>
      </ListReddit>
      <Border></Border>
    </UnorderedList>
  );
}
function FFButton()  {
  const [show,setShow]=useState(false);
   
    return (
      <div class="share">
        <button
          class="dpdown"
          type="button"
          onClick={() => setShow(!show)}
        >
          Share
          {/* <img
            style={{ height: "20px", width: "20px"}}
            src="../../images/XDC-Dropdown.svg"
            alt=" "
          /> */}
          <ArrowUpIcon>^</ArrowUpIcon>
          <span class="caret"></span>
        </button>
        {show && <RenderDropdown/> }
      </div>
    );
  
}
