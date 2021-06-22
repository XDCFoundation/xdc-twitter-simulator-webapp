import React from "react";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function SavedTweets() {
  return (
    <Grid Container spacing={3}>
      <Grid item xs={6}>
        <Row>
          <Typography>Saved Tweets</Typography>
        </Row>
      </Grid>
    </Grid>
  );
}
