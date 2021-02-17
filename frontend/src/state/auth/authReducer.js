import * as actionTypes from './authActionTypes';

const userFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

const initialState = {
  isLoading: false,
  user: userFromStorage,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNIN_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.SIGNIN_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        error: null,
      };
    case actionTypes.SIGNIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case actionTypes.SIGNOUT_STARTED:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
