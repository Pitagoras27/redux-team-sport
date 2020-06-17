import { createStore, compose } from 'redux';

import { initialState } from './initialState';

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const reducer = (state = initialState, { type, payload } ) => {
  switch(type) {
    default:
      return state;
  }
};

const store = createStore(reducer, composedEnhancers());

export default store;
