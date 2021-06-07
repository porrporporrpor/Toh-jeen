import { defineAction } from 'redux-define';

const ns = defineAction('user');
const promiseStates = ['STARTED', 'SUCCESS', 'ERROR'];

export const GET_MENU = ns.defineAction('GET_MENU', promiseStates);
export const LOGIN = ns.defineAction('LOGIN', promiseStates);
