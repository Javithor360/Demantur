//icons
import { NavLink} from "react-router-dom"
import { AiFillHome } from 'react-icons/ai'
import { MdAccountBalanceWallet, MdPermContactCalendar, MdOutlineLogout } from 'react-icons/md'
import { BiTransfer } from 'react-icons/bi'
import { FaListAlt } from 'react-icons/fa'
import { BsCreditCardFill } from 'react-icons/bs'

//images
const SideBarImages = require.context('./assets/img/', true)

export const SideBar = () => {
  return (
    <>
        <div className="side-bar-container h-full w-64 p-2 bg-white rounded-md shadow-lg flex flex-column items-center justify-between">
          <div className="side-bar-content-container w-full">
            <div className="side-bar-logo w-full content-column-1">
                <img className="w-44 mt-4 mx-auto block" src={ SideBarImages('./Demantur_Imagotype-2.png') } alt=""/>
                <hr className="black-line"/>
            </div>
            <div className="menu-items w-full content-column-2">
              <NavLink to="/dashboard" className="group menu-item mb-2 p-1 flex flex-row w-full rounded items-center">
                <div className="menu-icon ml-5 mr-4 h-full">
                  <AiFillHome className="group-hover:text-white group-hover:bg-[#323643] ease-in-out duration-200 p-1 rounded"/>
                </div>
                <span className="group-hover:text-[#323643] ease-in-out duration-200 mt-2">
                  Home Page
                </span>
              </NavLink>
              <NavLink to="/dashboard" className="group menu-item mb-2 p-1 flex flex-row w-full rounded items-center">
                <div className="menu-icon ml-5 mr-4">
                  <MdAccountBalanceWallet className="group-hover:text-white group-hover:bg-[#323643] ease-in-out duration-200 p-1 rounded"/>
                </div>
                <span className="group-hover:text-[#323643] ease-in-out duration-200 mt-2">
                  Cuentas
                </span>
              </NavLink>
              <NavLink to="/dashboard" className="group menu-item mb-2 p-1 flex flex-row w-full rounded items-center">
                <div className="menu-icon ml-5 mr-4">
                  <BiTransfer className="group-hover:text-white group-hover:bg-[#323643] ease-in-out duration-200 p-1 rounded"/>
                </div>
                <span className="group-hover:text-[#323643] ease-in-out duration-200 mt-2">
                  Transferecias
                </span>
              </NavLink>
              <NavLink to="/dashboard" className="group menu-item mb-2 p-1 flex flex-row w-full rounded items-center">
                <div className="menu-icon ml-5 mr-4">
                  <FaListAlt className="group-hover:text-white group-hover:bg-[#323643] ease-in-out duration-200 p-1 rounded"/>
                </div>
                <span className="group-hover:text-[#323643] ease-in-out duration-200 mt-2">
                  Préstamos
                </span>
              </NavLink>
              <NavLink to="/dashboard" className="group menu-item mb-2 p-1 flex flex-row w-full rounded items-center">
                <div className="menu-icon ml-5 mr-4">
                  <MdPermContactCalendar className="group-hover:text-white group-hover:bg-[#323643] ease-in-out duration-200 p-1 rounded"/>
                </div>
                <span className="group-hover:text-[#323643] ease-in-out duration-200 mt-2">
                  Contactos
                </span>
              </NavLink>
              <NavLink to="/dashboard" className="group menu-item mb-2 p-1 flex flex-row w-full rounded items-center">
                <div className="menu-icon ml-5 mr-4">
                  <BsCreditCardFill className="group-hover:text-white group-hover:bg-[#323643] ease-in-out duration-200 p-1 rounded"/>
                </div>
                <span className="group-hover:text-[#323643] ease-in-out duration-200 mt-2">
                  Tarjetas
                </span>
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