import { useEffect, useState } from 'react'
import { StepperButtons } from '../StepperButtons'

import { useAuth } from '../../context/AuthContext';

export const DatosPersonales = () => {
  const { nextButton, setstateOfStep1, setstateOfStep2, page, } = useAuth()

  useEffect(() => {
    if (page === 1) {
      setstateOfStep1('focus')
      setstateOfStep2('unfocus')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [Nombres, setNombres] = useState('');
  const [Apellidos, setApellidos] = useState('');
  const [DateBirth, setDateBirth] = useState('');
  const [Direccion, setDireccion] = useState('');

  const handleForm = (e) => {
    e.preventDefault()
    console.log(Nombres);
    setstateOfStep1('complete')
    nextButton()
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
            <label htmlFor="Nombres" className='label-form'>Apellidos</label>
          </div>
          <div className="input-class">
            <input type='date' id='date' name='date' placeholder=' ' onChange={(e) => setDateBirth(e.target.value)} value={DateBirth} autoComplete='off' className='input-form' />
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
