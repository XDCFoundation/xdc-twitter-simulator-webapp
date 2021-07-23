import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import CloseIcon from '@material-ui/icons/Close';
const Advanced = styled.span`
font-family: Raleway;
font-size: 22px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.18;
letter-spacing: normal;
text-align: left;
 color: #ffffff;
 margin-top: 25px;
 margin-left: 68px;
`;
const Accounts = styled.span`
font-family: Raleway;
font-size: 18px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: normal;
text-align: left;
color: #f8f8fa;

margin-left: 68px;
margin-bottom: 18px;
    margin-top: 18px;`;
const Inputfromtheseaccounts = styled.input`
background-color:#191d43;
border-radius: 5px;
border: solid 1px #4a508a;

    width: 81%;
font-size: 14px;
    height: 41px;
color: #ffffff;
margin-left: 68px;
padding: 14px;
margin-bottom: 15px;`;
const Inputtotheseaccounts = styled.input`
background-color:#191d43;
border-radius: 5px;
border: solid 1px #4a508a;
    width: 81%;
    height: 41px;
color: #ffffff;
font-size: 14px;
margin-left: 68px;
padding: 14px;
margin-bottom: 15px;`;
const Inputallwords = styled.input`
background-color:#191d43;
border-radius: 5px;
border: solid 1px #4a508a;

    width: 81%;
    height: 41px;
color: #ffffff;
margin-left: 68px;
margin-bottom: 15px;
padding: 14px;
font-size: 14px;
 `;
const Inputhashtags = styled.input`
background-color:#191d43;
border-radius: 5px;
border: solid 1px #4a508a;
 width: 81%;
padding: 14px;
margin-left: 68px;
height: 41px;
font-size: 14px;
color: #ffffff;`;

const Button = styled.button`
border-radius: 5px;
width: 81%;
margin-left: 68px;
background-color: #3366ff;
font-size: 18px;
font-weight: 500;
font-size: 16px;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: normal;
text-align: left;
color: #f8f8fa;
margin-top: 37px;
padding-left: 34%;
border: none;
height: 41px;
margin-bottom:56px;
`;
const Words = styled.span`
 font-family: Raleway; margin-top: 35px;
margin-left: 68px;
     margin-bottom: 15px;
   font-size: 18px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.17;
   letter-spacing: normal;
   text-align: left;
   color: #f8f8fa;
  `;
// const Img = styled.img`
//   width: 16px;
//   height: 16px;
//   margin-left:auto;
//   margin-top:10px;
// `;


const useStyles = makeStyles((theme) => ({
  paper: {
    width: '50%',
    backgroundColor: "#191d43",
    borderRadius: "5px",
    border: "solid 1px #515684",
  },
}));

export default function MaxWidthDialog(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [maxWidth, setMaxWidth] = React.useState('md');

  return (
    <React.Fragment>

      <Dialog classes={{ paper: classes.paper }}
        maxWidth={maxWidth}
        open
      >
        <DialogContent>
          <Column>
            <Row>
              <Advanced>Advanced Search</Advanced>
              {/* <Img style={{ cursor: 'pointer', width: 30, height: 30, }} src="/images/cut.svg" onClick={props.clicked}>   </Img> */}
              <div className="cross-parent">
               <div className="cross-image" onClick={props.clicked}> <CloseIcon/> </div>
               </div>
           </Row>
            <Words>Words</Words>
            <Inputallwords placeholder="All of the words" />
            <Inputhashtags placeholder="Hashtags" />
            <Accounts>Accounts</Accounts>
            <Inputfromtheseaccounts placeholder="From these accounts" />
            <Inputtotheseaccounts placeholder="To these accounts" />
            <Button>Search</Button>
          </Column>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
