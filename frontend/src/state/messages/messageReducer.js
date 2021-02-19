import * as actionTypes from './messageActionTypes';

const initialState = {
  isLoading: false,
  messages: [],
  error: null,
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_MESSAGES:
      return {
        ...state,
        isLoading: false,
        messages: action.payload.messages,
        error: null,
      };
    case actionTypes.SET_MESSAGE:
      return {
        ...state,
        isLoading: false,
        messages: [...state.messages, action.payload.message],
        error: null,
      };
    default:
      return state;
  }
}
