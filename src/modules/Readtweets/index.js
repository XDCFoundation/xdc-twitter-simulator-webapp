import BaseComponent from "../baseComponent";
import axios from "axios";
import React from "react";
import ReadTweets from "./readTweets";
import { dispatchAction } from "../../utility";
import { connect } from "react-redux";

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
    this.socketData(this.props?.readed);
  }

  socketData(socket) {
    let readingtweets = this.state.readtweets;
    socket.on("read-tweets-socket", (blockData, error) => {
      // console.log('>>>>>readtweet', blockData)
      this.setState({ blockSocketConnected: true });

      // let blockDataExist = blocks.findIndex((item) => {
      //   return item.number == blockData.number;
      // });
      // blockData["class"] = "first-block-age last-block-transaction height2";
      // if (blockDataExist == -1) {

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
        console.log("hello error");
      }

      // } (left comment)
    });
  }

  async fetchTweets() {
    await axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER +
          process.env.REACT_APP_READ_TWEET
      )

      .then((res) => {
        let tweetResponse;
        let alltweets;
        if (
          !res &&
          !res.data &&
          !res.data.responseData &&
          res.data.responseData.length <= 0
        )
          tweetResponse = [];
        else tweetResponse = res.data.responseData[0];
        alltweets = res.data.responseData[1];

        this.setState({ readtweets: tweetResponse });
        this.setState({ totaltweets: alltweets });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
