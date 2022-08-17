// Estilos
import "./assets/scss/SelectTypeAccount.scss";

// Componentes
import { Navbar, Footer } from "../../components";

// Assets (iconos)
import { BsFillCursorFill as Select } from "react-icons/bs";
import { FaUserAlt as User } from "react-icons/fa";
import { FaCheck as Check } from "react-icons/fa";
import { FaRedo as Reset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const FotoRegister = require.context("./assets/img/register", true);
/* import { Link } from "react-router-dom";
const CuentasImagenes = require.context('./assets/img/banner', true); */

export const SelectAccountPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="baner">
        <div className="baner-content">
          <Select className="arrow" />
          <h1 className="title">{t("selectpage.hero.tittle")}</h1>
          <p className="subtitles">{t("selectpage.hero.subtitle")}</p>
        </div>
      </div>
      <p className="info"></p>
      <div className="title2">
        <p>{t("selectpage.body.tittle")}</p>
        <hr />
      </div>
      <p className="info">
        <br />
        {t("selectpage.body.subtittle")}
      </p>
      <div className="cards-container">
          <div className="card">
            <div className="title2">  
            <User className="iconst" />
            <p className="subtitle">{t("selectpage.cards.1.tittle")}</p>
            <hr />
          </div>
            <p>{t("selectpage.cards.1.subtittle")}
          </p>
            <div className="boton-position">
            <div className="flex">
            <Link to="/auth/normal-user/login"><button class="custom-btn btn-15">{t("selectpage.cards.1.button1")}</button></Link>
            <Link to="/auth/normal-user/register"><button class="custom-btn btn-15">{t("selectpage.cards.1.button2")}</button></Link>
            </div>
          </div>
            <div className="boton">
             
            </div>
          </div>
        </div>
        <div className="title2">
        <p>{t("selectpage.body.tittle2")}</p>
        <hr />
      </div>
      <p className="info">
        <br />
        {t("selectpage.body.subtittle2")}
      </p>
      <br/>
      <div className="cards-container">
          <div className="card">
            <div className="title2">  
            <Reset className="iconst" />
            <p className="subtitle">{t("selectpage.cards.3.tittle")}</p>
            <hr />
          </div>
            <p>{t("selectpage.cards.3.subtittle")}
          </p>
            <div className="boton-position">
            <Link to="/auth/forgot-password"><button class="custom-btn btn-15">{t("selectpage.cards.3.button1")} </button></Link>
          </div>
          </div>
          <div className="card">
            <div className="title2">
            <Check className="iconst" />
            <p className="subtitle">{t("selectpage.cards.4.tittle")}</p>
            <hr />
          </div>
            <p>{t("selectpage.cards.4.subtittle")}</p>
            <div className="flex">
            <div className="boton-position"> 
            <Link to="/auth/verify-email"><button class="custom-btn btn-15">{t("selectpage.cards.3.button1")} </button></Link>
            </div>
          </div>
          </div>
        </div>
        <br/><br/>
      <Footer />
    </>
  );
};
