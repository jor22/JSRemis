import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    margin:"2%",
    marginTop:"6%"
  },

});

export default function ImageCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="point A to B"
          image="../assets/PointAtoB.jpg"
          title="piontAtoB"
        />
    </Card>
  );
}