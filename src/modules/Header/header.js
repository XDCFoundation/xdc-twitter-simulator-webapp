import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import "../styles/App.css";
import DarkMode from "../components/DarkMode";
import "../styles/App.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 64px;
  background-color: #191d43;
  display: flex;
  flex-flow: row nowrap;
`;

const Image = styled.img`
  margin-left: 5%;
  width: 35px;
`;
const Span = styled.span`
  width: 139px;
  display: flex;
  font-size: 17px;
  margin-top: 23px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;
const Search = styled.input`
  width: 373px;
  display: flex;
  height: 30px;
  margin-top: 17px;
  border-radius: 2px;
  background: #3d4271;
  border: none;
  font-family: Work Sans;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: left;
  padding-left: 1%;
  color: #adb1d6;
`;
const Button = styled.button`
  background: #3e49b8;
  display: flex;
  margin-top: 17px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 2px;
  margin-left: 4px;
  padding-top: 4px;
  padding-left: 4px;
`;

const Advancesearch = styled.button`
  width: 155px;
  margin-left:
  font-family: Raleway;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a7afff;
  background: transparent;
  margin-left: 5px;
  border: none;
`;

const About = styled.text`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
font-size: 15px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.19;
text-align: left;
color: #ffffff;
background: transparent;
margin-top: 22px;
margin-left: 355px;
}
`;

// const Share = styled.menu`
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   font-size: 15px;
//   font-weight: 500;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.19;
//   text-align: left;
//   color: #ffffff;
//   background: transparent;
//   margin-top: 22px;
// `;
const Line = styled.div`
  height: 20px;
  margin: 22px 5px 0px 5px;
  border-left: 2px solid #2c326a;
`;
const Archive = styled.button`
  font-family: Raleway;
  width: 137px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #a7afff;
  background: transparent;
  margin-top: 19px;
  border: none;
`;

export default function HeaderComponent() {
  return (
    <Container>
      <Row>
        <Image src="../../images/TwitterS.svg" alt=" " />

        <Span>Twitter D-App</Span>

        <Search type="text" placeholder="Search by Handle name, Hash tag" />

        <Button>
          <img
            style={{ height: "20px", width: "20px", marginTop: "2px" }}
            src="../../images/Search.svg"
            alt=" "
          />
        </Button>

        <Advancesearch>Advance Search</Advancesearch>

        <About>About</About>
        <FFButton />
        <Line> </Line>
        <Archive href="#">Tweet Archive</Archive>

        <DarkMode />
      </Row>
    </Container>
  );
}

class FFButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  _handleClick(e) {
    e.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  renderDropdown() {
    return (
      <ul className="dropdown">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Telegram</a>
        </li>
        <li>
          <a href="#">Linkedin</a>
        </li>
        <li>
          <a href="#">Reddit</a>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div class="share">
        <button
          class="dpdown"
          type="button"
          onClick={(e) => this._handleClick(e)}
          tabindex="1"
          onFocus={(e) => this._handleClick(e)}
        >
          Share
          <span class="caret"></span>
        </button>
        {this.state.isVisible ? this.renderDropdown() : null}
      </div>
    );
  }
}
