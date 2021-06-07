import React, { useEffect } from 'react';
import { CustomAppBar } from '../components';
import Menu from '../components/Menu';
import { useDispatch } from 'react-redux';
import { menuAction } from '../actions';
const MenuPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('dispatch');
    dispatch(menuAction.getMenu());
  });

  return (
    <React.Fragment>
      <CustomAppBar />
      <Menu />
    </React.Fragment>
  );
};

export default MenuPage;
