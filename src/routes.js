import React,{ lazy, Suspense } from "react";
import { Router, Route, withRouter } from "react-router-dom";
import Loader from "./modules/searchlisting/loader";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import { Login, SignUp } from "./modules";
import { history } from "./managers/history";
import BaseComponent from "./modules/baseComponent";
// import Saved from "./modules/SavedTweets";
// import Read from "./modules/Readtweets";
// import Footer from "./modules/Footer";
// import Header from "./modules/Header";
// import Main from "./modules/Maincomponent";
// import TweetArchive from "./modules/searchlisting/tweetArchive";
// import Search from "./modules/searchlisting";
// import Advanced from "./modules/Advancedsearch";
import socketClient from "socket.io-client";

import About from "./modules/About";

const Main = withRouter(lazy(() => import("./modules/Maincomponent")));
const Search = withRouter(lazy(() => import("./modules/searchlisting")));
const TweetArchive = withRouter(lazy(() => import("./modules/searchlisting/tweetArchive")))

class Routes extends BaseComponent {
  componentDidMount() {}

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={"/list/:keyword"} component={Search} />
              <Route exact path={"/archive/:tweet"} component={TweetArchive} />
              <Route exact path={"/about"} component={About} />
              <Route
                exact
                path={"/"}
                component={Main}
              />
              <Redirect exact from="*" to="/" />
            </Switch>
          </Suspense>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
