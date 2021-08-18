import { useState, useEffect } from "react";
import React from "react";
import "../../assets/styles/custom.css";
import MapChart from "./map";
import List from './mapListing';
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
            <div  className={props.dark ? "dark-block" : "block"}>
                <div  className="bloc-tabs">
                    <button style={props.dark ? {border: 'transparent', backgroundColor: '#191d43'} :  { border: 'transparent', backgroundColor: 'white',marginLeft: '10px' } }
                        className={props.dark ? toggleState === 1 ? "dark-tabs active-tabs" : "dark-tabs" : toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                       <span style={{fontSize: 12}}> Map </span>
                    </button>
                    <button style={props.dark ? { border: 'transparent', backgroundColor: '#191d43'} :  { border: 'transparent', backgroundColor: 'white',color: '#969696' } }
                        className={props.dark ? toggleState === 2 ? "dark-tabs active-tabs" : "dark-tabs" : toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                     <span style={{fontSize: 12}}> List </span>
                    </button>
                </div>
            </div>

            <div className="content-tabs">
                <div className={props.dark ? toggleState === 1 ? "dark-content  active-content" : "dark-content" : toggleState === 1 ? "content  active-content" : "content"}>
                 {props.dark ? <DarkMap dark={dark} /> : <MapChart dark={dark}/>}   
                 {/* <MapChart/> */}
                </div>

                <div className={props.dark ? toggleState === 2 ? "dark-content  active-content" : "dark-content" : toggleState === 2 ? "content  active-content" : "content"}>
                    {/* <List/> */}
                    <div>
                    <List dark={dark}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MapTabs;
