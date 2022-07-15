import { useEffect } from 'react'
import { StepperButtons } from '../StepperButtons'
import axios from 'axios'
import Cleave from 'cleave.js/react';

import { useAuth } from '../../context/AuthContext';

export const DatosPersonales = () => {
  const { nextButton, setstateOfStep1, setstateOfStep2, page, configPublic,
    setError, Nombres, setNombres, Apellidos, setApellidos, DateBirth, setDateBirth, Direccion, setDireccion
  } = useAuth()

  useEffect(() => {
    if (page === 1) {
      setstateOfStep1('focus')
      setstateOfStep2('unfocus')
      setError('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleForm = async (e) => {
    e.preventDefault()

    try {

      const { data } = await axios.post('http://localhost:4000/api/auth/normal-user/register-part-1', { FirstName: Nombres.toLowerCase().trim(), LastName: Apellidos.toLowerCase().trim(), DateBirth, Adress: Direccion }, configPublic)

      localStorage.setItem('FirstPartForm', JSON.stringify(data.data))

      if (data) {
        setstateOfStep1('complete')
        nextButton()
        setError("");
      }

    } catch (error) {
      setError(error.response.data.error);
      if (error.response.data.error) {
        setstateOfStep1('error')
      }
    }

  }

  return (
    <>
      <form onSubmit={handleForm} className='steps-form'>
        <div className='step-inputs'>
          <div className="input-class">
            <input type='text' id='Nombres' name='Nombres' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="Nombres" className='label-form'>Nombres</label>
          </div>
          <div className="input-class">
            <input type='text' id='Apellidos' name='Apellidos' placeholder=' ' onChange={(e) => setApellidos(e.target.value)} value={Apellidos} autoComplete='off' className='input-form' />
            <label htmlFor="Apellidos" className='label-form'>Apellidos</label>
          </div>
          <div className="input-class">
            <Cleave id='date' name='date' placeholder=' ' options={{ date: true, timePattern: ['Y', 'm', 'd'] }} onChange={(e) => setDateBirth(e.target.value)} autoComplete='off' className='input-form' value={DateBirth} />
            <label htmlFor="date" className='label-form' id='date-label'>Fecha de Nacimiento</label>
          </div>
          <div className="input-class">
            <input type='text' id='Direccion' name='Direccion' placeholder=' ' onChange={(e) => setDireccion(e.target.value)} value={Direccion} autoComplete='off' className='input-form' />
            <label htmlFor="Direccion" className='label-form'>Dirección</label>
          </div>
        </div>
        <div className='line-x'></div>
        <div className='div-buttons-in-step'>
          <StepperButtons />
        </div>
      </form>
    </>
  )
}
