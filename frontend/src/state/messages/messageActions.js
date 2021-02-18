import * as actionTypes from './messageActionTypes';

export function saveMessageStarted(messages) {
  return {
    type: actionTypes.SAVE_MESSAGES,
    payload: {
      messages,
    },
  };
}

export function saveMessages(messages) {
  return (dispatch) => {
    dispatch(saveMessageStarted(messages));
  };
}

function setMessageStarted(message) {
  return {
    type: actionTypes.SET_MESSAGE,
    payload: {
      message
    }
  };
}

export function setMessage(socket, message) {
  return (dispatch) => {
    dispatch(setMessageStarted(message));
  };
}
