import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import "../../assets/styles/custom.css";
import { white } from "material-ui/styles/colors";
import millify from "millify";
import Utils from "../../utility";
import { TweetService } from "../../services/index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "115%",
    marginLeft: "-23px",
    paddingTop: "16px",
    position: "relative",
    overflow: "auto",
    msOverflowStyle: "none",
    maxHeight: 413,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&::-webkit-scrollbar-track": {
      display: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      display: "none",
    },
  },

  dark_root: {
    width: "109.5%",
    marginLeft: "-23px",
    paddingTop: "16px",
    position: "relative",
    overflow: "auto",
    msOverflowStyle: "none",
    maxHeight: 413,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&::-webkit-scrollbar-track": {
      display: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      display: "none",
    },
  },

  "@media (min-width: 0px) and (max-width: 400px)": {
    root: {
      width: "122.5%",
      marginLeft: "-15px",
    },
    dark_root: {
      width: "109.5%",
      marginLeft: "-13px",
    },
  },
  "@media (min-width: 400px) and (max-width: 590px)": {
    root: {
      width: "116%",
      marginLeft: "-15px",
    },
    dark_root: {
      width: "107.5%",
      marginLeft: "-15px",
    },
  },
  "@media (min-width: 650px) and (max-width: 767px)": {
    root: {
      width: "125%",
      marginLeft: "-15px",
    },
    dark_root: {
      width: "107.5%",
      marginLeft: "-15px",
    },
  },
  "@media (min-width: 768px) and (max-width: 1024px)": {
    root: {
      width: "112%",
      marginLeft: "-15px",
    },
    dark_root: {
      width: "107.5%",
      marginLeft: "-18px",
    },
  },
  "@media (min-width: 1025px) and (max-width: 1250px)": {
    root: {
      marginLeft: "-15px",
    },
    dark_root: {
      width: "106%",
      marginLeft: "-15px",
    },
  },
  "@media (min-width: 1200px) and (max-width: 1350px)": {
    root: {
      width: "113%",
      marginLeft: "-15px",
    },
    dark_root: {
      width: "107.5%",
      marginLeft: "-15px",
    },
  },

  scrollbars: {
    display: "none",
  },

  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  hr_page: {
    width: "105%",
    height: "0px",
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
  },

  hr_page_dark_mode: {
    width: "105%",
    height: "0px",
    backgroundColor: "#C0C0C0",
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
    opacity: 0.2,
  },
}));

export default function PinnedSubheaderList(props) {
  const classes = useStyles();
  const [hashtag, setHashtag] = useState([]);

  useEffect(() => {
    hashtagsList();
    setInterval(() => {
      hashtagsList();
    }, 60000);
  }, []);

  const hashtagsList = async () => {
    const [err, res] = await Utils.parseResponse(TweetService.getMapHashtags());
    if (err) {
      return err;
    } else {
      setHashtag(res || "");
    }
  };

  return (
    <List className={props.dark ? classes.dark_root : classes.root}>
      <div className={props.dark ? "root-list-dark-mode" : "root-list"}>
        {hashtag &&
          hashtag.length >= 1 &&
          hashtag.map((items, index) => {
            let volume = items?.tweet_volume;
            return (
              <>
                <div
                  key={index}
                  className={props.dark ? "listMap-light" : "listMap-dark"}
                >
                  <div className="hashtag-list">
                    {index + 1 ? index + 1 : "null"}. {items?.name || 0} &nbsp;
                    {volume !== null
                      ? "(" + millify(volume) + " " + "tweets" + ")"
                      : ""}
                  </div>

                  <div className="country-list">
                    {items?.countryName.length > 0
                      ? items?.countryName || 0
                      : ""}
                  </div>
                </div>
                <hr
                  className={
                    props.dark ? classes.hr_page_dark_mode : classes.hr_page
                  }
                />
              </>
            );
          })}
      </div>
    </List>
  );
}
