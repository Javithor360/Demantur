// Estilos
import './assets/scss/footer-auth-style.scss'

//Hooks
import { Link } from 'react-router-dom'

import React from 'react'

export const FooterAuth = () => {
  return (
    <footer>
      <div className="copyright-container">
        <span className="copyright">
          Todos los derechos reservados. <br /> © 2022 Demantur <br /><Link className='Link' to='/'>Centro de Ayuda</Link>
        </span>
      </div>
    </footer>
  )
}
