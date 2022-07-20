//icons

import { NavLink } from "react-router-dom"
import { AiFillHome } from 'react-icons/ai'
import { MdAccountBalanceWallet, MdPermContactCalendar, MdOutlineLogout } from 'react-icons/md'
import { BiTransfer } from 'react-icons/bi'
import { FaListAlt } from 'react-icons/fa'
import { BsCreditCardFill } from 'react-icons/bs'

const NavLinkStyles = 'menu-item mb-2 p-1 flex flex-row w-full rounded items-center'
const DivNavLinkStyles = 'menu-icon ml-5 mr-4'

//images
const SideBarImages = require.context('./assets/img/', true)

export const SideBar = () => {
  return (
    <>
      <div className="h-full w-[18%] p-2 bg-white rounded-md shadow-lg flex flex-column items-center justify-between">
        <div className="w-full">
          <div className="side-bar-logo w-full">
            <img className="w-44 mt-4 mx-auto block" src={SideBarImages('./Demantur_Imagotype-2.png')} alt="" />
            <hr className="black-line" />
          </div>
          <div className="menu-items mx-4">
            <NavLink to="/dashboard" className={NavLinkStyles}>
              <div className={DivNavLinkStyles}>
                <AiFillHome />
              </div>
              Home Page
            </NavLink>
            <NavLink to="/dashboard" className={NavLinkStyles}>
              <div className={DivNavLinkStyles}>
                <MdAccountBalanceWallet />
              </div>
              Cuentas
            </NavLink>
            <NavLink to="/dashboard" className={NavLinkStyles}>
              <div className={DivNavLinkStyles}>
                <BiTransfer />
              </div>
              Transferencias
            </NavLink>
            <NavLink to="/dashboard" className={NavLinkStyles}>
              <div className={DivNavLinkStyles}>
                <FaListAlt />
              </div>
              Prestamos
            </NavLink>
            <NavLink to="/dashboard" className={NavLinkStyles}>
              <div className={DivNavLinkStyles}>
                <MdPermContactCalendar />
              </div>
              Contactos
            </NavLink>
            <NavLink to="/dashboard" className="menu-item mb-2 p-1 flex flex-row w-full rounded items-center">
              <div className={DivNavLinkStyles}>
                <BsCreditCardFill />
              </div>
              Tarjetas
            </NavLink>
          </div>
        </div>
        <div className="w-full flex justify-center pb-4">
          <button className="logout-button flex items-center justify-center rounded w-[85%]">
            <div className="logout-icon mr-2"><MdOutlineLogout /></div>
            <span>Cerrar Sesion</span>
          </button>
        </div>
      </div>
    </>
  )
}