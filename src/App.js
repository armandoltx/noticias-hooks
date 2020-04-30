import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // definir la categoria y noticias que son states la usamos para subir la info desde el formulario
  const [ categoria, guardarCategoria ] = useState('');
  // tenemos q crear un state de noticias para guardar lo q nos traemos de la API
  const [ noticias, guardarNoticias ] = useState([]); // es un arreglo pq lo trae de la API

  // una vez q el usuario selecciona la categoria tenemos que hacer la consulta para teraernos las noticias
  // Usamos useEffect para cuando haya un cambio en la categoria se vuelva a ejecutar el componenete
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=au&category=${categoria}&apiKey=dfe2d931c07b4e1f8b2fe27eaa49e40d`;

      const respuesta = await fetch(url); // por las promises espera por el fecth hasta q se completo y lo asigna a la variable
      const noticias = await respuesta.json(); // para convertirlo a json tb tenemos q esperar hasta q se complete el fetch
      // console.log(noticias.articles);
      guardarNoticias(noticias.articles);

    }
    consultarAPI();
  }, [categoria])


  return (
    <Fragment>
      <Header titulo='Buscador de Noticias'/>

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
