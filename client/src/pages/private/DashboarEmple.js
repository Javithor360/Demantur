import React from 'react'
import { AiOutlineMenu as Menu } from "react-icons/ai"
import { Link } from 'react-router-dom'
import "./assets/scss/dashboarde.scss";

export const DashboarEmple = () => {
  return (
    <div className='sidebar'>
      <div className='logo_content'>
        <div className='logo'>
          <div className='logo_name'>Demantur</div>
        </div>
      </div>
      <ul className='nav_list'>
        <li>
        <Link className='a' to="/">
         <Menu />
         <span>Solicitudes</span>
        </Link>
        </li>
        <li>
        <Link className='a' to="/">
         <Menu />
         <span>Solicitudes</span>
        </Link>
        </li>
        <li>
        <Link className='a' to="/">
         <Menu />
         <span>Solicitudes</span>
        </Link>
        </li>
      </ul>
    </div>
  )
}
