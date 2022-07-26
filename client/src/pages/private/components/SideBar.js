//icons
import { AiFillHome } from 'react-icons/ai'
import { MdAccountBalanceWallet, MdPermContactCalendar, MdOutlineLogout } from 'react-icons/md'
import { BiTransfer } from 'react-icons/bi'
import { FaListAlt } from 'react-icons/fa'
import { BsCreditCardFill } from 'react-icons/bs'
import { useDash } from '../../../context/DashboardContext'


const NavLinkStyles = 'menu-item mb-2 h-14 flex flex-row w-full rounded items-center'
const DivNavLinkStyles = 'menu-icon-container ml-5 mr-4 h-full flex items-center'
const IconNavLinkStyles = 'menu-icon p-1 rounded'
const SpanNavLinkStyles = 'menu-span-navlink'

//images
const SideBarImages = require.context('./assets/img/', true)

export const SideBar = () => {
  const { Option, setOption, setOptionElement } = useDash()

  return (
    <>
      <div className="side-bar-container h-full w-64 p-2 bg-white rounded-md shadow-lg flex flex-column items-center justify-between">
        <div className="side-bar-content-container w-full">
          <div className="side-bar-logo w-full content-column-1">
            <img className="w-44 mt-4 mx-auto block" src={SideBarImages('./Demantur_Imagotype-2.png')} alt="" />
            <hr className="black-line" />
          </div>
          <div className="menu-items w-full content-column-2">

            <div onClick={() => { setOption(1); setOptionElement('Home Page') }} className={Option === 1 ? `${NavLinkStyles} menu-item menu-item-selected` : `${NavLinkStyles} menu-item`}>
              <div className={DivNavLinkStyles}>
                <AiFillHome className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>
                Home Page
              </span>
            </div>

            <div onClick={() => { setOption(2); setOptionElement('Cuentas') }} className={Option === 2 ? `${NavLinkStyles} menu-item menu-item-selected` : `${NavLinkStyles} menu-item`}>
              <div className={DivNavLinkStyles}>
                <MdAccountBalanceWallet className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>
                Cuentas
              </span>
            </div>

            <div onClick={() => { setOption(3); setOptionElement('Transferencias') }} className={Option === 3 ? `${NavLinkStyles} menu-item menu-item-selected` : `${NavLinkStyles} menu-item`}>
              <div className={DivNavLinkStyles}>
                <BiTransfer className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>
                Transferecias
              </span>
            </div>

            <div onClick={() => { setOption(4); setOptionElement('Préstamos') }} className={Option === 4 ? `${NavLinkStyles} menu-item menu-item-selected` : `${NavLinkStyles} menu-item`}>
              <div className={DivNavLinkStyles}>
                <FaListAlt className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>
                Préstamos
              </span>
            </div>

            <div onClick={() => { setOption(5); setOptionElement('Contactos') }} className={Option === 5 ? `${NavLinkStyles} menu-item menu-item-selected` : `${NavLinkStyles} menu-item`}>
              <div className={DivNavLinkStyles}>
                <MdPermContactCalendar className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>
                Contactos
              </span>
            </div>

            <div onClick={() => { setOption(6); setOptionElement('Tarjetas') }} className={Option === 6 ? `${NavLinkStyles} menu-item menu-item-selected` : `${NavLinkStyles} menu-item`}>
              <div className={DivNavLinkStyles}>
                <BsCreditCardFill className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>
                Tarjetas
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center pb-4">
          <button className="logout-button flex items-center justify-center rounded w-[85%]">
            <div className="logout-icon mr-2"><MdOutlineLogout /></div>
            <span onClick={() => { localStorage.removeItem('authToken') }}>Cerrar Sesion</span>
          </button>
        </div>
      </div>
    </>
  )
}