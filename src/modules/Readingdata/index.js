import BaseComponent from "../baseComponent";

import React from "react";
import ReadTweets from "./readTweets";

export default class Read extends BaseComponent {
  render() {
    return (
      <div>
        <ReadTweets />
      </div>
    );
  }
}
