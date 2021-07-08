import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
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
    htmlFontSize: "22px",
    whiteSpace: "nowrap",
    fontFamily: "Raleway sans-serif !important",
  },
});


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    backgroundColor: "#191d43",
    color: "#ffffff",
    fontSize: "16px",
    boxShadow: "none",
    border: "none"

    // position: "absolute",
  },

  paperfooter: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    backgroundColor: "#191d43",
    color: "#ffffff",
    fontSize: "13px",
    boxShadow: "none",
    borderRadius: "0px"

    // position: "absolute",
  },

  poweredpaper: {
    backgroundColor: "#191d43",
    color: "#ffffff",
    fontSize: "20px",
    marginTop: "12px",
    boxShadow: "none",
    borderRadius: "0px"
  },
  row: {
    marginTop: "1%",
  },
  root: {
    // flexGrow: 1,
    // padding: "20px 20px",
    width: '100%'
  },

  papersecondrow: {
    backgroundColor: "#191d43",
    color: "#ffffff",
    fontSize: "14px",
    marginTop: "12px",
    marginLeft: "2%",
    boxShadow: "none",
    border: "none"
  },

  links: {
    listStyle: "none",
    padding: "0",
    marginTop: '7px'
  },
  followlinks: {
    listStyle: "none",
    marginTop: '5%',
    padding: "0",
  },

  linksitem: {
    fontSize: '11px',
    fontweight: 'normal',
    fontstretch: 'normal',
    fontstyle: 'normal',
    lineheight: 2,
    letterspacing: 'normal',
    textalign: 'left',
    color: '#f8f8f8',
    display: "inline-block",
    marginRight: "15px",
  },

  followitem: {
    display: "inline-block",
    marginRight: "10px",
  },

  followus: {
    fontweight: 500,
    marginTop: '5%',
    fontstretch: 'normal',
    fontstyle: 'normal',
    lineheight: 1.75,
    letterspacing: 'normal',
    textalign: 'left',
    color: '#ffffff',
  },

  otherlink: {
    marginLeft: '12.5%',
    marginTop: '4%',
    fontweight: '600',
    fontstretch: 'normal',
    fontstyle: 'normal',
    lineheight: 1.19,
    letterspacing: 'normal',
    textalign: 'left',
    color: '#ffffff',
  }


}));
const ImgLogo = styled.img`

@media (max-width:766px){
  width: 42px;
height: 39px;
}
  @media (min-width:767px) and (max-width: 900px) {
    width: 50px;
height: 47px;
  }
  @media (min-width: 901px) and (max-width: 1100) {
    width: 58px;
height: 55px;
  }
  @media (min-width: 1100px) {
   width: 58px;
height: 55px;
  }
`;

export default function FooterComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid Container spacing={1}>
        <Row>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              style={{
                padding: "3%",
                borderRadius: "0px"
              }}
            >
              <Row>
                <Grid style={{ display: 'flex', justifyContent: 'center' }} item xs={12} sm={6} md={4}>
                  <Paper style={{ backgroundColor: '#191d43', marginLeft: '7%' }} elevation={0}>
                    <div className={classes.otherlink}>
                      <span style={{ fontSize: '13px' }}>Other Links</span>
                    </div>
                    <div className={classes.links}>
                      <ul>
                        <li className={classes.linksitem}>Archive Tweet</li>
                        <li className={classes.linksitem}>Share</li>
                        <li className={classes.linksitem}>Contact us</li>
                        <li className={classes.linksitem}>Privacy Policy</li>
                      </ul>
                    </div>
                  </Paper>
                </Grid>


                <Grid style={{ display: 'flex', justifyContent: 'center' }} item xs={12} sm={4} md={3}>
                  <Paper style={{ backgroundColor: '#191d43', marginLeft: '13%' }} elevation={0}>
                    <div className={classes.followus}>
                      <span style={{ fontSize: '13px' }}> Follow us on{" "}</span>
                    </div>
                    <div >
                      <ul className={classes.followlinks}>
                        <li className={classes.followitem}>
                          <img
                            style={{ height: "20px", width: "20px" }}
                            src="../../images/twitter.svg"
                          />
                        </li>
                        <li className={classes.followitem}>
                          {" "}
                          <img
                            style={{ height: "20px", width: "20px" }}
                            src="../../images/facebook.svg"
                          />
                        </li>
                        <li className={classes.followitem}>
                          {" "}
                          <img
                            style={{ height: "20px", width: "20px" }}
                            src="../../images/github.svg"
                          />
                        </li>
                        <li className={classes.followitem}>
                          {" "}
                          <img
                            style={{ height: "20px", width: "20px" }}
                            src="../../images/linkedin.svg"
                          />
                        </li>
                        <li className={classes.followitem}>
                          {" "}
                          <img
                            style={{ height: "20px", width: "20px" }}
                            src="../../images/telegram.svg"
                          />
                        </li>
                        <li className={classes.followitem}>
                          {" "}
                          <img
                            style={{ height: "20px", width: "20px" }}
                            src="../../images/reddit.svg"
                          />
                        </li>
                      </ul>
                    </div>
                  </Paper>
                </Grid>

                <Grid style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#191d43' }} item xs={12} sm={4} md={3}>
                  <Paper style={{ marginBottom: '10px', paddingRight: '50px' }} className={classes.poweredpaper} elevation={0}>
                    <ImgLogo

                      src="/images/xinfintwitter.png"
                    />
                    <span style={{ marginLeft: '10px', letterSpacing: '0.59px' }}>Powered By XDC</span>
                  </Paper>
                </Grid>
              </Row>
            </Paper>
          </Grid>
        </Row>
      </Grid>
    </div>
  );
}
