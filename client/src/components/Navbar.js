import './assets/scss/new-navbar.scss'

import { Link } from 'react-router-dom'

import { FaRegUser as UserIcon } from 'react-icons/fa'
import { AiOutlineQuestionCircle as QuestionIcon } from 'react-icons/ai'
import { FaAngleRight } from 'react-icons/fa'
import PrideLogo from './assets/img/DemanturPride2022.png'

import Logo from './assets/img/Demantur_Imagotype-2.svg'
import { useState } from 'react'

export const Navbar = () => {
  const [isActive, setActive] = useState(true)

  const handleBurger = () => {
    setActive(!isActive)
  }

  if (isActive) {
    document.body.style.overflowY = 'visible';
  } else {
    document.body.style.overflowY = 'hidden';
  }

  return (
    <nav className='navbar'>
      <Link to='/'>
        <img src={PrideLogo} alt="" className="logo" />
        {/* <img src={Logo} alt="" className="logo" /> */}
      </Link>

      <div className={isActive ? "items-navbar" : "items-navbar active-items"} >
        <ul className={isActive ? "menu" : "menu active-menu"}>
          <Link to='/cards'><span className="hover-underline">Tarjetas</span><FaAngleRight className='flecha' /></Link>
          <hr />
          <Link to='/accounts'><span className="hover-underline">Cuentas</span><FaAngleRight className='flecha' /></Link>
          <hr />
          <Link to='/Loans'><span className="hover-underline">Préstamos</span><FaAngleRight className='flecha' /></Link>
          <hr />
          <Link to='/contact'><span className="hover-underline">Contacto</span><FaAngleRight className='flecha' /></Link>
          <hr />
          <Link to='/'><span className="hover-underline">Empresas</span><FaAngleRight className='flecha' /></Link>
          <hr />
          <Link to='/'><span className="hover-underline">Nosotros</span><FaAngleRight className='flecha' /></Link>
        </ul>
      </div>

      <div className={isActive ? "buttons-container" : "buttons-container active-buttons-container"}>
        <div className={isActive ? "user-buttons" : "user-buttons active-user-buttons"}>
          <Link to='/help' className="help-button">
            <QuestionIcon className='help-icon bx bx-help-circle' />
            <span className="help-text">Ayuda</span>
          </Link>
          <div className='line'></div>
          <Link to='/auth' className="access-button">
            <span className="access-text">Acceder</span>
            <UserIcon className="access-icon fa-regular fa-user" />
          </Link>
        </div>
      </div>
      <div className={isActive ? 'hamburger' : 'hamburger-open hamburger'} onClick={handleBurger}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  )
}
