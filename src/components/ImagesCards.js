import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background:"rgba(0,0,0,0.8)",
    margin:"2%",
    marginTop:"0%"
  },
  media : {
      height: 440,
  },
  title:{
      fontFamily:"Nunito",
      fontWeight:"bold",
      fontSize:"2rem",
      color:"#fff",
  },

  description: {
        fontFamily:"Nunito",
        fontSize: "1.1rem",
        color:"#ddd"
  }
});

export default function ImageCard({img}) {
  const classes = useStyles();

  return (
        <Card className={classes.root}>
            <CardMedia
            className={classes.media}  
            image={img.imageUrl}
            />
            <CardContent>
            <Typography gutterBottom 
                variant="h5" 
                component="h1" 
                className= {classes.title}
            >
                {img.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className= {classes.description} >
                {img.description}
            </Typography>
            </CardContent>
        </Card>
  );
}