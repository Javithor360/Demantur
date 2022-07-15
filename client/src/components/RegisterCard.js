//styles
import './assets/scss/RegisterCard.scss'

// hooks
import { Link } from 'react-router-dom'

//assets (icons)
import { MdOutlinePublishedWithChanges as Change } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'

import { FiLogIn } from 'react-icons/fi'


export const RegisterCard = () => {
  return (
    <div className='TarjetDiv'>
      <h1>Otras Opciones</h1>
      <hr />
      <p>¿Qué Necesitas hacer?</p>
      <div className="small-div-container">
        <Link to='/auth/normal-user/login' className='Link-container'><div className='small-div'><FiLogIn className='icons' /><p>Iniciar Sesion</p></div></Link>
        <Link to='/auth/forgot-password' className='Link-container'><div className='small-div'><Change className='icons' /><p>Cambiar Contraseña</p></div></Link>
        <Link to='/auth/verify-email' className='Link-container'><div className='small-div'><HiOutlineMail className='icons icon-3' /><p>Verificar Correo Electronico</p></div></Link>
      </div>
      <hr />
    </div>
  )
}
