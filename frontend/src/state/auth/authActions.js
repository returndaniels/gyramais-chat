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
  return (dispatch) => {
    dispatch(signInStarted());

    socket.emit('join', credentials);

    socket.on('userJoined', user => {
      dispatch(signInSucceeded(user));
      localStorage.setItem('user', JSON.stringify(user));
    });

    socket.on('userJoinError', error => {
      dispatch(signInFailed(error));
    })
  };
}

function signOutStarted() {
  return {
    type: actionTypes.SIGNOUT_STARTED,
  };
}

export function signOut(socket, user) {
  return (dispatch) => {
    socket.emit('userLoggedOut', user);
    localStorage.removeItem('user');
    dispatch(signOutStarted());
  };
}
