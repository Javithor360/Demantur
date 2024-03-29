import "./assets/scss/new-navbar.scss";

import { Link } from "react-router-dom";

import { FaRegUser as UserIcon } from "react-icons/fa";
import { AiOutlineQuestionCircle as QuestionIcon } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";

import Logo from "./assets/img/Demantur_Imagotype-2.svg";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useDash } from "../context/DashboardContext";

export const Navbar = () => {
  const { NPName, getNametoNav, setNPName } = useDash();
  const { t } = useTranslation();
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      (async () => {
        const res = await getNametoNav(localStorage.getItem('authToken'))
        let Info = res.data.data
        const Capitalize = (word) => {
          return word[0].toUpperCase() + word.slice(1);
        }
        let Name = Info.FirstName.split(' ');
        let LastName = Info.LastName.split(' ');
        LastName = LastName[0];
        setNPName(`${Capitalize(Name[0])} ${LastName[0].toUpperCase()}.`);
      })()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBurger = () => {
    setActive(!isActive);
  };

  if (isActive) {
    document.body.style.overflowY = "visible";
  } else {
    document.body.style.overflowY = "hidden";
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="" className="logo" />
      </Link>

      <div className={isActive ? "items-navbar" : "items-navbar active-items"}>
        <ul className={isActive ? "menu" : "menu active-menu"}>
          <Link to="/cards">
            <span className="hover-underline">{t("main_navbar.cards")}</span>
            <FaAngleRight className="flecha" />
          </Link>
          <hr />
          <Link to="/accounts">
            <span className="hover-underline">{t("main_navbar.accounts")}</span>
            <FaAngleRight className="flecha" />
          </Link>
          <hr />
          <Link to="/Loans">
            <span className="hover-underline">{t("main_navbar.loans")}</span>
            <FaAngleRight className="flecha" />
          </Link>
          <hr />
          <Link to="/contact">
            <span className="hover-underline">{t("main_navbar.contact")}</span>
            <FaAngleRight className="flecha" />
          </Link>
          <hr />
          <Link to="/info">
            <span className="hover-underline">{t("main_navbar.business")}</span>
            <FaAngleRight className="flecha" />
          </Link>
          <hr />
          <Link to="/about">
            <span className="hover-underline">{t("main_navbar.about")}</span>
            <FaAngleRight className="flecha" />
          </Link>
        </ul>
      </div>

      <div
        className={
          isActive
            ? "buttons-container"
            : "buttons-container active-buttons-container"
        }
      >
        <div
          className={
            isActive ? "user-buttons" : "user-buttons active-user-buttons"
          }
        >
          <Link to="/help" className="help-button">
            <QuestionIcon className="help-icon bx bx-help-circle" />
            <span className="help-text">{t("main_navbar.help")}</span>
          </Link>
          <div className="line"></div>
          <>
            <Link to="/dashboard" className="access-button">
              {
                <span className="access-text mr-1" >{NPName ? NPName : 'Acceder'}</span>
              }
              <UserIcon className="ml-2 access-icon fa-regular fa-user" />
            </Link>
          </>

        </div>
      </div>
      <div
        className={isActive ? "hamburger" : "hamburger-open hamburger"}
        onClick={handleBurger}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};
