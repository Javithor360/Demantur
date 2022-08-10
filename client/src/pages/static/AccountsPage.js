import "./assets/scss/acc_main.scss";
// componentes
import { Navbar, Footer } from "../../components/";

// hooks
import { Link } from "react-router-dom";

// Assets
import {
  BsPiggyBank,
  BsArrowUpRightCircleFill,
  BsCreditCard2Back,
} from "react-icons/bs";
import {
  FaAngleRight,
  FaRegCreditCard,
  FaMoneyCheckAlt,
  FaScroll,
  FaClock,
} from "react-icons/fa";

// Translation
import { useTranslation } from "react-i18next";

const AccountsImg = require.context("./assets/img/acc", true);

export const AccountsPage = () => {
  const {t}= useTranslation();
  return (
    <>
      <Navbar />
      <section className="acc-hero">
        <div className="acc-hero-cont">
          <BsPiggyBank size="4.375rem" color="#fff" />
          <h1>{t("AccountPage.tittle")}</h1>
          <p>{t("AccountPage.desc")}</p>
        </div>
      </section>

      <section className="post-hero-container">
        <div className="post-hero-info">
          <p>{t("AccountPage.types")}</p>
          <hr />
        </div>

        <div className="acc-container">
          <div className="acc-details">
            <h1>{t("AccountPage.Checking.tittle")}</h1>
            <p className="acc-desc">
            {t("AccountPage.Checking.desc")}
            </p>
            <p className="acc-feature">
              <FaMoneyCheckAlt color="#455FB9" /> {t("AccountPage.Checking.details.1")}
            </p>
            <p className="acc-feature">
              <FaScroll color="#455FB9" /> {t("AccountPage.Checking.details.1")}
            </p>
            <p className="acc-feature">
              <FaRegCreditCard color="#455FB9" /> {t("AccountPage.Checking.details.1")}
              {t("AccountPage.Checking.details.1")}
            </p>
            <Link to="/accounts/checking">
              <div className="acc-button corrienteButton">
                <span>{t("AccountPage.button")}</span>
                <FaAngleRight color="#fff" />
              </div>
            </Link>
          </div>

          <div className="acc-img">
            <img src={AccountsImg("./acc_checking.jpg")} alt="" />
          </div>
        </div>

        <div className="acc-container">
          <div className="acc-details">
            <h1>{t("AccountPage.Savings.tittle")}</h1>
            <p className="acc-desc">
            {t("AccountPage.Savings.desc")}
            </p>
            <p className="acc-feature">
              <FaClock color="#455FB9" /> {t("AccountPage.Checking.details.1")}
            </p>
            <p className="acc-feature">
              <BsCreditCard2Back color="#455FB9" /> {t("AccountPage.Checking.details.2")}
              Classic
            </p>
            <p className="acc-feature">
              <BsArrowUpRightCircleFill color="#455FB9" /> {t("AccountPage.Checking.details.3")}
            </p>
            <Link to="/accounts/savings">
              <div className="acc-button ahorroButton">
                <span>{t("AccountPage.button")}</span>
                <FaAngleRight color="#fff" />
              </div>
            </Link>
          </div>

          <div className="acc-img">
            <img src={AccountsImg("./acc_savings.jpg")} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
