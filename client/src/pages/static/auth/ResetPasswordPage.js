import axios from 'axios'

import '../assets/scss/auth-reset-pass.scss'

import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { VscLoading } from 'react-icons/vsc'

import { FooterAuth, Navbar } from '../../../components'

import { BsFillEyeFill as Eye1, BsFillEyeSlashFill as Eye2 } from 'react-icons/bs'

import { FiArrowRight as Arrrow } from 'react-icons/fi'

export const ResetPasswordPage = () => {
  const Params = useParams()
  let navigate = useNavigate();
  const { configPublic } = useAuth()

  const [Render, setRender] = useState(false);
  const [Chargin, setChargin] = useState(true);
  const [CharginButton, setCharginButton] = useState(false);
  const [Datos, setDatos] = useState({});

  const [ShowPass, setShowPass] = useState(false);
  const [ShowConfPass, setShowConfPass] = useState(false);
  const toggleShowPass = () => setShowPass(prevState => !prevState);
  const toggleShowConfPass = () => setShowConfPass(prevState => !prevState);

  const [Password, setPassword] = useState('');
  const [ConfPassword, setConfPassword] = useState('');

  const [Error, setError] = useState('');
  const [Success, setSuccess] = useState('');
  const [Disable, setDisable] = useState();

  const validacionResetToken = async () => {
    try {
      const data = await axios.get(`http://localhost:4000/api/auth/general-users/reset-password-verify/${Params.resetToken}`, configPublic)

      if (data.data.success === true) {
        setRender(true);
        // console.log(data.data);
        setDatos(data.data.data);
      } else if (data.success === false) {
        setRender(false);
      }
      setTimeout(() => {
        setChargin(false)
      }, 1500);

    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setChargin(false);
      }, 3000)
    }
  }

  useEffect(() => {
    validacionResetToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      if (Password !== ConfPassword) {
        setPassword('');
        setConfPassword('');
        return setError('Las contraseñas no son iguales');
      }

      const data = await axios.put(`http://localhost:4000/api/auth/general-users/reset-password/${Params.resetToken}`, { Password }, configPublic)


      if (data) {
        setCharginButton(true);
        setTimeout(() => {
          setError('')
          setSuccess('La contraseña ha sido cambiada, ahora puede inicar sesión');
          setDisable(true);
          setTimeout(() => {
            navigate('/auth/')
          }, 4000)
        }, 3000)

      }

    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  }
  return (
    <>
      {
        Chargin === true ?
          <div className="container-texts">
            <span class="loader"></span>
          </div>
          :
          <>
            {
              Render === true ?
                <>
                  <Navbar />
                  <div className='main-div'>
                    <h1>Cambio de contraseña</h1>
                    <hr className='main-hr' />

                    <div className='Container-div'>
                      <div className='FormDiv FormDivLogin'>
                        <div className='info-login'>
                          <h1>Hola "{`${Datos.FirstName} ${Datos.LastName}`}"</h1>
                          <p>Parece que ha olvidado su contraseña, su correo es <span>{Datos.Email}</span></p>
                        </div>
                        {Error && <span className='ball-description-error messages-reset'>{Error}</span>}
                        {Success && <span className='ball-description-complete messages-reset'>{Success}</span>}

                        <div className='line-x line-x-reset'></div>

                        <div className='Form-Login'>
                          <form onSubmit={handleForm} className='steps-form steps-form-reset'>
                            <div className='step-inputs step-inputs-reset'>
                              <div className='parts-form'>
                                <div className="input-class">
                                  <input type={ShowPass ? 'text' : 'password'} id='Password' name='Password' placeholder=' ' onChange={(e) => setPassword(e.target.value)} value={Password} autoComplete='off' className='input-form' />
                                  <label htmlFor="Password" className='label-form'>Contraseña</label>
                                  <button type='button' onClick={toggleShowPass} className='EyesButton' >{ShowPass ? <Eye1 className='EyesPass EyePass1' /> : <Eye2 className='EyesPass EyePass2' />}</button>
                                </div>
                                <div className="input-class">
                                  <input type={ShowConfPass ? 'text' : 'password'} id='confirmpassword' name='confirmpassword' placeholder=' ' onChange={(e) => setConfPassword(e.target.value)} value={ConfPassword} autoComplete='off' className='input-form' />
                                  <label htmlFor="confirmpassword" className='label-form'>Confirmar Contraseña</label>
                                  <button type='button' onClick={toggleShowConfPass} className='EyesButton' >{ShowConfPass ? <Eye1 className='EyesPass EyePass1' /> : <Eye2 className='EyesPass EyePass2' />}</button>
                                </div>
                              </div>

                            </div>
                            <div className='step-buttons unique-button button-send-reset'>
                              <button className='boton-siguiente botones-steps' type='submit' disabled={(Chargin || Disable) === true && true} >
                                {
                                  CharginButton === true ?
                                    <><VscLoading className='CharginIcon CharginIcon-Login' /></>
                                    :
                                    <>
                                      <span>Iniciar Sesion</span>
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
                :
                <div className="container-texts">
                  <div className="error-container">
                    <span className='error-code'>401</span> <span className='error-text'>Error de autorizacion</span>
                  </div>
                </div>
            }
          </>
      }
    </>
  )
}
