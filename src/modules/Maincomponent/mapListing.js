import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import axios from 'axios';
import '../../assets/styles/custom.css';
import { white } from 'material-ui/styles/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '105%',
        // maxWidth: 600,
        position: 'relative',
        overflow: 'auto',
        msOverflowStyle: 'none',
        maxHeight: 400,
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '&::-webkit-scrollbar-track': {
            display: 'none'
        },
        '&::-webkit-scrollbar-thumb': {
            display: 'none'
        }
    },

    dark_root: {
        width: '100%',
        // maxWidth: 600,
        position: 'relative',
        overflow: 'auto',
        msOverflowStyle: 'none',
        maxHeight: 400,
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '&::-webkit-scrollbar-track': {
            display: 'none'
        },
        '&::-webkit-scrollbar-thumb': {
            display: 'none'
        }
    },

    scrollbars: {
        display: 'none',
    },

    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
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
        backgroundColor: "#8290a4",
        marginTop: "0.8rem",
        marginBottom: "0.8rem",
    },
}));

export default function PinnedSubheaderList(props) {
    const classes = useStyles();
    const [hashtag, setHashtag] = useState([])

    axios
        .get(
            "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com//trendingHashtags-from-db"
        )
        .then((res) => {
            setHashtag(res.data.responseData);
            // console.log('locations---', res.data.responseData)
        })
        .catch((err) => {
            console.log(err);
        });

    return (
        <List
            className={props.dark ? classes.dark_root : classes.root}>

            <div className={props.dark ? "root-list-dark-mode" : "root-list"}>
                {/* <hr
                    className={props.dark ?
                        classes.hr_page_dark_mode : classes.hr_page
                    }
                /> */}
                {hashtag.map((items, k) => {
                    return (
                        <div style={props.dark ? { color: 'white' } : { color: 'black' }}>


                            <div style={{ fontSize: 12, fontWeight: 600 }}>
                             Trending hashtag in {items.countryName} is {items.name}.
                            </div>

                            <hr
                                className={props.dark ?
                                    classes.hr_page_dark_mode : classes.hr_page
                                }
                            />

                        </div>
                    )

                })}

            </div>
        </List>

    );
}
