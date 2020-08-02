import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '.././images/codecycle-logo.gif';
import '.././App.css';
import './LandingPage.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const scrollToMain = (mainRef) => window.scrollTo(0, mainRef.current.offsetTop)
const scrollToServices = (servicesRef) => window.scrollTo(0,servicesRef.current.offsetTop)
const scrollToAbout = (aboutRef) => window.scrollTo(0,aboutRef.current.offsetTop)

export default function NavBar({refProp}) {
  const mainRef = refProp[0]
  const aboutRef = refProp[1]
  const servicesRef = refProp[2]
  const classes = useStyles();
  const main = () => scrollToMain(mainRef)
  const services = () => scrollToServices(servicesRef)
  const about = () => scrollToAbout(aboutRef)
  return (
    <div className={classes.root}>
      {/* position="static" */}
      <AppBar id="Navi" >
        <Toolbar variant="dense">
          <img id="navimage" alt="logo animation" src={logo} /> &nbsp;&nbsp;
          <Button onClick={main} id="navbutton" >Home</Button> &nbsp;&nbsp;
          <Button onClick={about} id="navbutton" >About us</Button> &nbsp;&nbsp;
          <Button onClick={services} id="navbutton" >Services</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}