import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Box,
  Link,
} from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import { Bokeh } from '../constants/videos';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ButtonBadge } from '../components';
import { useDispatch } from 'react-redux';
import { authenticationAction } from '../actions';
import { useTranslation } from 'react-i18next';

const validationLoginSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const validationRegisterSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string('Enter your confirm password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  firstname: yup
    .string('Enter your firstname')
    .required('Lirstname is required'),
  lastname: yup.string('Enter your lastname').required('Lastname is required'),
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: '100vw',
    minHeight: '100vh',
    textAlign: 'center',
  },
  leftBanner: {
    margin: 'auto',
  },
  rightBanner: {
    backgroundColor: 'rgba(106,4,15,0.7)',
    padding: '50px',
  },
  textField: {
    paddingBottom: '22px',
  },
  video: {
    objectFit: 'cover',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  },
}));

const LoginPage = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationLoginSchema,
    onSubmit: (values) => {
      console.log('login');
      dispatch(authenticationAction.login(values.email, values.password));
    },
  });
  const registerFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
    },
    validationSchema: validationRegisterSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [loginSession, setLoginSession] = useState(true);
  const onLogin = (signUpFlag) => {
    setLoginSession(signUpFlag);
  };
  console.log(loginSession);

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={7} className={classes.leftBanner}>
          <video
            id="left-side-background"
            src={Bokeh}
            autoPlay
            loop
            muted
            className={classes.video}
          />
          <Typography variant="h1" color="secondary">
            ครัวคุณปู
          </Typography>
        </Grid>
        {loginSession ? (
          <Grid item xs={12} sm={5} className={classes.rightBanner}>
            <form onSubmit={loginFormik.handleSubmit}>
              <Card>
                <CardContent style={{ padding: '60px' }}>
                  <Typography variant="h3">{t('signin.title')}</Typography>

                  <Box id="input-email">
                    <TextField
                      fullWidth
                      className={classes.textField}
                      id="login-email"
                      name="email"
                      label={t('email')}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      value={loginFormik.values.email}
                      onChange={loginFormik.handleChange}
                      error={
                        loginFormik.touched.email &&
                        Boolean(loginFormik.errors.email)
                      }
                      helperText={
                        loginFormik.touched.email && loginFormik.errors.email
                      }
                    />
                  </Box>
                  <Box id="input-password">
                    <TextField
                      fullWidth
                      className={classes.textField}
                      id="login-password"
                      name="password"
                      type="password"
                      label={t('password')}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                      value={loginFormik.values.password}
                      onChange={loginFormik.handleChange}
                      error={
                        loginFormik.touched.password &&
                        Boolean(loginFormik.errors.password)
                      }
                      helperText={
                        loginFormik.touched.password &&
                        loginFormik.errors.password
                      }
                    />
                  </Box>

                  <Box
                    id="forgot-password"
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <Typography>
                      <Link href=""> {t('signin.forgotPassword')} </Link>
                    </Typography>
                  </Box>

                  <Box style={{ paddingTop: '10px' }}>
                    <ButtonBadge
                      type="submit"
                      title={t('login')}
                      color="secondary"
                    />
                  </Box>
                  <Box
                    id="signup"
                    display="flex"
                    justifyContent="center"
                    style={{ paddingTop: '40px' }}
                  >
                    <Typography color="textPrimary">
                      {t('signin.dontHaveAnAccount')}
                      <Link
                        color="info"
                        onClick={() => {
                          onLogin(false);
                        }}
                      >
                        {t('signin.signUpFree')}
                      </Link>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </form>
          </Grid>
        ) : (
          <Grid item xs={12} sm={5} className={classes.rightBanner}>
            <form onSubmit={registerFormik.handleSubmit}>
              <Card>
                <CardContent style={{ padding: '60px' }}>
                  <Typography variant="h3">{t('signup.title')}</Typography>

                  <Box id="input-email">
                    <TextField
                      fullWidth
                      className={classes.textField}
                      id="register-email"
                      name="email"
                      label={t('email')}
                      value={registerFormik.values.email}
                      onChange={registerFormik.handleChange}
                      error={
                        registerFormik.touched.email &&
                        Boolean(registerFormik.errors.email)
                      }
                      helperText={
                        registerFormik.touched.email &&
                        registerFormik.errors.email
                      }
                    />
                  </Box>
                  <Box id="input-password">
                    <TextField
                      fullWidth
                      className={classes.textField}
                      id="register-password"
                      name="password"
                      type="password"
                      label={t('password')}
                      value={registerFormik.values.password}
                      onChange={registerFormik.handleChange}
                      error={
                        registerFormik.touched.password &&
                        Boolean(registerFormik.errors.password)
                      }
                      helperText={
                        registerFormik.touched.password &&
                        registerFormik.errors.password
                      }
                    />
                  </Box>

                  <Box id="input-confirm-password">
                    <TextField
                      fullWidth
                      className={classes.textField}
                      id="register-confirm-password"
                      name="confirmPassword"
                      type="password"
                      label={t('confirmPassword')}
                      value={registerFormik.values.confirmPassword}
                      onChange={registerFormik.handleChange}
                      error={
                        registerFormik.touched.confirmPassword &&
                        Boolean(registerFormik.errors.confirmPassword)
                      }
                      helperText={
                        registerFormik.touched.confirmPassword &&
                        registerFormik.errors.confirmPassword
                      }
                    />
                  </Box>

                  <Box id="input-firstname">
                    <TextField
                      fullWidth
                      className={classes.textField}
                      id="register-firstname"
                      name="firstname"
                      type="firstname"
                      label={t('firstname')}
                      value={registerFormik.values.firstname}
                      onChange={registerFormik.handleChange}
                      error={
                        registerFormik.touched.firstname &&
                        Boolean(registerFormik.errors.firstname)
                      }
                      helperText={
                        registerFormik.touched.firstname &&
                        registerFormik.errors.firstname
                      }
                    />
                  </Box>

                  <Box id="input-lastname">
                    <TextField
                      fullWidth
                      className={classes.textField}
                      id="register-lastname"
                      name="lastname"
                      type="lastname"
                      label={t('lastname')}
                      value={registerFormik.values.lastname}
                      onChange={registerFormik.handleChange}
                      error={
                        registerFormik.touched.lastname &&
                        Boolean(registerFormik.errors.lastname)
                      }
                      helperText={
                        registerFormik.touched.lastname &&
                        registerFormik.errors.lastname
                      }
                    />
                  </Box>

                  <Box style={{ paddingTop: '10px' }}>
                    <ButtonBadge
                      type="submit"
                      title={t('register')}
                      color="secondary"
                    />
                  </Box>

                  <Box
                    id="signup"
                    display="flex"
                    justifyContent="center"
                    style={{ paddingTop: '40px' }}
                  >
                    <Typography color="textPrimary">
                      {t('signup.haveAlreadyAnAccount')}
                      <Link
                        color="info"
                        onClick={() => {
                          onLogin(true);
                        }}
                      >
                        {t('signup.loginHere')}
                      </Link>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </form>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default LoginPage;
