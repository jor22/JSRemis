import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar,Toolbar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
    },
    appBar:{
        backgroundColor: "black",
        opacity:"0.75",
    },
    span:{
     color:"red",   

    }
  
  }))
  
  export default function NavBar() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTittle}><span className={classes.span}>SJ</span> Remises.</h1>
                {/* <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton> */}
            </Toolbar>
        </AppBar>
    </div>
    )
  }