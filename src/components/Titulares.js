import React from 'react';
import { connect } from 'react-redux';

import cancha from '../../assets/images/cancha.svg';

const Titulares = ({titulares, removeTitulares}) => (
  <section>
    <h2>Titulares</h2>
    <div className='cancha'>
      {
        titulares.map(player => (
          <article className='titular' key={player.id}>
            <div>
              <img src={player.image} alt={player.name} />
              <button onClick={() => removeTitulares(player)}>X</button>
            </div>
            <p>{player.name}</p>
          </article>
        ))
      }      
      <img src={cancha} alt="Cancha de futbol" />
    </div>
  </section>
);

const mapStateToProps = store => ({
  titulares: store.titulares,
});

const mapDispatchToProps = dispatch => {
  return {
    removeTitulares(player) {
      dispatch({
        type: 'REMOVE_TITULARES',
        payload: player,
      });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
