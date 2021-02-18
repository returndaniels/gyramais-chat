import * as actionTypes from './messageActionTypes';

export function saveMessages(messages) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SAVE_MESSAGES,
      payload: {
        messages,
      },
    });
  };
}

export function setMessage(message) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_MESSAGE,
      payload: {
        message
      }
    });
  };
}
