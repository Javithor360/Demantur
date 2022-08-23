import React from 'react'
import './assets/scss/RequestEmployee.scss'
import {BsXCircle} from "react-icons/bs";


export const Requests = () => {
  return (
    <div className='request-employee-container '>
        <div className='request-container'>
          <div className='tittle-request'>
            <p>Solicitudes pendientes:</p>
          </div>
          <div className='request-card'>
            <p>Solicitudes n°120</p>
            {/* <button className='button-request'>Más Info</button> */}
            <div className=''>
              <input type="checkbox" id="btn-modal" ></input>
              <label for="btn-modal" class="button-request">Más Info</label>
              <div class="modal">
                <div class="contenedor-button-request-employee">
                  <header>Información del cliente</header>
                  <label for="btn-modal"><BsXCircle /></label>
                  <div class="contenido-request-modal">
                    <p>Nombre: ALbúm</p>
                    <p>Apellido: Albino</p>
                    <p>DUI: 123456-7</p>
                    <p>Edad: 100 años</p>
                    <p>Telefono: 7826-8920</p>
                    <p>Email: albim@gmail.com </p> 
                    <div className='contenido-button'>
                      <button className='btn-1-request'>Aceptar</button>
                      <button>Denegar</button>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='request-card'>
            <p>Solicitudes n°121</p>
            <div className=''>
              <input type="checkbox" id="btn-modal-2" ></input>
              <label for="btn-modal-2" class="button-request">Más Info</label>
              <div class="modal">
                <div class="contenedor-button-request-employee">
                  <header>Información del cliente</header>
                  <label for="btn-modal-2"><BsXCircle /></label>
                  <div class="contenido-request-modal">
                    <p>Nombre: ALbúm</p>
                    <p>Apellido: Albino</p>
                    <p>DUI: 123456-7</p>
                    <p>Edad: 100 años</p>
                    <p>Telefono: 7826-8920</p>
                    <p>Email: albim@gmail.com </p> 
                    <div className='contenido-button'>
                      <button className='btn-1-request'>Aceptar</button>
                      <button>Denegar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='request-card'>
            <p>Solicitudes n°122</p>
            <div className=''>
              <input type="checkbox" id="btn-modal-3" ></input>
              <label for="btn-modal-3" class="button-request">Más Info</label>
              <div class="modal">
                <div class="contenedor-button-request-employee">
                  <header>Información del cliente</header>
                  <label for="btn-modal-3"><BsXCircle /></label>
                  <div class="contenido-request-modal">
                    <p>Nombre: ALbúm</p>
                    <p>Apellido: Albino</p>
                    <p>DUI: 123456-7</p>
                    <p>Edad: 100 años</p>
                    <p>Telefono: 7826-8920</p>
                    <p>Email: albim@gmail.com </p> 
                    <div className='contenido-button'>
                      <button className='btn-1-request'>Aceptar</button>
                      <button>Denegar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
