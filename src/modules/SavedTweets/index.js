import BaseComponent from "../baseComponent";
import React from "react";
import SavedTweets from "./savedTweets";
import axios from "axios";
import { eventConstants } from "../../constants";
import socketClient from "socket.io-client";

let socket = socketClient(process.env.REACT_APP_SAVING_SOCKET, {
  transports: ["websocket"],
});
let readtweetSocket = socketClient(process.env.REACT_APP_READING_SOCKET, {
  transports: ["websocket"],
});


export default class Saved extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      savedTweets: [],
      totalSaveTweet: [],
      savingtweetsCount: [],
      blockAnimation: {},
      textAnimation: {},
      handleAnimation: {},
      textDarkAnimation: {},
      blockDarkAnimation: {},
      authors: {},

      blockSocketConnected: false,
    };
  }
  async componentDidMount() {
    await this.fetchSavedTweets();
    // await this.userHandle();
    this.socketData(socket);
    this.socketCount(readtweetSocket);
  }
  socketData(socket) {
    let savingtweets = this.state.savedTweets;
    socket.on(eventConstants.SAVING_TWEETS_EVENT, (blockData, error) => {
      this.setState({ blockSocketConnected: true });

      if (savingtweets.length >= 10) savingtweets.pop();
      savingtweets.unshift(blockData);

      let blockAnimationClass = { [blockData.text]: "block-height-animation" };
      this.setState({ blockAnimation: blockAnimationClass });

      let textAnimationClass = { [blockData.text]: "text-animation" };
      this.setState({ textAnimation: textAnimationClass });

      let handleAnimationClass = { [blockData.text]: "handle-animation" };
      this.setState({ handleAnimation: handleAnimationClass });

      let textDarkAnimationClass = {
        [blockData.text]: "text-animation-dark-mode",
      };
      this.setState({ textDarkAnimation: textDarkAnimationClass });

      let blockDarkAnimationClass = {
        [blockData.text]: "block-height-animation-dark-mode",
      };
      this.setState({ blockDarkAnimation: blockDarkAnimationClass });

      setTimeout(() => {
        this.setState({
          blockAnimation: {},
          textAnimation: {},
          handleAnimation: {},
          textDarkAnimation: {},
          blockDarkAnimation: {},
        });
      }, 500);

      this.setState({ savedTweets: savingtweets });

      if (error) {
        return error
      }
      // }
    });
  }

  socketCount(socket) {
    let tweetsCount = this.state.savingtweetsCount;
    socket.on(eventConstants.SAVE_COUNT_EVENT, (blockData, error) => {
      this.setState({ blockSocketConnected: true });

      if (tweetsCount.length >= 1) tweetsCount.pop();
      tweetsCount.unshift(blockData);

      this.setState({ savingtweetsCount: tweetsCount });

      if (error) {
        return error
      }
      // }
    });
  }

  async fetchSavedTweets() {
    await axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER +
          process.env.REACT_APP_SAVED_TWEET
      )

      .then((res) => {
        let tweetResponse;
        let allSaveTweets;
        if (
          !res &&
          !res.data &&
          !res.data.responseData &&
          res.data.responseData.length <= 0
        )
          tweetResponse = [];
        else tweetResponse = res.data?.responseData?.response[0] || "";
        allSaveTweets = res.data?.responseData?.response[1] || "";

        this.setState({ savedTweets: tweetResponse });
        this.setState({ totalSaveTweet: allSaveTweets });
      })
      .catch((err) => {
        return err
      });
  }

  render() {
    return (
      <div>
        <SavedTweets
          dark={this.props.dark}
          tweetData={this.state.savedTweets}
          tweetCount={this.state.totalSaveTweet}
          savedCount={this.state.savingtweetsCount}
          animationTime={this.state.blockAnimation}
          textclass={this.state.textAnimation}
          handleclass={this.state.handleAnimation}
          textDarkclass={this.state.textDarkAnimation}
          blockDarkclass={this.state.blockDarkAnimation}
          // author={this.state?.authors}
        />
      </div>
    );
  }
}
