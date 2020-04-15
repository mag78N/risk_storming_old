import blueCards from '../../../assets/en/blueCards.json';
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const blueCardList = blueCards;
const blueCardStyles = makeStyles({
  root: {
    maxWidth: 250,
    backgroundColor: 'rgb(52, 171, 235)',
    borderRadius: '10px',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: 'white',
    color: 'rgb(52, 171, 235)',
    border: 'dotted',
    borderBottomStyle: 'none',
    paddingLeft: '8px',
  },
  subtitle: {
    fontSize: 14,
    textTransform: 'uppercase',
    backgroundColor: 'white',
    color: 'rgb(52, 171, 235)',
    border: 'dotted',
    borderTopStyle: 'none',
    paddingLeft: '8px',
  },
  description: {
    fontSize: 14,
    color: 'white',
    borderTopStyle: 'none',
    border: '3px dotted white',
    padding: '8px',
  },
  example: {
    fontSize: 12,
    color: 'white',
    padding: '4px',
  },
  hr: {
    border: 'none',
    borderTop: '3px dotted white',
  },
});
function BlueCard() {
  const classes = blueCardStyles();
  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      {blueCardList.map((card, i) => (
        <Grid item key={i}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title}>{card.title}</Typography>
              <Typography className={classes.subtitle}>
                {card.subTitle}
              </Typography>

              <Typography className={classes.description}>
                {card.description}
              </Typography>
              <Typography className={classes.example}>
                1 {card.exampleOne}
              </Typography>
              <hr className={classes.hr}></hr>
              <Typography className={classes.example}>
                2 {card.exampleTwo}
              </Typography>
              <hr className={classes.hr}></hr>
              <Typography className={classes.example}>
                3 {card.exampleThree}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default BlueCard;
