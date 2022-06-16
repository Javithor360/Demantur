// Estilos
import './assets/scss/navbar-style.scss'

// Hooks
import { Link } from 'react-router-dom'

// Assets (Iconos e Imagenes)
import { FaBars as BarsIcon, FaRegUser as UserIcon } from 'react-icons/fa'
import { AiOutlineQuestionCircle as QuestionIcon } from 'react-icons/ai'
import Logo from './assets/img/Demantur_Imagotype-2.svg'

export const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <BarsIcon className='fa-solid fa-bars' />
      </label>

      <Link to='/'>
        <img src={Logo} alt="" className="logo" />
      </Link>

      <ul className="menu">
        <li><Link to='/cards' className="hover-underline">Tarjetas</Link></li>
        <li><Link to='/accounts' className="hover-underline">Cuentas</Link></li>
        <li><Link to='/contact' className="hover-underline">Contacto</Link></li>
        <li><Link to='/' className="hover-underline">Empresas</Link></li>
        <li><Link to='/' className="hover-underline">Nosotros</Link></li>
      </ul>

      <div className="user-buttons">
        <Link to='/help' className="help-button">
          <QuestionIcon className='help-icon bx bx-help-circle' />
          <span className="help-text">Ayuda</span>
        </Link>

        <Link to='/' className="access-button">
          <span className="access-text">Acceder</span>
          <UserIcon className="access-icon fa-regular fa-user" />
        </Link>
      </div>

    </nav>
  )
}
