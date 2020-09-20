import api, { apiUrls } from '../api';
import { LOG_USER_IN_FAILURE, LOG_USER_IN_SUCCESS, LOG_USER_IN_FULFILL, LOG_USER_IN_LOADING, LOG_USER_OUT_SUCCESS } from './actionTypes';

export const logUserOut = () => (dispatch: any) => {
  dispatch({
    type: LOG_USER_OUT_SUCCESS,
  });
};

export const logUserIn = (userCredentials: any) => (dispatch: any) => {
  dispatch({
    type: LOG_USER_IN_LOADING,
  });
  return api.post(apiUrls.login, { ...userCredentials }).then((response) => {
    console.log(response.data);
    dispatch({
      type: LOG_USER_IN_SUCCESS,
      payload: response.data,
    });
  }).catch((error) => {
    dispatch({
      type: LOG_USER_IN_FAILURE,
      error,
    });
  }).finally(() => {
    dispatch({
      type: LOG_USER_IN_FULFILL,
    });
  });
};
