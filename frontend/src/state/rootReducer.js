import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';

import { SIGNOUT_STARTED } from './auth/authActionTypes';

const reducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === SIGNOUT_STARTED) {
    state = undefined;
  }

  return reducer(state, action);
};

export default rootReducer;
