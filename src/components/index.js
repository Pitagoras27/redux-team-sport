import React from 'react';
import { Provider } from 'react-redux';

import EquipoSeleccionado from './EquipoSeleccionado';
import Jugadores from './Jugadores';
import store from '../store';
import '../../assets/css/styles.scss';

const App = () => (
  <Provider store={store}>
    <main>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
);

export default App;
