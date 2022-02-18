import BaseComponent from "../baseComponent";
import React from "react";
import SavedTweets from "./savedTweets";
import axios from "axios";

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
    this.socketData(this.props?.saved);
    this.socketCount(this.props?.savingCount);
  }
  socketData(socket) {
    let savingtweets = this.state.savedTweets;
    socket.on("BlockChain-socket", (blockData, error) => {
      this.setState({ blockSocketConnected: true });
      // let blockDataExist = savingtweets.findIndex((item) => {
      //   return item.text == blockData.text;
      // });
      // blockData["class"] = "first-block-age last-block-transaction height2";
      // if (blockDataExist == -1) {
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
        console.log("hello error");
      }
      // }
    });
  }

  socketCount(socket) {
    let tweetsCount = this.state.savingtweetsCount;
    socket.on("tweet-count-socket", (blockData, error) => {
      // console.log('>>>>>savecount', blockData)
      this.setState({ blockSocketConnected: true });
      // let blockDataExist = blocks.findIndex((item) => {
      //   return item.number == blockData.number;
      // });
      // blockData["class"] = "first-block-age last-block-transaction height2";
      // if (blockDataExist == -1) {
      if (tweetsCount.length >= 1) tweetsCount.pop();
      tweetsCount.unshift(blockData);

      this.setState({ savingtweetsCount: tweetsCount });

      if (error) {
        console.log("hello error");
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
          else tweetResponse = res.data?.responseData?.response[0] || '';
        allSaveTweets = res.data?.responseData?.response[1] || '';

        this.setState({ savedTweets: tweetResponse });
        this.setState({ totalSaveTweet: allSaveTweets });
      })
      .catch((err) => {
        console.log(err);
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
