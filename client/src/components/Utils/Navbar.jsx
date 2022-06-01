import React from 'react'
import { Link } from 'react-router-dom'
import './css/style.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fa-solid fa-bars" />
                </label>
                <Link to={''} className="enlace">
                    <img src="../img/Demantur_Imagotype-2.svg" alt="" className="logo" />
                </Link>
                <ul className="menu">
                    <li><Link to={''}>Tarjetas</Link></li>
                    <li><Link to={''}>Cuentas</Link></li>
                    <li><Link to={''}>Créditos</Link></li>
                    <li><Link to={''}>Empresas</Link></li>
                    <li><Link to={''}>Nosotros</Link></li>
                </ul>
                <div className="user-buttons">
                    <Link to={''} className="help-button">
                        <i className="help-icon bx bx-help-circle" />
                        <span className="help-text">Ayuda</span>
                    </Link>
                    <Link to={'/login'} className="access-button">
                        <span className="access-text">Acceder</span>
                        <i className="access-icon fa-regular fa-user" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar