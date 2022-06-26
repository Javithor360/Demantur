import { useEffect, useState } from 'react'
import { StepperButtons } from '../StepperButtons'

import { useAuth } from '../../context/AuthContext';

export const Beneficiario = () => {
  const { nextButton, setstateOfStep4, page, } = useAuth()


  const [Nombres, setNombres] = useState('');


  useEffect(() => {
    if (page === 4) {
      setstateOfStep4('focus');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleForm = (e) => {
    e.preventDefault()
    console.log(Nombres);
    nextButton()
    setstateOfStep4('complete')

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
            <input type='text' id='Apellidos' name='Apellidos' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="Apellidos" className='label-form'>Apellidos</label>
          </div>
          <div className="input-class">
            <input type='text' id='DUI' name='DUI' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="DUI" className='label-form'>DUI</label>
          </div>
          <div className="input-class">
            <input type='text' id='Telefono' name='Telefono' placeholder=' ' onChange={(e) => setNombres(e.target.value)} value={Nombres} autoComplete='off' className='input-form' />
            <label htmlFor="Telefono" className='label-form'>Teléfono</label>
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
