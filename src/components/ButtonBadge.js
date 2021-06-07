import React from 'react';
import { Button, styled, useTheme } from '@material-ui/core';

function ButtonBadge(props) {
  const theme = useTheme();
  const CustomButton = styled(Button)({
    backgroundColor:
      props.color === '' ? theme.palette.white.main : props.color,
    border: 'none',
    borderRadius: '20px',
    padding: '5px 20px',
    marginLeft: '10px',
    textDecoration: 'none!important',
    '&:hover': {
      backgroundColor:
        props.color === '' ? theme.palette.white.main : props.color,
      boxShadow: '1.95px 1.95px 2.6px rgba(0, 0, 0, 0.40)',
    },
  });
  return (
    <CustomButton
      variant="contained"
      type={props.type}
      onClick={props.onClick}
      color={props.color}
    >
      {props.title}
    </CustomButton>
  );
}

export default ButtonBadge;
