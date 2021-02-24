import * as actionTypes from './authActionTypes';

export function signInStarted() {
  return {
    type: actionTypes.SIGNIN_STARTED,
  };
}

export function signInSucceeded(user) {
  return {
    type: actionTypes.SIGNIN_SUCCEEDED,
    payload: {
      user,
    },
  };
}

export function signInFailed(error) {
  return {
    type: actionTypes.SIGNIN_FAILED,
    payload: {
      error,
    },
  };
}

export function signIn(user) {
  return (dispatch) => {
    dispatch(signInStarted());
    try {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(signInSucceeded(user));
    } catch (error) {
      dispatch(signInFailed());
    }
  }
}
function signOutStarted() {
  return {
    type: actionTypes.SIGNOUT_STARTED,
  };
}

export function signOut() {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch(signOutStarted());
  };
}
