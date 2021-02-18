import * as actionTypes from './messageActionTypes';

const initialState = {
  isLoading: false,
  messages: [],
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_MESSAGES_STARTED:
      return {
        ...state,
        isLoading: false,
        messages: action.payload.messages,
        error: null,
      };
    case actionTypes.SEND_MESSAGE_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.SEND_MESSAGE_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        messages: [...state.messages, action.payload.messages],
        error: null,
      };
    case actionTypes.SEND_MESSAGE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
