import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImagesCards from "./ImagesCards";
import imgs from "../static/images.js";

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:'100vh',
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }

}));

export default function () {
    const classes = useStyles();
  
    return (
        <div className={classes.root}  id="drive">
            <ImagesCards img= {imgs[0]}  />
            <ImagesCards img= {imgs[1]} />
        </div>
    )
}   