//icons
import { AiFillHome } from "react-icons/ai";
import {
  MdAccountBalanceWallet,
  MdPermContactCalendar,
  MdOutlineLogout,
} from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { useDash } from "../../../context/DashboardContext";
import { useNavigate } from "react-router-dom";

const NavLinkStyles =
  "menu-item mb-2 h-14 flex flex-row w-full rounded items-center";
const DivNavLinkStyles =
  "menu-icon-container ml-5 mr-4 h-full flex items-center";
const IconNavLinkStyles = "menu-icon p-1 rounded";
const SpanNavLinkStyles = "menu-span-navlink";

//images
const SideBarImages = require.context("./assets/img/", true);

export const SideBar = () => {
  const { Option, setOption, setOptionElement } = useDash();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between w-64 h-full p-2 bg-white rounded-md shadow-lg side-bar-container flex-column">
        <div className="w-full side-bar-content-container">
          <div className="w-full side-bar-logo content-column-1">
            <img
              className="block mx-auto mt-4 w-44"
              src={SideBarImages("./Demantur_Imagotype-2.png")}
              alt=""
            />
            <hr className="black-line" />
          </div>
          <div className="w-full menu-items content-column-2">
            <div
              onClick={() => {
                setOption(1);
                setOptionElement("Home Page");
              }}
              className={
                Option === 1
                  ? `${NavLinkStyles} menu-item menu-item-selected`
                  : `${NavLinkStyles} menu-item`
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
                setOptionElement("Cuentas");
              }}
              className={
                Option === 2
                  ? `${NavLinkStyles} menu-item menu-item-selected`
                  : `${NavLinkStyles} menu-item`
              }
            >
              <div className={DivNavLinkStyles}>
                <MdAccountBalanceWallet className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Cuentas</span>
            </div>

            <div
              onClick={() => {
                setOption(3);
                setOptionElement("Transferencias");
              }}
              className={
                Option === 3
                  ? `${NavLinkStyles} menu-item menu-item-selected`
                  : `${NavLinkStyles} menu-item`
              }
            >
              <div className={DivNavLinkStyles}>
                <BiTransfer className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Transferecias</span>
            </div>

            <div
              onClick={() => {
                setOption(4);
                setOptionElement("Préstamos");
              }}
              className={
                Option === 4
                  ? `${NavLinkStyles} menu-item menu-item-selected`
                  : `${NavLinkStyles} menu-item`
              }
            >
              <div className={DivNavLinkStyles}>
                <FaListAlt className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Préstamos</span>
            </div>

            <div
              onClick={() => {
                setOption(5);
                setOptionElement("Contactos");
              }}
              className={
                Option === 5
                  ? `${NavLinkStyles} menu-item menu-item-selected`
                  : `${NavLinkStyles} menu-item`
              }
            >
              <div className={DivNavLinkStyles}>
                <MdPermContactCalendar className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Contactos</span>
            </div>

            <div
              onClick={() => {
                setOption(6);
                setOptionElement("Tarjetas");
              }}
              className={
                Option === 6
                  ? `${NavLinkStyles} menu-item menu-item-selected`
                  : `${NavLinkStyles} menu-item`
              }
            >
              <div className={DivNavLinkStyles}>
                <BsCreditCardFill className={IconNavLinkStyles} />
              </div>
              <span className={SpanNavLinkStyles}>Tarjetas</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full pb-4">
          <button className="logout-button flex items-center justify-center rounded w-[85%]">
            <div className="flex items-center mr-2 logout-icon">
              <MdOutlineLogout />
            </div>
            <span
              onClick={() => {
                localStorage.removeItem("authToken");
                navigate("/auth/normal-user/login");
              }}
            >
              Cerrar Sesion
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
