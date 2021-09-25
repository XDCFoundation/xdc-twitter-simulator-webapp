import { useState, useEffect } from "react";
import React from "react";
import "../../assets/styles/custom.css";
import SaveListTab from "./saveListTab";
import ReadListTab from "./readListTab";
import SavedTweets from "../SavedTweets/savedTweets";
import ReadTweets from "../Readtweets/readTweets";

function MapTabs(props) {
  const [toggleState, setToggleState] = useState(1);

  // console.log('prev--',props?.savehand)

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };

  const [dark, setMode] = useState(getMode());

  useEffect(() => {
    setMode(props.dark);
  }, [props.dark]);

  return (
    <div className={props.dark ? "tableParent-darkMode" : "tableParent"}>
      <div className={props.dark ? "dark-blocks" : "blocks"}>
        <div className="switch">
          <button
            className={
              props.dark
                ? toggleState === 1
                  ? "dark-tabSavelist active-dark-tabSavelist"
                  : "dark-tabSavelist"
                : toggleState === 1
                ? "tabSavelist active-tabSavelist"
                : "tabSavelist"
            }
            onClick={() => toggleTab(1)}
          >
            <span
              className={
                props.dark
                  ? toggleState === 1
                    ? "saveTweetsName-selected-darkMode"
                    : "saveTweetsName-nonselected-darkMode"
                  : toggleState === 1
                  ? "saveTweets-selected-Name"
                  : "saveTweets-nonselected-Name"
              }
            >
              {" "}
              Saved Tweets{" "}
            </span>
          </button>
          <button
            className={
              props.dark
                ? toggleState === 2
                  ? "dark-tabSavelist active-dark-tabSavelist"
                  : "dark-tabSavelist"
                : toggleState === 2
                ? "tabSavelist active-tabSavelist"
                : "tabSavelist"
            }
            onClick={() => toggleTab(2)}
          >
            <span
              className={
                props.dark
                  ? toggleState === 2
                    ? "readTweetsName-selected-darkMode"
                    : "readTweetsName-nonselected-darkMode"
                  : toggleState === 2
                  ? "readTweets-selected-Name"
                  : "readTweets-nonselected-Name"
              }
            >
              {" "}
              Read Tweets{" "}
            </span>
          </button>
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={
            props.dark
              ? toggleState === 1
                ? "dark-content  active-content"
                : "dark-content"
              : toggleState === 1
              ? "content  active-content"
              : "content"
          }
        >
          <SaveListTab
            dark={dark}
            savetweetTable={props?.saveTweet}
            saveCountData={props?.savedCount}
            savetweetData={props?.smallSave}
            saveTweetCount={props?.smallcount}
            user={props?.saveUser}
          />
        </div>

        <div
          className={
            props.dark
              ? toggleState === 2
                ? "dark-content  active-content"
                : "dark-content"
              : toggleState === 2
              ? "content  active-content"
              : "content"
          }
        >
          <div>
            <ReadListTab
              dark={dark}
              readhandle={props?.readUser}
              readtweetData={props?.smallRead}
              readTweetCount={props?.countRead}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapTabs;
