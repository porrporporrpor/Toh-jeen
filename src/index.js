import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './i18n';
import './constants/styles.css';

const store = createStore(reducer, applyMiddleware(thunk));
const theme = createMuiTheme({
  palette: {
    primary: { main: '#6A040F' },
    secondary: { main: '#FFBA08' },
    white: { main: '#FFF' },
    black: { main: '#000' },
    gray: { main: '#D1D1D1' },
  },
  typography: {
    fontFamily: ['Kanit'],
  },
  overrides: {
    MuiLink: {
      root: {
        cursor: 'pointer',
        color: '#000',
      },
    },
  },
});
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
