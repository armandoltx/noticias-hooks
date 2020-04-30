import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = () => {

  const OPCIONES = [ // vienen de la API
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deporte' },
    { value: 'technology', label: 'Tecnologia' }
  ]

  // utilizar custom hook
  // es lo q retorna el hook en su file. es destructuring no tienen pq tener == nombre, solo las posiciones
  const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);
  // se le pasan 2 argumentos pq es lo q se define cuando se define en el useSelect file

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
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

export default Formulario;