import React from "react";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: "16px",
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    // htmlFontSize: 14,
  },
}));
export default function SavedTweets() {
  const classes = useStyles();
  return (
    <Grid Container spacing={3}>
      <Grid item xs={12}>
        <div>
          <Paper className={classes.paper}>
            <Box>
              <Column>
                <Row>
                  <Typography
                    variant="h5"
                    style={{ fontFamily: "Raleway sans-serif !important" }}
                  >
                    Saved Tweets
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{ whiteSpace: "nowrap", marginLeft: "75%" }}
                  >
                    800k
                  </Typography>
                </Row>
                <Row>
                  <Typography>Lisa Ray</Typography>
                  <Typography style={{ marginLeft: "75%" }}>01:00pm</Typography>
                </Row>

                <Row>
                  <Column>
                    <Typography>@lisaray</Typography>
                    <ThemeProvider theme={theme}>
                      <Typography
                        className
                        // style={{ whiteSpace: "nowrap" }}
                        overflow="hidden"
                        font-family="Raleway sans-serif !important"
                        gutterBottom
                      >
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                      </Typography>
                    </ThemeProvider>
                  </Column>
                </Row>
                <Row>
                  <Typography>Harry Golding</Typography>
                  <Typography style={{ marginLeft: "75%" }}>01:00pm</Typography>
                </Row>

                <Row>
                  <Column>
                    <Typography>@henrygolding</Typography>
                    <Typography style={{}}>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Typography>
                  </Column>
                </Row>
                <Row>
                  <Typography>Claire Browne</Typography>
                  <Typography style={{ marginLeft: "75%" }}>01:00pm</Typography>
                </Row>

                <Row>
                  <Column>
                    <Typography>@clairebrowne</Typography>
                    <Typography style={{}}>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Typography>
                  </Column>
                </Row>
                <Row>
                  <Typography>Shawn</Typography>
                  <Typography style={{ marginLeft: "75%" }}>01:00pm</Typography>
                </Row>

                <Row>
                  <Column>
                    <Typography>@shawnmurphy</Typography>
                    <Typography style={{}}>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Typography>
                  </Column>
                </Row>
                <Row>
                  <Typography>Jack Ryan</Typography>
                  <Typography style={{ marginLeft: "75%" }}>01:00pm</Typography>
                </Row>

                <Row>
                  <Column>
                    <Typography>@jackryan</Typography>
                    <Typography style={{}}>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Typography>
                  </Column>
                </Row>
                <Row>
                  <Typography>Cersie Lannister</Typography>
                  <Typography style={{ marginLeft: "75%" }}>01:00pm</Typography>
                </Row>

                <Row>
                  <Column>
                    <Typography>@cersielannister</Typography>
                    <Typography style={{}}>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Typography>
                  </Column>
                </Row>
                <Row>
                  <Typography>J Cole</Typography>
                  <Typography style={{ marginLeft: "75%" }}>01:00pm</Typography>
                </Row>

                <Row>
                  <Column>
                    <Typography>@jcole</Typography>
                    <Typography style={{}}>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Typography>
                  </Column>
                </Row>
                <Row>
                  <Typography>Harry Maguire</Typography>
                  <Typography style={{ marginLeft: "75%" }}>01:00pm</Typography>
                </Row>

                <Row>
                  <Column>
                    <Typography>@Harrymag</Typography>
                    <Typography style={{}}>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Typography>
                  </Column>
                </Row>
              </Column>
            </Box>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}
