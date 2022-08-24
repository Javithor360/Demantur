import '../assets/scss/auth-login.scss'
import { FooterAuth, Navbar } from '../../../components'
import Cleave from 'cleave.js/react';

import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

import { FiArrowRight as Arrrow } from 'react-icons/fi'
import { VscLoading } from 'react-icons/vsc'
import { BsFillEyeFill as Eye1, BsFillEyeSlashFill as Eye2 } from 'react-icons/bs'

import { useAuth } from '../../../context/AuthContext'

export const LoginNormalUserPage = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const { configPublic } = useAuth();

  const [ShowPass, setShowPass] = useState(false);
  const [Chargin, setChargin] = useState(false);

  const [Error, setError] = useState('');
  const [Success, setSuccess] = useState('');

  const [Dui, setDui] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('http://localhost:4000/api/auth/normal-user/login', { Dui, Email, Password }, configPublic)

      if (data) {
        localStorage.setItem('authToken', data.data.token);
        setChargin(true)
        setError('')
        setTimeout(() => {
          setSuccess('Sesión Iniciada Correctamente');
          localStorage.removeItem('SecondPartForm');
          setTimeout(() => {
            navigate('/dashboard')
          }, 3000)
        }, 3000)
      }

    } catch (error) {
      setError(error.response.data.error);
    }
  }

  const toggleShowPass = () => setShowPass(prevState => !prevState);
  return (
    <>
      <Navbar />
      <div className='main-div'>
        <h1>{t("login.logins.tittle")}</h1>
        <hr className='main-hr' />

        <div className='Container-div'>
          <div className='FormDiv FormDivLogin'>  
            <div className='info-login'>
              <h1>{t("login.logins.tittle2")}</h1>
              <p>{t("login.logins.subtittle")}</p>
            </div>

            {Error && <span className='ball-description-error messages-login'>{Error}</span>}
            {Success && <span className='ball-description-complete messages-login'>{Success}</span>}

            <div className='line-x'></div>

            <div className='Form-Login'>
              <form onSubmit={handleForm} className='steps-form'>
                <div className='step-inputs'>
                  <div className="input-class">
                    <Cleave type='text' id='DUI' name='DUI' placeholder=' ' options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} onChange={(e) => setDui(e.target.value)} value={Dui} autoComplete='off' className='input-form' />
                    <label htmlFor="DUI" className='label-form'>DUI</label>
                  </div>
                  <div className="input-class">
                    <input type='text' id='Email' name='Nombres' placeholder=' ' onChange={(e) => setEmail(e.target.value)} value={Email} autoComplete='off' className='input-form' />
                    <label htmlFor="Email" className='label-form'>Email</label>
                  </div>
                  <div className="input-class last-input">
                    <input type={ShowPass ? 'text' : 'password'} id='Password' name='Password' placeholder=' ' onChange={(e) => setPassword(e.target.value)} value={Password} autoComplete='off' className='input-form' />
                    <label htmlFor="Password" className='label-form'>{t("login.identification.password")}</label>
                    <button type='button' onClick={toggleShowPass} className='EyesButton' >{ShowPass ? <Eye1 className='EyesPass EyePass1' /> : <Eye2 className='EyesPass EyePass2' />}</button>
                  </div>

                </div>
                <div className='step-buttons unique-button'>
                  <button className='boton-siguiente botones-steps' type='submit' disabled={Chargin === true && true} >
                    {
                      Chargin === true ?
                        <><VscLoading className='CharginIcon CharginIcon-Login' /></>
                        :
                        <>
                          <span>{t("login.logins.tittle2")}</span>
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
              <Link to='/auth/forgot-password' className='Link'>{t("login.logins.forgot")}</Link>
              <Link to='/auth/normal-user/register' className='Link'>{t("login.logins.register")}</Link>
              <Link to='/auth/verify-email' className='Link'>{t("login.contentreg.subtitle4")}</Link>
            </div>
          </div>
        </div>
      </div>
      <FooterAuth />
    </>
  )
}
