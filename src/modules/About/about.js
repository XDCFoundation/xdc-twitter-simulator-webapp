import React from "react";
import styled from 'styled-components';
import { Row, column } from "simple-flexbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme)=> ({
    main: {},
    uppercomponent: {
         width: "1920px",
  height: "377px",
 
  padding: "45px 312px 0 245px",
  opacity: "0.24",
  backgroundColor: "#4657f8",
    },
    twitterDapp: {
fontFamily: "Raleway",
  fontSize: "28px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.18",
  letterSpacing: "normal",
  textAlign: "center",
        color: "#d6d6d6",
        marginTop: "65px",
  backgroundColor:"#191d43",
    },
}))


export default function Aboutcomponent() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div className={classes.uppercomponent}></div>

                </Grid>
                <Grid item xs={12}>

                    <Paper className={classes.twitterDapp}>TwitterD-App features</Paper>
                </Grid>

            </Grid>
        </div>
    )
}