//Scss
import "./assets/scss/LoansPage_main.scss";

//Component
import { Navbar, Footer } from "../../components";

//Icons
import { FaHandshake } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

//hooks
import { Link } from "react-router-dom";

//translation
import { useTranslation } from "react-i18next";

//Imagenes
const LoansImage = require.context("./assets/img/all_loans", true);

export const LoansPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="loans-banner-container">
        <div className="loans-banner-content">
          <FaHandshake className="hands-icon" />
          <p>{t("loans_main_page.title_loans")}</p>
          <p>{t("loans_main_page.subtitle_loans")}</p>
        </div>
      </div>

      <div className="loans-type-tittle">
      <p>{t("loans_main_page.type_loans")}</p>
        <hr />
      </div>

      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="subhead">{t("loans_main_page.personal_loan")}</div>
              <h2 className="title-section">
              {t("loans_main_page.what's_personal_loan")}
                <span className="fg-primary"> {t("loans_main_page.what's_personal_loan2")}</span>
              </h2>
              <p>
              {t("loans_main_page.info_personal_loan")}
              </p>

              {/*boton para mas info de las paginas"*/}
              <div className="Btn-info">
                <Link to="/loans/PersonalLoan">
                  <span>{t("loans_main_page.loans_buttons.more_info")}</span>
                  <FaAngleRight color="#fff" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about-img">
                <img
                  src={LoansImage("./personal_loan.jpg")}
                  alt="Prestamo personal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="subhead">{t("loans_main_page.business_loan")}</div>
              <h2 className="title-section">
              {t("loans_main_page.what's_personal_loan")}
                <span className="fg-primary"> {t("loans_main_page.what's_business_loan2")}</span>
              </h2>
              <p>
              {t("loans_main_page.info_business_loan")}
              </p>
              {/*boton para mas info de las paginas"*/}
              <div className="Btn-info">
                <Link to="/loans/businessLoan">
                  <span>{t("loans_main_page.loans_buttons.more_info")}</span>
                  <FaAngleRight color="#fff" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about-img2">
                <img
                  src={LoansImage("./business_loan.jpg")}
                  alt="Prestamo Empresa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="subhead">{t("loans_main_page.housing_demantur")}</div>
              <h2 className="title-section">
              {t("loans_main_page.what's_home_demantur")}
                <span className="fg-primary"> {t("loans_main_page.what's_home_demantur2")}</span>
              </h2>
              <p>
              {t("loans_main_page.info_home_demantur")}
              </p>
              {/*boton para mas info de las paginas"*/}
              <div className="Btn-info">
                <Link to="/loans/HouseLoan">
                  <span>{t("loans_main_page.loans_buttons.more_info")}</span>
                  <FaAngleRight color="#fff" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about-img3">
                <img src={LoansImage("./House.jpg")} alt="Prestamo Vivienda" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      {/*Hero banner contact*/}

      <div className="hero">
        <div className="text">
          <h1>{t("loans_main_page.Doubts")}</h1>
          <div className="Btn-contac">
            <Link to="/contact">
              <span>{t("loans_main_page.loans_buttons.contact_us")}</span>
              <FaAngleRight color="#fff" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
