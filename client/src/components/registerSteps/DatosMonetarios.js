import { useEffect, useState } from 'react'
import { StepperButtons } from '../StepperButtons'

import { useAuth } from '../../context/AuthContext';

export const DatosMonetarios = () => {
  const { nextButton, setstateOfStep3, setstateOfStep4, page, } = useAuth()

  useEffect(() => {

    if (page === 3) {
      setstateOfStep3('focus')
      setstateOfStep4('unfocus')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [Nombres, setNombres] = useState('');

  const handleForm = (e) => {
    e.preventDefault()
    console.log(Nombres);
    setstateOfStep3('complete')
    nextButton()
  }

  return (
    <>
      <form onSubmit={handleForm} className='steps-form'>
        <div className='step-inputs'>
          <div className="input-class">
            <input type='text' id='Laboral' name='Laboral' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="Laboral" className='label-form'>Situación Laboral</label>
          </div>
          <div className="input-class">
            <input type='text' id='Salario' name='Salario' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="Salario" className='label-form'>Salario</label>
          </div>
          <div className="input-class">
            <input type='text' id='LugarTrabajo' name='LugarTrabajo' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="LugarTrabajo" className='label-form'>Lugar de Trabajo</label>
          </div>
          <div className="input-class">
            <input type='file' id='Constancia' name='Constancia' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="Constancia" className='label-form'>Constancia Laboral</label>
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
