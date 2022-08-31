import React from 'react'
import { useDash } from "../../../context/DashboardContext";

import { AiFillHome } from "react-icons/ai";
import {
  MdOutlineLogout,
  MdRequestQuote
} from "react-icons/md";
import { AiOutlineTeam as Emple} from "react-icons/ai"
import { AiOutlineBarChart as Soli } from "react-icons/ai";
import { AiOutlineUserAdd as Ingre } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "../assets/scss/dashboardadmin.scss";

const NavLinkStyles =
  "menu-item3 mb-2 h-14 flex flex-row w-full rounded items-center";
const DivNavLinkStyles =
  "menu-icon-container3 ml-5 mr-4 h-full flex items-center";
const IconNavLinkStyles = "menu-icon3 p-1 rounded";
const SpanNavLinkStyles = "menu-span-navlink";

const Logo = require.context("../assets/img/logo", true);

export const SideBar = () => {

  const { Option, setOption, setOptionElement } = useDash();

  return (
    <>

      <div className='sidebar'>
        <div className='logo_content'>
          <div className='logo'>
            <img className='logot' src={Logo("./Demantur_Imagotype-4_White.svg")} />
            <div className='logo_name'>
            </div>
          </div>
        </div>
        <div className="w-full menu-items3 content-column-3">
          <div
            onClick={() => {
              setOption(1);
              setOptionElement("AdminDuis");
            }}
            className={
              Option === 1
                ? `${NavLinkStyles} menu-item3 menu-item-selected3`
                : `${NavLinkStyles} menu-item3`
            }
          >
            <div className={DivNavLinkStyles}>
              <Ingre className={IconNavLinkStyles} />
            </div>
            <span className={SpanNavLinkStyles}>AdminDuis</span>
          </div>

          <div
            onClick={() => {
              setOption(2);
              setOptionElement("AdminsRequest");
            }}
            className={
              Option === 2
                ? `${NavLinkStyles} menu-item3 menu-item-selected3`
                : `${NavLinkStyles} menu-item3`
            }
          >
            <div className={DivNavLinkStyles}>
              <Soli className={IconNavLinkStyles} />
            </div>
            <span className={SpanNavLinkStyles}>Transacción</span>
          </div>

          
          <div
            onClick={() => {
              setOption(3);
              setOptionElement("AdminEmployees");
            }}
            className={
              Option === 3
                ? `${NavLinkStyles} menu-item3 menu-item-selected3`
                : `${NavLinkStyles} menu-item3`
            }
          >
            <div className={DivNavLinkStyles}>
              <Emple className={IconNavLinkStyles} />
            </div>
            <span className={SpanNavLinkStyles}>AdminEmployees</span>
          </div>

          <button className='style-button' onClick={() => localStorage.removeItem('secretToken')}>Cerrar sesión</button>

        </div>

      </div>
      {/* <div className='sidebar'>
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
      <br /> */}

    </>
  )
}