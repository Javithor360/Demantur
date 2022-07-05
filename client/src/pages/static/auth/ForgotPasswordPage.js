/* eslint-disable react-hooks/exhaustive-deps */
import '../assets/scss/auth-verify-code.scss'
import { FooterAuth, Navbar } from '../../../components'
import Cleave from 'cleave.js/react';


import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

import { FiArrowRight as Arrrow } from 'react-icons/fi'
import { VscLoading } from 'react-icons/vsc'

import { useAuth } from '../../../context/AuthContext'

export const ForgotPasswordPage = () => {
  const { configPublic } = useAuth();

  const [Chargin, setChargin] = useState(false);
  const [Error, setError] = useState('');
  const [Success, setSuccess] = useState('');
  const [Disable, setDisable] = useState();

  const [Email, setEmail] = useState('');
  const [Dui, setDui] = useState('');


  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:4000/api/auth/general-users/forgot-password', { Dui, Email }, configPublic)

      if (data.success === true) {
        setError('');
        setChargin(true);
        setTimeout(() => {
          setChargin(false);
          setDisable(true);
          setSuccess('Email Enviado, revise su correo electronico para terminar el proceso');
          setTimeout(() => {
            setSuccess('Espere un minuto para poder enviar otro Email');
            setTimeout(() => {
              setSuccess('');
              setDisable(false);
            }, 10000)
          }, 3000)
        }, 3000)
      }
    } catch (error) {
      setError(error.response.data.error);
    }
  }


  return (
    <>
      <Navbar />
      <div className='main-div'>
        <h1>Contraseña perdida</h1>
        <hr className='main-hr' />

        <div className='Container-div'>
          <div className='FormDiv FormDivLogin'>
            <div className='info-login'>
              <h1>¿Olvidó su contraseña?</h1>
              <p>Si no recuerda su contraseña, puede cambiarla en este apartado</p>
            </div>

            {Error && <span className='ball-description-error messages-login'>{Error}</span>}
            {Success && <span className='ball-description-complete messages-login'>{Success}</span>}

            <div className='line-x'></div>

            <div className='Form-Login'>
              <form onSubmit={handleForm} className='steps-form'>
                <div className='step-inputs step-inputs-code'>
                  <div className="input-class input-class-code">
                    <Cleave id='Dui' name='Dui' placeholder=' ' options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} onChange={(e) => setDui(e.target.value)} value={Dui} autoComplete='off' className='input-form' />
                    <label htmlFor="Dui" className='label-form'>DUI</label>
                  </div>
                  <div className="input-class input-class-code">
                    <input type='text' id='Email' name='Nombres' placeholder=' ' onChange={(e) => setEmail(e.target.value)} value={Email} autoComplete='off' className='input-form' />
                    <label htmlFor="Email" className='label-form'>Email</label>
                  </div>
                </div>
                <div className='step-buttons unique-button'>
                  <button className='boton-siguiente botones-steps' type='submit' disabled={(Chargin || Disable) === true && true} >
                    {
                      Chargin === true ?
                        <><VscLoading className='CharginIcon CharginIcon-Login' /></>
                        :
                        <>
                          <span>Envar Correo</span>
                          <div className='divisor'></div>
                          <Arrrow className='arrow-ico-re' />
                        </>
                    }
                  </button>
                </div>
                <div className='div-buttons-in-step'>
                </div>
              </form>
            </div>

            <div className='line-x'></div>

            <div className='links-div'>
              <Link to='/auth/normal-user/login' className='Link'>Iniciar Sesión</Link>
              <Link to='/auth/verify-email' className='Link'>Verificar Email</Link>
              <Link to='/auth/normal-user/register' className='Link'>Registrarse</Link>
            </div>
          </div>
        </div>
      </div>
      <FooterAuth />
    </>
  )
}