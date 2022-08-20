import React from 'react'
import '../assets/scss/RequestEmployee.scss'


export const Requests = () => {
  return (
    <div className='request-employee-container '>
        <div className='request-container'>
          <div className='tittle-request'>
            <p>Solicitudes pendientes:</p>
          </div>
          <div className='request-card'>
            <p>Solicitudes n°120</p>
            <button className='button-request'>Más Info</button>
          </div>
          <div className='request-card'>
            <p>Solicitudes n°121</p>
            <button className='button-request'>Más Info</button>
          </div>
          <div className='request-card'>
            <p>Solicitudes n°122</p>
            <button className='button-request'>Más Info</button>
          </div>
        </div>
    </div>
  )
}
