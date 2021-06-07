import React from 'react';
import RouteMap from './routes/router';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import history from './routes/history';
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.black,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router history={history}>
        <RouteMap />
      </Router>
    </div>
  );
}

export default App;
