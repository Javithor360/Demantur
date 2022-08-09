import '../assets/scss/auth-verify-code.scss'
import { FooterAuth, Navbar } from '../../../components'
import Cleave from 'cleave.js/react';


import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

import { FiArrowRight as Arrrow } from 'react-icons/fi'
import { VscLoading } from 'react-icons/vsc'

import { useAuth } from '../../../context/AuthContext'

export const VerifyEmailPage = () => {
  const { configPublic } = useAuth();

  const [Chargin, setChargin] = useState(false);
  const [Error, setError] = useState('');
  const [Success, setSuccess] = useState('');

  const [Email, setEmail] = useState('');
  const [Codigo, setCodigo] = useState('');
  const [Disable, setDisable] = useState();


  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('http://localhost:4000/api/auth/general-users/verify-email-code', { verifyCode: Codigo, Email }, configPublic);
      console.log(data);
      if (data) {
        setChargin(true)
        setError('')
        setTimeout(() => {
          setSuccess('Su Email ha sido verificado');
          localStorage.removeItem('SecondPartForm');
          setTimeout(() => {
            setChargin(false)
            setSuccess('Ahora puede Iniciar Sesion');
            setDisable(true);
          }, 5000)
        }, 3000);
      }

    } catch (error) {
      setError(error.response.data.error);
    }
  }

  return (
    <>
      <Navbar />
      <div className='main-div'>
        <h1>Verificar Correo Electrónico</h1>
        <hr className='main-hr' />

        <div className='Container-div'>
          <div className='FormDiv FormDivLogin'>
            <div className='info-login'>
              <h1>Verificación</h1>
              <p>Aquí puedes verificar tu correo Electrónico para concretar tu registro</p>
            </div>

            {Error && <span className='ball-description-error messages-login'>{Error}</span>}
            {Success && <span className='ball-description-complete messages-login'>{Success}</span>}

            <div className='line-x'></div>

            <div className='Form-Login'>
              <form onSubmit={handleForm} className='steps-form'>
                <div className='step-inputs step-inputs-code'>
                  <div className="input-class input-class-code">
                    <input type='text' id='Email' name='Nombres' placeholder=' ' onChange={(e) => setEmail(e.target.value)} value={Email} autoComplete='off' className='input-form' />
                    <label htmlFor="Email" className='label-form'>Email</label>
                  </div>
                  <div className="input-class input-class-code">
                    <Cleave type='text' id='Codigo' name='Codigo' placeholder=' ' options={{ blocks: [6], numericOnly: true }} onChange={(e) => setCodigo(e.target.value)} value={Codigo} autoComplete='off' className='input-form ' />
                    <label htmlFor="Codigo" className='label-form'>Código</label>
                  </div>
                </div>
                <div className='step-buttons unique-button'>
                  <button className='boton-siguiente botones-steps' type='submit' disabled={(Chargin || Disable) === true && true} >
                    {
                      Chargin === true ?
                        <><VscLoading className='CharginIcon CharginIcon-Login' /></>
                        :
                        <>
                          <span>Verificar</span>
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
              <Link to='/auth/forgot-password' className='Link'>¿Olvidó su contraseña?</Link>
              <Link to='/auth/normal-user/register' className='Link'>Registrarse</Link>
            </div>
          </div>
        </div>
      </div>
      <FooterAuth />
    </>
  )
}
