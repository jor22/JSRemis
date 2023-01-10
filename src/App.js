import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import Hero from "./components/HeroBanner";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Drive from "./components/Drive";






const useStyles = makeStyles((theme) => ({
  background:{
    minHeight:'100vh',
    zIndex:'-3',
    position:'fixed',
    opacity:'0.5'
  }

}));


function App() {
  const classes = useStyles();
  return ( <div className={classes.root}>
    <div className={classes.background}> <img src='../assets/Ciudad2.jpg' className={classes.backgroundImg}/></div>
    <NavBar/>
    <CssBaseline/>
    <Hero/>
    <About/>
    <Drive/>
  </div>) 
}

export default App;
 