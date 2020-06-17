import { createStore, compose } from 'redux';

import { initialState } from './initialState';

const reducer = (state = initialState, { type, payload } ) => {
  switch(type) {
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
