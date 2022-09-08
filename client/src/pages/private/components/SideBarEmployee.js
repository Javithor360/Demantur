//icons
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import {
  MdOutlineLogout,
  MdRequestQuote
} from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { BsCreditCardFill } from "react-icons/bs";
import { IoIosCash } from "react-icons/io";
import { useDash } from "../../../context/DashboardContext";
import { useNavigate } from "react-router-dom";

const NavLinkStyles =
  "menu-item2 mb-2 h-14 flex flex-row w-full rounded items-center";
const DivNavLinkStyles =
  "menu-icon-container2 ml-5 mr-4 h-full flex items-center";
const IconNavLinkStyles = "menu-icon2 p-1 rounded";
const SpanNavLinkStyles = "menu-span-navlink";

//images
const SideBarImages = require.context("./assets/img/", true);

export const SideBar = () => {
  const { Option, setOption, setOptionElement } = useDash();
  const navigate = useNavigate()

  return (
    <>
      <div className="flex items-center justify-between w-64 h-full p-2 bg-white shadow-lg side-bar-container flex-column">
        <div className="w-full side-bar-content-container">
          <div className="w-full side-bar-logo content-column-1">
            <img
              className="block mx-auto mt-4 w-44"
              src={SideBarImages("./Demantur_Imagotype-2.png")}
              alt=""
            />
            <hr className="black-line" />
          </div>
          <div className="w-full menu-items2 content-column-2">
            <div
              onClick={() => {
                setOption(1);
                setOptionElement("Home Page");
              }}
              className={
                Option === 1
                  ? `${NavLinkStyles} menu-item2 menu-item-selected2`
                  : `${NavLinkStyles} menu-item2`
              }
            >
              <div className={DivNavLinkStyles}>
                <AiFillHome className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Home Page</span>
            </div>

            <div
              onClick={() => {
                setOption(2);
                setOptionElement("Préstamos");
              }}
              className={
                Option === 2
                  ? `${NavLinkStyles} menu-item2 menu-item-selected2`
                  : `${NavLinkStyles} menu-item2`
              }
            >
              <div className={DivNavLinkStyles}>
                <MdRequestQuote className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Préstamos</span>
            </div>

            <div
              onClick={() => {
                setOption(3);
                setOptionElement("Tarjetas");
              }}
              className={
                Option === 3
                  ? `${NavLinkStyles} menu-item2 menu-item-selected2`
                  : `${NavLinkStyles} menu-item2`
              }
            >
              <div className={DivNavLinkStyles}>
                <BsCreditCardFill className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Tarjetas</span>
            </div>

            <div
              onClick={() => {
                setOption(4);
                setOptionElement("Solicitudes");
              }}
              className={
                Option === 4
                  ? `${NavLinkStyles} menu-item2 menu-item-selected2`
                  : `${NavLinkStyles} menu-item2`
              }
            >
              <div className={DivNavLinkStyles}>
                <GoChecklist className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Solicitudes</span>
            </div>

            <div
              onClick={() => {
                setOption(5);
                setOptionElement("Depósitos");
              }}
              className={
                Option === 5
                  ? `${NavLinkStyles} menu-item2 menu-item-selected2`
                  : `${NavLinkStyles} menu-item2`
              }
            >
              <div className={DivNavLinkStyles}>
                <IoIosCash className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Depósitos</span>
            </div>

            <div
              onClick={() => {
                setOption(6);
                setOptionElement("Buscar cliente");
              }}
              className={
                Option === 6
                  ? `${NavLinkStyles} menu-item2 menu-item-selected2`
                  : `${NavLinkStyles} menu-item2`
              }
            >
              <div className={DivNavLinkStyles}>
                <AiOutlineSearch className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Buscar cliente</span>
            </div>

          </div>
        </div>

        <div className="flex justify-center w-full pb-4">
          <button className="logout-button2 flex items-center justify-center rounded w-[85%]" onClick={() => { localStorage.removeItem('employeeToken'); navigate('/index') }}>
            <div className="flex items-center mr-2 logout-icon">
              <MdOutlineLogout />
            </div>
            <span
            >
              Cerrar Sesion
            </span>
          </button>
        </div>
      </div>
    </>
  );
};