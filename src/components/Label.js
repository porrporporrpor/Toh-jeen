import React from 'react';
import { Box, styled, useTheme } from '@material-ui/core';

function Label(props) {
  const theme = useTheme();
  const Label = styled(Box)({
    backgroundColor:
      props.color === '' ? theme.palette.secondary.main : props.color,
    border: 'none',
    borderRadius: '10px',
    padding: '2px 7px',
    fontSize: '12px',
  });
  return <Label>{props.title}</Label>;
}

export default Label;
