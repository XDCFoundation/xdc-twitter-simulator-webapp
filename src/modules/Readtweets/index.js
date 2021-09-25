import BaseComponent from "../baseComponent";
import axios from "axios";
import React from "react";
import ReadTweets from "./readTweets";

export default class Read extends BaseComponent {
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
    await this.userHandle();
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

    setInterval(async () => {
      if (!this.state.blockSocketConnected) {
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
    }, 10000);
  }

  async userHandle() {
    (this.state?.readtweets).map((item, index) => {
      let handle = item?.authorId || 0;
      // console.log('items2--', handle)
      axios
        .get(
          process.env.REACT_APP_BASE_URL_TWITTER +
            process.env.REACT_APP_USERNAME_BY_AUTHOR_ID +
            handle
        )
        .then((res) => {
          // setAuthors(res.data.responseData?.data[0]);
          this.setState({
            authors: res?.data?.responseData?.data[0]?.username,
          });
          // console.log('hand---', res.data.responseData?.data[0]?.username)
        })
        .catch((err) => {
          if (
            this?.state?.authors &&
            this?.state?.authors?.length == 0
          ) {
            console.log(err);
          }
        });
    });
  }

  render() {
    // console.log('this--',this.props?.readed)
    //   console.log("saveindexTweets------", this.state.readtweets);
    // console.log("saveCountTweets------", this.state.totaltweets);
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
