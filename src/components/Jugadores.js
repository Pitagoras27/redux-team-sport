import React from 'react';

import { connect } from 'react-redux';

const Jugadores = ({ players, addTitularPlayer, addSuplente}) => (
  <section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
      <div>
        {
          players.map(player => (
            <article className="jugador" key={player.id}>
              <img src={player.image} alt={player.name} />
              <h3>{player.name}</h3>
              <div>
                <button onClick={() => {}}>Titular</button>
                <button onClick={() => {}}>Suplente</button>
              </div>
            </article> 
          ))
        }
      </div>
    </div>
  </section>
);

const mapStateToProps = store => ({
  players: store.jugadores,
});

const mapDispatchToProps = dispatch => {
  return {
    addTitularPlayer(titular) {
      dispatch({
        type: 'ADD_TITULAR',
        payload: titular,
      })
    },
    addSuplente(suplente) {
      dispatch({
        type: 'ADD_SUPLENTE',
        payload: suplente,
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
