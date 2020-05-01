import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';


const Formulario = ({guardarCategoria}) => {

  const OPCIONES = [ // vienen de la API
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deporte' },
    { value: 'technology', label: 'Tecnologia' }
  ]

  // utilizar custom hook
  // es lo q retorna el hook en su file. es destructuring no tienen pq tener == nombre, solo las posiciones
  const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);
  // se le pasan 2 argumentos pq es lo q se define cuando se define en el useSelect file
  // pasamos el state inicial, queremos que empiece ensenando las noticias generales y luego pasamos las opciones.

  // Submit al form, pasar categoria a app.js
  const buscarNoticias = (e) => {
    e.preventDefault();

    guardarCategoria(categoria); // que viene definida en app.js como cambio de state function. Le pasamos la que tiene
    // acceso al state de nuestro custom hook (categoria).
  }

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={buscarNoticias}
        >
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

          <SelectNoticias />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
// como en javascript el "-" no funciona, al css del boton hay q llamarlo entre []

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired,
}

export default Formulario;