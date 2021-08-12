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

import About from "./modules/About";

class Routes extends BaseComponent {
  componentDidMount() {}

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            {/*<Route exact path={"/sign-up"} component={SignUp} />*/}
            <Route exact path={"/savedtweets"} component={Saved} />
            <Route exact path={"/readtweets"} component={Read} />
            {/* <Route exact path={"/footer"} component={Footer} /> */}
            <Route exact path={"/list/:keyword"} component={Search} />
            <Route exact path={"/archive/:tweet"} component={TweetArchive} />
            {/* <Route exact path={"/header"} component={Header} /> */}

            {/* <Route exact path={"/adncvaedsearch"} component={Advanced} /> */}
            <Route exact path={"/about"} component={About}/>
            <Route exact path={"/"} component={Main} />
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
