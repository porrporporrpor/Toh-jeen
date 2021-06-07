import { LOGIN } from './actionTypes';
import { authenticationService } from '../service';
import history from '../routes/history';

const login = (email, passowrd) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN.STARTED,
    });

    authenticationService.login(email, passowrd).then(
      (access_token) => {
        console.log('ac', access_token);
        dispatch({
          type: LOGIN.SUCCESS,
          payload: access_token,
        });
        history.push('/menu');
      },
      (error) => {
        dispatch({
          type: LOGIN.ERROR,
          error,
        });
      }
    );
  };
};

export const authenticationAction = { login };
