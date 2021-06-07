import React from 'react';
import * as loadingData from '../assets/loading/loading-cooking.json';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: '100vw',
    minHeight: '100vh',
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loading = (props) => {
  const classes = useStyles();
  return (
    <Box
      id="loading"
      className={classes.root}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <FadeIn>
        <Lottie options={defaultOptions} height={'40%'} width={'40%'} />
      </FadeIn>
    </Box>
  );
};

export default Loading;
