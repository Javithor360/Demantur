import React from 'react'

export const ModalTransaction = ({ Name, Dui, Monto, NumberAccount, setModalValidate, toggle }) => {
  return (
    <div className='h-[30rem] w-[40rem] flex flex-col items-center'>
      <p className='text-4xl pt-3'>Confirmar Transferencia</p>
      <span className=' px-5'>En esta acción usted esta confirmando una transacción monetaría con su total concentimiento de esta.</span>

      <div className='flex pt-3'>
        <div className='text-center'>
          <span className='text-xl text-center'>Datos del Beneficiario</span>
          <div className='flex mt-3'>
            <div className='flex flex-col mx-3 text-center'>
              <span className='font-bold'>Nombre:</span>
              <span>{Name}</span>
            </div>
            <div className='flex flex-col mx-5'>
              <span className='font-bold'>Dui:</span>
              <span>{Dui}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex pt-4'>
        <div className='text-center'>
          <span className='text-xl text-center'>Datos de transferencia</span>
          <div className='flex mt-3'>
            <div className='flex flex-col mx-3 text-center'>
              <span className='font-bold'>Monto:</span>
              <span>$ {Monto}</span>
            </div>
            <div className='flex flex-col mx-5'>
              <span className='font-bold'>Nº Cuenta:</span>
              <span>{NumberAccount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 flex'>
        <button
          onClick={() => {
            setModalValidate(true);
            toggle()
          }}
          className={`h-[3rem] w-[8rem] outline-none rounded-md border-none bg-[#323643] hover:bg-[#262932] text-white mx-4`}
        >
          Confirmar
        </button>
        <button
          onClick={() => { toggle() }}
          className={`h-[3rem] w-[8rem] outline-none rounded-md border-none bg-[#606470] hover:bg-[#3d4048] text-white mx-4`} >
          Denegar
        </button>
      </div>
    </div>
  )
}
