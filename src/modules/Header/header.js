import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/App.css";
import DarkMode from "../components/DarkMode";
import "../styles/App.css";
import AdvanceSearch from "../Advancedsearch/advancedSearch";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Row } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
// import Drawer from './drawer';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: "#2149B9",
    color: "white",
  },
  fullList: {
    width: "auto",
  },
  searchIcon: {
    width: "20px",
    height: "20px",
  },
  firstRow: {
    flexGrow: 1,
  },
});

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  background-color: #2149b9;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;
const MobileContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background-color: #2149b9;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;
const SubContainer1 = styled.div`
  display: flex;
  background-color: #2149b9;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 50px;
`;
const SubContainer2 = styled.div`
  display: flex;
  height: 62px;
  background-color: #2149b9;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: 60px;
`;

// const SubContainer3 = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   background-color: #2149b9;
//   padding-left: 30px;
//   padding-bottom: 20px;
//   flex-direction: column;
//   align-items: flex-start;
// `;

const Image = styled.img`
  width: 36px;
  height: 36px;
  margin-left: 10px;
`;
const MobImage = styled.img`
  width: 36px;
  height: 36px;
  margin-left: 0px;
`;
const Span = styled.span`
  margin: 6px 0 5px 4px;
  font-family: Raleway;
  font-size: 21px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

const MobSpan = styled.span`
  margin: 20px 0 0px 4px;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

const Search = styled.input`
  height: 30px;
  width: 280px;
  margin: 0px 5px 0 16px;
  padding: 12px 18px 12px 12px;
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
  color: black;
  ::placeholder {
    color: #adb1d6;
    opacity: 1;
  }
`;
const Button = styled.button`
  background: #5582ff;
  display: flex;
  width: 31px;
  height: 30px;
  border: none;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobButton = styled.button`
  background: #5582ff;
  display: flex;
  height: 30px;
  width: 32px;
  border: none;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

const Advancesearch = styled.button`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  color: #7499ff;
  margin-left: 4px;
  //margin-top: 3px;
  font-weight: 600;
  background: transparent;
  border: none;
  text-decoration: none;
  letter-spacing: 0.5px;
`;

const Mobadvancesearch = styled.button`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  color: #7499ff;
  margin-left: -4px;
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
  border: 1px solid #4971e3;
  margin-right: 4px;
  opacity: 1;
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
  margin-left: 5px;
  a {
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
  @media (min-width: 0px) and (max-width: 767px) {
    list-style-type: none;
    background-color: #222864;
    position: absolute;
    bottom: 1%;
    right: 14%;
    padding-left: unset;
    width: 140px;
    border-radius: 4px;
  }

  @media (min-width: 768px) and (max-width: 1029px) {
    list-style-type: none;
    background-color: #222864;
    position: absolute;
    bottom: 1%;
    right: 6%;
    padding-left: unset;
    width: 140px;
    border-radius: 4px;
  }
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
  color: #8992e2;
  font-size: 16px;
`;

const Display = styled.div`
  @media (min-width: 0px) and (max-width: 1030px) {
    display: none;
  }
  @media (max-width: 1030px) {
    display: visible;
  }
`;
const MobileResponsive = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: visible;
  }
  @media (min-width: 767px) and (max-width: 1030px) {
    display: visible;
  }
  @media (min-width: 1030px) {
    display: none;
  }
`;

export default function HeaderComponent(props) {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");

  // var uri = keyword || 0
  // var res = encodeURIComponent(uri);
  // console.log('mine---',res)

  // let a = '#THR Great news and up 22% on the ASX overnight so this should be around 1.10p t'
  // console.log('p--',encodeURIComponent(a.replace(/[^A-Z0-9]+/ig, "")))

  const redirect = () => {
    history.push("/list/" + encodeURIComponent(keyword?.replace("%", "")));
    window.location.reload();
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
  const [openheader, setOpenHeader] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="headerlistFirstrow">
          <div className={classes.firstRow}>
            <a href="/">
              <MobImage src={require("../Header/TwitterLogo.png")} />
            </a>
            <a href="/">
              <MobSpan>XDC Speed Test</MobSpan>
            </a>
          </div>

          <div>
            <button
              className="closeButton"
              onClick={() => setOpenHeader(false)}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
        &nbsp;&nbsp;
        <div className="headerlistCommonrows">
          <About>
            <a className="headerlinkStyle" href="/about">
              About
            </a>
          </About>
        </div>
        &nbsp;
        <div className="headerlistCommonrows">
          <Contact>
            <a className="headerlinkStyle" href="https://xinfin.org/contactus">
              Contact
            </a>
          </Contact>
        </div>
        &nbsp;
        <div className="headerlistSepraterow">
          <div>Share</div>
          <div>
            <ShareButton />
          </div>
        </div>
        &nbsp;
        <div className="headerlistCommonrows">
          <DrawerArchive>
            <a
              className="headerlinkStyle"
              href="http://twitter-dev-1478211791.us-east-2.elb.amazonaws.com/"
            >
              Tweet Archive
            </a>
          </DrawerArchive>
        </div>
        &nbsp;
        <div className="headerlistCommonrows">
          <DarkMode CheckMode={CheckMode} />
        </div>
        &nbsp;
      </List>
    </div>
  );

  // ....

  return (
    <>
      <Display>
        <Container>
          <SubContainer1>
            {/* <a href="/">
              <Image src="../../images/logo.svg" alt="image" />
            </a> */}
            <a href="/">
              <Image src={require("../Header/TwitterLogo.png")} />
            </a>
            <a href="/">
              <Span>XDC Speed Test</Span>
            </a>
            <Search
              type="text"
              placeholder="Search by Handle name, Hash tag"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button onClick={redirect}>
              <img
                className={classes.searchIcon}
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
            <About>
              <a className="headerlinkStyle" href="/about">
                About
              </a>
            </About>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Contact>
              <a
                className="headerlinkStyle"
                href="https://xinfin.org/contactus"
              >
                Contact
              </a>
            </Contact>
            <FFButton />
            <Line> </Line>
            <Archive>
              <a
                className="headerlinkStyle"
                href="http://twitter-dev-1478211791.us-east-2.elb.amazonaws.com/"
              >
                Tweet Archive
              </a>
            </Archive>
            <DarkMode CheckMode={CheckMode} />
          </SubContainer2>
        </Container>
      </Display>

      <MobileResponsive>
        <div>
          <SwipeableDrawer
            anchor={"top"}
            open={openheader}
            onClose={toggleDrawer("top", false)}
            onOpen={toggleDrawer("top", true)}
          >
            {list("top")}
          </SwipeableDrawer>
        </div>

        <MobileContainer>
          <Grid item xs={12}>
            <div className="headerfirstRow">
              <div className="menuRow">
                <a href="/">
                  <MobImage src={require("../Header/TwitterLogo.png")} />
                </a>
                <a href="/">
                  <MobSpan>XDC Speed Test</MobSpan>
                </a>
              </div>
              <div>
                <button
                  className="hamMenuButton"
                  onClick={() => setOpenHeader(true)}
                >
                  <MenuIcon />
                </button>
              </div>
            </div>

            <Row className="parentSecondhead">
              <div className="headerSecondRow">
                <MobSearch
                  type="text"
                  placeholder="Search by Handle name, Hash tag"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <MobButton onClick={redirect}>
                  <img
                    className="searchMenuButton"
                    src="../../images/Search.svg"
                    alt=" "
                  />
                </MobButton>
              </div>
            </Row>

            {open && <AdvanceSearch clicked={handleClickforadvancedsearch} />}

            <Row className="mobHeaderfirstrow">
              <Mobadvancesearch onClick={handleClickforadvancedsearch}>
                Advance Search
              </Mobadvancesearch>
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
          href="https://www.facebook.com/sharer/sharer.php?u=http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/"
          target="_blank"
        >
          Facebook
        </AnchorTag>
      </List>
      <Border></Border>
      <List>
        <ListImg src="../../images/twitter.svg" alt=" " />
        <AnchorTag
          href="https://twitter.com/intent/tweet?url=http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/&text=TwitterArchiver"
          target="_blank"
        >
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
          href="https://www.linkedin.com/shareArticle?mini=true&url=http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/https://www.linkedin.com/shareArticle?mini=true&url=http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/"
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
    <div className="share">
      <button
        // class="dpdown"
        type="button"
        onClick={() => setShow(!show)}
        className="headerFFbutton"
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

function ShareButton() {
  const [show, setShow] = useState(false);

  return (
    <div className="share">
      <button
        // class="dpdown"
        type="button"
        onClick={() => setShow(!show)}
        className="headerSharebutton"
      >
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
