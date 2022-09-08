import React from 'react'
import '../DashElements/TransactionsComponents/scss/settings.scss'

export const DefaultElement = ({ setSwitchValue }) => {
  return (
    <div className='w-100 h-100'>
      <div className='div-settings-tittle h-1/2 bg-red flex flex-col  justify-center'>
        <span className='text-foto-de-perfil text-[#4E5364] mb-2'>Cambio de Email</span>
        <button className='w-1/2 h-10 mx-auto boton-settings' onClick={() => setSwitchValue(2)}>Cambiar</button>
      </div>
      <div className='div-settings-tittle h-1/2 bg-red flex flex-col  justify-center'>
        <span className='text-foto-de-perfil text-[#4E5364] mb-2'>Cambio de Contraseña</span>
        <button className='w-1/2 h-10 mx-auto boton-settings' onClick={() => setSwitchValue(3)}>Cambiar</button>
      </div>
    </div>
  )
}
