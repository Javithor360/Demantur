import { useEffect } from 'react'
import { StepperButtons } from '../StepperButtons'

import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

export const Beneficiario = () => {
  const { nextButton, setstateOfStep4, page, configPublic, setError,
    BNombres, setBNombres, BApellidos, setBApellidos, BDui, setBDui, BNumber, setBNumber, setSuccess, setChargin
  } = useAuth()


  useEffect(() => {
    if (page === 4) {
      setstateOfStep4('focus');
      setError('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleForm = async (e) => {
    e.preventDefault()

    const FirstPartForm = localStorage.getItem('FirstPartForm');
    const SecondPartForm = localStorage.getItem('SecondPartForm');
    const ThirdPartForm = localStorage.getItem('ThirdPartForm');

    try {

      const { data } = await axios.post('http://localhost:4000/api/auth/normal-user/register-part-4', { BNombres: BNombres.toLowerCase(), BApellidos: BApellidos.toLowerCase(), BDui, BNumber, FirstPartForm, SecondPartForm, ThirdPartForm }, configPublic);

      if (data) {
        setChargin(true);
        setTimeout(() => {
          setstateOfStep4('complete')
          setError('');
          setSuccess('Cuenta creada correctamente');
          setTimeout(() => {
            nextButton();
          }, 2000);
        }, 5000);
      }
    } catch (error) {
      setError(error.response.data.error);
      if (error.response.data.error) {
        setstateOfStep4('error')
      }
    }

  }

  return (
    <>
      <form onSubmit={handleForm} className='steps-form'>
        <div className='step-inputs'>
          <div className="input-class">
            <input type='text' id='Nombres' name='Nombres' placeholder=' ' onChange={(e) => setBNombres(e.target.value)} value={BNombres} autoComplete='off' className='input-form' />
            <label htmlFor="Nombres" className='label-form'>Nombres</label>
          </div>
          <div className="input-class">
            <input type='text' id='Apellidos' name='Apellidos' placeholder=' ' onChange={(e) => setBApellidos(e.target.value)} value={BApellidos} autoComplete='off' className='input-form' />
            <label htmlFor="Apellidos" className='label-form'>Apellidos</label>
          </div>
          <div className="input-class">
            <input type='text' id='DUI' name='DUI' placeholder=' ' onChange={(e) => setBDui(e.target.value)} value={BDui} autoComplete='off' className='input-form' />
            <label htmlFor="DUI" className='label-form'>DUI</label>
          </div>
          <div className="input-class">
            <input type='text' id='Telefono' name='Telefono' placeholder=' ' onChange={(e) => setBNumber(e.target.value)} value={BNumber} autoComplete='off' className='input-form' />
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
