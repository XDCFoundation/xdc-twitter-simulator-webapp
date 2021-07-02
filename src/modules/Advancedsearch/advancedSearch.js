import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

const theme = createMuiTheme({});
const useStyles = makeStyles((theme) => ({
  main: {
   
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#191d43",
    width: "730px",
    height: "649px",
    borderRadius: "5px",
    border: "solid 1px #515684",
    backgroundColor: "#191d43",
    
  },

  mainpaper: {
    backgroundColor: "#191d43",
    boxShadow: "none",
    border: "none",
    borderRadius: "5px",
  },
  grid: {
    backgroundColor: "#191d43",
    width: "227%",
    boxShadow: "none",
    border: "none",
    borderRadius: "5px",
    marginTop: "37%",
    marginLeft: "-52%",
  },

  advancedpaper: {
    fontSize: "22px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.18",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#ffffff",
    backgroundColor: "#191d43",
    boxShadow: "none",
    color: "#ffffff",
    fontFamily: "Raleway, sans-serif !important",
    marginTop: "20px",
    boxShadow: "none",
    marginLeft: "50px",
  },
  words: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    marginTop: "24px",
    boxShadow: "none",
    marginLeft: "50px",
  },
  maincolor: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    marginTop: "20px",
    boxShadow: "none",
  },
  inputallofthewords: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    boxShadow: "none",
    border: "none",
  },
  hashtags: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    marginTop: "20px",

    marginLeft: "50px",
    width: "115%",
    borderRadius: "3%",
    border: "solid 1px #4a508a",
  },
  commoninput: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway ,sans-serif !important",
    boxShadow: "none",
    FontSize: "14px",
    border: "none",
    width: "115%",
    marginLeft: "50px",
    borderRadius: "3%",
    border: "solid 1px #4a508a",
  },
  inputwords: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    boxShadow: "none",
    border: "none",
    width: "115%",
  },
  account: {
    marginLeft: "50px",
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    marginTop: "20px",
    boxShadow: "none",
  },

  button: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway, sans-serif !important",
    boxShadow: "none",
    borderRadius: "5px",
    border: "solid 1px #4a508a",
    width: "115%",
  },

  button: {
    marginTop: "12%",
    backgroundColor: "#3366ff",
    width: "115%",
    color: "#f8f8fa",
    FontSize: "14px",
    fontFamily: "Raleway ,sans-serif !important",
    marginLeft: "15%",
    borderRadius: "3px",
    border: "none",
  },
  allofthewords: {
    color: "#ffffff",
    backgroundColor: "#191d43",
    fontFamily: "Raleway ,sans-serif !important",
    boxShadow: "none",
    FontSize: "14px",
    border: "none",
    width: "115%",
    marginLeft: "50px",
    borderRadius: "3%",
    border: "solid 1px #4a508a",
    marginTop: "3%",
    marginBottom: "4%",
  },
}));
const Advanced=styled.span`
font-family: Raleway;
font-size: 22px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.18;
letter-spacing: normal;
text-align: left;
 color: #ffffff;
`;
const Words=styled.span`
font-family: Raleway;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #8290a4;`;

const Accounts=styled.span`
font-family: Raleway;
font-size: 18px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: normal;
text-align: left;
color: #f8f8fa;`;
const Inputfromtheseaccounts=styled.input``;
const Inputtotheseaccounts=styled.input``;
const Inputallwords=styled.input`
border-radius: 5px;
  border: solid 1px #4a508a;`;
const Inputhashtags=styled.input`
border-radius: 5px;
border: solid 1px #4a508a;`;
const Button=styled.button``;
export default function AdvancedSearch() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Column>
       <Row><Advanced>Advanced Search</Advanced></Row>
       <Words>Words</Words>
        <Inputallwords placeholder="All of the words"/>
        <Inputhashtags placeholder="Hashtags"/>
        <Accounts>Accounts</Accounts>
        <Inputfromtheseaccounts placeholder="From these accounts"/>
        <Inputtotheseaccounts placeholder="To these accounts"/>
        <Button>Search</Button>
</Column>
    </div>);

    // <div className={classes.main}>
    //   <Grid className={classes.grid} container spacing={4}>
    //     <Grid item xs={8} className={classes.griditem}>
    //       <Paper className={classes.mainpaper}>
    //         <Column>
    //         <Row><Advanced>Advanced Search</Advanced></Row>

           
              /* <Row>
                <Paper className={classes.advancedpaper}>Advanced Search</Paper>
                <img />
              </Row>
              <Paper className={classes.words}>Words</Paper>

              <input
                className={classes.allofthewords}
                placeholder="All of the words"
              />

              <input placeholder="Hashtags" className={classes.commoninput} />
              <Paper /> */}
              {/* <Paper className={classes.account}>Accounts</Paper>
              <Paper className={classes.maincolor}>
                <input
                  placeholder="From these accounts"
                  className={classes.commoninput}
                />
              </Paper>
              <Paper className={classes.maincolor}>
                <input
                  placeholder="To these accounts"
                  className={classes.commoninput}
                />
              </Paper>

              <button className={classes.button}>Search</button> */}
//             </Column>
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
