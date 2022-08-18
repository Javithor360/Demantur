import React from 'react'
import { 
  BsFillCreditCard2FrontFill as Credit , 
  BsFillHouseDoorFill as House,
  BsFillFileEarmarkFill as Request} 
  from "react-icons/bs";
import { MdRequestPage as Loan, MdOutlineLogout as Logout } from "react-icons/md";
import {HomePage, LoansEmple, Requets, Cards} from "./indexDash"

import imagen  from "../../../static/assets/img/logos/png/Demantur_Imagotype-3.png";

import { Link } from 'react-router-dom'
import "../../assets/scss/dashboarde.scss";
import { from } from 'form-data';

const SideBar = ()=>{
    return(
      <>
    <div className='fondo' >
      <div className='text-fondo'>
          <p className='text'>HomePage</p>
          <div className='line2' />
      </div>
    </div>
    <div className='fondo2'>
      


    </div>

      <div className='sidebar'>
        <div className='logo_content'>
          <div className='logo'>     
            <img className='LogoEmple' src={imagen}/>        
            
          </div>
          <div className='line'></div>
        </div>
            
        <ul className='nav_list'>
          <li>
            <Link className='a' to="/HomePage">
              <div className='icon'> <House className='icon2'/> </div>
              <span>HomePage</span>
            </Link>
          </li>

          <li>
            <Link className='a' to="/">
              <div className='icon'><Request className='icon2'/></div>
              <span>Solicitudes</span>
            </Link>
          </li>

          <li>
            <Link className='a' to="/">
              <div className='icon'><Credit className='icon2'/></div>
              <span>Tarjetas de crédito</span>
            </Link>
        </li>
        
        <li>  
            <Link className='a' to="/">
              <div className='icon'><Loan className='icon2'/></div>
              <span>Prestamos</span>
            </Link>
          </li>
        </ul>
        <div className='button_logout'>
          <button className='icon_logout' onClick={() => localStorage.removeItem('employeeToken')}> <Logout className='logaout'/> Cerrar Sesión</button>
        </div>
    </div>

    </>
    )
}

export default SideBar;