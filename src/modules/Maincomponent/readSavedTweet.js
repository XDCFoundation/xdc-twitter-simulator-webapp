import { useState, useEffect } from "react";
import React from "react";
import "../../assets/styles/custom.css";
import SaveListTab from "./saveListTab";
import ReadListTab from "./readListTab";

function MapTabs(props) {

  const [toggleState, setToggleState] = useState(1);

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
    <div>
      <div className={props.dark ? "dark-blocks" : "blocks"}>
        <div className="switch">
          <button
            style={
              props.dark
                ? { border: "transparent", backgroundColor: "#191d43" }
                : { border: "transparent", backgroundColor: "white" }
            }
            className={
              props.dark
                ? toggleState === 1
                  ? "dark-tabSavelist active-tabSavelist"
                  : "dark-tabSavelist"
                : toggleState === 1
                ? "tabSavelist active-tabSavelist"
                : "tabSavelist"
            }
            onClick={() => toggleTab(1)}
          >
            <span style={props.dark ? {fontSize: 14, color: 'white' } : {fontSize: 14, color: 'black'}}> Saved Tweets </span>
          </button>
          <button
            style={
              props.dark
                ? { border: "transparent", backgroundColor: "#191d43" }
                : { border: "transparent", backgroundColor: "white" }
            }
            className={
              props.dark
                ? toggleState === 2
                  ? "dark-tabSavelist active-tabSavelist"
                  : "dark-tabSavelist"
                : toggleState === 2
                ? "tabSavelist active-tabSavelist"
                : "tabSavelist"
            }
            onClick={() => toggleTab(2)}
          >
            <span style={props.dark ? {fontSize: 14, color: 'white' } : {fontSize: 14, color: 'black'}}> Read Tweets </span>
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
          <SaveListTab dark={dark} savetweetTable={props?.saveTweet} savetweetData={props?.smallSave} saveTweetCount={props?.smallcount}/>
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
            <ReadListTab dark={dark} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapTabs;
