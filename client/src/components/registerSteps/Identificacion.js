import { useEffect, useState } from 'react'
import { StepperButtons } from '../StepperButtons'

import { useAuth } from '../../context/AuthContext';

export const Identificacion = () => {
  const { nextButton, setstateOfStep2, setstateOfStep3, page, } = useAuth()


  const [Nombres, setNombres] = useState('');


  useEffect(() => {
    if (page === 2) {
      setstateOfStep2('focus');
      setstateOfStep3('unfocus');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleForm = (e) => {
    e.preventDefault()
    console.log(Nombres);
    nextButton()
    setstateOfStep2('complete')

  }

  return (
    <>
      <form onSubmit={handleForm} className='steps-form'>
        <div className='step-inputs'>
          <div className="input-class">
            <input type='text' id='Dui' name='Dui' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="Dui" className='label-form'>DUI</label>
          </div>
          <div className="input-class">
            <input type='text' id='Telefono' name='Telefono' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="Telefono" className='label-form'>Teléfono</label>
          </div>
          <div className="input-class">
            <input type='text' id='Email' name='Nombres' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="Email" className='label-form'>Email</label>
          </div>
          <div className="input-class">
            <input type='text' id='Password' name='Password' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="Password" className='label-form'>Contraseña</label>
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
