import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import { Login, SignUp } from "./modules";
import { history } from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import Saved from "./modules/SavedTweets";
import Read from "./modules/Readtweets";
import Footer from "./modules/Footer";
import Header from "./modules/Header";
import Main from "./modules/Maincomponent";
import TweetArchive from "./modules/searchlisting/tweetArchive";
import Search from "./modules/searchlisting";
import Advanced from "./modules/Advancedsearch";
import socketClient from "socket.io-client";

import About from "./modules/About";

let socket = socketClient('https://speedtest.xdc.org:3001/',{transports: ['websocket']})
let readtweetSocket = socketClient('https://speedtest.xdc.org:3003/',{transports: ['websocket']})

class Routes extends BaseComponent {
  componentDidMount() {}

  render() {
    // console.log('sock--',socket)
    // console.log('sock--',readtweetSocket)
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            <Route exact path={"/list/:keyword"} component={Search} />
            <Route exact path={"/archive/:tweet"} component={TweetArchive} />
            <Route exact path={"/about"} component={About}/>
            <Route exact path={"/"}  component={() => <Main savingSocket={socket} readingSocket={readtweetSocket} />} />
            <Redirect exact from="*" to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
