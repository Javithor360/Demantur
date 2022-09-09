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
    <div>
      <div>
        <h1>Simulacion de uso de tarjeta de credito y debito</h1>
        <p>Ingrese su numero de tarjeta</p>
        <input type="text" value={CardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        <p>ingrese monto del gasto</p>
        <input type="text" value={Gasto} onChange={(e) => setGasto(e.target.value)} />
        <button onClick={handleSend}>realizar</button>
        {Error && <span>{Error}</span>}
        {Success && <span className='text-green-500'>{Success}</span>}
      </div>
    </div>
  )
}
