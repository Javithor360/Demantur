//scss
import "./assets/scss/ContactPage_main.scss"

//components
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

//images
import ContactIconBg from './assets/img/contact/contact_bg_icon.png'

//hooks
import React from 'react'

export const ContactPage = () => {
  return (
    <>
        <Navbar />
        <div className="banner-container">
            <div className="banner-content">
                <img src={ ContactIconBg } alt='' />
                <h1>¿Quieres comunicarte con nosotros?</h1>
                <p>
                    Deja tu duda, comentario o sugerencia, estamos dispuestos a ayudarte
                </p>
            </div>
        </div>
        <main>
            <p className="tittle">Escríbenos</p>
            <div className="underline">
                <hr />
            </div>
            
            <p className="contact-information">
                Recibiremos tu consulta, comentario etc., lo evaluaremos y posteriormente
                lo resolveremos, luego te notificaremos mediante teléfono o correo
                electrónico brindándote la solución. Si en dado caso no estas satisfecho
                con la respuesta puedes volver a contactarte con nosotros brindándonos tu
                numero de gestión que se te dio anteriormente en la notificación para
                poder seguir con tu caso en particular.
            </p>
            <div className="contact-form-container">
                <form className="" action="">
                    <div className="form-element">
                        <div className="input-container">
                            <input
                                className="input-box"
                                type="text"
                                required="required"
                                placeholder="Nombre completo"
                            />
                            <label className="form-label" htmlFor="">
                                Nombre completo
                            </label>
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="input-container">
                            <input
                                className="input-box"
                                type="number"
                                required="required"
                                placeholder="Número de DUI"
                            />
                            <label className="form-label" htmlFor="">
                                Número de DUI
                            </label>
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="input-container">
                            <input
                                className="input-box"
                                type="email"
                                required="required"
                                placeholder="Correo electrónico"
                            />
                            <label className="form-label" htmlFor="">
                                Correo electrónico
                            </label>
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="input-container">
                            <input
                                className="input-box"
                                type="number"
                                required="required"
                                placeholder="Telefono de contacto"
                            />
                            <label className="form-label" htmlFor="">
                                Telefono de contacto
                            </label>
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="input-container">
                            <input
                                className="input-box"
                                type="number"
                                required="required"
                                placeholder="Número de gestión (Si tienes)"
                            />
                            <label className="form-label" htmlFor="">
                                Número de gestión (Si tienes)
                            </label>
                        </div>
                    </div>
                    <textarea
                        className="contact-textarea"
                        placeholder="¿En que te podemos ayudar?"
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                        defaultValue={""}
                    />
                    <button className="contact-submit-button" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </main>
        <Footer />
        </>
  )
}
