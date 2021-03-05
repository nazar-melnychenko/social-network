import { ADD_MESSAGE, GET_ALL_DIALOGS, GET_MESSAGES, SET_ALL_DIALOGS, SET_MESSAGES } from './actionTypes';

export const getAllDialogs = () => ({ type: GET_ALL_DIALOGS })
export const setAllDialogs = payload => ({ type: SET_ALL_DIALOGS, payload })

export const getUserMassages = userId => ({ type: GET_MESSAGES, userId })
export const setMassages = payload => ({ type: SET_MESSAGES, payload })

export const addMassage = massage => ({ type: ADD_MESSAGE, massage })
