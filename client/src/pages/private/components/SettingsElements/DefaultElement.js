import React from 'react'

export const DefaultElement = ({ setSwitchValue }) => {
  return (
    <div className='w-100 h-100'>
      <div className='h-1/2 bg-red flex flex-col items-center justify-center'>
        <span className='text-change-el text-[#404141] mb-3'>Cambio de Email</span>
        <button className='w-1/2 h-10 mx-auto boton-settings' onClick={() => setSwitchValue(2)}>Cambiar</button>
      </div>
      <div className='h-1/2 bg-red flex flex-col items-center justify-center'>
        <span className='text-change-el text-[#404141] mb-3'>Cambio de Contraseña</span>
        <button className='w-1/2 h-10 mx-auto boton-settings' onClick={() => setSwitchValue(3)}>Cambiar</button>
      </div>
    </div>
  )
}
