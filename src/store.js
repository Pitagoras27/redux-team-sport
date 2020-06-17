import { createStore, combineReducers, compose } from 'redux';

import { initialState } from './initialState';

const reducer = () => ({});

const store = createStore(reducer, initialState);

export default store;
