import BaseComponent from "../baseComponent";
import React from "react";
import SavedTweets from "./savedTweets";

export default class Saved extends BaseComponent {
  render() {
    return (
      <div>
        <SavedTweets dark={this.props.dark} />
      </div>
    );
  }
}
