import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Label } from '../';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: '2px 2px 10px #cecccc',
    '&:hover': { boxShadow: '2px 2px 10px #bfafaf' },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function MenuCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.name}
      />

      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ fontFamily: 'Kanit' }}
            >
              {props.name}
            </Typography>
          </Grid>
          <Grid item xs={12} container>
            {/* category */}
            {props.category !== '' ? (
              props.category === 'ของหวาน' ? (
                <Label title={props.category} color="pink" />
              ) : (
                <Label title={props.category} color="orange" />
              )
            ) : (
              <div />
            )}

            {/* descryption */}
          </Grid>
          <Typography variant="body2" color="textSecondary">
            {props.description}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
