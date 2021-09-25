import { useState, useEffect } from "react";
import React from "react";
import "../../assets/styles/custom.css";
import MapChart from "./map";
import List from "./mapListing";
import DarkMap from "./darkMap";

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
    // localStorage.setItem("mode", JSON.stringify(dark));
    setMode(props.dark);
  }, [props.dark]);

  return (
    <div className={props.dark ? "dark-container" : "container"}>
      <div className={props.dark ? "dark-block" : "block"}>
        <div className="bloc-tabs">
          <button
            className={
              props.dark
                ? toggleState === 1
                  ? "dark-tabs active-dark-tabs"
                  : "dark-tabs"
                : toggleState === 1
                ? "tabs active-tabs"
                : "tabs"
            }
            onClick={() => toggleTab(1)}
          >
            <span
              className={
                props.dark
                  ? toggleState === 1
                    ? "mapTab-dark-selectedmode"
                    : "mapTab-dark-nonselectedmode"
                  : toggleState === 1
                  ? "mapTab-selected-mode"
                  : "mapTab-nonSelected-mode"
              }
            >
              Map
            </span>
          </button>
          <button
            className={
              props.dark
                ? toggleState === 2
                  ? "dark-tabs-list active-dark-tabs-list"
                  : "dark-tabs-list"
                : toggleState === 2
                ? "tabs-list active-tabs-list"
                : "tabs-list"
            }
            onClick={() => toggleTab(2)}
          >
            <span
              className={
                props.dark
                  ? toggleState === 2
                    ? "listTab-dark-selectedmode"
                    : "listTab-dark-nonselectedmode"
                  : toggleState === 2
                  ? "listTab-selected-mode"
                  : "listTab-nonSelected-mode"
              }
            >
              List
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
          {props.dark ? <DarkMap dark={dark} /> : <MapChart dark={dark} />}
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
            <List dark={dark} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapTabs;
