import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({ suplentes, removeSuplentes }) => (
  <section>
    <h2>Suplentes</h2>
    <div className='suplentes'>
        {
          suplentes.map(player => (
            <article className='suplente' key={player.id}>
              <div>
                  <img src={player.image} alt={player.name} />
                  <button onClick={() => removeSuplentes(player)}>X</button>
              </div>
              <p>{ player.name }</p>
            </article>
          ))
        }
    </div>
  </section>
);

const mapStateToProps = store => ({
  suplentes: store.suplentes
});

const mapDispatchToProps = dispatch => {
  return {
    removeSuplentes(player) {
      dispatch({
        type: 'REMOVE_SUPLENTES',
        payload: player,
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
