import React from 'react';

const Jugadores = () => (
  <section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
      <div>
        <article className="jugador">
          <img src='foto' alt='nombre' />
          <h3>Nombre</h3>
          <div>
            <button onClick={() => {}}>Titular</button>
            <button onClick={() => {}}>Suplente</button>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Jugadores;
