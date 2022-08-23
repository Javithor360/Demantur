import React from 'react'
import { AiOutlineBarChart as Soli } from "react-icons/ai";
import { AiOutlineUserAdd as Ingre } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "../assets/scss/dashboardadmin.scss";
const Logo = require.context("../assets/img/logo", true);
export const AdminDashboard = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='logo_content'>
          <div className='logo'>
            <img className='logot' src={Logo("./Demantur_Imagotype-4_White.svg")}/>
            <div className='logo_name'>
            </div>
          </div>
        </div>
        <ul className='nav_list'>
          <li>
            <Link className='link' to="/">
            <Ingre  className='icont' />
            <span className='links_name'>Añadir DUIS</span>
            </Link>
          </li>
          <li>
            <Link className='link' to="/">
            <Soli  className='icont' />
            <span className='links_name'>Solicitudes</span>
            </Link>
          </li>
        
        </ul>
      <button className='style-button' onClick={() => localStorage.removeItem('secretToken')}>Cerrar sesión</button>
      </div>
      <br />
     
    </>
  )
}
