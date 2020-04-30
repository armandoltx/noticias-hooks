import React from 'react';

const Noticia = ({noticia}) => {
  // extraemos los datos destruccturing
  const { urlToImage, url, title, description, source, author } = noticia;

  // a veces no hay imagen por ello:
  const imagen = (urlToImage) ?
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
      {/* <span className="card-title">{author}</span> */}
    </div>
  : null;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {imagen}
      </div>

      <div className="card-content">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>

      <div className="card-action">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="waves-effect waves-light btn"
        >Ver Noticia Completa</a>
      </div>
    </div>
  );
};

export default Noticia;