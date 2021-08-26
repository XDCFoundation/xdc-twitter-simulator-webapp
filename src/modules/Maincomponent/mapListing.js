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
        marginLeft: '-20px',
        position: 'relative',
        overflow: 'auto',
        msOverflowStyle: 'none',
        maxHeight: 355,
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
    "@media (min-width: 767px) and (max-width: 900px)": {
        root: {
            width: '114%',
            maxHeight: 355,
            marginLeft: '-15px',
        },
    },
    "@media (min-width: 901px) and (max-width: 1000px)": {
        root: {
            width: '114%',
            maxHeight: 355,
            marginLeft: '-15px',
        },
    },
    "@media (min-width: 1001px) and (max-width: 1500px)": {
        root: {
            width: '114%',
            maxHeight: 355,
            marginLeft: '-15px',
        },
    },


    dark_root: {
        width: '108%',
        marginLeft: '-20px',
        // maxWidth: 600,
        position: 'relative',
        overflow: 'auto',
        msOverflowStyle: 'none',
        maxHeight: 355,
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
            width: '108%',
            maxHeight: 355,
            marginLeft: '-15px',
        },
    },
    "@media (min-width: 1001px) and (max-width: 1200px)": {
        dark_root: {
            width: '108%',
            maxHeight: 355,
            marginLeft: '-15px',
        },
    },
    "@media (min-width: 1201px) and (max-width: 1400px)": {
        dark_root: {
            width: '108%',
            maxHeight: 355,
            marginLeft: '-15px',
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
        backgroundColor: "#C0C0C0",
        marginTop: "0.8rem",
        marginBottom: "0.8rem",
        opacity: 0.2,
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
                let listCoordinates = []
                if (
                    !res &&
                    !res.data &&
                    !res.data.responseData &&
                    res.data.responseData.length <= 0
                )
                    listCoordinates = [];

                else listCoordinates = res.data.responseData
                setHashtag(listCoordinates);

            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <List
            className={props.dark ? classes.dark_root : classes.root}>

            <div className={props.dark ? "root-list-dark-mode" : "root-list"}>

                {hashtag &&
                    hashtag.length >= 1 && hashtag.map((items, index) => {
                        // console.log('index--',index)
                        return (
                            <div style={props.dark ? { color: 'white' } : { color: 'black' }}>


                                <div style={{ fontSize: 12, fontWeight: 600, paddingLeft: '20px', paddingTop: '2px' }}>
                                    {index + 1 ? index + 1 : 'null'}. {items?.name || 0}
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
