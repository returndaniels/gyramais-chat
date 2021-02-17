import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import loggerMiddleware from './middlewares/logger';

import rootReducer from './rootReducer';

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [thunk, loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  return {
    ...createStore(rootReducer, {}, composeEnhancers(middlewareEnhancer)),
  };
};

export default configureStore;
