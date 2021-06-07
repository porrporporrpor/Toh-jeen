import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Grid, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useTheme, makeStyles, styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ButtonBadge } from '../components';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const CustomAppBar = (props) => {
  const { t, i18n } = useTranslation();
  const isLogin = useSelector((state) => state.authentication.isLogin);
  useEffect(() => {
    console.log('isLogin');
    console.log(isLogin);
  });

  const theme = useTheme();
  const MenuTab = styled(Typography)({
    margin: '0 10px',
    cursor: 'pointer',
    color: theme.palette.white.main,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    '&:link': {
      textDecoration: 'none',
    },
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));
  return (
    <AppBar position="static" className={useStyles()}>
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={6}>
            {/* Logo */}
            <Box display="flex" alignItems="center">
              <FontAwesomeIcon
                icon={faUtensils}
                size="2x"
                style={{ marginRight: '15px' }}
              />
              <Typography
                variant="h5"
                sytle={{ color: theme.palette.white.main }}
              >
                {t('title')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Menu */}
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <Link to="/">
                <MenuTab>{t('home')}</MenuTab>
              </Link>
              <Link to="/menu">
                <MenuTab>{t('menu')}</MenuTab>
              </Link>
              <Link to="/contact">
                <MenuTab>{t('contact')}</MenuTab>
              </Link>
              {isLogin ? (
                <Link to="/logout">
                  <ButtonBadge title={t('logout')} color="secondary" />
                </Link>
              ) : (
                <Link to="/login">
                  <ButtonBadge title={t('login')} color="secondary" />
                </Link>
              )}
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
