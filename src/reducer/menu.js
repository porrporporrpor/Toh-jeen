import { GET_MENU } from '../actions/actionTypes';

const INITIAL_STATE = {
  listMenuOrder: [],
};

const menu = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MENU.SUCCESS:
      return {
        ...state,
        listMenuOrder: action.payload,
      };

    default:
      return state;
  }
};

export default menu;
