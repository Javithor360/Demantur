import React, { useState } from 'react'
import { useEmpConx } from '../../../../context/EmployeeContext';

export const SimulationCard = () => {
  const [CardNumber, setCardNumber] = useState(null);
  const [Gasto, setGasto] = useState(null);
  const [Error, setError] = useState(null);
  const [Success, setSuccess] = useState(null);

  const { SimulateCard } = useEmpConx()

  const handleSend = async () => {
    try {
      if (!CardNumber || !Gasto || Gasto < 0) {
        setError('Ingrese ambos valores correctamente')
      } else {
        const res = await SimulateCard(localStorage.getItem('employeeToken'), CardNumber, Gasto);

        if (res?.data?.success == true) {
          setSuccess('operacion realizada con exito')
        } else {
          setError(res.response.data.error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='h-full w-full bg-white rounded-xl p-3 overflow-hidden '>
      <h1 className='text-center mb-[2rem] mt-9 '>Simulacion de uso de tarjeta de credito y debito</h1>
      <div className='mx-auto container-deposits border-cover-2 rounded-lg mt-8'>
      <div className='flex flex-col w-full'>
      {Error && <div className='text-center	w-full'><span className='text-red-500' >{Error}</span></div>}
        <div className='w-full mx-auto text-center h-fit mb-4 flex flex-col justify-center items-center'>
        <p className='mt-[1.9rem] text-[1.2rem] font-semibold mb-2 text-[#323643]'>Ingrese su numero de tarjeta</p>
        <input className='w-[70%] border-none outline-none px-2' type="text" value={CardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        <p className='mt-[1.9rem] text-[1.2rem] font-semibold mb-2 text-[#323643]'>ingrese monto del gasto</p>
        <input className='w-[70%] border-none outline-none px-2' type="text" value={Gasto} onChange={(e) => setGasto(e.target.value)} />
        <div className='min-h-[5rem] w-[100%] mt-[2rem]'>
        <button className='mx-auto block my-auto btn-deposits-employee' onClick={handleSend}>realizar</button>
        </div>
        {Success && <span className='text-green-500'>{Success}</span>}
        </div>
      </div>
    </div>
    </div>
  )
}
