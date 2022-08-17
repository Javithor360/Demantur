import React from 'react'
import "./assets/scss/error404.scss";
import { Link } from "react-router-dom";
const ErrorImagen = require.context('./assets/img/error', true)


export const Error404 = () => {
  return (
    /*function generator() {
      for (let index = 0; index < 10; index++) {
        var x= Math.floor((Math.ramdom()*6)+1);
        console.log(x);
        document.getElementById('divImage').innerHTML=`
        <img src="./assets/img/error/chica${x}.jpg" style="whidth:300px;>
        `
      }
      
    },*/
    <div className='error'>
        <h1>Error 404</h1>
        <div className='error-text'>
        <p>Parece que algo a fallado, al parecer digitaste una dirección que no existe</p>
        <Link to="/index"><button className='botonx'>Volver</button></Link>
        
        </div>
        <img src={ErrorImagen('./chica1.png')} alt='' />
    </div>
    
  )

  
}
