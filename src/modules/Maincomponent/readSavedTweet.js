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
                  ? "dark-tabs active-tabs"
                  : "dark-tabs"
                : toggleState === 1
                ? "tabs active-tabs"
                : "tabs"
            }
            onClick={() => toggleTab(1)}
          >
            <span style={{ fontSize: 14 }}> Saved Tweets </span>
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
                  ? "dark-tabs active-tabs"
                  : "dark-tabs"
                : toggleState === 2
                ? "tabs active-tabs"
                : "tabs"
            }
            onClick={() => toggleTab(2)}
          >
            <span style={{ fontSize: 14 }}> Read Tweets </span>
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
          <SaveListTab dark={dark} />
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
