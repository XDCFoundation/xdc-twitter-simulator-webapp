import BaseComponent from "../baseComponent";
import React from "react";
import SavedTweets from "./Savedtweets";

export default class Saved extends BaseComponent {
  render() {
    return (
      <div>
        <SavedTweets />
      </div>
    );
  }
}
