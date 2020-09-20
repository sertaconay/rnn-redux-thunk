import { combineReducers } from 'redux';
import { LOG_USER_IN_LOADING, LOG_USER_IN_SUCCESS, LOG_USER_IN_FAILURE, LOG_USER_IN_FULFILL, LOG_USER_OUT_SUCCESS } from './actionTypes';
import initialState from './initialState';

type ActionTypes = {
  type: string;
  payload: any;
  error: any;
};

const logUserInReducer = (state = initialState.user, action: ActionTypes) => {
  switch (action.type) {
    case LOG_USER_IN_LOADING:
      return { ...state, loading: true };
    case LOG_USER_IN_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { token, status } = action.payload;
      return { ...state, data: { token }, status };
    case LOG_USER_IN_FAILURE:
      return { ...state, error: { ...action.error }, status: 'failure' };
    case LOG_USER_IN_FULFILL:
      return { ...state, loading: false };
    case LOG_USER_OUT_SUCCESS:
      return { ...state, data: {} };
    default: return state;
  }
};

const rootReducer = combineReducers({
  user: logUserInReducer,
});

export default rootReducer;
