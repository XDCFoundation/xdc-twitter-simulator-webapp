import BaseComponent from "../baseComponent";
import React from "react";
import _ from "lodash";
import ReadTweets from "./readTweets";
import { dispatchAction } from "../../utility";
import { connect } from "react-redux";
import { eventConstants } from "../../constants";
import socketClient from "socket.io-client";
import Utils from "../../utility";
import { TweetService } from "../../services/index";

let readtweetSocket = socketClient(process.env.REACT_APP_READING_SOCKET, {
  transports: ["websocket"],
});

class Read extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      readtweets: [],
      totaltweets: [],
      blockSocketConnected: false,
      blockAnimation: {},
      textAnimation: {},
      handleAnimation: {},
      textDarkAnimation: {},
      blockDarkAnimation: {},
      authors: {},
    };
  }

  async componentDidMount() {
    await this.fetchTweets();
    await this.socketData(readtweetSocket);
  }

  socketData(socket) {
    let readingtweets = this.state.readtweets;
    socket.on(eventConstants.READ_TWEETS_EVENT, (blockData, error) => {
      this.setState({ blockSocketConnected: true });

      if (readingtweets.length >= 10) readingtweets.pop();
      readingtweets.unshift(blockData);

      let blockAnimationClass = { [blockData.text]: "block-read-animation" };
      this.setState({ blockAnimation: blockAnimationClass });

      let textAnimationClass = { [blockData.text]: "read-text-animation" };
      this.setState({ textAnimation: textAnimationClass });

      let handleAnimationClass = { [blockData.text]: "read-handle-animation" };
      this.setState({ handleAnimation: handleAnimationClass });

      let textDarkAnimationClass = {
        [blockData.text]: "read-text-animation-dark-mode",
      };
      this.setState({ textDarkAnimation: textDarkAnimationClass });

      let blockDarkAnimationClass = {
        [blockData.text]: "block-read-animation-dark-mode",
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

      this.setState({ readtweets: readingtweets });

      if (error) {
        return error;
      }
    });
  }


  fetchTweets = async () => {
    const [err, res] = await Utils.parseResponse(
      TweetService.getReadTweetList()
    );
    if (err) {
      return err;
    } else {
      this.setState({ readtweets: res[0] || "" });
      this.setState({ totaltweets: res[1] || "" });
    }
  };

  render() {
    return (
      <div>
        <ReadTweets
          dark={this.props.dark}
          tweetreadData={this.state.readtweets}
          tweetreadCount={this.state.totaltweets}
          animationTime={this.state.blockAnimation}
          textclass={this.state.textAnimation}
          handleclass={this.state.handleAnimation}
          textDarkclass={this.state.textDarkAnimation}
          blockDarkclass={this.state.blockDarkAnimation}
          author={this.state?.authors}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { readData: state.readTweet.tweets };
};
export default connect(mapStateToProps, { dispatchAction })(Read);
