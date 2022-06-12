import React from 'react'
import './assets/scss/navbar-style.scss'
import Logo from './assets/img/Demantur_Imagotype-2.svg'
import { Link } from 'react-router-dom'
import { FaBars as BarsIcon, FaRegUser as UserIcon } from 'react-icons/fa'
import { AiOutlineQuestionCircle as QuestionIcon } from 'react-icons/ai'

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
        <li><Link to='/' className="hover-underline">Tarjetas</Link></li>
        <li><Link to='/' className="hover-underline">Cuentas</Link></li>
        <li><Link to='/' className="hover-underline">Créditos</Link></li>
        <li><Link to='/' className="hover-underline">Empresas</Link></li>
        <li><Link to='/' className="hover-underline">Nosotros</Link></li>
      </ul>

      <div className="user-buttons">
        <Link to='/' className="help-button">
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
