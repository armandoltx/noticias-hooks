import React, {useState} from 'react';
// es recomendable q los hooks siempre empiecen la con la palabra "use" => useSelect
const useSelect = (stateInicial, opciones) => {
  // le pasamos el state inicial, y como es un select (html) tendra varias opciones

  // state del custom hook
  const [state, actualizarState] = useState(stateInicial);

  // este es el nombre del elemento de la interfaz => SelectNoticias
  const SelectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={e => actualizarState(e.target.value)}
    >
      {opciones.map(opcion => (
        <option
          key={opcion.value}
          value={opcion.value}
          >
            {opcion.label}
          </option>
      ))}

    </select>
  )

  // Retornar un arreglo que tiene el state (lo que el usuario seleccione) y el interfaz (lo q se imprime por pantalla)
  return [state, SelectNoticias];

};

export default useSelect;