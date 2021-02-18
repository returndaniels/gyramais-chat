import * as actionTypes from './messageActionTypes';

export function saveMessageStarted(messages) {
  return {
    type: actionTypes.SAVE_MESSAGES_STARTED,
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

function sendMessageStarted() {
  return {
    type: actionTypes.SEND_MESSAGE_STARTED,
  };
}

function sendMessageSucceeded(message) {
  return {
    type: actionTypes.SEND_MESSAGE_SUCCEEDED,
    payload: {
      message
    }
  };
}

function sendMessageFailed() {
  return {
    type: actionTypes.SEND_MESSAGE_FAILED
  };
}

export function sendMessage(socket, message) {
  return (dispatch) => {
    dispatch(sendMessageStarted());

    socket.emit('sendMessage', message, error => {
      if(error){ 
        dispatch(sendMessageFailed(error.datail));
        return; 
      }
    });

    socket.on('message', message => {
      sendMessageSucceeded(message);
    });

  };
}
