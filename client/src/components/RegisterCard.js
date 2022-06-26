//styles
import './assets/scss/RegisterCard.scss'

// hooks
import { Link } from 'react-router-dom'

//assets (icons)
import { FaPiggyBank, FaMoneyBillWave } from 'react-icons/fa'
import { BiCreditCard } from 'react-icons/bi'


export const RegisterCard = () => {
  return (
    <div className='TarjetDiv'>
      <h1>¿Qué Ofrecemos?</h1>
      <hr />
      <p>Conoce nuestros servicios</p>
      <div className="small-div-container">
        <Link to='/' className='Link-container'><div className='small-div'><FaPiggyBank className='icons' /><p>Cuentas financieras para su necesidad</p></div></Link>
        <Link to='/' className='Link-container'><div className='small-div'><BiCreditCard className='icons' /><p>Distintos tipos de tarjetas</p></div></Link>
        <Link to='/' className='Link-container'><div className='small-div'><FaMoneyBillWave className='icons icon-3' /><p>Sistema amigable con distintas funcionalidades</p></div></Link>
      </div>
      <hr />
      <div className='links-div'>
        <Link to='/' className='Link'>¿Olvidó su contraseña?</Link>
        <Link to='/' className='Link'>Iniciar Sesión</Link>
      </div>
    </div>
  )
}