import React from 'react';

import cancha from '../../assets/images/cancha.svg';

const Titulares = () => (
  <section>
    <h2>Titulares</h2>
    <div className='cancha'>
      <article className='titular'>
        <div>
          <img src='foto' alt='nombre'/>
          <button onClick={() => {}}>X</button>
        </div>
        <p>nombre</p>
      </article>
      <img src={cancha} alt="Cancha de futbol" />
    </div>
  </section>
);

export default Titulares;
