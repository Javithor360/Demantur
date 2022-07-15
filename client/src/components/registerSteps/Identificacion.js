import { useEffect, useState } from 'react'
import { StepperButtons } from '../StepperButtons'
import axios from 'axios'
import Cleave from 'cleave.js/react';

import { useAuth } from '../../context/AuthContext';

import { BsFillEyeFill as Eye1, BsFillEyeSlashFill as Eye2 } from 'react-icons/bs'

export const Identificacion = () => {

  const { nextButton, setstateOfStep2, setstateOfStep3, page, configPublic, setError,
    Dui, setDui, Number, setNumber, Email, setEmail, Password, setPassword, ConfPassword, setConfPassword,
  } = useAuth()

  const [ShowPass, setShowPass] = useState(false);
  const [ShowConfPass, setShowConfPass] = useState(false);
  const toggleShowPass = () => setShowPass(prevState => !prevState);
  const toggleShowConfPass = () => setShowConfPass(prevState => !prevState);

  useEffect(() => {
    if (page === 2) {
      setstateOfStep2('focus');
      setstateOfStep3('unfocus');
      setError('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleForm = async (e) => {
    e.preventDefault()

    const FirstPartForm = localStorage.getItem('FirstPartForm');

    if (Password !== ConfPassword) {
      setstateOfStep2('error');
      setPassword('');
      setConfPassword('');
      return setError('Las contraseñas no son iguales');
    }

    try {
      const { data } = await axios.post('http://localhost:4000/api/auth/normal-user/register-part-2', { Dui, Email, Number, Password, FirstPartForm }, configPublic)

      localStorage.setItem('SecondPartForm', JSON.stringify(data.data))

      if (data) {
        setstateOfStep2('complete')
        nextButton()
        setError("");
      }

    } catch (error) {

      setError(error.response.data.error);
      if (error.response.data.error) {
        setstateOfStep2('error')
      }
    }

  }

  return (
    <>
      <form onSubmit={handleForm} className='steps-form'>
        <div className='step-inputs step-inputs-identify'>
          <div className='parts-form part-1'>
            <div className="input-class">
              <Cleave id='Dui' name='Dui' placeholder=' ' options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} onChange={(e) => setDui(e.target.value)} value={Dui} autoComplete='off' className='input-form' />
              <label htmlFor="Dui" className='label-form'>DUI</label>
            </div>
            <div className="input-class">
              <Cleave id='Telefono' name='Telefono' placeholder=' ' options={{ blocks: [4, 4], numericOnly: true }} onChange={(e) => setNumber(e.target.value)} value={Number} autoComplete='off' className='input-form' />
              <label htmlFor="Telefono" className='label-form'>Teléfono</label>
            </div>
            <div className="input-class">
              <input type='text' id='Email' name='Nombres' placeholder=' ' onChange={(e) => setEmail(e.target.value)} value={Email} autoComplete='off' className='input-form' />
              <label htmlFor="Email" className='label-form'>Email</label>
            </div>
          </div>
          <div className='parts-form'>
            <div className="input-class">
              <input type={ShowPass ? 'text' : 'password'} id='Password' name='Password' placeholder=' ' onChange={(e) => setPassword(e.target.value)} value={Password} autoComplete='off' className='input-form' />
              <label htmlFor="Password" className='label-form'>Contraseña</label>
              <button type='button' onClick={toggleShowPass} className='EyesButton' >{ShowPass ? <Eye1 className='EyesPass EyePass1' /> : <Eye2 className='EyesPass EyePass2' />}</button>
            </div>
            <div className="input-class">
              <input type={ShowConfPass ? 'text' : 'password'} id='confirmpassword' name='confirmpassword' placeholder=' ' onChange={(e) => setConfPassword(e.target.value)} value={ConfPassword} autoComplete='off' className='input-form' />
              <label htmlFor="confirmpassword" className='label-form'>Confirmar Contras... </label>
              <button type='button' onClick={toggleShowConfPass} className='EyesButton' >{ShowConfPass ? <Eye1 className='EyesPass EyePass1' /> : <Eye2 className='EyesPass EyePass2' />}</button>
            </div>
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
