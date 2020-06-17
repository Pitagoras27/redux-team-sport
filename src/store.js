import { createStore, compose } from 'redux';

import { initialState } from './initialState';

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const reducer = (state = initialState, { type, payload } ) => {
  switch(type) {
    case 'ADD_TITULAR':
      return {
        ...state,
        titulares: state.titulares.concat(payload),
        jugadores: state.jugadores.filter(item => item.id !== payload.id),
      }
    case 'ADD_SUPLENTE':
      return {
        ...state,
        suplentes: state.suplentes.concat(payload),
        jugadores: state.jugadores.filter(item => item.id !== payload.id),
      }
    case 'REMOVE_TITULARES':
      return {
        ...state,
        jugadores: state.jugadores.concat(payload),
        titulares: state.titulares.filter(item => item.id !== payload.id),
      }
    case 'REMOVE_SUPLENTES':
      return {
        ...state,
        jugadores: state.jugadores.concat(payload),
        suplentes: state.suplentes.filter(item => item.id !== payload.id),
      }
    default:
      return state;
  }
};

const store = createStore(reducer, composedEnhancers());

export default store;
