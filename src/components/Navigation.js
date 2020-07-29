import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '.././images/codecycle-logo.gif';
import '.././App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* position="static" */}
      <AppBar id="Navi" >
        <Toolbar variant="dense">
          <img id="navimage" alt="logo animation" src={logo} /> &nbsp;&nbsp;
          <Button id="navbutton" >Home</Button> &nbsp;&nbsp;
          <Button id="navbutton" >Services</Button> &nbsp;&nbsp;
          <Button id="navbutton" >About us</Button> &nbsp;&nbsp;
          <Button id="navbutton" >Contact us</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}