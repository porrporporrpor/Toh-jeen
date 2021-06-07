const INITIAL_STATE = {
  userData: {},
  userAccessToken: '',
  userRefreshToken: '',
  error: '',
  isLogin: false,
};

const authentication = (state = INITIAL_STATE, action) => {
  switch (action.Type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
      };

    default:
      return state;
  }
};

export default authentication;
