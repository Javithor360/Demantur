import React from 'react'
import "./assets/scss/error404.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ErrorImagen = require.context('./assets/img/error', true)
export const Error404 = () => { 
// export const ...
const img = [ErrorImagen("./chica1.png"), ErrorImagen("./chica2.png"), ErrorImagen("./chica3.png")];

  const { t } = useTranslation();
  return (
    <div className='error'>
        <h1>{t("error.tittle")}</h1>
        <div className='error-text'>
        <p className='p'>{t("error.subtittle")}</p>
        <Link to="/index"><button className='botonx'>{t("error.button")}</button></Link>
        
        </div>
        <img src={`${img[Math.floor(Math.random() * img.length)]}`}></img>
    </div>

    
  )

  
}
