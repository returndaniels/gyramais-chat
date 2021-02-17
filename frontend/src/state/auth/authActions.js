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

export function signIn(credentials, socket) {
  return async (dispatch) => {
    dispatch(signInStarted());

    const user  = await socket.emit('join', credentials, error => {
      if(error){ dispatch(signInFailed(error.datail)); }
    }) ;

    dispatch(signInSucceeded(user));
    localStorage.setItem('user', JSON.stringify(user));
  };
}

function signOutStarted() {
  return {
    type: actionTypes.SIGNOUT_STARTED,
  };
}

export function signOut(socket) {
  return (dispatch) => {
    socket.disconnect();
    localStorage.removeItem('user');
    dispatch(signOutStarted());
  };
}
