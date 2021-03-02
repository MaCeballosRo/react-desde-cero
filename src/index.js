import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Antes de JSX 
const root = document.getElementById("root");
const elemento = React.createElement("h1", {className: "saludos"}, "Hola Mundo");
ReactDOM.render(elemento,root);

   Después de JSX
const root = document.getElementById("root");
const elemento = <h1 className="saludos">Hola Mundo</h1>
ReactDOM.render(elemento, root);*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
