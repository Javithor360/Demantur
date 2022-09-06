import React from 'react'
import { useEmpConx } from '../../../../context/EmployeeContext';

export const CancelCardReq = ({ props, setActive, toggle, setChangeButtons }) => {

  const { DeclineCardReq } = useEmpConx();

  const HandleCancel = async () => {
    try {
      await DeclineCardReq(localStorage.getItem('employeeToken'), props.Dui)
      setChangeButtons(2)
      toggle()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Confirmar Acción</h1>
      <span>en este apartado estás confirmando la denegacion del prestamo del usuario con los siguientes datos</span>
      <p>{props.Name}</p>
      <p>{props.Dui}</p>
      <p>{props.Email}</p>
      <p>{props.CelNum}</p>
      <button
        onClick={HandleCancel}
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
