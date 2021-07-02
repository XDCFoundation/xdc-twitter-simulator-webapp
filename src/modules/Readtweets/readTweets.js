import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Divider from '@material-ui/core/Divider';

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: "22px",
    whiteSpace: "nowrap",
    fontFamily: "Raleway sans-serif !important",
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginTop: "-7%",
  },
  tweetnumber:{
    whiteSpace: "nowrap",
    boxShadow: "none",
    align: "justify",
    position: "absolute",
    right: "4%",
    fontSize: "42px",
 
  fontWeight: "600",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.17",
  letterSpacing: "normal",
  textAlign: "left",
  color: "#09184b",
 
  },
  row:{
    marginBottom:"30px",
  },
  name:{
    fontSize: "14px",
    color: "#09184b",
    whiteSpace: "nowrap",
    
  },
  content:{
    fontSize: "14px",
    color: "#09184b",
    boxShadow: "none",
    border:"none",
    border: "solid 1px #e8e8e8",
   
  },
  time:{
    color: "#8290a4",
    boxShadow: "none",
    position: "absolute",
    right: "4%",
  
  },
  email:{
    fontSize: "14px",
    color: "#8290a4",
    whiteSpace: "nowrap",
  
  },
  readtweet:{
  
    fontSize: "22px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#09184b",
    marginTop:"3%",
    
  },
  // gap:{
  //   border: "solid 1px #e8e8e8",
  
  // }
}));
const Space=styled.div`
border: "solid 1px #e8e8e8",`;

export default function ReadTweets() {
  const classes = useStyles();
  return (
    <Grid Container spacing={3}>
      <Grid item xs={12}>
        <div>
          <Paper className={classes.paper}>
            
              <Column>
            <Space>
                <Row className={classes.row}>
                
                  <Typography
                    className={classes.readtweet}
                    variant="h5"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Read Tweets
                  </Typography>
                  <Divider />
                  <Paper
                    variant="h5" className={classes.tweetnumber}
                  
                  >
                    740k
                  </Paper>
                
                </Row>
                </Space>
                <Row>
                  <Typography
                    variant="h6"
                    className={classes.name}
                    
                  >
                    Lisa Ray
                  </Typography>
                  <Paper
                  className={classes.time}
                   
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      
                      className={classes.email}
                    >
                      @lisaray
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <Paper
                        noWrap
                       
                        className={classes.content}
                        gutterBottom
                      
                      >
                       
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                      </Paper>
                    </ThemeProvider>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    className={classes.name}
                    
                  >
                    Harry Golding
                  </Typography>
                  <Paper
                  className={classes.time}
                    
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                       className={classes.email}
                    >
                      @henrygolding
                    </Typography>
                    <Paper
                     
                      className={classes.content}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6" className={classes.name}
                  
                  >
                    Claire Browne
                  </Typography>
                 
                  <Paper
                    
                    className={classes.time}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      className={classes.email}
                    >
                      @clairebrowne
                    </Typography>
                    <Paper
                    
                      className={classes.content}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    className={classes.name}
                  
                  >
                    Shawn
                  </Typography>
                  <Paper
                  className={classes.time}
                   
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                      className={classes.email}
                    >
                      @shawnmurphy
                    </Typography>
                    <Paper
                       className={classes.content}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    className={classes.name}
                  
                  >
                    Jack Ryan
                  </Typography>
                  <Paper
                  
                    className={classes.time}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                       className={classes.email}
                    >
                      @jackryan
                    </Typography>
                    <Paper
                      
                      className={classes.content}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    className={classes.name}
                   
                  >
                    Cersie Lannister
                  </Typography>
                  <Paper
                   className={classes.time}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                        className={classes.email}
                    >
                      @cersielannister
                    </Typography>
                    <Paper
                     
                      className={classes.content}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    className={classes.name}
                   
                  >
                    J Cole
                  </Typography>
                  <Paper
                  className={classes.time}
                    
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                       className={classes.email}
                    >
                      @jcole
                    </Typography>
                    <Paper
                    
                      className={classes.content}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
                <Row>
                  <Typography
                    variant="h6"
                    className={classes.name}
                   
                  >
                    Harry Maguire
                  </Typography>
                  <Paper
                   className={classes.time}
                  >
                    01:00pm
                  </Paper>
                </Row>

                <Row>
                  <Column>
                    <Typography
                       className={classes.email}
                    >
                      @Harrymag
                    </Typography>
                    <Paper
                     
                      className={classes.content}
                    >
                     
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </Paper>
                  </Column>
                </Row>
              </Column>
          
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}
