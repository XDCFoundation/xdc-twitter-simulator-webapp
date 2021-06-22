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
      <Grid item xs={12}>
        <div>
          <Column>
            <Row>
              <Typography variant="h5">Saved Tweets</Typography>
              <Typography variant="h4">800k</Typography>
            </Row>
            <Row>
              <Typography>Lisa Ray</Typography>
              <Typography>01:00pm</Typography>
            </Row>

            <Row>
              <Column>
                <Typography>@lisaray</Typography>
                <Typography
                  white-space="nowrap"
                  overflow="hidden"
                  nowrap={true}
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Typography>
              </Column>
            </Row>
            <Row>
              <Typography>Harry Golding</Typography>
              <Typography>01:00pm</Typography>
            </Row>

            <Row>
              <Column>
                <Typography>@henrygolding</Typography>
                <Typography>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Typography>
              </Column>
            </Row>
            <Row>
              <Typography>Claire Browne</Typography>
              <Typography>01:00pm</Typography>
            </Row>

            <Row>
              <Column>
                <Typography>@clairebrowne</Typography>
                <Typography>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Typography>
              </Column>
            </Row>
            <Row>
              <Typography>Shawn</Typography>
              <Typography>01:00pm</Typography>
            </Row>

            <Row>
              <Column>
                <Typography>@shawnmurphy</Typography>
                <Typography>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Typography>
              </Column>
            </Row>
            <Row>
              <Typography>Jack Ryan</Typography>
              <Typography>01:00pm</Typography>
            </Row>

            <Row>
              <Column>
                <Typography>@jackryan</Typography>
                <Typography>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Typography>
              </Column>
            </Row>
            <Row>
              <Typography>Cersie Lannister</Typography>
              <Typography>01:00pm</Typography>
            </Row>

            <Row>
              <Column>
                <Typography>@cersielannister</Typography>
                <Typography>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Typography>
              </Column>
            </Row>
            <Row>
              <Typography>J Cole</Typography>
              <Typography>01:00pm</Typography>
            </Row>

            <Row>
              <Column>
                <Typography>@jcole</Typography>
                <Typography>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Typography>
              </Column>
            </Row>
            <Row>
              <Typography>Harry Maguire</Typography>
              <Typography>01:00pm</Typography>
            </Row>

            <Row>
              <Column>
                <Typography>@Harrymag</Typography>
                <Typography>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Typography>
              </Column>
            </Row>
          </Column>
        </div>
      </Grid>
    </Grid>
  );
}
