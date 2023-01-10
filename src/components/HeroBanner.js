import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    hero:{
        minHeight:'100vh',
        backgroundImage: `url(${'/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
      },
      
      hero_title:{
        position: "absolute",
        bottom: "15%",
        right: "6%",
        color: "white",
        fontSize: "4rem",
        padding: "15px"
      }
  
  }))


export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <h1 className={classes.hero_title}>Travel made simple.</h1>
    </div>
  );
};
