import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hero from '../components/Hero';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Kanit',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper} style={{ padding: 0 }}>
        <Grid container>
          <Grid item xs={12}>
            <Hero />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default HomePage;
