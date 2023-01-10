import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        display:"flex",
        alignItems:"center",
        marginTop:"8%",
        marginBottom:"3%"

    },
    title:{
        fontFamily:"Nunito",
        fontWeight:"bold",
        fontSize:"1rem",
    },

}));

export default function () {
    const classes = useStyles();
    return (
        <div className={classes.root} >

            <ImageCard/>

            <Typography variant="body2" color="textPrimary" component="p" className={classes.title} >
            <h1>About US.</h1><br/>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica,<br/>"The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. <br/>Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
            </Typography>
            
        </div>
    )
}   