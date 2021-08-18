import React, { useEffect, useState } from 'react';
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
        width: '114%',
        // maxWidth: 600,
        marginLeft:'-20px',
        position: 'relative',
        overflow: 'auto',
        msOverflowStyle: 'none',
        maxHeight: 370,
        // backgroundColor: 'red',
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
    "@media (min-width: 767px) and (max-width: 1024px)": {
        root: {
            maxHeight: 250,
        },
    },
    "@media (min-width: 1024px) and (max-width: 1200px)": {
        root: {
            maxHeight: 300,
        },
    },
    "@media (min-width: 1201px) and (max-width: 1400px)": {
        root: {
            maxHeight: 320,
        },
    },
    "@media (min-width: 1401px) and (max-width: 1699px)": {
        root: {
            maxHeight: 350,
        },
    },
    "@media (min-width: 1701px)": {
        root: {
            maxHeight: 420,
        },
    },



    dark_root: {
        width: '108%',
        marginLeft:'-20px',
        // maxWidth: 600,
        position: 'relative',
        overflow: 'auto',
        msOverflowStyle: 'none',
        maxHeight: 370,
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
    "@media (min-width: 767px) and (max-width: 1000px)": {
        dark_root: {
            maxHeight: 270,
        },
    },
    "@media (min-width: 1001px) and (max-width: 1200px)": {
        dark_root: {
            maxHeight: 300,
        },
    },
    "@media (min-width: 1201px) and (max-width: 1400px)": {
        dark_root: {
            maxHeight: 340,
        },
    },
    "@media (min-width: 1401px) and (max-width: 1500px)": {
        dark_root: {
            maxHeight: 370,
        },
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

    useEffect(() => {
        hashtagsList();
    }, []);

    function hashtagsList() {
        axios
            .get(
                process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_TRENDING_HASHTAG
            )
            .then((res) => {
                setHashtag(res.data.responseData);
                // console.log('locations---', res.data.responseData)
            })
            .catch((err) => {
                console.log(err);
            });
    }
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


                            <div style={{ fontSize: 12, fontWeight: 600,paddingLeft:'20px',paddingTop:'2px' }}>
                                {items.name}
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
