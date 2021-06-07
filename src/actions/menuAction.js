import { GET_MENU } from './actionTypes';
import { menuService } from '../service';

const getMenu = () => {
  console.log('menu', menuService.getMenu());
  return (dispatch) => {
    dispatch({
      type: GET_MENU.STARTED,
    });
    menuService.getMenu().then(
      (menuList) => {
        console.log(menuList);
        dispatch({
          type: GET_MENU.SUCCESS,
          payload: menuList,
        });
      },
      (error) => {
        dispatch({
          type: GET_MENU.ERROR,
          error,
        });
      }
    );
  };
};

export const menuAction = { getMenu };
