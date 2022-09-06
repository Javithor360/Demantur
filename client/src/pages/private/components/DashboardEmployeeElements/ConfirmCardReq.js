import React from 'react'
import { useEmpConx } from '../../../../context/EmployeeContext'

export const ConfirmCardReq = ({ props, setActive, toggle, setChangeButtons }) => {
  const { AcceptCardReq } = useEmpConx();

  const HandleConfirm = async () => {
    try {
      await AcceptCardReq(localStorage.getItem('employeeToken'), props.Dui)
      setChangeButtons(1)
      toggle()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Confirmar Acción</h1>
      <span>en este apartado estás confirmando la aceptación del prestamo del usuario con los siguientes datos</span>
      <p>{props.Name}</p>
      <p>{props.Dui}</p>
      <p>{props.Email}</p>
      <p>{props.CelNum}</p>
      <button
        onClick={HandleConfirm}
        className={`h-[3rem] w-[8rem] outline-none rounded-md border-none bg-[#323643] hover:bg-[#262932] text-white mx-4`}
      >
        Confirmar
      </button>
      <button
        onClick={() => { toggle() }}
        className={`h-[3rem] w-[8rem] outline-none rounded-md border-none bg-[#606470] hover:bg-[#3d4048] text-white mx-4`} >
        Cancelar
      </button>
    </div>
  )
}
