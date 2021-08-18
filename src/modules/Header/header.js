import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import "../styles/App.css";
import DarkMode from "../components/DarkMode";
import "../styles/App.css";
import AdvanceSearch from "../Advancedsearch/advancedSearch";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import axios from 'axios';
import { useHistory, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Row } from "react-bootstrap";
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
// import Drawer from './drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: '#2149B9',
    color: 'white'
  },
  fullList: {
    width: 'auto',
  },
});

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  background-color: #2149B9;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;
const MobileContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background-color: #2149B9;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;
const SubContainer1 = styled.div`
  display: flex;
  background-color: #2149B9;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 50px;
`;
const SubContainer2 = styled.div`
  display: flex;
  height: 62px;
  background-color: #2149B9;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: 60px;
`;

const SubContainer3 = styled.div`
  display: flex;
  height: 100%;
  background-color: #2149B9;
  padding-left: 30px;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 160px;
  // @media (max-width: 766px) {
  //   width: 30px;
  //   height: 25px;
  //   margin-left: 0px;
  // }
  // @media (min-width: 767px) and (max-width: 900px) {
  //   width: 35px;
  //   height: 30px;
  //   margin-left: 0px;
  // }
  // @media (min-width: 901px) and (max-width: 1100) {
  //   width: 40px;
  //   height: 35px;
  //   margin-left: 8px;
  // }
  // @media (min-width: 1100px) {
  //   width: 40px;
  //   height: 35px;
  //   margin-left: 12px;
  // }
`;
const MobImage = styled.img`
 
    width: 30px;
    height: 25px;
    margin-left: 0px;
  
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
  // @media (max-width: 766px) {
  //   width: 100px;
  // }
  // @media (min-width: 767px) and (max-width: 900px) {
  //   width: 150px;
  // }
  // @media (min-width: 901px) and (max-width: 1100) {
  //   width: 250px;
  // }
  // @media (min-width: 1100px) {
  //   width: 250px;
  // }
  height: 30px;
  margin: 0px 5px 0 16px;
  padding: 12px 70px 12px 12px;
  background-color: #fff;
  border-radius: 2px;
  border: none;
  font-family: WorkSans-Roman;
  font-size: 14px;
  color: black;
  ::placeholder {
    color: #adb1d6;
    opacity: 1;
  }
`;
const MobSearch = styled.input`
  width: 100%;
  height: 30px;
  margin: 2px 5px 0 2px;
  padding: 12px 70px 12px 12px;
  background-color: #fff;
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
  background: #5582FF;
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

const MobButton = styled.button`
  background: #5582FF;
  display: flex;
  height: 30px;
  width: 20%;
  border: none;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
`;

const Advancesearch = styled.button`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  color: #a7afff;
  margin-left: 4px;
  //margin-top: 3px;
  font-weight: 600;
  background: transparent;
  border: none;
  text-decoration: none;
  letter-spacing: 0.5px;
`;

const About = styled.text`
  font-size: 18px;
  font-weight: 300;
  color: #ffffff;
  background: transparent;
  font-family: Raleway;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  margin-right: 6px;
`;

const Contact = styled.text`
  font-size: 18px;
  font-weight: 300;
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
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  background: transparent;
  border: none;
  letter-spacing: 0.5px;
  margin-right: 10px;
  a{
  color: #fff;
  }
`;
const DrawerArchive = styled.button`
  font-family: Raleway;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  background: transparent;
  border: none;
  letter-spacing: 0.5px;
  margin-left: -5px;
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
  z-index: 1;
`;
// const List = styled.li`
//   margin-top: 4px;
//   margin-bottom: 4px;
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
  @media (min-width: 0px) and (max-width: 1030px) {
    display: none;
  }
  @media (max-width: 1031px) {
    display: visible;
  }
`;
const MobileResponsive = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: visible;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    display: visible;
  }
  @media (min-width: 1031px) {
    display: none;
  }
`;

export default function HeaderComponent(props) {
  const history = useHistory();
  const [keyword, setKeyword] = useState("")

  // console.log('mine---',keyword)
  const redirect = () => {
    history.push('/list/' + keyword);
  };

  const CheckMode = (mode) => {
    props.CheckMode(mode);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickforadvancedsearch = () => {
    setOpen(!open);
  };

  //------ Drawer---->
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [openheader, setOpenHeader] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '10px 25px 0px 20px' }}>
          <div style={{ flexGrow: 1 }}  >
            <a href="/">
              <MobImage src="../../images/logo.svg" alt="image" />
            </a>
          </div>
          <div >
            <button style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }} onClick={() => setOpenHeader(false)}>
              <CloseIcon />
            </button>
          </div>
        </div>

        <SubContainer3>
          &nbsp;&nbsp;&nbsp;
          <About><a style={{ color: 'white' , textDecoration: 'none' }} href="/about">About</a></About>
          &nbsp;&nbsp;
          <Contact><a style={{ color: 'white', textDecoration: 'none' }} href="https://xinfin.org/contactus">Contact</a></Contact>
          &nbsp;&nbsp;
          <div style={{marginLeft: '-25px'}}>
          <FFButton />
          </div>
          &nbsp;
          <DrawerArchive>
            <a style={{cursor: 'pointer', textDecoration: 'none'}} href="http://twitter-dev-1478211791.us-east-2.elb.amazonaws.com/">Tweet Archive</a>
          </DrawerArchive>
          &nbsp;&nbsp;
          <DarkMode CheckMode={CheckMode} />
        </SubContainer3>
      </List>
      {/* <Divider /> */}
      {/* <List>
        {['About', 'Share', 'TweetArchive'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  // ....

  return (
    <>
      <Display>
        <Container>
          <SubContainer1>
            <a href="/">
              <Image src="../../images/logo.svg" alt="image" />
            </a>
            <Search type="text" placeholder="Search by Handle name, Hash tag" onChange={e => setKeyword(e.target.value)} />
            <Button onClick={redirect}>
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


          <SubContainer2>
            <About><a style={{ color: 'white',textDecoration: 'none' }} href="/about">About</a></About>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Contact><a style={{ color: 'white',textDecoration: 'none' }} href="https://xinfin.org/contactus">Contact</a></Contact>
            <FFButton />
            <Line> </Line>
            <Archive >
              <a style={{cursor: 'pointer', textDecoration: 'none'}} href="http://twitter-dev-1478211791.us-east-2.elb.amazonaws.com/">Tweet Archive</a>
            </Archive>
            <DarkMode CheckMode={CheckMode} />
          </SubContainer2>

        </Container>
      </Display>

      <MobileResponsive>

        <div>
          <SwipeableDrawer
            anchor={'top'}
            open={openheader}
            onClose={toggleDrawer('top', false)}
            onOpen={toggleDrawer('top', true)}
          >
            {list('top')}
          </SwipeableDrawer>
        </div>

        <MobileContainer>
          <Grid item xs={12}>

            <div style={{ display: 'flex', flexDirection: 'row', padding: '10px 25px 0px 20px' }}>
              <div style={{ flexGrow: 1 }}  >
                <a href="/">
                  <MobImage src="../../images/TwitterS.svg" alt="image" />
                </a>
                <Span >Twitter D-App</Span>
              </div>
              <div >
                <button style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }} onClick={() => setOpenHeader(true)}>
                  <MenuIcon />
                </button>
              </div>
            </div>

            <Row >
              <div style={{ display: 'flex', flexDirection: 'row', padding: '20px 25px 0px 40px' }}>
                <MobSearch type="text" placeholder="Search by Handle name, Hash tag" onChange={e => setKeyword(e.target.value)} />
                <MobButton onClick={redirect}>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src="../../images/Search.svg"
                    alt=" "
                  />
                </MobButton>
              </div>
            </Row>

            {open && <AdvanceSearch clicked={handleClickforadvancedsearch} />}

            <Row style={{ display: 'flex', flexDirection: 'row', padding: '10px 0px 10px 35px' }}>
              <Advancesearch onClick={handleClickforadvancedsearch}>
                Advance Search
              </Advancesearch>
            </Row>
          </Grid>
        </MobileContainer>
      </MobileResponsive>
    </>
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
        style={{ fontSize: "18px" , fontWeight: 300}}
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
