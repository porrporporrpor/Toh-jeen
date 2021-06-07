import React from 'react';
import MenuCard from './MenuCard';
import RestaurantMenuRounded from '@material-ui/icons/RestaurantMenuRounded';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
function Menu(props) {
  const menuList = useSelector((state) => state.menu.listMenuOrder);
  console.log(menuList);

  const menuListCard = menuList.map((menu) => (
    <Grid item xs={12} sm={6} md={3}>
      <MenuCard
        name={menu.name}
        category={menu.category}
        image={menu.image}
        description={menu.description}
      />
    </Grid>
  ));
  return (
    <React.Fragment>
      <Paper
        style={{
          backgroundColor: '#fff',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%239e2a2b' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
          padding: '0 2em',
          maxHeight: '92vh',
          minHeight: '92vh',
          overflowY: 'auto',
          paddingTop: '3em',
        }}
      >
        <Grid container>
          <Grid
            container
            item
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '3em',
            }}
          >
            <RestaurantMenuRounded fontSize="large" />
            <Typography variant="h4">เมนูโต๊ะจีน</Typography>
          </Grid>

          <Grid item xs={4} />
        </Grid>
        <Grid container spacing={3}>
          {menuListCard}
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default Menu;
