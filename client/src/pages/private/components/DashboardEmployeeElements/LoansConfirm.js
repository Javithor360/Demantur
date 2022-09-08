import React from 'react'
import { useEmpConx } from '../../../../context/EmployeeContext'

export const LoanConfirm = ({ props, setActive, setChangeButtons, toggle }) => {

  const { AcceptLoanReq } = useEmpConx()

  const HandleAccept = async () => {
    try {
      await AcceptLoanReq(localStorage.getItem('employeeToken'), props.Dui)
      setChangeButtons(1)
      toggle()
    } catch (error) {
      console.error(error)
    }
  }

  const closeButton = () => {
    try {
      setActive(false);
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='h-[30rem] w-[50rem]'>
      <div className='w-[100%] text-center mt-3'>
        <p className='text-[2rem]'>Confirma tu acción</p>
        <div className='w-[80%] mx-auto'>
          <p className=' text-center'>Antes de continuar verifica bien los datos del cliente para confirmar o denegar la solicitud del Credito, ya que esta acción no se puede deshacer</p>
        </div>
      </div>
      <div className='w-[80%] mx-auto mt-5'>
        <div className='flex flex-row justify-center items-center'>
          <div className='w-[50%]'>
            <p className='mx-auto w-fit text-[1.3rem]'>Nombre:</p>
            <p className='mx-auto w-fit'>{props.Name}</p>
          </div>
          <div className='w-[50%]'>
            <p className='mx-auto w-fit text-[1.3rem]'>Email:</p>
            <p className='mx-auto w-fit'>{props.Email}</p>
          </div>
        </div>
      </div>
      <div className='w-[80%] mx-auto mt-3'>
        <div className='flex flex-row justify-center items-center'>
          <div className='w-[50%]'>
            <p className='mx-auto w-fit text-[1.3rem]'>Número de DUI:</p>
            <p className='mx-auto w-fit'>{props.Dui}</p>
          </div>
          <div className='w-[50%]'>
            <p className='mx-auto w-fit text-[1.3rem]'>Contacto:</p>
            <p className='mx-auto w-fit'>{props.CelNum}</p>
          </div>
          <div className='w-[50%]'>
            <p className='mx-auto w-fit text-[1.3rem]'>Monto solicitado:</p>
            <p className='mx-auto w-fit'>{props.Amountrequest}</p>
          </div>
        </div>
      </div>
      <div className='w-[80%] mx-auto mt-5 flex flex-row justify-center items-center'>
        <button className='text-white rounded-lg border-none outline-none bg-[#455FB9] hover:bg-[#4f6acb] px-[1rem] py-[.5rem] mr-5' onClick={HandleAccept}>Confirmar</button>
        <button className='text-white rounded-lg border-none outline-none bg-[#1a2c6b] px-[1rem] py-[.5rem] hover:bg-[#22388a]' onClick={closeButton}>Cancelar</button>
      </div>
    </div>
  )
}
