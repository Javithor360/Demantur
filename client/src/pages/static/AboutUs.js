import "./assets/scss/about.scss";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import { BsHandThumbsUpFill as FaCreditCard } from"react-icons/bs";
import { BsFillPatchCheckFill as FaMoneyCheckAlt } from "react-icons/bs";
import { BsFillPeopleFill as FaFileInvoice } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const AboutImg = require.context("./assets/img/", true);

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <section className="about-hero">
        <div className="about-hero-cont">
          <h2>{t("Aboutpage.hero.tittle")}</h2>
          <p>
          {t("Aboutpage.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="about-history-container">
        <div className="about-history-text">
          <h2>{t("Aboutpage.body.tittle")}</h2>
          <hr />
          <p className="about-history-context">
          {t("Aboutpage.body.subtitle")}
          </p>
        </div>
        <img
          src={AboutImg("./about-history.jpg")}
          alt="Nuestra historia"
          className="about-history-img"
        />
      </section>

      <section className="about-impact-container">
        <div className="about-impact-bg">
          <div className="about-impact-text">
            <h2>{t("Aboutpage.body.tittle2")}</h2>
            <p>
            {t("Aboutpage.body.subtitle2")}
            </p>
          </div>
        </div>
      </section>

      <section className="about-valors-container">
        <h2 className="about-valors-main-title">{t("Aboutpage.valor.tittle")}</h2>
        <hr />

        <div className="about-valors-grid">
          <div className="about-valors-card-cont">
            <FaMoneyCheckAlt className="about-valors-icon" />
            <p className="about-valors-title">{t("Aboutpage.valor.valor")}</p>
            <p className="about-valors-desc">
            {t("Aboutpage.valor.subtitle")}
            </p>
          </div>

          <div className="about-valors-card-cont">
            <FaFileInvoice className="about-valors-icon" />
            <p className="about-valors-title">{t("Aboutpage.valor.valor2")}</p>
            <p className="about-valors-desc">
            {t("Aboutpage.valor.subtitle2")}
            </p>
          </div>

          <div className="about-valors-card-cont">
            <FaCreditCard className="about-valors-icon" />
            <p className="about-valors-title">{t("Aboutpage.valor.valor3")}</p>
            <p className="about-valors-desc">
            {t("Aboutpage.valor.subtitle3")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
